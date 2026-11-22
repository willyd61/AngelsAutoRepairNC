import { useState } from "react";
import { DVI_SAMPLES } from "@/data/site";
import { track } from "@/lib/track";

export function DviPanel() {
  const [tier, setTier] = useState<(typeof DVI_SAMPLES)[number]["tier"]>("immediate");
  const sample = DVI_SAMPLES.find((item) => item.tier === tier) ?? DVI_SAMPLES[0];
  return (
    <div>
      <div className="c-tabs" role="tablist" aria-label="Inspection tiers">
        {DVI_SAMPLES.map((item) => (
          <button
            key={item.tier}
            type="button"
            role="tab"
            data-tier={item.tier}
            aria-selected={tier === item.tier}
            onClick={() => {
              setTier(item.tier);
              track("dvi_sample_tab_click", { tier: item.tier });
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <article className="c-dvi-card" data-tier={sample.tier} role="tabpanel">
        <p className={`c-badge c-badge--${sample.tier === "immediate" ? "urgent" : sample.tier === "recommended" ? "watch" : "good"}`}>
          {sample.label}
        </p>
        <h3 style={{ marginBottom: "0.35rem" }}>{sample.title}</h3>
        <p>{sample.note}</p>
        <RotorSketch tier={sample.tier} />
      </article>
    </div>
  );
}

function RotorSketch({ tier }: { tier: string }) {
  const stroke = tier === "immediate" ? "var(--color-urgent)" : tier === "recommended" ? "var(--color-watch)" : "var(--color-good)";
  return (
    <svg viewBox="0 0 280 120" role="img" aria-label="Diagram of a brake rotor with a callout, not a customer photo">
      <rect width="280" height="120" fill="var(--color-mist)" />
      <circle cx="78" cy="60" r="36" fill="none" stroke="var(--color-navy)" strokeWidth="8" />
      <circle cx="78" cy="60" r="14" fill="none" stroke="var(--color-navy)" strokeWidth="4" />
      <line x1="120" y1="40" x2="168" y2="28" stroke={stroke} strokeWidth="2" />
      <text x="172" y="32" fill="var(--color-ink)" fontSize="12" fontFamily="Inter, sans-serif">
        1 · Measured face
      </text>
      <text x="172" y="72" fill="var(--color-muted)" fontSize="12" fontFamily="Inter, sans-serif">
        Sample diagram. Real tablet photos
      </text>
      <text x="172" y="90" fill="var(--color-muted)" fontSize="12" fontFamily="Inter, sans-serif">
        pending the owner session.
      </text>
    </svg>
  );
}
