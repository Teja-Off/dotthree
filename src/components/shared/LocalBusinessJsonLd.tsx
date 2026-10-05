import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

/** schema.org structured data describing DotThree as a local service business. */
export function LocalBusinessJsonLd() {
  const { contact } = siteConfig;
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: Object.values(siteConfig.socials),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.summary },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-controlled data; "<" is escaped to keep the script tag safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
