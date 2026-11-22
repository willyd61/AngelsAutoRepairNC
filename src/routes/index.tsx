import { Link, createFileRoute } from "@tanstack/react-router";
import { APPROVAL_STEPS, SERVICES, SITE } from "@/data/site";
import { DviPanel } from "@/components/dvi-panel";
import { PendingGate } from "@/components/site-frame";
import { track } from "@/lib/track";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angels Auto Repair | Carolina Beach, NC Auto Repair & Diagnostics" },
      {
        name: "description",
        content:
          "Dependable diagnostics, brakes, A/C, electrical, and maintenance at 306 N Lake Park Blvd. Photos and a written estimate before any repair.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="c-hero c-on-dark">
        <div className="c-wrap c-hero-grid">
          <div>
            <p className="c-eyebrow">Carolina Beach · Pleasure Island</p>
            <h1>Show the work. Then turn the wrench.</h1>
            <p>
              Diagnostics, brakes, A/C, electrical, and the maintenance salt air actually asks for.
              At {SITE.street} you see the photo and the written estimate before we repair anything.
            </p>
            <div className="c-actions">
              <Link className="c-btn c-btn--on-dark" to="/contact" onClick={() => track("cta_request_service_click", { location: "hero" })}>
                Request Service
              </Link>
              <a className="c-btn c-btn--line" href={`tel:${SITE.phoneTel}`} onClick={() => track("click_to_call", { location: "hero" })}>
                Call {SITE.phoneDisplay}
              </a>
              <Link className="c-btn c-btn--line" to="/visitor-help" onClick={() => track("visitor_pathway_click", { location: "hero" })}>
                Visiting with car trouble?
              </Link>
            </div>
            <ul className="c-proof">
              <li>Two bays</li>
              <li>Photos before parts</li>
              <li>Written estimate</li>
              <li>No surprise invoice</li>
            </ul>
          </div>
          <figure className="c-hero-logo">
            <img src="/brand/angels-lockup.svg" alt="Angels Auto Repair logo, Carolina Beach, NC" />
          </figure>
        </div>
      </section>

      <section className="c-section c-section--mist" aria-labelledby="services-heading">
        <div className="c-wrap">
          <h2 id="services-heading">Priority services for island drivers</h2>
          <p className="c-kicker">
            Honest diagnostics and repairs for coastal heat, salt air, and daily driving — without crossing
            Snow's Cut Bridge for the work we can do here.
          </p>
          <ul className="c-cards">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <article className="c-card">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <ul>
                    {service.symptoms.map((symptom) => (
                      <li key={symptom}>{symptom}</li>
                    ))}
                  </ul>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    onClick={() => track("service_card_click", { service_slug: service.slug })}
                  >
                    See what we inspect
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="c-section" id="approval" aria-labelledby="approval-heading">
        <div className="c-wrap">
          <p className="c-eyebrow">No surprise invoices</p>
          <h2 id="approval-heading">How we earn your approval on every visit</h2>
          <ol className="c-steps">
            {APPROVAL_STEPS.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <strong>{step.title}</strong>
                {step.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="c-section c-dvi c-on-dark" aria-labelledby="dvi-heading">
        <div className="c-wrap">
          <p className="c-eyebrow">See what we see</p>
          <h2 id="dvi-heading">Inspection evidence, sorted before you decide</h2>
          <p>
            Every diagnostic or service visit can include plain-language notes in three tiers. These samples
            are teaching examples. They are not a customer's car, and they contain no plate, VIN, or name.
          </p>
          <DviPanel />
        </div>
      </section>

      <section className="c-section" aria-labelledby="locals-heading">
        <div className="c-wrap c-audience">
          <article className="c-panel">
            <h3 id="locals-heading">Built for Carolina Beach and Kure Beach residents first</h3>
            <p>
              Your reliable on-island shop. Clear estimates. No surprises. Routine work and a check-engine
              light should not cost half a day in Wilmington traffic. We look for real coastal wear — salt
              on brake hardware, moisture in fluid, summer heat on batteries and A/C — and show the evidence
              so you can plan the car, not react to a surprise invoice.
            </p>
            <p>Open Monday–Friday 8:30 AM–6:30 PM and Saturday 8:30 AM–4:30 PM. Sunday closed.</p>
            <Link className="c-btn c-btn--primary" to="/contact" onClick={() => track("cta_request_service_click", { location: "resident_block" })}>
              Request Service
            </Link>
          </article>
          <article className="c-panel c-panel--accent">
            <h3>Car trouble while visiting?</h3>
            <p>A calm next step: is it safe to drive here, and can two bays actually see the car before you leave.</p>
            <Link className="c-btn c-btn--secondary" to="/visitor-help" onClick={() => track("visitor_pathway_click", { location: "audience_split" })}>
              Visitor help
            </Link>
          </article>
        </div>
      </section>

      <section className="c-section c-section--mist">
        <div className="c-wrap">
          <article className="c-season">
            <p className="c-eyebrow">Late fall on the island</p>
            <h2>Battery load, brake moisture, and a look underneath</h2>
            <p>
              Cars that sat through beach season, then face cooler nights, show weak batteries and damp brake
              fluid first. Request a seasonal check and we will photograph what we find before recommending work.
            </p>
            <Link className="c-btn c-btn--primary" to="/contact" search={{ service: "electrical-batteries" }} onClick={() => track("seasonal_cta_click", { season_id: "late-fall-2026" })}>
              Request a seasonal check
            </Link>
          </article>
        </div>
      </section>

      <section className="c-section" id="reviews" aria-labelledby="reviews-heading">
        <div className="c-wrap" style={{ display: "grid", gap: "1rem" }}>
          <h2 id="reviews-heading">What island drivers say</h2>
          <PendingGate
            claim="Google reviews for 306 N Lake Park Blvd"
            action="the current Google Business Profile is verified and prior-tenant reviews are kept off this site"
          />
          <p className="c-note">No star rating is shown until those reviews belong to this shop at this address.</p>
        </div>
      </section>

      <section className="c-section c-section--mist" id="location-hours">
        <div className="c-wrap c-loc">
          <div>
            <h2>Find us on North Lake Park Boulevard</h2>
            <p>
              {SITE.street}
              <br />
              {SITE.city}, {SITE.state} {SITE.postal}
            </p>
            <table className="c-table">
              <tbody>
                {SITE.hours.map((row) => (
                  <tr key={row.days}>
                    <th scope="row">{row.days}</th>
                    <td>{row.display}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="c-actions" style={{ marginTop: "1rem" }}>
              <a className="c-btn c-btn--primary" href={`tel:${SITE.phoneTel}`} onClick={() => track("click_to_call", { location: "location_block" })}>
                Call {SITE.phoneDisplay}
              </a>
              <a className="c-btn c-btn--secondary" href={SITE.mapsUrl} onClick={() => track("click_directions", { location: "location_block" })}>
                Get directions
              </a>
            </div>
          </div>
          <a className="c-mapbtn" href={SITE.mapsUrl} onClick={() => track("map_facade_activate", { location: "home" })}>
            <span>Open 306 N Lake Park Blvd in Maps</span>
            <span className="c-note">Map loads in Google or Apple Maps. Nothing extra downloads on this page.</span>
          </a>
        </div>
      </section>
    </>
  );
}
