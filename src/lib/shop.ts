export type ServiceIcon =
  | "scan"
  | "key"
  | "brake"
  | "suspension"
  | "zap"
  | "fan"
  | "oil"
  | "battery"
  | "filter"
  | "exhaust"
  | "tire"
  | "gear"
  | "ac"
  | "steer";

export const shop = {
  name: "Angels Auto Repair",
  legal: "Angels Auto Repair",
  city: "Carolina Beach",
  region: "NC",
  street: "306 N Lake Park Blvd",
  zip: "28428",
  phone: "(910) 636-3053",
  phoneHref: "tel:+19106363053",
  hours: "Monday–Friday 8:30 AM–6:30 PM, Saturday 8:30 AM–4:30 PM",
  hoursShort: "Mon–Fri 8:30–6:30, Sat 8:30–4:30",
  closed: "Closed Sunday",
  mapHref: "https://maps.google.com/?q=306+N+Lake+Park+Blvd,+Carolina+Beach,+NC+28428",
} as const;

export const services = [
  { slug: "diagnostics-check-engine", name: "Diagnostics & Check Engine", plain: "Codes and live data before parts.", home: true, icon: "scan" as const },
  { slug: "brakes", name: "Brake Service", plain: "Measured pads, rotors, and fluid.", home: true, icon: "brake" as const },
  { slug: "ac-climate", name: "A/C & Climate", plain: "Pressures and vent temperature first.", home: true, icon: "ac" as const },
  { slug: "electrical-batteries", name: "Batteries & Electrical", plain: "Load test and charging check.", home: true, icon: "battery" as const },
  { slug: "oil-preventive-maintenance", name: "Oil & Preventive Care", plain: "Service plus a photo inspection.", home: true, icon: "oil" as const },
  { slug: "suspension-steering", name: "Suspension & Steering", plain: "The lift shows the joint that matches the feel.", home: true, icon: "steer" as const },
] as const;

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/why-angels", label: "Why Angels" },
  { to: "/visitor-help", label: "Visitor Help" },
  { to: "/contact", label: "Contact" },
] as const;
