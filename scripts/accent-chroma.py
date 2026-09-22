"""
Derives accent-blue and accent-pink so all four accent colours (blue, pink,
orange, green) sit at a comparable saturation *relative to what the sRGB
gamut allows at each colour's own lightness and hue* — a fair comparison,
since a pale colour (orange, green) simply cannot reach as much raw OKLCH
chroma as a mid-tone one (blue, pink) before it leaves the gamut.

Method: for each accent colour, find max_chroma(L, H), the most OKLCH chroma
sRGB can hold at that exact lightness and hue. relative = C / max_chroma.
Orange and green were already tuned by design; average their `relative` and
apply it to blue and pink at their own (unchanged) L and H.

  python3 scripts/accent-chroma.py

No inputs; the four current colours are hardcoded below. Prints the derived
hex for accent-blue and accent-pink, plus their contrast ratios, so a new run
after nudging one of the fixed colours can be checked before pasting into
base.css.
"""

import math

TO_ALIGN = {"accent-blue": "#0098ff", "accent-pink": "#ff6078"}
FIXED = {"accent-orange": "#ffcc67", "accent-green": "#65d3bb"}


def srgb_to_lin(c: float) -> float:
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def lin_to_srgb(c: float) -> float:
    return 12.92 * c if c <= 0.0031308 else 1.055 * (c**(1 / 2.4)) - 0.055


def rgb_to_oklab(r: int, g: int, b: int) -> tuple[float, float, float]:
    r, g, b = srgb_to_lin(r / 255), srgb_to_lin(g / 255), srgb_to_lin(b / 255)
    l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
    m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
    s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b
    l_, m_, s_ = l ** (1 / 3), m ** (1 / 3), s ** (1 / 3)
    big_l = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_
    a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_
    b2 = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_
    return big_l, a, b2


def oklch_to_rgb(big_l: float, c: float, h_deg: float) -> list[float]:
    h = math.radians(h_deg)
    a, b2 = c * math.cos(h), c * math.sin(h)
    l_ = big_l + 0.3963377774 * a + 0.2158037573 * b2
    m_ = big_l - 0.1055613458 * a - 0.0638541728 * b2
    s_ = big_l - 0.0894841775 * a - 1.2914855480 * b2
    l, m, s = l_**3, m_**3, s_**3
    r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
    g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
    b = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    return [lin_to_srgb(r), lin_to_srgb(g), lin_to_srgb(b)]


def in_gamut(rgb: list[float], eps: float = 1e-4) -> bool:
    return all(-eps <= c <= 1 + eps for c in rgb)


def max_chroma(big_l: float, h: float) -> float:
    lo, hi = 0.0, 0.5
    while in_gamut(oklch_to_rgb(big_l, hi, h)) and hi < 2:
        hi *= 1.5
    for _ in range(60):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if in_gamut(oklch_to_rgb(big_l, mid, h)) else (lo, mid)
    return lo


def hex_to_rgb(hexcode: str) -> tuple[int, int, int]:
    hexcode = hexcode.lstrip("#")
    return tuple(int(hexcode[i : i + 2], 16) for i in (0, 2, 4))  # type: ignore[return-value]


def to_lch(hexcode: str) -> tuple[float, float, float]:
    r, g, b = hex_to_rgb(hexcode)
    big_l, a, b2 = rgb_to_oklab(r, g, b)
    return big_l, math.hypot(a, b2), math.degrees(math.atan2(b2, a)) % 360


def to_hex(rgb: list[float]) -> str:
    return "#{:02x}{:02x}{:02x}".format(*(max(0, min(255, round(c * 255))) for c in rgb))


def relative_luminance(hexcode: str) -> float:
    def f(c: float) -> float:
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

    r, g, b = (c / 255 for c in hex_to_rgb(hexcode))
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def contrast(a: str, b: str) -> float:
    la, lb = relative_luminance(a), relative_luminance(b)
    la, lb = max(la, lb), min(la, lb)
    return (la + 0.05) / (lb + 0.05)


if __name__ == "__main__":
    fixed_relative = []
    for name, hexcode in FIXED.items():
        big_l, c, h = to_lch(hexcode)
        rel = c / max_chroma(big_l, h)
        fixed_relative.append(rel)
        print(f"{name:14s} {hexcode}  L={big_l:.4f} C={c:.4f} H={h:6.2f}  relative={rel:.3f} (unchanged)")

    target = sum(fixed_relative) / len(fixed_relative)
    print(f"\ntarget relative chroma (average of the above): {target:.3f}\n")

    for name, hexcode in TO_ALIGN.items():
        big_l, c, h = to_lch(hexcode)
        new_c = target * max_chroma(big_l, h)
        new_hex = to_hex(oklch_to_rgb(big_l, new_c, h))
        print(f"{name:14s} {hexcode} -> {new_hex}   (C {c:.4f} -> {new_c:.4f}, L and H unchanged)")
        print(f"               black-pearl text on it: {contrast('#001c2b', new_hex):.2f}:1")
