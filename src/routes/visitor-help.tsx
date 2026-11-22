import { Link, createFileRoute } from "@tanstack/react-router";
import { PendingGate } from "@/components/site-frame";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/visitor-help")({
  head: () => ({
    meta: [
      { title: "Visiting Carolina Beach With Car Trouble? | Angels Auto Repair" },
      {
        name: "description",
        content:
          "A safety-first next step for visitors on Pleasure Island. Call (910) 636-3053 or send a triage request. Not a same-day promise.",
      },
    ],
  }),
  component: VisitorHelp,
});

function VisitorHelp() {
  return (
    <>
      <header className="c-pagehead c-on-dark">
        <div className="c-wrap">
          <p className="c-eyebrow">Visitors</p>
          <h1>Car trouble while visiting Carolina Beach? Start with a safe next step.</h1>
          <p>
            A warning light, warm A/C, or a no-start can wreck a checkout day. Call {SITE.phoneDisplay} or
            send a visitor triage request. We will not promise the car is done before you leave the island.
          </p>
          <div className="c-actions">
            <a className="c-btn c-btn--on-dark" href={`tel:${SITE.phoneTel}`}>
              Call {SITE.phoneDisplay}
            </a>
            <Link className="c-btn c-btn--line" to="/contact" search={{ mode: "visitor" }}>
              Start visitor triage
            </Link>
          </div>
        </div>
      </header>
      <section className="c-section">
        <div className="c-wrap c-two">
          <article className="c-panel">
            <h2>Often drivable to the shop</h2>
            <ul>
              <li>Steady amber check-engine light, and the car still runs normally</li>
              <li>Warm A/C with no overheating</li>
              <li>A dead battery after a successful jump, if the car stays running</li>
            </ul>
          </article>
          <article className="c-alert">
            <h2>Do not drive it here</h2>
            <ul>
              <li>Overheating, or a flashing check-engine light</li>
              <li>Loss of brakes or steering</li>
              <li>Fluid pouring under the vehicle</li>
            </ul>
            <p>On US-421 or a bridge approach, get out of traffic first. For a highway emergency, call 911.</p>
          </article>
        </div>
      </section>
      <section className="c-section c-section--mist">
        <div className="c-wrap c-prose">
          <h2>How triage works with two bays</h2>
          <ol>
            <li>Call or send the form. Tell us your checkout date and where you are staying.</li>
            <li>We say plainly whether a bay can see the car inside your travel window.</li>
            <li>If a part cannot arrive before you leave, you still get the inspection findings and photos.</li>
          </ol>
          <PendingGate
            claim="Tow partner"
            action="a named local tow company and handoff process are confirmed by the office"
          />
          <p>
            Until then, give your own roadside provider this drop: {SITE.street}, {SITE.city}, {SITE.state}{" "}
            {SITE.postal}. Call {SITE.phoneDisplay} before the tow is dispatched, including after hours, so
            someone knows the car is coming.
          </p>
        </div>
      </section>
    </>
  );
}
