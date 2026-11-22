import { createFileRoute } from "@tanstack/react-router";
import { PendingGate } from "@/components/site-frame";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Angels Auto Repair" },
      { name: "description", content: "What the service request form collects, and what it does not send to analytics." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="c-section">
      <div className="c-wrap c-prose">
        <h1>Privacy</h1>
        <p>
          {SITE.name} collects the name, phone, email, vehicle, and symptom notes you type into a service
          request so the office at {SITE.street} can call you back. This preview stores that request only in
          your browser session. It is not sent to a shop inbox until the owner connects one.
        </p>
        <p>
          Analytics events, when enabled, do not include your name, phone, email, plate, VIN, or the words
          you typed about the car. SMS is not active. This form does not opt you into text messages.
        </p>
        <PendingGate claim="Retention window and legal entity name" action="the owner signs the privacy language" />
      </div>
    </article>
  );
}
