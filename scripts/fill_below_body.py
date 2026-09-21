"""
Fills the transparent band under a speaker cutout's body.

The source photos often end at the torso or the neck, so the cutout crop
extends past the body and leaves transparent rows at the bottom, which show as
paper in the notch of the diamond plate. Each column of the body is extended
straight down to the bottom edge with the average colour of its last rows,
smoothed sideways so single columns of texture do not stretch into streaks.
Only tones that are already in the body are used. Image size is unchanged.

  python3 scripts/fill_below_body.py src/images/people/*-cutout.png   # in place

Needs only pillow and numpy. cutouts.py runs it on every new cutout.
"""
import sys

import numpy as np
from PIL import Image

# alpha above this counts as body
SOLID = 128
# skip the feathered last rows of the matte when picking the row to extend
SAFE_MARGIN = 2
# rows averaged to get each column's colour, so single noisy pixels don't streak
SAMPLE_ROWS = 24
# sideways smoothing of the fill colour, in pixels (Gaussian sigma)
SMOOTH_SIGMA = 14


def fill_below_body(path: str) -> int:
    """Fill in place; returns how many rows were filled (0 if already full)."""
    im = Image.open(path).convert("LA")
    px = np.asarray(im).copy()
    gray, alpha = px[:, :, 0], px[:, :, 1]
    height = alpha.shape[0]
    solid_rows = np.where(alpha.max(axis=1) > SOLID)[0]
    if len(solid_rows) == 0:
        return 0
    bottom = int(solid_rows.max())
    if bottom >= height - 1:
        return 0

    edge = max(bottom - SAFE_MARGIN, 0)
    top = max(edge - SAMPLE_ROWS + 1, 0)
    body_columns = alpha[edge] > SOLID
    # average colour of each column over its last rows, weighted by coverage
    weights = alpha[top : edge + 1].astype(np.float32) / 255
    column_gray = (gray[top : edge + 1] * weights).sum(axis=0) / np.maximum(
        weights.sum(axis=0), 1e-6
    )

    # smooth across the body only: normalise by how much body each window covers
    radius = int(SMOOTH_SIGMA * 3)
    x = np.arange(-radius, radius + 1)
    kernel = np.exp(-(x**2) / (2 * SMOOTH_SIGMA**2))
    mask = body_columns.astype(np.float32)
    smooth = np.convolve(column_gray * mask, kernel, mode="same") / np.maximum(
        np.convolve(mask, kernel, mode="same"), 1e-6
    )
    column_gray = np.where(body_columns, smooth, 0)

    px[edge + 1 :, :, 0] = np.where(body_columns, column_gray, 0).astype(np.uint8)
    px[edge + 1 :, :, 1] = np.where(body_columns, 255, 0).astype(np.uint8)
    Image.fromarray(px, "LA").save(path, optimize=True)
    return height - 1 - bottom


if __name__ == "__main__":
    for file in sys.argv[1:]:
        print(f"{file}: filled {fill_below_body(file)}px")
