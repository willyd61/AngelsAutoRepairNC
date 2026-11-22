# Brand

The attached final plate is the logo. Vectors in this repo match that plate:
corner slashes, gear, orange wrench, front-view car, Angels wordmark, split
rule, Carolina Beach line, map pin.

## Color

| Name | Hex | Use |
| --- | --- | --- |
| Navy | `#0B2347` | Wordmark, gear, car body, corners |
| Navy deep | `#07182F` | Corner depth, grille |
| Spark | `#F15A22` | Wrench, center dash, pin, slash stripe |
| Silver | `#D5DCE6` | Windshield and lamp metal |
| Paper | `#FFFFFF` | Plate ground |
| Ink | `#111820` | Paragraphs on the website. Not a fourth brand color. |

Do not add gold. Do not recolor the wrench navy. Do not set the name in a
script or a serif.

## Type

Wordmarks are outlined, so printers do not need the fonts installed.

| Role | Source face |
| --- | --- |
| ANGELS | Montserrat Black |
| AUTO REPAIR | Montserrat ExtraBold |
| Small labels | Inter SemiBold |

Montserrat and Inter are used under the SIL Open Font License. License text
ships with those families. Do not substitute another black sans on the plate.

## File map

| File | Job |
| --- | --- |
| `public/brand/angels-final.svg` | Master plate. Hero and brand kit. |
| `public/brand/angels-lockup.svg` | Same plate. |
| `public/brand/angels-header.svg` | Horizontal lockup, navy ink, no plate. |
| `public/brand/angels-header-reverse.svg` | White ink, for navy grounds. |
| `public/brand/angels-mark.svg` | Icon only. |
| `public/brand/angels-mark-navy.svg` | One-ink icon for embroidery or a stamp. |
| `public/brand/favicon.svg` | Tab mark. |
| `public/brand/website-qr.svg` | QR to the shop URL. |
| `public/og.jpg` | 1200×630 share card. |
| `branding/print/` | Same print SVGs, kept next to the generator. |

## Rebuild

From the repository root, with the vendored fonts in `branding/fonts/`:

```bash
python branding/build_brand.py
```

Change copy, card lines, or geometry in that script. Then commit the SVG
output with the script. Do not trace a new icon in a slide deck.

## Clear space and misuse

- Clear space is the height of the orange pin on every side of the plate.
- Do not rotate the plate.
- Do not put the navy wordmark on navy without switching to the reverse lockup.
- Do not crop the pin off and keep the location line. They travel together.
- Do not recreate the old side-view car. The car is a front clip.
