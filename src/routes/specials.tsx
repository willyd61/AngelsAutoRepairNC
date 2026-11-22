import { createFileRoute, Link } from "@tanstack/react-router";
import { ShopFrame } from "@/components/shop-frame";

export const Route = createFileRoute("/specials")({
  component: SpecialsPage,
});

const board = [
  {
    season: "Now · off season",
    title: "Weekday oil, for people who live here",
    body: "Tourist traffic drops after October. Locals still need oil and a filter. This is the offer that should be on the door, the site, and Google at the same time — one line, no pile of coupons.",
    current: true,
  },
  {
    season: "Now · first cold",
    title: "Battery test before it strands you",
    body: "A battery that survived summer is not a battery that will start in January, or at the end of a drive off the island. Test it. Replace it only if it fails.",
    current: false,
  },
  {
    season: "Before beach weekends",
    title: "Brakes, before the road fills up",
    body: "Hold this for the next surge. Salt and short trips eat pads. The offer is an inspection and a straight quote, not a scare.",
    current: false,
  },
  {
    season: "Before the heat",
    title: "Air conditioning, before it quits",
    body: "Park this until spring. The island does not forgive a warm vent in July. Check it in May, not on a Saturday in the rental line.",
    current: false,
  },
];

function SpecialsPage() {
  return (
    <ShopFrame>
      <header className="border-b border-mist bg-white px-5 py-12 md:px-12">
        <p className="font-display text-sm font-semibold tracking-widest text-slate">SPECIALS</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-none text-navy md:text-6xl">
          One offer. The season you are actually in.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          No prices on this board. A number goes up only after Angel sets it. Printing a special
          the shop did not approve is how trust gets spent.
        </p>
      </header>
      <ul className="mx-auto grid max-w-6xl gap-px bg-mist px-0 py-px md:grid-cols-2">
        {board.map((item) => (
          <li key={item.title} className="bg-paper p-6 md:p-8">
            <p className="font-display text-sm font-semibold tracking-widest text-slate">
              {item.current ? "ON THE BAR" : item.season.toUpperCase()}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy">{item.title}</h2>
            <p className="mt-3 text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ul>
      <p className="mx-auto max-w-6xl px-5 py-8 text-ink-soft md:px-8">
        Change the live offer in one place later, and put that same sentence on Google and
        Facebook. Until then, this page is the plan.{" "}
        <Link to="/contact" className="text-navy">
          Ask the shop what this week’s work is.
        </Link>
      </p>
    </ShopFrame>
  );
}
