import type { ServiceIcon } from "@/lib/shop";

export function ServiceGlyph({ name }: { name: ServiceIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "scan":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="12" />
          <path d="M8 19h8M9 9h6M9 12h4" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="8" cy="12" r="3.2" />
          <path d="M11 12h9l-2 2M17 12v2" />
        </svg>
      );
    case "brake":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
        </svg>
      );
    case "suspension":
      return (
        <svg {...common}>
          <path d="M8 4h8M12 4v4M7 8h10l-2 8H9zM8 20h8" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="M13 3 L6 13 h6 l-1 8 7-11 h-6 z" />
        </svg>
      );
    case "fan":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <path d="M12 10c2-4 6-4 6 0M14 12c4 2 4 6 0 6M12 14c-2 4-6 4-6 0M10 12c-4-2-4-6 0-6" />
        </svg>
      );
    case "oil":
      return (
        <svg {...common}>
          <path d="M12 3c2 3 5 6 5 9a5 5 0 0 1-10 0c0-3 3-6 5-9z" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="11" />
          <path d="M10 7V5h4v2M7 12h4" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M5 6h14l-2 5H7zM8 11v7h8v-7" />
        </svg>
      );
    case "exhaust":
      return (
        <svg {...common}>
          <path d="M3 14h8l2-4h6v6h-4" />
          <circle cx="7" cy="17" r="2" />
        </svg>
      );
    case "tire":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </svg>
      );
    default:
      return null;
  }
}
