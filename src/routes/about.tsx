import { createFileRoute } from "@tanstack/react-router";
import { ShopFrame } from "@/components/shop-frame";
import { ReviewNote } from "@/components/review";
import { shop } from "@/lib/shop";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <ShopFrame>
      <header className="grid bg-white lg:grid-cols-2">
        <div className="px-5 py-12 md:px-12 md:py-16">
          <p className="font-display text-sm font-semibold tracking-widest text-slate">ABOUT</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-none text-navy md:text-6xl">
            Angel is a name. The lift is the logo.
          </h1>
          <div className="mt-6 max-w-xl space-y-4 text-lg text-ink-soft">
            <p>
              {shop.legal} works out of {shop.street}, {shop.city}. The phone on the door is{" "}
              {shop.phone}. Hours are {shop.hoursShort.toLowerCase()}, and the shop is closed on
              the weekend.
            </p>
            <p>
              The reputation people already repeat is simple: honest, fair, and Angel takes care
              of the person as well as the car. That is the voice. Not a chain script, and not a
              church.
            </p>
            <p>
              Salt, sand, and a road that fills up in the summer are the local conditions. The
              work is still brakes, suspension, electrical, air conditioning, diagnostics, and the
              oil change that gets a local in the door on a weekday.
            </p>
          </div>
        </div>
        <figure className="min-h-80">
          <img
            src="/shop/building.jpg"
            alt="The Angels Auto Repair building on North Lake Park Boulevard"
            className="h-full min-h-80 w-full object-cover"
          />
          <ReviewNote>
            Enhanced from the current blue front. Clutter and the old plural sign were cleaned.
            The mural next door stayed, because it is real.
          </ReviewNote>
        </figure>
      </header>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <article>
          <h2 className="font-display text-2xl font-semibold text-navy">Who it is for</h2>
          <p className="mt-3 text-ink-soft">
            People who live on the island after the season drops, and visitors whose car quit on
            Lake Park. Same standard for both. Locals get the weekday habit. Visitors get a
            straight answer and a car that will leave town.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl font-semibold text-navy">What we will not fake</h2>
          <p className="mt-3 text-ink-soft">
            No star count on this page. The reviews exist, and they are not sitting on a site that
            looks like the shop yet. A live Google number goes up after the listing is rebuilt.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl font-semibold text-navy">How a job starts</h2>
          <p className="mt-3 text-ink-soft">
            You describe what it is doing. The shop looks. You get the finding and the price
            before parts are ordered. If you say no, that is the end of it.
          </p>
        </article>
      </section>
    </ShopFrame>
  );
}
