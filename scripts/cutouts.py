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

from fill_below_body import fill_below_body

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
    return Image.fromarray((matte * 255).astype(np.uint8))


cutout.mask = patched_mask

if __name__ == "__main__":
    for file in sys.argv[1:]:
        name = os.path.splitext(file)[0]
        current["name"] = name
        out = f"{os.environ['OUT_DIR']}/{name}-cutout.png"
        cutout.process(file, out)
        # no transparent band under the body (see fill_below_body.py)
        filled = fill_below_body(out)
        print("wrote", name, f"(filled {filled}px under the body)")
