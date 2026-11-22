# Angels Auto Repair

Angels Auto Repair is the Carolina Beach shop at 306 N Lake Park Blvd.
This repository is the customer website, the print-ready brand kit, and the
GoC operating baseline for the project.

The final logo plate is the source of truth: navy gear, orange open wrench,
front-view car, corner slash, split rule, and the Carolina Beach pin.

## Sites

| Surface | Where it lives |
| --- | --- |
| Customer website | TanStack Start app in this repository |
| Shop URL | <https://angels-auto.cbgoc-cloud.top/> |
| GitHub Pages | Docs, brand rules, and the agent handoff |
| Pages URL | <https://willyd61.github.io/AngelsAutoRepairNC/> |

GitHub Pages publishes the MkDocs site. It does not run the shop application.
The shop app needs a Node host.

## Brand, fast

- Plate: `public/brand/angels-final.svg`
- Header: `public/brand/angels-header.svg` and `angels-header-reverse.svg`
- Cards, quarter flyer, 4×6 postcard, coaster: `public/brand/` and `branding/print/`
- QR target: `https://angels-auto.cbgoc-cloud.top/`
- Rebuild vectors: `python branding/build_brand.py`

Colors: navy `#0B2347`, spark `#F15A22`, silver `#D5DCE6`, paper `#FFFFFF`.

## Run the shop site

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```

## Documentation

```bash
python -m pip install -r requirements-docs.txt
mkdocs serve
```

```bash
mkdocs build --strict
```

Start with the [agent handoff](docs/agent-handoff.md) if you are picking the
work up cold. Brand rules are in [docs/brand.md](docs/brand.md). The ten card
ideas are in [docs/print-kit.md](docs/print-kit.md).

## GoC baseline

This repo was specialized from GOC-Base-Repo-Template. Keep the baseline:

- Pull requests, not direct pushes, once branch protection is on.
- Least-privilege Actions permissions.
- No secrets, customer records, or license keys in git.
- `mkdocs build --strict` stays green.
- Decisions that change brand, hosting, or data handling get an ADR in
  `docs/decisions/`.

## Owners

- Repository and brand: @willyd61
- Shop: Angels Auto Repair, Carolina Beach, NC
- Phone on the site and the cards: (910) 636-3053
