import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kit")({
  head: () => ({
    meta: [
      { title: "Brand kit | Angels Auto Repair" },
      {
        name: "description",
        content: "Final lockup, colors, and print files for Angels Auto Repair in Carolina Beach.",
      },
    ],
  }),
  component: KitPage,
});

const SWATCHES = [
  { name: "Navy", hex: "#0B2347", note: "Wordmark, gear, corners" },
  { name: "Spark", hex: "#F15A22", note: "Wrench, rule, pin" },
  { name: "Silver", hex: "#D5DCE6", note: "Windshield and lamps" },
  { name: "Paper", hex: "#FFFFFF", note: "Plate ground" },
];

const FILES = [
  ["/brand/angels-final.svg", "Final plate"],
  ["/brand/angels-header.svg", "Header, navy ink"],
  ["/brand/angels-header-reverse.svg", "Header, reversed"],
  ["/brand/angels-mark.svg", "Icon only"],
  ["/brand/angels-mark-navy.svg", "Icon, one ink"],
  ["/brand/favicon.svg", "Favicon"],
  ["/brand/website-qr.svg", "Website QR"],
  ["/brand/flyer-quarter.svg", "Quarter-page flyer"],
  ["/brand/postcard-4x6.svg", "4×6 postcard"],
  ["/brand/coaster.svg", "Counter coaster"],
];

function KitPage() {
  return (
    <>
      <header className="c-pagehead c-on-dark">
        <div className="c-wrap">
          <p className="c-eyebrow">Brand kit · final plate</p>
          <h1>The logo is the plate.</h1>
          <p>Gear, orange wrench, front-view car, corner slash, Carolina Beach. One drawing, outlined type, vectors only.</p>
        </div>
      </header>
      <section className="c-section">
        <div className="c-wrap" style={{ display: "grid", gap: "1.5rem" }}>
          <img src="/brand/angels-final.svg" alt="Angels Auto Repair final logo" style={{ width: "min(520px, 100%)", background: "white" }} />
          <div className="c-actions">
            <a className="c-btn c-btn--primary" href="/brand/angels-final.svg" download>
              Download plate SVG
            </a>
            <a className="c-btn c-btn--secondary" href="/print">
              Cards and flyers
            </a>
          </div>
          <ul className="c-cards">
            {SWATCHES.map((swatch) => (
              <li key={swatch.hex}>
                <article className="c-card">
                  <div style={{ height: 48, background: swatch.hex, border: "1px solid var(--color-line)" }} />
                  <h3>{swatch.name}</h3>
                  <p>{swatch.hex}</p>
                  <p>{swatch.note}</p>
                </article>
              </li>
            ))}
          </ul>
          <article className="c-panel">
            <h2>Files</h2>
            <ul>
              {FILES.map(([href, label]) => (
                <li key={href}>
                  <a href={href} download>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="c-note">
              Wordmarks are outlined. A print shop can cut or print these files without installing a font. Navy, spark orange, silver, paper. Do not add a fourth color, and do not set the name in another typeface.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
