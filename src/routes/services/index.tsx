import { Link, createFileRoute } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Auto Repair Services in Carolina Beach, NC | Angels Auto Repair" },
      {
        name: "description",
        content:
          "Match a symptom to diagnostics, brakes, A/C, electrical, oil service, or suspension at Angels Auto Repair.",
      },
    ],
  }),
  component: ServicesHub,
});

const FINDER = [
  { text: "Check engine light is on or flashing", slug: "diagnostics-check-engine" },
  { text: "Squealing, grinding, or a soft brake pedal", slug: "brakes" },
  { text: "A/C blowing warm or weak airflow", slug: "ac-climate" },
  { text: "Slow crank or a battery warning light", slug: "electrical-batteries" },
  { text: "Due for oil service or a coastal checkup", slug: "oil-preventive-maintenance" },
  { text: "Clunking over bumps or wandering steering", slug: "suspension-steering" },
];

function ServicesHub() {
  return (
    <>
      <header className="c-pagehead c-on-dark">
        <div className="c-wrap">
          <p className="c-eyebrow">Services</p>
          <h1>Match the symptom. Then we inspect the car.</h1>
          <p>This page does not diagnose your vehicle. It points you at the right bay conversation.</p>
        </div>
      </header>
      <section className="c-section">
        <div className="c-wrap" style={{ display: "grid", gap: "1.25rem" }}>
          <aside className="c-alert">
            <h2>Stop driving if</h2>
            <p>
              The check-engine light is flashing, the temperature gauge is in the red, you smell fuel or
              burning, or the brakes feel spongy or fail to stop normally. Pull over safely and call{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Website text is not a diagnosis.
            </p>
          </aside>
          <ul className="c-cards">
            {FINDER.map((item) => (
              <li key={item.slug}>
                <article className="c-card">
                  <h3>{item.text}</h3>
                  <Link to="/services/$slug" params={{ slug: item.slug }}>
                    Open this service
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <article className="c-panel">
            <h2>How a written estimate works here</h2>
            <p>
              Diagnostic testing isolates a cause before parts are replaced. No repair starts without your
              approval. A diagnostic fee, if the shop charges one, is not published until the owner confirms
              the amount and whether it applies toward the repair.
            </p>
          </article>
          <p className="c-note">
            NC safety inspections are not offered on this site until an NCDMV station license is confirmed.{" "}
            {SERVICES.length} service categories are listed. We refer out collision frames and full paint work.
          </p>
        </div>
      </section>
    </>
  );
}
