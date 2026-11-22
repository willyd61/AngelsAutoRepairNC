import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { serviceBySlug, SITE } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.service.h1} | Angels Auto Repair`
          : "Service | Angels Auto Repair",
      },
      { name: "description", content: loaderData?.service.description ?? "" },
    ],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: loaderData.service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          },
        ]
      : [],
  }),
  component: ServicePage,
  notFoundComponent: () => (
    <main className="c-section">
      <div className="c-wrap">
        <h1>That service is not on this site</h1>
        <Link to="/services">Back to services</Link>
      </div>
    </main>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <header className="c-pagehead c-on-dark">
        <div className="c-wrap">
          <p className="c-eyebrow">Carolina Beach · Pleasure Island</p>
          <h1>{service.h1}</h1>
          <p>{service.promise}</p>
          <div className="c-actions">
            <Link className="c-btn c-btn--on-dark" to="/contact" search={{ service: service.slug }}>
              Request {service.title}
            </Link>
            <a className="c-btn c-btn--line" href={`tel:${SITE.phoneTel}`}>
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </header>
      <section className="c-section">
        <div className="c-wrap c-two">
          <article className="c-panel">
            <h2>Request an inspection soon</h2>
            <ul>
              {service.watch.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="c-alert">
            <h2>Stop driving if</h2>
            <ul>
              {service.stop.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Do not treat this page as a diagnosis. Park safely and call {SITE.phoneDisplay}.
            </p>
          </article>
        </div>
      </section>
      <section className="c-section c-section--mist">
        <div className="c-wrap c-prose">
          <h2>Why the island climate shows up in this job</h2>
          <p>{service.coastal}</p>
          <h2>What we inspect and show you</h2>
          <ul>
            {service.inspect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>What changes the price</h2>
          <p>There is no flat price on this page. After the inspection, the estimate reflects:</p>
          <ul>
            {service.price.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="c-section">
        <div className="c-wrap c-faq">
          <h2>Questions we hear</h2>
          {service.faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="c-btn c-btn--primary" to="/contact" search={{ service: service.slug }}>
              Request this concern
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
