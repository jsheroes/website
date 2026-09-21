"""
Zooms a speaker cutout in until the body reaches the bottom edge.

For cutouts where filling the band under the body looks wrong (the body ends
where the plate valleys are, so the fill shows), scale the whole cutout up
instead: the body's last solid row lands on the bottom row, the head grows by
the same factor, and the sides are cropped evenly. Image size is unchanged.

  python3 scripts/zoom_to_body.py src/images/people/ryan-townsend-cutout.png   # in place

Run it on a fresh cutout, not on one that was already filled or zoomed. Needs
only pillow and numpy. cutouts.py runs it for the people listed in ZOOMED.
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
    left = (zoomed.width - width) // 2
    zoomed.crop((left, 0, left + width, height)).save(path, optimize=True)
    return scale


if __name__ == "__main__":
    for file in sys.argv[1:]:
        print(f"{file}: zoomed x{zoom_to_body(file):.2f}")
