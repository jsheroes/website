"""
Greyscale speaker cutouts for the diamond plates, built on the handoff script
in design/v1/assets/speakers/cutout.py, with per-person fixes for photos where
the segmentation model picks up the background.

  python3 -m venv .venv-cutouts && .venv-cutouts/bin/pip install onnxruntime pillow numpy
  # model: u2net_human_seg.onnx (~170 MB) from
  # https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net_human_seg.onnx
  U2NET_MODEL=/path/to/u2net_human_seg.onnx OUT_DIR=/tmp/cut \
    .venv-cutouts/bin/python scripts/cutouts.py phil-hawksworth.jpg suz-hinton.jpg ...

File names are looked up in src/images/people; results land in OUT_DIR as
<name>-cutout.png (520px wide). Check each one on a coloured background, then
copy it next to the photo and set `portrait` in the person's markdown.
"""
import importlib.util
import os
import sys

from zoom_to_body import zoom_to_body

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

os.environ.setdefault("SPEAKERS_DIR", "src/images/people/")
os.environ.setdefault("OUT_DIR", "cut")
spec = importlib.util.spec_from_file_location("cutout", "design/v1/assets/speakers/cutout.py")
cutout = importlib.util.module_from_spec(spec)
spec.loader.exec_module(cutout)

original_mask = cutout.mask
current = {"name": ""}


def polygon_mask(size, head_ellipse, body_polygon):
    """Soft mask (0..1) from a head ellipse (cx, cy, rx, ry) and a body polygon, in image fractions."""
    w, h = size
    img = Image.new("L", size, 0)
    draw = ImageDraw.Draw(img)
    cx, cy, rx, ry = head_ellipse
    draw.ellipse([(cx - rx) * w, (cy - ry) * h, (cx + rx) * w, (cy + ry) * h], fill=255)
    draw.polygon([(x * w, y * h) for x, y in body_polygon], fill=255)
    return np.asarray(img.filter(ImageFilter.GaussianBlur(2))).astype(np.float32) / 255


def patched_mask(im):
    matte = np.asarray(original_mask(im)).astype(np.float32) / 255
    name = current["name"]
    if name.startswith("dominik-dorfmeister"):
        # people stand right behind him: keep only his head and jacket
        matte *= polygon_mask(
            im.size,
            (0.515, 0.44, 0.31, 0.47),
            [(0.36, 0.70), (0.65, 0.65), (1.0, 0.58), (1.0, 1.0), (0.12, 1.0), (0.20, 0.87)],
        )
    if name.startswith("zbyszek-tenerowicz"):
        # flyaway hair reads as solid: raise the bar and erase the wedge above the head
        matte = np.where(matte < 0.85, 0, matte)
        w, h = im.size
        wedge = Image.new("L", im.size, 0)
        ImageDraw.Draw(wedge).polygon(
            [(0, 0), (0.44 * w, 0), (0.44 * w, 0.17 * h), (0.275 * w, 0.345 * h), (0, 0.345 * h)], fill=255
        )
        matte *= 1 - np.asarray(wedge.filter(ImageFilter.GaussianBlur(1.5))).astype(np.float32) / 255
    if name.startswith("charlie-gerard"):
        # the snowy ridge left of her face reads as body: keep only head and torso
        matte *= polygon_mask(
            im.size,
            (0.50, 0.48, 0.20, 0.255),
            # left edge follows the hood, then the jacket's shoulder line
            [(0.32, 0.62), (0.70, 0.62), (0.80, 0.72), (0.87, 0.88), (0.90, 1.0),
             (0.0, 1.0), (0.0, 0.935), (0.06, 0.86), (0.14, 0.765), (0.215, 0.76),
             (0.215, 0.745), (0.225, 0.726), (0.258, 0.712), (0.262, 0.70),
             (0.265, 0.668), (0.282, 0.65), (0.30, 0.637)],
        )
    if name.startswith("matan-kushner"):
        matte = dark_hair_matte(im, matte, skin_ellipse=(0.505, 0.50, 0.21, 0.22), hair_bottom=0.56)
        # a blossom cluster touches his jaw on the right: cut along the jawline
        w, h = im.size
        blossom = Image.new("L", im.size, 0)
        ImageDraw.Draw(blossom).polygon(
            [(x * w, y * h) for x, y in [(0.685, 0.565), (0.85, 0.565), (0.85, 0.76), (0.70, 0.76),
                                         (0.625, 0.718), (0.652, 0.695), (0.671, 0.66), (0.679, 0.625)]],
            fill=255,
        )
        matte *= 1 - np.asarray(blossom.filter(ImageFilter.GaussianBlur(1.5))).astype(np.float32) / 255
    return Image.fromarray((matte * 255).astype(np.uint8))


def dark_hair_matte(im, matte, skin_ellipse, hair_bottom, dark=70, light=140, core_px=14, grow_px=3):
    """
    Re-cut the edge of dark hair against a bright background by brightness.

    The model's matte is soft around curls and drags in a halo of background. Near its edge
    (within core_px inside to grow_px outside), keep a pixel by how dark it is: fully below
    `dark`, gone above `light`. The skin ellipse (cx, cy, rx, ry as image fractions) keeps
    the model's matte so the face and ears aren't keyed out, as does everything below
    hair_bottom (image fraction). Loose specks are dropped.
    """
    w, h = im.size
    lum = np.asarray(im.convert("L")).astype(np.float32)
    solid = Image.fromarray(((matte > 0.5) * 255).astype(np.uint8))
    core = np.asarray(solid.filter(ImageFilter.MinFilter(2 * core_px + 1))) > 0
    reach = np.asarray(solid.filter(ImageFilter.MaxFilter(2 * grow_px + 1))) > 0
    key = np.clip((light - lum) / (light - dark), 0, 1)
    key = key * key * (3 - 2 * key)
    cx, cy, rx, ry = skin_ellipse
    ys, xs = np.mgrid[0:h, 0:w]
    skin = ((xs / w - cx) / rx) ** 2 + ((ys / h - cy) / ry) ** 2 <= 1
    # below the hair the model's edge is fine and the background is dark too
    keep_model = core | skin | (ys > hair_bottom * h)
    out = np.where(keep_model, matte, np.where(reach, key, 0))
    # keep only what's connected to the middle of the face
    blob = Image.fromarray(((out > 0.3) * 255).astype(np.uint8)).copy()  # fromarray is read-only
    ImageDraw.floodfill(blob, (int(cx * w), int(cy * h)), 128)
    keep = np.asarray(blob.filter(ImageFilter.MaxFilter(5))) == 128
    return (out * keep).astype(np.float32)


def remove_vertical_flare(im, x_top, slope, y_end, half_width=12):
    """
    Subtract a near-vertical lens flare running along x = x_top + slope * y, above row y_end.

    The flare is extra light that changes slowly along its length, while the texture under
    it doesn't line up from row to row. So: brightness above a background ramp (taken from
    strips just outside the flare on each side) is flare plus texture, a tall vertical blur
    of that keeps only the flare, and subtracting it leaves the texture.
    """
    a = np.asarray(im.convert("RGB")).astype(np.float32)
    h, w = a.shape[:2]
    excess = np.zeros_like(a)
    for y in range(min(y_end, h)):
        c = x_top + slope * y
        left, right = int(round(c - half_width)), int(round(c + half_width))
        lv = np.median(a[y, left - 6 : left], axis=0)
        rv = np.median(a[y, right + 1 : right + 7], axis=0)
        xs = np.arange(left, right + 1)
        t = ((xs - left) / (right - left))[:, None]
        ramp = lv * (1 - t) + rv * t
        # soft edges so the correction doesn't leave a seam, fading out over the last 40 rows
        weight = np.clip(2 * (1 - np.abs(xs - c) / half_width), 0, 1)[:, None] * min(1, (y_end - y) / 40)
        excess[y, left : right + 1] = np.clip(a[y, left : right + 1] - ramp, 0, None) * weight
    # vertical-only moving average (the line drifts well under a pixel over the window)
    k = 25
    padded = np.pad(excess, ((k // 2, k // 2), (0, 0), (0, 0)), mode="edge")
    csum = np.cumsum(np.pad(padded, ((1, 0), (0, 0), (0, 0))), axis=0)
    flare = (csum[k:] - csum[:-k]) / k
    # never take away more than was there
    flare = np.minimum(flare, excess)
    return Image.fromarray(np.clip(a - flare, 0, 255).astype(np.uint8))


def clean_source(file):
    """Return the directory to read `file` from, writing a retouched copy first when it needs one."""
    if file.startswith("charlie-gerard"):
        tmp = os.path.join(os.environ["OUT_DIR"], "_sources")
        os.makedirs(tmp, exist_ok=True)
        im = Image.open(os.path.join(os.environ["SPEAKERS_DIR"], file))
        remove_vertical_flare(im, 491, 0.02, 660).save(os.path.join(tmp, file), quality=95)
        return tmp + "/"
    return os.environ["SPEAKERS_DIR"]


cutout.mask = patched_mask

if __name__ == "__main__":
    for file in sys.argv[1:]:
        name = os.path.splitext(file)[0]
        current["name"] = name
        out = f"{os.environ['OUT_DIR']}/{name}-cutout.png"
        cutout.SRC = clean_source(file)
        cutout.process(file, out)
        # no transparent band under the body: zoom in until it reaches the bottom
        note = f"zoomed x{zoom_to_body(out):.2f}"
        print("wrote", name, f"({note})")
