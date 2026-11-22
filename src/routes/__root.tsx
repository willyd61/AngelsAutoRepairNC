import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFrame } from "@/components/site-frame";
import { SITE } from "@/data/site";
import appCss from "../styles.css?url";

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  telephone: SITE.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.postal,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "16:30",
    },
  ],
  areaServed: ["Carolina Beach", "Kure Beach", "Pleasure Island"],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Angels Auto Repair | Carolina Beach, NC" },
      { name: "description", content: "The island shop that shows you the work before you approve it. 306 N Lake Park Blvd, Carolina Beach." },
      { name: "theme-color", content: "#0B2347" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Condensed:wght@700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteFrame>
            <Outlet />
          </SiteFrame>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
