import { Link, createFileRoute } from "@tanstack/react-router";
import { APPROVAL_STEPS } from "@/data/site";
import { PendingGate } from "@/components/site-frame";

export const Route = createFileRoute("/why-angels")({
  head: () => ({
    meta: [
      { title: "Why Angels Auto Repair | Photo Proof Before You Approve Any Work" },
      {
        name: "description",
        content:
          "Documented inspections, written estimates, and a four-person shop at 306 N Lake Park Blvd. No invented staff biographies.",
      },
    ],
  }),
  component: WhyAngels,
});

function WhyAngels() {
  return (
    <>
      <header className="c-pagehead c-on-dark">
        <div className="c-wrap">
          <p className="c-eyebrow">Why Angels</p>
          <h1>A standard of proof at 306 N Lake Park Blvd.</h1>
          <p>
            This building has seen other repair shops. Angels Auto Repair is an independent operation: we
            answer the phone, photograph what we find, write the estimate, and do not perform work you have
            not approved.
          </p>
        </div>
      </header>
      <section className="c-section" id="approval">
        <div className="c-wrap">
          <h2>The approval standard</h2>
          <ol className="c-steps">
            {APPROVAL_STEPS.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <strong>{step.title}</strong>
                {step.body}
              </li>
            ))}
          </ol>
          <p className="c-note">
            Written estimates follow the North Carolina Motor Vehicle Repair Act. Warranty months and miles
            are not stated here until the owner signs the actual terms.
          </p>
        </div>
      </section>
      <section className="c-section c-section--mist">
        <div className="c-wrap c-two">
          <article className="c-panel">
            <h2>Two bays. Four people.</h2>
            <p>
              Two technicians in the bays and two in the office, including a supervisor. That is the whole
              shop. Requests are confirmed against that capacity. We do not sell online time slots.
            </p>
          </article>
          <article className="c-panel">
            <h2>In the building, and referred out</h2>
            <p>
              Diagnostics, brakes, A/C, batteries and electrical, oil and preventive care, suspension and
              steering. Major collision frames and full paint booths go to a specialist. We will say so
              instead of guessing.
            </p>
          </article>
        </div>
      </section>
      <section className="c-section">
        <div className="c-wrap" style={{ display: "grid", gap: "1rem" }}>
          <PendingGate
            claim="Owner and team biographies"
            action="Nami / Angel and the supervisor approve factual bios and portraits"
          />
          <PendingGate
            claim="ASE or manufacturer credentials"
            action="current certificates are on file"
          />
          <Link className="c-btn c-btn--primary" to="/contact">
            Request Service
          </Link>
        </div>
      </section>
    </>
  );
}
