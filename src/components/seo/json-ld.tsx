import { faqs, programs, siteConfig } from "@/lib/site";

/**
 * Renders a single JSON-LD <script> block. Using a plain script tag
 * (not next/script) keeps structured data in the server-rendered HTML.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Data is fully controlled by us (no user input), so this is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/opengraph-image`,
    slogan: siteConfig.tagline,
    founder: { "@id": `${siteConfig.url}/#coach` },
    sameAs: [siteConfig.reviewsUrl],
    areaServed: siteConfig.areaServed,
  };
  return <JsonLd data={data} />;
}

/** The coach as a distinct entity — supports E-E-A-T / "who's behind this". */
export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#coach`,
    name: siteConfig.coach.name,
    jobTitle: siteConfig.coach.jobTitle,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    hasCredential: siteConfig.coach.credential,
    url: siteConfig.url,
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "$$",
    founder: { "@id": `${siteConfig.url}/#coach` },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: "US",
    },
    geo: {
      // Approximate St. Petersburg, FL centroid (service-area business).
      "@type": "GeoCoordinates",
      latitude: 27.7676,
      longitude: -82.6403,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [siteConfig.reviewsUrl],
    makesOffer: programs.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: p.description,
      },
    })),
  };
  return <JsonLd data={data} />;
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
  return <JsonLd data={data} />;
}

export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
}

/** Entity schema that belongs on every route (rendered in the root layout). */
export function SiteJsonLd() {
  return (
    <>
      <OrganizationSchema />
      <PersonSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
    </>
  );
}
