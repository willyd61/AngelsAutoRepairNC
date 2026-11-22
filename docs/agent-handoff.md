# Agent handoff

Session handoff for the next agent. Read this before editing the mark, the
hero, or the cards.

## What just shipped

- The final plate replaced the older side-view car mark.
- Header, footer, hero, favicon, brand kit page, and print page use that plate.
- Four business cards, a quarter flyer, a 4×6 postcard, and a round coaster
  are outlined SVGs with a QR to the shop URL.
- The hero line is "Show the work. Then turn the wrench."
- This repository was specialized from the GoC base template. Pages still
  builds with MkDocs. The Jekyll Pages workflow was removed so two deploys
  would not fight.

## What the logo is

A vector reconstruction of the approved plate, not a pixel trace of the JPEG.
Match these parts if you touch it:

- Top-left and bottom-right navy corners
- Orange stripe inside each corner, parallel to the slash
- Thin silver hairline on the white side of each slash
- Navy gear, about eight teeth, round hole
- Orange open-end wrench crossing the gear, jaw up, handle down-left
- Front-view car overlapping the gear's right side, silver windshield
- ANGELS in a heavy sans, then AUTO REPAIR
- Split rule: navy, orange dash, navy
- CAROLINA BEACH, NC and an orange map pin

If a later file is a true vector export from the designer, replace
`angels-final.svg` with that file and stop redrawing it.

## Do not

- Do not bring back the side-view car or the full-width orange bar.
- Do not put prices on the cards.
- Do not promise reservations. A request is not a locked bay.
- Do not commit secrets, `.env`, customer names, plates, or VINs.
- Do not add `og:` tags in `src/routes/__root.tsx`.
- Do not delete `startup.sh` in the app-builder workspace. That file is the
  preview restart contract there. It is also in this repo so the app can be
  started the same way.

## Business facts

Confirm with the shop before you change them. They are what the site and the
print files use today.

- 306 N Lake Park Blvd, Carolina Beach, NC 28428
- (910) 636-3053
- Monday–Friday 8:30 AM–6:30 PM
- Saturday 8:30 AM–4:30 PM
- Sunday closed
- Public URL: <https://angels-auto.cbgoc-cloud.top/>

`src/data/site.ts` is the single copy deck for the app. The print script has
its own phone, address, and URL constants. Change both, or change the script
to import one module later.

## Repo map

| Path | Why it exists |
| --- | --- |
| `src/` | Shop UI |
| `public/brand/` | Vectors the site and the downloads use |
| `branding/build_brand.py` | Generator |
| `branding/fonts/` | Montserrat and Inter, for outlining only |
| `docs/` | MkDocs source, including this handoff |
| `.github/workflows/pages.yml` | Publishes docs to GitHub Pages |
| `.github/workflows/ci.yml` | Markdown, YAML, and `mkdocs build --strict` |

## Checks

```bash
python branding/build_brand.py
npm run typecheck
npm run build
mkdocs build --strict
```

## Still open

- Ideas 5 through 9 in the print kit are written, not drawn.
- If the public URL moves off `cbgoc-cloud.top`, regenerate every QR.
- Branch protection, secret scanning, and required reviews are repository
  settings. The workflows are here. The toggles are in GitHub.
- The plate is faithful and print-ready. A designer SVG of the original JPEG
  would still be a closer master if one shows up.
