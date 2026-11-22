import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/print")({
  head: () => ({
    meta: [
      { title: "Print kit | Angels Auto Repair" },
      { name: "description", content: "Vector lockup, business cards, and a quarter-page flyer for Angels Auto Repair." },
    ],
  }),
  component: PrintPage,
});

const CARDS = [
  ["card-show-the-work", "The photo is the price", "Front is the joke. Back is the QR. Neither side has a dollar amount."],
  ["card-bridge", "Don't cross for brakes", "Snow's Cut is for the beach, not the rotors."],
  ["card-saturday", "Saturday until 4:30", "A request, not a reservation. Two bays, not a maybe."],
  ["card-neighbor", "That light. Since July.", "The card you hand the neighbor who has been waiting it out."],
];

const IDEAS = [
  "Work-order back: a notes line and a QR, and no price. The photo is the conversation.",
  "Bridge card: stay on the island. Snow's Cut is not a parts run.",
  "Saturday card: the closing hour is the headline, so nobody treats it like a reservation.",
  "Neighbor card: the check-engine light that has been on since July.",
  "Salt-air card: rotors that took a beach week, then got measured, not guessed.",
  "Two-bay card: we confirm the drop-off. We do not sell imaginary slots.",
  "Visitor card: checkout tomorrow is a fact. We say what two bays can actually see.",
  "Orange-wrench card: navy field, one tool, the phone set huge, for the counter jar.",
  "Pocket estimate: the number is missing on purpose. The QR opens the request.",
  "Round coaster: same QR as the card, so the waiting table and the handshake tell one story.",
];

function PrintPage() {
  return (
    <article className="c-section">
      <div className="c-wrap" style={{ display: "grid", gap: "1.5rem" }}>
        <header>
          <p className="c-eyebrow">Print</p>
          <h1>Cards with a point of view.</h1>
          <p>
            Trim is 3.5 × 2 inches inside a 3.75 × 2.25 inch bleed. The quarter flyer is 4.25 × 5.5.
            The postcard is a 4 × 6 with bleed. Every QR opens{" "}
            <a href="https://angels-auto.cbgoc-cloud.top/">angels-auto.cbgoc-cloud.top</a>.
          </p>
        </header>
        <p>
          <a className="c-btn c-btn--primary" href="/brand/angels-final.svg" download>
            Final logo SVG
          </a>{" "}
          <a className="c-btn c-btn--secondary" href="/brand/flyer-quarter.svg" download>
            Quarter flyer
          </a>{" "}
          <a className="c-btn c-btn--secondary" href="/brand/postcard-4x6.svg" download>
            4×6 postcard
          </a>{" "}
          <a className="c-btn c-btn--secondary" href="/brand/coaster.svg" download>
            Coaster
          </a>
        </p>
        <img src="/brand/angels-final.svg" alt="Angels Auto Repair final logo" style={{ width: "min(420px, 100%)", background: "white" }} />
        <div className="c-two">
          <img src="/brand/flyer-quarter.svg" alt="Quarter-page flyer" />
          <img src="/brand/postcard-4x6.svg" alt="4 by 6 postcard" />
        </div>
        {CARDS.map(([id, title, line]) => (
          <section key={id} className="c-panel">
            <h2>{title}</h2>
            <p>{line}</p>
            <div className="c-two">
              <img src={`/brand/${id}-front.svg`} alt={`${title} card front`} />
              <img src={`/brand/${id}-back.svg`} alt={`${title} card back`} />
            </div>
            <p>
              <a href={`/brand/${id}-front.svg`} download>
                Front SVG
              </a>
              {" · "}
              <a href={`/brand/${id}-back.svg`} download>
                Back SVG
              </a>
            </p>
          </section>
        ))}
        <section>
          <h2>Ten ways the card stands out</h2>
          <ol>
            {IDEAS.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
