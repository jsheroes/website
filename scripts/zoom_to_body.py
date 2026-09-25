"""
Zooms a speaker cutout in until the body reaches the bottom edge.

The source photos often end at the torso or neck, so the cutout crop extends
past the body and leaves transparent rows at the bottom, which would show as
paper in the plate's valleys. Scale the whole cutout up instead: the body's last
solid row lands on the bottom row, the head grows by the same factor, and the
sides are cropped around the body's horizontal centre. Image size is unchanged.

  python3 scripts/zoom_to_body.py src/images/people/*-cutout.png   # in place

Run it on fresh cutouts, not on ones that were already zoomed. Needs only pillow
and numpy. cutouts.py runs it on every new cutout.
"""
import sys

import numpy as np
from PIL import Image

# alpha above this counts as body
SOLID = 128
# skip the feathered last rows of the matte when picking the bottom row
SAFE_MARGIN = 2


def zoom_to_body(path: str) -> float:
    """Zoom in place; returns the scale factor (1.0 if the body already reaches the bottom)."""
    im = Image.open(path).convert("LA")
    width, height = im.size
    alpha = np.asarray(im)[:, :, 1]
    solid_rows = np.where(alpha.max(axis=1) > SOLID)[0]
    if len(solid_rows) == 0 or solid_rows.max() >= height - 1:
        return 1.0
    edge = max(int(solid_rows.max()) - SAFE_MARGIN, 0)
    scale = height / (edge + 1)
    zoomed = im.resize((round(width * scale), round(height * scale)), Image.LANCZOS)
    # keep the body's horizontal centre in the middle of the crop, within the image
    weights = np.asarray(zoomed)[:, :, 1].sum(axis=0).astype(np.float64)
    centre = (np.arange(zoomed.width) * weights).sum() / max(weights.sum(), 1)
    left = int(round(np.clip(centre - width / 2, 0, zoomed.width - width)))
    zoomed.crop((left, 0, left + width, height)).save(path, optimize=True)
    return scale


if __name__ == "__main__":
    for file in sys.argv[1:]:
        print(f"{file}: zoomed x{zoom_to_body(file):.2f}")
