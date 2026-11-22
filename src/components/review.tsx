import { Link, useRouterState } from "@tanstack/react-router";
import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ReviewValue = { open: boolean; setOpen: (open: boolean) => void };

const ReviewContext = createContext<ReviewValue | null>(null);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  return <ReviewContext.Provider value={{ open, setOpen }}>{children}</ReviewContext.Provider>;
}

export function useReview() {
  const value = useContext(ReviewContext);
  if (!value) throw new Error("ReviewProvider missing");
  return value;
}

export function Presenter() {
  const { open, setOpen } = useReview();
  const path = useRouterState({ select: (state) => state.location.pathname });
  const onKit = path === "/kit";

  return (
    <div className="border-b border-navy-deep bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <p className="font-display text-sm font-semibold tracking-widest text-mist">
          PHASE 1 · DRAFT 03 LIFT BAY
        </p>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={cn(
              "px-3 py-1.5 font-display text-sm font-semibold tracking-wide",
              onKit ? "text-mist" : "bg-white text-navy",
            )}
          >
            Quicklook A
          </Link>
          <Link
            to="/kit"
            className={cn(
              "px-3 py-1.5 font-display text-sm font-semibold tracking-wide",
              onKit ? "bg-white text-navy" : "text-mist",
            )}
          >
            Branding kit
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="px-2 py-1.5 font-display text-sm tracking-wide text-mist"
            aria-expanded={open}
          >
            {open ? "Hide notes" : "Show notes"}
          </button>
        </div>
      </div>
      {open ? (
        <p className="mx-auto max-w-6xl px-4 pb-3 text-sm text-mist">
          Review copy for Namy and Angel. Nothing here is live. The mark is the lift bay.
          Spelling is Angel, not Angels. Notes on the photos stay visible until you hide them.
        </p>
      ) : null}
    </div>
  );
}

export function ReviewNote({ children }: { children: ReactNode }) {
  const { open } = useReview();
  if (!open) return null;
  return (
    <p className="bg-navy px-3 py-2 text-sm leading-snug text-white">{children}</p>
  );
}
