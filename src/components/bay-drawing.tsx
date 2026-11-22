export function BayDrawing() {
  return (
    <figure className="c-bay">
      <svg viewBox="0 0 360 240" role="img" aria-label="Elevation of a car raised on a two-post lift">
        <rect width="360" height="240" fill="var(--color-harbor)" />
        <rect x="16" y="16" width="328" height="208" fill="none" stroke="var(--color-slate)" strokeWidth="1" />
        <rect x="40" y="150" width="14" height="62" fill="var(--color-mist)" />
        <rect x="306" y="150" width="14" height="62" fill="var(--color-mist)" />
        <rect x="32" y="206" width="30" height="8" fill="var(--color-slate)" />
        <rect x="298" y="206" width="30" height="8" fill="var(--color-slate)" />
        <rect x="54" y="146" width="36" height="8" fill="var(--color-paper)" />
        <rect x="270" y="146" width="36" height="8" fill="var(--color-paper)" />
        <path d="M70 146h28l16-28h120l22 28h40v26H70z" fill="var(--color-mist)" />
        <path d="M128 142l10-18h64l12 18z" fill="var(--color-navy)" />
        <circle cx="168" cy="176" r="7" fill="var(--color-slate)" />
        <rect x="160" y="184" width="16" height="22" fill="var(--color-slate)" />
        <path d="M176 188l18-22" stroke="var(--color-paper)" strokeWidth="3" />
        <text x="28" y="36" fill="var(--color-mist)" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="1">
          BAY 1 · TWO-POST LIFT
        </text>
      </svg>
      <figcaption>Shop drawing of the lift bay. Photography at 306 N Lake Park Blvd is pending the owner session.</figcaption>
    </figure>
  );
}
