import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SERVICES, SITE } from "@/data/site";
import { track } from "@/lib/track";

type Mode = "resident" | "visitor" | "account";

const MODES: { id: Mode; label: string }[] = [
  { id: "resident", label: "Service request" },
  { id: "visitor", label: "Visitor triage" },
  { id: "account", label: "Account enquiry" },
];

export function RequestForm({
  initialService = "",
  initialMode = "resident",
}: {
  initialService?: string;
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ id: string; name: string; phone: string } | null>(null);

  const serviceDefault = useMemo(
    () => (SERVICES.some((service) => service.slug === initialService) ? initialService : ""),
    [initialService],
  );

  if (done) {
    return (
      <div className="c-ok" role="status">
        <h2 style={{ marginTop: 0 }}>Service request received</h2>
        <p>
          Ref <strong>{done.id}</strong>. Thank you, {done.name}. This is a request, not a confirmed
          drop-off time. The office at {SITE.street} will contact you at {done.phone} during shop hours
          (Mon–Fri 8:30 AM–6:30 PM, Sat 8:30 AM–4:30 PM).
        </p>
        <p>
          If the vehicle is unsafe to drive, call{" "}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="c-form"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "").trim();
        const phone = String(data.get("phone") ?? "").trim();
        const vehicle = String(data.get("vehicle") ?? "").trim();
        const symptom = String(data.get("symptom") ?? "").trim();
        const consent = data.get("consent") === "on";
        const missing =
          !name ||
          !phone ||
          (mode !== "account" && (!vehicle || !symptom)) ||
          (mode === "account" && !String(data.get("business") ?? "").trim()) ||
          (mode === "visitor" && !String(data.get("where") ?? "").trim()) ||
          !consent;
        if (missing) {
          setError("Check the highlighted required fields, or call the shop and the office will take it from there.");
          return;
        }
        setError("");
        const id = `AAR-${Date.now().toString(36).toUpperCase().slice(-6)}`;
        track(mode === "visitor" ? "submit_visitor_triage" : "submit_service_request", {
          request_type: mode,
        });
        setDone({ id, name: name.split(" ")[0] || name, phone });
      }}
    >
      <div className="c-modes" role="group" aria-label="Request type">
        {MODES.map((item) => (
          <button key={item.id} type="button" aria-pressed={mode === item.id} onClick={() => setMode(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      <p className="c-note">
        Submitting this form sends a request to the front office. It does not lock a bay until the shop
        confirms. Hours: Mon–Fri 8:30 AM–6:30 PM, Sat 8:30 AM–4:30 PM.
      </p>
      {error ? (
        <p className="c-error" role="alert">
          {error} Call {SITE.phoneDisplay}.
        </p>
      ) : null}
      <label>
        Full name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label>
        Email <span className="c-note">(optional)</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      {mode === "account" ? (
        <>
          <label>
            Business or property name
            <input name="business" required />
          </label>
          <label>
            About how many vehicles
            <input name="count" inputMode="numeric" />
          </label>
          <label>
            Vehicle types
            <textarea name="types" placeholder="Cars, SUVs, light trucks — what actually fits a two-bay shop." />
          </label>
        </>
      ) : (
        <>
          <label>
            Year, make, and model
            <input name="vehicle" required />
          </label>
          <label>
            Primary service or symptom
            <select name="service" defaultValue={serviceDefault}>
              <option value="">Select a category</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
              <option value="unsure">Not sure yet</option>
            </select>
          </label>
          <label>
            What are you noticing?
            <textarea name="symptom" required />
          </label>
          <label>
            Is the vehicle drivable?
            <select name="drivable" defaultValue="unsure">
              <option value="yes">Yes</option>
              <option value="no">No / unsafe</option>
              <option value="unsure">Unsure</option>
            </select>
          </label>
          {mode === "visitor" ? (
            <>
              <label>
                Where is the vehicle right now?
                <input name="where" required />
              </label>
              <label>
                Departure date
                <input name="depart" type="date" />
              </label>
            </>
          ) : (
            <label>
              Preferred drop-off window <span className="c-note">(request only)</span>
              <select name="window" defaultValue="flexible">
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="flexible">Flexible</option>
              </select>
            </label>
          )}
        </>
      )}
      <label className="c-check">
        <input name="consent" type="checkbox" />
        <span>
          I agree to the <Link to="/privacy">Privacy Policy</Link> and authorize Angels Auto Repair to contact
          me by phone or email about this request. Text messaging is not active yet, so this form does not
          opt you into SMS.
        </span>
      </label>
      <button className="c-btn c-btn--primary" type="submit">
        {mode === "visitor" ? "Start visitor triage" : mode === "account" ? "Submit account enquiry" : "Request Service"}
      </button>
    </form>
  );
}
