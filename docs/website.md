# Website

The shop site is a TanStack Start application. GitHub Pages does not host it.
Pages hosts this documentation.

## Voice

Short, local, and specific. The shop shows the finding before it sells the
repair. It does not promise a bay it has not confirmed. It does not quote a
price it has not inspected.

Useful lines already on the site:

- Show the work. Then turn the wrench.
- Photos before parts.
- Written estimate.
- Two bays.
- No surprise invoice.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Hero, services, approval steps |
| `/services` | Service index and detail pages |
| `/why-angels` | Why this shop |
| `/visitor-help` | Someone stuck while visiting |
| `/contact` | Request service |
| `/kit` | Brand kit |
| `/print` | Cards, flyer, postcard, ten ideas |
| `/reviews` | Reviews |
| `/privacy`, `/terms` | Policies |

Shop facts live in `src/data/site.ts`. Change the phone, hours, or URL there
first, then rebuild the print kit so the cards match.

## Hero

The hero is navy, with the final plate on a white card and an orange slash
echoing the logo corners. The primary action is Request Service. Call is
second. Visitor help is the third action, not a buried link.

## Share card

`public/og.jpg` is the 1200×630 card. `src/lib/og/site.json` marks it custom.
Do not add `og:` or `twitter:` tags in `src/routes/__root.tsx`.

## Hosting note

`npm run build` produces a Vercel-style output. A Node host is required.
Point the public URL at that host, and keep the QR code on that same URL.
Today the QR target is `https://angels-auto.cbgoc-cloud.top/`.
