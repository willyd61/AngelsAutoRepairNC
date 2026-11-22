import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Angels Auto Repair" },
      { name: "description", content: "Website information is not a remote diagnosis. A form submission is a request, not an appointment." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="c-section">
      <div className="c-wrap c-prose">
        <h1>Terms</h1>
        <p>
          Pages on this site are educational. They are not a remote mechanical diagnosis. A form submission
          to {SITE.name} is a request for the office to contact you. It does not reserve a bay.
        </p>
        <p>
          Written estimates and repair authorization are on the shop work order and are governed by the North
          Carolina Motor Vehicle Repair Act, G.S. Chapter 20, Article 15B. The public name is Angels Auto
          Repair. The legal entity name is not published until the owner confirms it.
        </p>
        <p>
          {SITE.street}, {SITE.city}, {SITE.state} {SITE.postal} · {SITE.phoneDisplay}
        </p>
      </div>
    </article>
  );
}
