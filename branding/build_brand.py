"""Angels Auto Repair — final lockup vectors.

The attached plate (gear, orange wrench, front-view car, corner slashes,
split rule, Carolina Beach pin) is the source of truth. Wordmarks are
outlined from Montserrat and Inter so print files do not depend on a font.
"""

from __future__ import annotations

import math
from pathlib import Path

import segno
from fontTools.pens.basePen import BasePen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

ROOT = Path("/workspace")
OUT = ROOT / "public" / "brand"
PRINT = ROOT / "branding" / "print"
FONT = ROOT / "branding" / "fonts"
DOCS_ASSETS = ROOT / "docs" / "assets"

NAVY = "#0B2347"
NAVY_DEEP = "#07182F"
ORANGE = "#F15A22"
SILVER = "#D5DCE6"
SILVER_2 = "#EEF2F6"
MIST = "#E7EDF2"
INK = "#5F6873"
WHITE = "#FFFFFF"
SITE = "https://angels-auto.cbgoc-cloud.top/"
PHONE = "(910) 636-3053"
ADDRESS = "306 N Lake Park Blvd"

BLACK = TTFont(FONT / "Montserrat-Black.ttf")
XBOLD = TTFont(FONT / "Montserrat-ExtraBold.ttf")
INTER = TTFont(FONT / "Inter-SemiBold.ttf")


class CmdPen(BasePen):
    def __init__(self, glyphSet):
        super().__init__(glyphSet)
        self.parts: list[str] = []

    def _moveTo(self, p):
        self.parts.append(f"M{p[0]:.2f} {p[1]:.2f}")

    def _lineTo(self, p):
        self.parts.append(f"L{p[0]:.2f} {p[1]:.2f}")

    def _curveToOne(self, p1, p2, p3):
        self.parts.append(
            f"C{p1[0]:.2f} {p1[1]:.2f} {p2[0]:.2f} {p2[1]:.2f} {p3[0]:.2f} {p3[1]:.2f}"
        )

    def _closePath(self):
        self.parts.append("Z")

    def getCommands(self) -> str:
        return "".join(self.parts)


def glyph_path(font: TTFont, text: str, size: float, x: float, y: float, tracking: float = 0) -> tuple[str, float]:
    glyphset = font.getGlyphSet()
    cmap = font.getBestCmap()
    upem = font["head"].unitsPerEm
    scale = size / upem
    parts: list[str] = []
    cursor = x
    for ch in text:
        name = cmap.get(ord(ch))
        if name is None:
            cursor += size * 0.33
            continue
        glyph = glyphset[name]
        spen = CmdPen(glyphset)
        tpen = TransformPen(spen, (scale, 0, 0, -scale, cursor, y))
        glyph.draw(tpen)
        parts.append(spen.getCommands())
        cursor += glyph.width * scale + tracking
    return "".join(parts), cursor


def text(font, words, size, x, y, fill, tracking=0) -> str:
    d, _ = glyph_path(font, words, size, x, y, tracking)
    return f'<path fill="{fill}" d="{d}"/>'


def measure(font, words, size, tracking=0) -> float:
    _, end = glyph_path(font, words, size, 0, 0, tracking)
    return end


def centered(font, words, size, y, fill, width, tracking=0) -> str:
    d, end = glyph_path(font, words, size, 0, y, tracking)
    x = (width - end) / 2
    d, _ = glyph_path(font, words, size, x, y, tracking)
    return f'<path fill="{fill}" d="{d}"/>'


def gear(cx: float, cy: float, teeth: int = 8, outer: float = 92, inner: float = 70, hole: float = 36) -> str:
    pts: list[tuple[float, float]] = []
    for i in range(teeth):
        base = -math.pi / 2 + i * (2 * math.pi / teeth)
        tooth = 0.38 * (math.pi / teeth)
        root = 0.78 * (math.pi / teeth)
        for ang, rad in (
            (base - root, inner),
            (base - tooth, outer),
            (base + tooth, outer),
            (base + root, inner),
        ):
            pts.append((cx + rad * math.cos(ang), cy + rad * math.sin(ang)))
    d = "M " + " L ".join(f"{x:.2f} {y:.2f}" for x, y in pts) + " Z"
    d += f" M {cx + hole:.2f} {cy:.2f} A {hole:.2f} {hole:.2f} 0 1 0 {cx - hole:.2f} {cy:.2f}"
    d += f" A {hole:.2f} {hole:.2f} 0 1 0 {cx + hole:.2f} {cy:.2f} Z"
    return d


def capsule(x1, y1, x2, y2, r) -> str:
    ang = math.atan2(y2 - y1, x2 - x1)
    px, py = -math.sin(ang) * r, math.cos(ang) * r
    return (
        f"M {x1 + px:.2f} {y1 + py:.2f} L {x2 + px:.2f} {y2 + py:.2f} "
        f"A {r:.2f} {r:.2f} 0 0 1 {x2 - px:.2f} {y2 - py:.2f} "
        f"L {x1 - px:.2f} {y1 - py:.2f} "
        f"A {r:.2f} {r:.2f} 0 0 1 {x1 + px:.2f} {y1 + py:.2f} Z"
    )


def wrench_group() -> str:
    """One orange open-end wrench crossing the gear, jaw toward the upper right."""
    # Upright wrench, then spun so the handle falls lower-left of the gear.
    jaw = (
        "M-18 8 L-18-26 Q-18-42 -2-42 L-2-6 L8-6 L8-42 Q24-42 24-26 "
        "L24 8 L16 24 L16 108 Q16 126 0 126 Q-16 126 -16 108 L-16 24 Z"
    )
    return (
        f'<g transform="translate(96 108) rotate(-50) translate(10 -6)">'
        f'<path fill="{ORANGE}" d="{jaw}"/>'
        f"</g>"
    )


def car_front() -> str:
    """Geometric front clip. Sits against the gear, not as a separate illustration."""
    windshield = "M38 26 H168 L184 58 H22 Z"
    glass_hi = "M58 30 H150 L158 46 H48 Z"
    body = "M4 54 H196 L188 108 Q188 120 172 120 H28 Q12 120 12 108 L4 54 Z"
    hood = "M62 58 L100 86 L138 58 Z"
    lamp_l = "M22 74 H62 V90 H22 Z"
    lamp_r = "M138 74 H178 V90 H138 Z"
    grille = "M78 92 H122 V106 H78 Z"
    slat = "M82 96 H118 V99 H82 Z M82 102 H118 V105 H82 Z"
    return (
        f'<path fill="{NAVY}" d="{body}"/>'
        f'<path fill="{SILVER}" d="{windshield}"/>'
        f'<path fill="{WHITE}" d="{glass_hi}"/>'
        f'<path fill="{SILVER_2}" d="{hood}"/>'
        f'<path fill="{WHITE}" d="{lamp_l}"/>'
        f'<path fill="{WHITE}" d="{lamp_r}"/>'
        f'<path fill="{NAVY_DEEP}" d="{grille}"/>'
        f'<path fill="{SILVER}" d="{slat}"/>'
    )


def mark_group(x: float = 0, y: float = 0, s: float = 1) -> str:
    """Icon only. Gear left, car overlapping on the right, wrench on top of the gear."""
    return (
        f'<g transform="translate({x} {y}) scale({s})">'
        f'<g transform="translate(132 36)">{car_front()}</g>'
        f'<path fill="{NAVY}" fill-rule="evenodd" d="{gear(96, 108)}"/>'
        f"{wrench_group()}"
        f"</g>"
    )


def pin(cx: float, cy: float, s: float = 1) -> str:
    return (
        f'<g transform="translate({cx} {cy}) scale({s})" fill="{ORANGE}">'
        f'<path d="M0 2 C-9 2 -16 10 -16 19 C-16 30 0 44 0 44 C0 44 16 30 16 19 C16 10 9 2 0 2 Z"/>'
        f'<circle cx="0" cy="18" r="5.5" fill="{WHITE}"/>'
        f"</g>"
    )


def slash_plate(w: float, h: float) -> str:
    """Navy corners, orange stripe, hairline echo. Matches the final plate."""
    def band(ax, ay, bx, by, corner_x, corner_y, stripe=16, gap=18):
        vx, vy = bx - ax, by - ay
        length = math.hypot(vx, vy) or 1
        # Perpendicular pointing toward the corner.
        nx, ny = -vy / length, vx / length
        mx, my = (ax + bx) / 2, (ay + by) / 2
        if (corner_x - mx) * nx + (corner_y - my) * ny < 0:
            nx, ny = -nx, -ny
        def shift(p, q, dist):
            return (p + nx * dist, q + ny * dist)
        o1 = shift(ax, ay, gap)
        o2 = shift(bx, by, gap)
        o3 = shift(bx, by, gap + stripe)
        o4 = shift(ax, ay, gap + stripe)
        hair = 46
        h1 = shift(ax, ay, -hair)
        h2 = shift(bx, by, -hair)
        h3 = shift(bx, by, -hair - 3)
        h4 = shift(ax, ay, -hair - 3)
        orange = (
            f'<polygon fill="{ORANGE}" points="'
            f'{o1[0]:.1f},{o1[1]:.1f} {o2[0]:.1f},{o2[1]:.1f} '
            f'{o3[0]:.1f},{o3[1]:.1f} {o4[0]:.1f},{o4[1]:.1f}"/>'
        )
        line = (
            f'<polygon fill="#E3E8EE" points="'
            f'{h1[0]:.1f},{h1[1]:.1f} {h2[0]:.1f},{h2[1]:.1f} '
            f'{h3[0]:.1f},{h3[1]:.1f} {h4[0]:.1f},{h4[1]:.1f}"/>'
        )
        return orange + line

    tl = f'<polygon fill="{NAVY}" points="0,0 440,0 0,370"/>'
    br = f'<polygon fill="{NAVY}" points="{w:.0f},{h:.0f} {w - 440:.0f},{h:.0f} {w:.0f},{h - 370:.0f}"/>'
    return (
        tl
        + br
        + band(0, 370, 440, 0, 0, 0, stripe=18, gap=22)
        + band(w - 440, h, w, h - 370, w, h, stripe=18, gap=22)
    )


def split_rule(cx: float, y: float, half: float = 168) -> str:
    gap = 28
    dash = 36
    return (
        f'<rect x="{cx - half:.1f}" y="{y}" width="{half - gap - dash / 2:.1f}" height="4" fill="{NAVY}"/>'
        f'<rect x="{cx - dash / 2:.1f}" y="{y - 1}" width="{dash:.1f}" height="6" fill="{ORANGE}"/>'
        f'<rect x="{cx + gap + dash / 2:.1f}" y="{y}" width="{half - gap - dash / 2:.1f}" height="4" fill="{NAVY}"/>'
    )


def plate_svg() -> str:
    w, h = 1000, 1120
    return "\n".join(
        [
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="Angels Auto Repair, Carolina Beach, North Carolina">',
            f'<rect width="{w}" height="{h}" fill="{WHITE}"/>',
            slash_plate(w, h),
            mark_group(292, 168, 1.08),
            centered(BLACK, "ANGELS", 138, 560, NAVY, w, -2.2),
            centered(XBOLD, "AUTO REPAIR", 50, 632, NAVY, w, 2.2),
            split_rule(w / 2, 658, 200),
            centered(INTER, "CAROLINA BEACH, NC", 20, 714, NAVY, w, 3.6),
            pin(w / 2, 748, 1.05),
            "</svg>",
        ]
    )


def header_svg(fill: str, bg: str | None) -> str:
    angels_size, sub_size = 78, 30
    angels_w = measure(BLACK, "ANGELS", angels_size, -1.2)
    sub_w = measure(XBOLD, "AUTO REPAIR", sub_size, 0.8)
    mark_w = 310
    gap = 22
    text_w = max(angels_w, sub_w)
    width = mark_w + gap + text_w + 12
    height = 170
    bg_rect = f'<rect width="{width:.0f}" height="{height}" fill="{bg}"/>' if bg else ""
    rule_w = min(sub_w, 220)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.0f} {height}" role="img" aria-label="Angels Auto Repair">'
        f"{bg_rect}"
        f"{mark_group(0, 8, 0.62)}"
        f"{text(BLACK, 'ANGELS', angels_size, mark_w + gap, 78, fill, -1.2)}"
        f"{text(XBOLD, 'AUTO REPAIR', sub_size, mark_w + gap, 122, fill, 0.8)}"
        f'<rect x="{mark_w + gap}" y="136" width="{rule_w:.1f}" height="6" fill="{ORANGE}"/>'
        f"</svg>"
    )


def favicon_svg() -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        f'<rect width="64" height="64" rx="8" fill="{WHITE}"/>'
        f'<g transform="translate(4 6) scale(0.16)">{mark_group()}</g>'
        f"</svg>"
    )


def mark_only_svg(mono: str | None = None) -> str:
    if mono is None:
        inner = mark_group(8, 8, 1)
    else:
        # Single-ink: recolor by wrapping in a filter-free group is not enough.
        # Build navy shapes only and recolor via a dedicated flat drawing.
        inner = (
            f'<g fill="{mono}">'
            f'<g transform="translate(176 26)">'
            f'<path d="M8 56 L28 58 L28 86 Q28 108 52 112 L188 112 Q212 108 212 86 L212 58 L232 56 L232 78 Q232 124 188 128 L52 128 Q8 124 8 78 Z"/>'
            f'<path d="M46 28 Q120 4 194 28 L208 58 L32 58 Z"/>'
            f"</g>"
            f'<path fill-rule="evenodd" d="{gear(104, 104)}"/>'
            f'<path d="{capsule(42, 140, 104, 70, 14)}"/>'
            f"</g>"
        )
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 220">{inner}</svg>'


def qr_group(size: float, fill: str) -> str:
    qr = segno.make(SITE, error="h")
    matrix = qr.matrix
    n = len(matrix)
    cell = size / n
    bits = []
    for r, row in enumerate(matrix):
        for c, on in enumerate(row):
            if on:
                bits.append(
                    f'<rect x="{c * cell:.2f}" y="{r * cell:.2f}" width="{cell + 0.35:.2f}" height="{cell + 0.35:.2f}"/>'
                )
    return f'<g fill="{fill}">{"".join(bits)}</g>'


def save_qr(path: Path, dark: str = NAVY) -> None:
    segno.make(SITE, error="h").save(str(path), scale=12, dark=dark, light=WHITE, xmldecl=False, border=2)


def card(name: str, kicker: str, lines: list[str], back_lines: list[str]) -> None:
    """3.75 × 2.25 in bleed (3.5 × 2 trim lives inside 0.125 in). 300 dpi."""
    w, h = 1125, 675
    qr = qr_group(250, NAVY)
    front_lines = "".join(
        text(BLACK, line, 54, 430, 250 + i * 68, NAVY, -0.6) for i, line in enumerate(lines)
    )
    back_copy = "".join(
        text(BLACK, line, 42, 430, 180 + i * 58, WHITE, -0.4) for i, line in enumerate(back_lines)
    )
    front = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="{w}" height="{h}" fill="{WHITE}"/>
  <polygon points="0,0 390,0 0,300" fill="{NAVY}"/>
  <polygon points="0,168 250,0 268,0 0,186" fill="{ORANGE}"/>
  <polygon points="{w},{h} {w - 300},{h} {w},{h - 230}" fill="{NAVY}"/>
  <g transform="translate(56 300) scale(0.62)">{mark_group()}</g>
  {text(INTER, kicker, 16, 430, 168, ORANGE, 1.4)}
  {front_lines}
  {text(INTER, f"{PHONE}   ·   {ADDRESS}", 18, 430, 600, NAVY, 0.2)}
</svg>'''
    back = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="{w}" height="{h}" fill="{NAVY}"/>
  <rect x="48" y="48" width="18" height="{h - 96}" fill="{ORANGE}"/>
  <rect x="96" y="78" width="286" height="286" fill="{WHITE}"/>
  <g transform="translate(114 96)">{qr}</g>
  {text(INTER, "SCAN TO REQUEST", 15, 114, 400, WHITE, 1.1)}
  {back_copy}
  {text(INTER, "angels-auto.cbgoc-cloud.top", 18, 430, 470, ORANGE, 0.3)}
  {text(INTER, "NEXT NOTE  ·  NOT A PRICE", 14, 430, 560, MIST, 1.2)}
  <line x1="430" y1="590" x2="1060" y2="590" stroke="{WHITE}" stroke-width="2"/>
</svg>'''
    (PRINT / f"{name}-front.svg").write_text(front)
    (PRINT / f"{name}-back.svg").write_text(back)
    (OUT / f"{name}-front.svg").write_text(front)
    (OUT / f"{name}-back.svg").write_text(back)


def flyer() -> str:
    w, h = 1275, 1650  # quarter letter, 300 dpi, no extra bleed
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="{w}" height="{h}" fill="{WHITE}"/>
  <polygon points="0,0 520,0 0,420" fill="{NAVY}"/>
  <polygon points="0,210 330,0 352,0 0,236" fill="{ORANGE}"/>
  <polygon points="{w},{h} {w - 480},{h} {w},{h - 380}" fill="{NAVY}"/>
  <g transform="translate(620 70) scale(0.85)">{mark_group()}</g>
  {text(BLACK, "ANGELS", 92, 70, 250, NAVY, -1)}
  {text(XBOLD, "AUTO REPAIR", 36, 72, 310, NAVY, 1)}
  {split_rule(250, 336, 180)}
  {text(BLACK, "WE SHOW THE", 78, 70, 500, NAVY, -1)}
  {text(BLACK, "WORK FIRST.", 78, 70, 590, NAVY, -1)}
  {text(INTER, "Then you approve it. Then the wrench moves.", 26, 70, 650, NAVY)}
  {text(INTER, "Diagnostics  ·  Brakes  ·  A/C  ·  Electrical", 24, 70, 760, NAVY)}
  {text(INTER, "Oil service  ·  Suspension  ·  Carolina Beach", 24, 70, 800, NAVY)}
  {text(XBOLD, ADDRESS, 28, 70, 900, NAVY)}
  {text(XBOLD, PHONE, 36, 70, 950, NAVY)}
  {text(INTER, "Mon–Fri 8:30–6:30   ·   Sat 8:30–4:30   ·   Sun closed", 20, 70, 1000, INK)}
  <rect x="70" y="1080" width="300" height="300" fill="{WHITE}" stroke="{NAVY}" stroke-width="4"/>
  <g transform="translate(86 1096)">{qr_group(268, NAVY)}</g>
  {text(XBOLD, "SCAN.", 64, 420, 1180, NAVY)}
  {text(XBOLD, "REQUEST.", 64, 420, 1260, NAVY)}
  {text(XBOLD, "APPROVE.", 64, 420, 1340, NAVY)}
  {text(INTER, "A request is not a locked bay.", 22, 420, 1400, INK)}
  {text(BLACK, "NO SURPRISE INVOICE.", 48, 70, 1560, NAVY)}
</svg>'''


def postcard() -> str:
    """4.25 × 6.25 in bleed for a 4 × 6 card."""
    w, h = 1275, 1875
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="{w}" height="{h}" fill="{NAVY}"/>
  <rect x="48" y="48" width="{w - 96}" height="{h - 96}" fill="{WHITE}"/>
  <polygon points="48,48 520,48 48,400" fill="{NAVY}"/>
  <polygon points="48,230 360,48 384,48 48,258" fill="{ORANGE}"/>
  <g transform="translate(180 160) scale(1.35)">{mark_group()}</g>
  {centered(BLACK, "ANGELS", 120, 860, NAVY, w, -2)}
  {centered(XBOLD, "AUTO REPAIR", 46, 940, NAVY, w, 1.4)}
  {split_rule(w / 2, 980, 220)}
  {centered(INTER, "CAROLINA BEACH, NC", 22, 1040, NAVY, w, 2.8)}
  {text(BLACK, "SEE IT.", 92, 120, 1220, NAVY)}
  {text(BLACK, "APPROVE IT.", 92, 120, 1330, NAVY)}
  {text(BLACK, "THEN WE FIX IT.", 72, 120, 1440, NAVY)}
  {text(INTER, "Photos and a written estimate before any repair.", 26, 120, 1520, INK)}
  {text(XBOLD, PHONE, 40, 120, 1620, NAVY)}
  {text(INTER, f"{ADDRESS}  ·  angels-auto.cbgoc-cloud.top", 22, 120, 1680, NAVY)}
  <g transform="translate(980 1560)">{qr_group(180, NAVY)}</g>
</svg>'''


def coaster() -> str:
    s = 1200
    c = s / 2
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{s}" height="{s}" viewBox="0 0 {s} {s}">
  <circle cx="{c}" cy="{c}" r="{c}" fill="{NAVY}"/>
  <circle cx="{c}" cy="{c}" r="{c - 36}" fill="{WHITE}"/>
  <circle cx="{c}" cy="{c}" r="{c - 54}" fill="none" stroke="{ORANGE}" stroke-width="10"/>
  <g transform="translate(330 150) scale(0.95)">{mark_group()}</g>
  {centered(BLACK, "ANGELS", 84, 620, NAVY, s, -1)}
  {centered(XBOLD, "SHOW THE WORK", 36, 690, NAVY, s, 1)}
  <g transform="translate(470 760)">{qr_group(260, NAVY)}</g>
  {centered(INTER, PHONE, 28, 1080, NAVY, s, 0.4)}
</svg>'''


def poster() -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1240">
  {plate_svg().split(">", 1)[1]}
</svg>'''


def og_svg() -> str:
    """1200×630 share card. Promise on the left, header lockup on a white plate."""
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="{NAVY}"/>
  <polygon points="0,0 260,0 0,200" fill="{NAVY_DEEP}"/>
  <polygon points="0,108 150,0 172,0 0,128" fill="{ORANGE}"/>
  {text(INTER, "CAROLINA BEACH", 18, 64, 210, ORANGE, 2)}
  {text(BLACK, "SHOW THE", 86, 64, 330, WHITE, -1)}
  {text(BLACK, "WORK FIRST.", 86, 64, 430, WHITE, -1)}
  {text(INTER, "Photos. A written estimate. Then the wrench.", 22, 64, 490, MIST)}
  {text(XBOLD, PHONE, 28, 64, 560, WHITE)}
  <rect x="690" y="48" width="462" height="534" fill="{WHITE}"/>
  <g transform="translate(760 70) scale(0.85)">{mark_group()}</g>
  {text(BLACK, "ANGELS", 64, 760, 400, NAVY, -1)}
  {text(XBOLD, "AUTO REPAIR", 26, 762, 448, NAVY, 0.8)}
  <rect x="762" y="468" width="160" height="8" fill="{ORANGE}"/>
  {text(INTER, "CAROLINA BEACH, NC", 16, 762, 520, NAVY, 1.2)}
</svg>'''


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    PRINT.mkdir(parents=True, exist_ok=True)
    DOCS_ASSETS.mkdir(parents=True, exist_ok=True)

    plate = plate_svg()
    (OUT / "angels-final.svg").write_text(plate)
    (OUT / "angels-lockup.svg").write_text(plate)
    (OUT / "poster.svg").write_text(plate)
    (DOCS_ASSETS / "angels-final.svg").write_text(plate)

    header = header_svg(NAVY, None)
    reverse = header_svg(WHITE, None)
    (OUT / "angels-header.svg").write_text(header)
    (OUT / "angels-header-reverse.svg").write_text(reverse)

    mark = mark_only_svg()
    (OUT / "angels-mark.svg").write_text(mark)
    (DOCS_ASSETS / "mark.svg").write_text(mark)
    (OUT / "angels-mark-navy.svg").write_text(mark_only_svg(NAVY))
    (OUT / "angels-mark-white.svg").write_text(mark_only_svg(WHITE))

    fav = favicon_svg()
    (OUT / "favicon.svg").write_text(fav)
    (ROOT / "public" / "favicon.svg").write_text(fav)
    (DOCS_ASSETS / "favicon.svg").write_text(fav)

    save_qr(OUT / "website-qr.svg")
    (DOCS_ASSETS / "website-qr.svg").write_text((OUT / "website-qr.svg").read_text())

    card(
        "card-show-the-work",
        "PRECISION WORK. TRUSTED CARE.",
        ["THE PHOTO IS", "THE PRICE."],
        ["NOT A QUOTE.", "A WAY TO", "START ONE."],
    )
    card(
        "card-bridge",
        "STAY ON THE ISLAND.",
        ["DON'T CROSS", "FOR BRAKES."],
        ["SNOW'S CUT IS", "FOR THE BEACH.", "NOT THE ROTORS."],
    )
    card(
        "card-saturday",
        "TWO BAYS. NO FAKE SLOTS.",
        ["SATURDAY.", "UNTIL 4:30."],
        ["A REQUEST.", "NOT A", "RESERVATION."],
    )
    card(
        "card-neighbor",
        "HAND THIS TO THE NEIGHBOR.",
        ["THAT LIGHT.", "SINCE JULY."],
        ["WE READ IT.", "WE SHOW IT.", "YOU DECIDE."],
    )

    flyer_svg = flyer()
    (PRINT / "flyer-quarter.svg").write_text(flyer_svg)
    (OUT / "flyer-quarter.svg").write_text(flyer_svg)
    post = postcard()
    (PRINT / "postcard-4x6.svg").write_text(post)
    (OUT / "postcard-4x6.svg").write_text(post)
    coast = coaster()
    (PRINT / "coaster.svg").write_text(coast)
    (OUT / "coaster.svg").write_text(coast)
    (OUT / "og-card.svg").write_text(og_svg())
    print("brand vectors written", len(list(OUT.glob('*.svg'))))


if __name__ == "__main__":
    main()
