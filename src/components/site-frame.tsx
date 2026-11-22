import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { Lockup } from "@/components/mark";
import { SITE } from "@/data/site";
import { shopStatus } from "@/lib/shop-status";
import { track } from "@/lib/track";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#approval", label: "How Approval Works" },
  { href: "/why-angels", label: "Why Angels" },
  { href: "/visitor-help", label: "Visitor Help" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function StatusText() {
  const [label, setLabel] = useState("Mon–Fri 8:30 AM–6:30 PM · Sat 8:30 AM–4:30 PM");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const status = shopStatus();
    setLabel(status.label);
    setOpen(status.open);
  }, []);
  return <span className={open ? "c-badge c-badge--good" : "c-badge c-badge--watch"}>{label}</span>;
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <div className="c-frame">
      <a className="c-skip" href="#main">
        Skip to content
      </a>
      <div className="c-top">
        <aside className="c-utility c-on-dark" aria-label="Shop contact">
          <a className="c-utility__desk" href={SITE.mapsUrl} onClick={() => track("click_directions", { location: "utility_bar" })}>
            {SITE.street}, {SITE.city}
          </a>
          <span className="c-utility__desk">Mon–Fri 8:30a–6:30p · Sat 8:30a–4:30p</span>
          <a href={`tel:${SITE.phoneTel}`} onClick={() => track("click_to_call", { location: "utility_bar" })}>
            <Phone size={16} aria-hidden="true" />
            <span className="c-utility__mobile-label">Call </span>
            {SITE.phoneDisplay}
          </a>
          <span className="c-utility__desk">
            <StatusText />
          </span>
        </aside>
        <header className="c-header c-on-dark">
          <Link to="/" aria-label="Angels Auto Repair home" onClick={() => setOpen(false)}>
            <Lockup />
          </Link>
          <nav className="c-nav" aria-label="Primary">
            {LINKS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="c-header__actions">
            <Link className="c-btn c-btn--primary c-utility__desk" to="/contact" onClick={() => track("cta_request_service_click", { location: "header" })}>
              Request Service
            </Link>
            <a className="c-iconbtn c-menu" href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.phoneDisplay}`}>
              <Phone size={22} />
            </a>
            <button className="c-iconbtn c-menu" type="button" aria-expanded={open} onClick={() => setOpen(true)}>
              <Menu size={24} />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </header>
      </div>
      <dialog ref={dialogRef} className="c-drawer c-on-dark" aria-labelledby={titleId} onClose={() => setOpen(false)}>
        <div className="c-drawer__inner">
          <div className="c-drawer__bar">
            <Lockup stacked tone="white" />
            <button className="c-iconbtn" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <p id={titleId} className="c-note">
            {SITE.street} · {SITE.phoneDisplay}
          </p>
          <StatusText />
          {LINKS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Link className="c-btn c-btn--on-dark" to="/contact" onClick={() => setOpen(false)}>
            Request Service
          </Link>
        </div>
      </dialog>
      <div id="main">{children}</div>
      <footer className="c-footer c-on-dark">
        <div className="c-wrap c-footer-grid">
          <div>
            <Lockup stacked tone="white" />
            <p>
              {SITE.street}
              <br />
              {SITE.city}, {SITE.state} {SITE.postal}
            </p>
            <a href={`tel:${SITE.phoneTel}`} onClick={() => track("click_to_call", { location: "footer" })}>
              {SITE.phoneDisplay}
            </a>
          </div>
          <div>
            <h2>HOURS</h2>
            {SITE.hours.map((row) => (
              <p key={row.days}>
                {row.days}
                <br />
                {row.display}
              </p>
            ))}
          </div>
          <div>
            <h2>VISIT</h2>
            <a href="/services">Services</a>
            <a href="/why-angels">Why Angels</a>
            <a href="/visitor-help">Visitor help</a>
            <a href="/contact">Request service</a>
            <a href="/print">Print kit</a>
            <a href="/kit">Brand kit</a>
          </div>
          <div>
            <h2>POLICIES</h2>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="c-wrap">
          <p className="c-fine">
            Written estimates before repair work, consistent with the North Carolina Motor Vehicle Repair Act. This
            preview is not the production website and is not indexed.
          </p>
        </div>
      </footer>
      <div className="c-dock c-on-dark">
        <a className="c-btn c-btn--line" href={`tel:${SITE.phoneTel}`} onClick={() => track("click_to_call", { location: "mobile_dock" })}>
          Call shop
        </a>
        <Link className="c-btn c-btn--on-dark" to="/contact" onClick={() => track("cta_request_service_click", { location: "mobile_dock" })}>
          Request Service
        </Link>
      </div>
    </div>
  );
}

export function PendingGate({ claim, action }: { claim: string; action: string }) {
  return (
    <aside className="c-gate" role="note">
      <p className="c-gate__kicker">Pending owner verification</p>
      <p>
        <strong>{claim}</strong> — Do not publish live until {action} is confirmed.
      </p>
    </aside>
  );
}
