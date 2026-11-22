export const SITE = {
  name: "Angels Auto Repair",
  tagline: "Precision work. Trusted care.",
  promise: "The island shop that shows you the work before you approve it.",
  street: "306 N Lake Park Blvd",
  city: "Carolina Beach",
  state: "NC",
  postal: "28428",
  phoneDisplay: "(910) 636-3053",
  phoneTel: "+19106363053",
  smsEnabled: false,
  url: "https://angels-auto.cbgoc-cloud.top/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=306+N+Lake+Park+Blvd,+Carolina+Beach,+NC+28428",
  hours: [
    { days: "Monday–Friday", display: "8:30 AM–6:30 PM" },
    { days: "Saturday", display: "8:30 AM–4:30 PM" },
    { days: "Sunday", display: "Closed" },
  ],
} as const;

export const NAV = [
  { to: "/services", label: "Services" },
  { to: "/why-angels", label: "Why Angels" },
  { to: "/visitor-help", label: "Visitor Help" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  symptoms: string[];
  h1: string;
  promise: string;
  description: string;
  watch: string[];
  stop: string[];
  coastal: string;
  inspect: string[];
  price: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "diagnostics-check-engine",
    title: "Diagnostics & Check Engine",
    short: "Scan data, live readings, and a written path before parts are replaced.",
    symptoms: ["Light on or flashing", "Rough idle", "Loss of power"],
    h1: "Check Engine Light & Auto Diagnostics in Carolina Beach, NC",
    promise: "We read the fault, confirm it with live data, and show you what the car is actually doing before any part is sold.",
    description: "Check engine diagnostics at Angels Auto Repair in Carolina Beach. Photos, live data, and a written estimate before repair.",
    watch: ["Steady amber check-engine light", "Occasional rough idle", "A code that returned after a previous repair"],
    stop: ["Flashing check-engine light", "Temperature gauge in the red", "Strong fuel smell or a misfire that shakes the car"],
    coastal: "Short island trips and humid salt air leave coils and connectors looking fine until a hot afternoon. A code is a starting point, not a parts list.",
    inspect: ["Stored and pending codes with freeze-frame", "Related live data", "A note of what is confirmed versus what still needs a test"],
    price: ["How many systems the symptom touches", "Whether a part was already replaced without a test", "Vehicle-specific access and programming"],
    faqs: [
      { q: "Will you clear the light and send me on my way?", a: "No. Clearing a light without a cause hides the evidence. We document what we found." },
      { q: "Is a code the same as a diagnosis?", a: "A code is where we look. The diagnosis is the test that proves the fault." },
    ],
  },
  {
    slug: "brakes",
    title: "Brake Service",
    short: "Pad thickness, rotor face, slide pins, and fluid — photographed before you approve.",
    symptoms: ["Squeal or grind", "Soft pedal", "Pulls while stopping"],
    h1: "Brake Inspection & Repair in Carolina Beach, NC",
    promise: "We measure and photograph pads, rotors, calipers, and fluid so you know what matters now and what can wait.",
    description: "Brake inspection and repair in Carolina Beach. Measured pads and rotors, salt-air hardware checks, and a written estimate before work begins.",
    watch: ["High-pitched squeal while slowing", "Steering wheel shudder on a highway stop", "Surface rust after the car sat near the beach"],
    stop: ["Grinding metal-on-metal", "Pedal sinks or feels spongy", "Red BRAKE light stays on, or the car pulls hard while stopping"],
    coastal: "Salt air pits rotor hats and seizes slide pins. Humidity pulls moisture into brake fluid. Those are reasons to measure, not to replace everything on sight.",
    inspect: ["Pad thickness and rotor face, photographed", "Slide pins and hardware movement", "Fluid condition and any leak"],
    price: ["Pads only, versus rotors and seized hardware", "Parts availability for the vehicle", "Whether one axle is worn and the other is not"],
    faqs: [
      { q: "Do you quote a flat brake price online?", a: "No. You get a written estimate after we inspect the car." },
      { q: "Is surface rust on the rotors an emergency?", a: "Light rust after the car sits is common. Deep pitting, a pulsation, or metal-on-metal is a different finding, and we show you which one it is." },
    ],
  },
  {
    slug: "ac-climate",
    title: "A/C & Climate Systems",
    short: "Vent temperature and pressures, not a can of refrigerant as a diagnosis.",
    symptoms: ["Warm air", "Weak airflow", "Cycles on and off"],
    h1: "Auto A/C & Climate Repair in Carolina Beach, NC",
    promise: "We measure vent temperature and system pressures before a recharge or a repair.",
    description: "Auto air conditioning repair in Carolina Beach. Pressure tests and leak checks before refrigerant or parts are sold.",
    watch: ["Cool in the morning and warm by afternoon", "Weak airflow on the highest fan"],
    stop: ["The engine overheats when the A/C is on"],
    coastal: "Summer traffic and hot lots load the condenser. A low charge can be a leak, not a maintenance item.",
    inspect: ["Vent temperature", "High and low side pressures", "Visible leak evidence"],
    price: ["Refrigerant type and how much is missing", "Whether a leak, condenser, or compressor is involved"],
    faqs: [{ q: "Can you just top off the refrigerant?", a: "Only after a test shows the system is low and not actively leaking." }],
  },
  {
    slug: "electrical-batteries",
    title: "Batteries & Electrical",
    short: "Load test, charging voltage, and connections — especially after a car has sat.",
    symptoms: ["Slow crank", "Battery light", "Random warning lights"],
    h1: "Car Battery & Electrical Diagnostics in Carolina Beach, NC",
    promise: "A battery decision is based on a load test and a charging check, not the date sticker alone.",
    description: "Battery and electrical diagnostics in Carolina Beach for slow crank, warning lights, and seasonal vehicles.",
    watch: ["Slow crank after the car sat", "A flickering battery light", "Visible corrosion on a terminal"],
    stop: ["The car will not restart in traffic", "You smell burning insulation"],
    coastal: "Seasonal cars sit. Heat and short trips finish a marginal battery. A corroded cable can look like a bad battery.",
    inspect: ["Load or conductance result", "Charging voltage", "Terminal and ground condition"],
    price: ["Battery group", "Whether cables, a starter, or an alternator is part of the failure"],
    faqs: [{ q: "The car sat all month. Is the battery just drained?", a: "It might be. We test it, and we check that the charging system can keep the next battery alive." }],
  },
  {
    slug: "oil-preventive-maintenance",
    title: "Oil & Preventive Care",
    short: "Oil service plus the checks salt air and short trips actually wear.",
    symptoms: ["Service due", "Oil smell", "Seasonal checkup"],
    h1: "Oil Change & Preventive Maintenance in Carolina Beach, NC",
    promise: "The oil service is the visit. Inspection photos are how you decide what else, if anything, is worth doing.",
    description: "Oil changes and preventive maintenance in Carolina Beach, with a photo inspection before any extra work.",
    watch: ["The interval is due", "A light tick on a cold start", "The car is about to sit for weeks"],
    stop: ["Oil pressure light on while the engine runs", "Fresh oil pouring under the car"],
    coastal: "Short trips do not always boil moisture out of the oil. A car that sits needs the same inspection as a daily driver.",
    inspect: ["Oil level and leaks", "Filter and drain plug", "Photo notes for anything else we see"],
    price: ["The oil specification", "Filter and plug hardware", "Any extra work you approve — never added silently"],
    faqs: [{ q: "Will other work be added during an oil change?", a: "Only after you see the finding and approve a written estimate." }],
  },
  {
    slug: "suspension-steering",
    title: "Suspension & Steering",
    short: "Clunks and wander, shown on the lift instead of guessed from the seat.",
    symptoms: ["Clunk over bumps", "Wander", "Uneven tire wear"],
    h1: "Suspension & Steering Repair in Carolina Beach, NC",
    promise: "We put the car on the lift and show you the joint, bushing, or leak that matches what you feel.",
    description: "Suspension and steering repair in Carolina Beach. Lift inspection with photos before parts are replaced.",
    watch: ["A clunk over speed bumps", "Wander on US-421", "A tire wearing on one edge"],
    stop: ["Large free play in the steering wheel", "A wheel looks out of position after a curb"],
    coastal: "Salt and sand work into boots and bushings. A torn boot is a finding, not automatically a full front-end rebuild.",
    inspect: ["Play at the joints on the lift", "Boot and leak condition", "How the tire wear matches the part"],
    price: ["Which corner is worn", "Whether an alignment is required after the repair"],
    faqs: [{ q: "Do you align the car in the building?", a: "If the repair needs an alignment, the estimate says so. We do not imply an in-house rack unless that is confirmed for your visit." }],
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export const APPROVAL_STEPS = [
  { n: "01", title: "Answer & Qualify", body: "We take the symptom, the vehicle, and whether it is safe to drive to 306 N Lake Park Blvd." },
  { n: "02", title: "Show the Condition", body: "The inspection produces photos or readings from your car, not a generic list." },
  { n: "03", title: "Explain the Options", body: "Findings are sorted into Immediate, Recommended Soon, and Monitor." },
  { n: "04", title: "Written Estimate & Your Approval", body: "Nothing is repaired until you approve the written estimate." },
  { n: "05", title: "Update Through Completion", body: "You hear about parts and progress, then we walk the invoice with you." },
] as const;

export const DVI_SAMPLES = [
  { tier: "immediate" as const, label: "Immediate concern", title: "Rear pad worn to the backing plate", note: "Inner pad is scoring the rotor. This is a stop-driving finding if you hear grinding. Sample is redacted — no plate, VIN, or name." },
  { tier: "recommended" as const, label: "Recommended soon", title: "Caliper slide pin starting to stick", note: "The pin moves, but salt crust is building. Service now keeps the next pad even. Not an emergency by itself." },
  { tier: "monitor" as const, label: "Monitor / good", title: "Front pads still in spec", note: "Thickness is even and the rotor face is clean. No action now. The photo is a baseline for the next visit." },
] as const;
