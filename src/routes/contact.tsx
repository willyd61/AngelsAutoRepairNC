import { createFileRoute } from "@tanstack/react-router";
import { RequestForm } from "@/components/request-form";
import { SITE } from "@/data/site";
import { track } from "@/lib/track";

type Mode = "resident" | "visitor" | "account";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string; mode?: Mode } => {
    const result: { service?: string; mode?: Mode } = {};
    if (typeof search.service === "string" && search.service) result.service = search.service;
    if (search.mode === "visitor" || search.mode === "account") result.mode = search.mode;
    return result;
  },
  head: () => ({
    meta: [
      { title: "Request Service or Call (910) 636-3053 | Angels Auto Repair" },
      {
        name: "description",
        content:
          "Request service at 306 N Lake Park Blvd. A form is a request, not a confirmed appointment. Mon–Fri 8:30–6:30, Sat 8:30–4:30.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service = "", mode = "resident" } = Route.useSearch();
  return (
    <>
      <header className="c-pagehead c-on-dark">
        <div className="c-wrap">
          <p className="c-eyebrow">Contact</p>
          <h1>Request service, or call the shop.</h1>
          <p>
            {SITE.street}, {SITE.city}, {SITE.state} {SITE.postal}. Mon–Fri 8:30 AM–6:30 PM · Sat 8:30 AM–4:30
            PM · Sun closed.
          </p>
          <div className="c-actions">
            <a className="c-btn c-btn--on-dark" href={`tel:${SITE.phoneTel}`} onClick={() => track("click_to_call", { location: "contact" })}>
              Call {SITE.phoneDisplay}
            </a>
            <a className="c-btn c-btn--line" href={SITE.mapsUrl} onClick={() => track("click_directions", { location: "contact" })}>
              Directions
            </a>
          </div>
        </div>
      </header>
      <section className="c-section">
        <div className="c-wrap c-split">
          <RequestForm initialService={service} initialMode={mode} />
          <aside className="c-panel">
            <h2>Drop-off</h2>
            <p>
              Park at the front of {SITE.street} and check in with the office. An after-hours key drop is not
              listed until the owner confirms the box and the procedure.
            </p>
            <p className="c-note">Text us is off until 10DLC registration and the front-office workflow are confirmed.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
