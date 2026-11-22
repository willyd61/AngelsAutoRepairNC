# 0001. Final logo plate

- Status: accepted
- Date: 2026-11-22

## Context

The shop locked a final plate: corner slashes, gear, orange wrench, front-view
car, heavy wordmark, split rule, Carolina Beach, pin. The site was still using
an earlier side-view car and a solid orange bar.

## Decision

Treat that plate as the only mark. Ship it as outlined SVG from
`branding/build_brand.py`, and use the same drawing on the hero, the header,
the favicon, the share card, and the print kit.

GitHub Pages stays the MkDocs manual. The customer site stays the application.
One Jekyll Pages workflow was removed so it would not deploy over the docs
site.

## Consequences

- Print files do not depend on a font being installed.
- A future designer file can replace the generated plate. Until then, edit the
  generator, not a one-off export.
- Cards do not carry prices. The QR opens the shop URL.
