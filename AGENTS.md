# AGENTS.md

Instructions for automated coding agents in this repository.

## Read this first

1. [docs/agent-handoff.md](docs/agent-handoff.md) is the session handoff.
2. The final logo is `public/brand/angels-final.svg`. Do not invent a new mark.
3. Regenerate print files from `branding/build_brand.py`. Do not hand-edit the
   generated SVG if you can change the script instead.
4. Customer copy stays specific. Photos before the wrench. Written estimate.
   Two bays. No fake appointment slots. No surprise invoice.

## GoC rules that still apply

- No secrets, credentials, customer data, or private environment values.
- Conventional commits.
- Least-privilege workflow permissions. Do not weaken CodeQL, Dependabot, or
  Pages to get a green check.
- `mkdocs build --strict` must pass when docs change.
- New architecture choices go in `docs/decisions/` using `templates/adr.md`.

## Shop site

The customer UI is the TanStack Start app (`src/routes`, `src/styles.css`,
`src/data/site.ts`). GitHub Pages is the documentation site, not the shop.

Do not put Open Graph tags in `src/routes/__root.tsx`. The deploy injector
owns those tags. Identity for the share card is `src/lib/og/site.json` and
`public/og.jpg`.

## Validation

```bash
python branding/build_brand.py
npm run typecheck
npm run build
mkdocs build --strict
```
