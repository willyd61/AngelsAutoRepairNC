import { createFileRoute } from "@tanstack/react-router";
import { ShopFrame } from "@/components/shop-frame";
import { shop } from "@/lib/shop";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
});

const lines = [
  {
    kicker: "The word that repeats",
    title: "Honest",
    body: "People say the shop tells them what the car needs, and what it does not.",
  },
  {
    kicker: "The other word",
    title: "Fair",
    body: "The price matches the work. That is the reputation worth putting on the homepage.",
  },
  {
    kicker: "The name",
    title: "Angel takes care of people",
    body: "Not a slogan written in an office. It is how customers already describe the owner.",
  },
];

function ReviewsPage() {
  return (
    <ShopFrame>
      <header className="border-b border-mist bg-white px-5 py-12 md:px-12">
        <p className="font-display text-sm font-semibold tracking-widest text-slate">REVIEWS</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-none text-navy md:text-6xl">
          The reputation is already there. It is not on the site yet.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          This page does not invent a star average. When the Google listing is rebuilt, the live
          count replaces these three lines. Until then, the lines are the brief.
        </p>
      </header>
      <ul className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        {lines.map((line) => (
          <li key={line.title} className="border-t-2 border-navy pt-4">
            <p className="font-display text-sm font-semibold tracking-widest text-slate">{line.kicker.toUpperCase()}</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-none text-navy">{line.title}</h2>
            <p className="mt-4 text-ink-soft">{line.body}</p>
          </li>
        ))}
      </ul>
      <section className="border-t border-mist bg-white px-5 py-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-navy">The loop, once a job is done</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            A short text. Thank you, and one link to Google. That is the whole system. No contest,
            no five-dollar coupon for a review. The shop already earns them.
          </p>
          <p className="mt-6 font-display text-xl text-navy">Call the shop at {shop.phone} if something was not right. Fix it in person first.</p>
        </div>
      </section>
    </ShopFrame>
  );
}
