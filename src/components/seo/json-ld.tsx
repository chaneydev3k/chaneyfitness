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
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
    areaServed: siteConfig.areaServed,
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
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.9506,
      longitude: -82.4572,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
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

export function SiteJsonLd() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <FaqSchema />
    </>
  );
}
