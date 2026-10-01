/**
 * Production-ready Schema.org JSON-LD Structured Data Generators
 * For Right Lane Handyman Services LLC
 * https://www.rightlanehandymanservicellc.com/
 */

export const BUSINESS_INFO = {
  name: "Right Lane Handyman Services LLC",
  legalName: "Right Lane Handyman Services, LLC",
  url: "https://www.rightlanehandymanservicellc.com/",
  domain: "https://www.rightlanehandymanservicellc.com",
  phone: "(727) 642-0201",
  telephone: "+1-727-642-0201",
  email: "contact@rightlanehandymanservicellc.com",
  owner: "Ronnie Lane",
  streetAddress: "Clearwater Service Hub",
  addressLocality: "Clearwater",
  addressRegion: "FL",
  postalCode: "33756",
  addressCountry: "US",
  latitude: 27.9659,
  longitude: -82.8001,
  priceRange: "$$",
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Tampa", sameAs: "https://en.wikipedia.org/wiki/Tampa,_Florida" },
    { "@type": "AdministrativeArea", name: "Hillsborough County", sameAs: "https://en.wikipedia.org/wiki/Hillsborough_County,_Florida" },
    { "@type": "AdministrativeArea", name: "Pinellas County", sameAs: "https://en.wikipedia.org/wiki/Pinellas_County,_Florida" },
    { "@type": "AdministrativeArea", name: "Tampa Bay Area", sameAs: "https://en.wikipedia.org/wiki/Tampa_Bay_area" },
    { "@type": "City", name: "Clearwater" },
    { "@type": "City", name: "St. Petersburg" },
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Riverview" },
    { "@type": "City", name: "Largo" },
    { "@type": "City", name: "Palm Harbor" },
    { "@type": "City", name: "Tarpon Springs" },
    { "@type": "City", name: "Dunedin" },
    { "@type": "City", name: "Pinellas Park" },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://youtube.com",
  ],
};

/**
 * Generates LocalBusiness & Handyman Organization JSON-LD Schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Handyman"],
    "@id": `${BUSINESS_INFO.domain}/#business`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    image: `${BUSINESS_INFO.domain}/assets/wel-img.png`,
    logo: `${BUSINESS_INFO.domain}/assets/logo.png`,
    description:
      "Right Lane Handyman Services LLC provides top-rated handyman services, residential home repair, property maintenance, demolition, pressure washing, junk removal, and post-construction cleaning throughout Tampa, Hillsborough County, Pinellas County, and the Tampa Bay Area.",
    founder: {
      "@type": "Person",
      name: BUSINESS_INFO.owner,
      jobTitle: "Founder & Master Craftsman",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.streetAddress,
      addressLocality: BUSINESS_INFO.addressLocality,
      addressRegion: BUSINESS_INFO.addressRegion,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: BUSINESS_INFO.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.latitude,
      longitude: BUSINESS_INFO.longitude,
    },
    areaServed: BUSINESS_INFO.areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    sameAs: BUSINESS_INFO.sameAs,
  };
}

/**
 * Generates WebSite Schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.domain}/#website`,
    url: BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    description: "Clearwater & Tampa's Premier Licensed, Insured & Bonded Handyman and Home Repair Specialist.",
    publisher: {
      "@id": `${BUSINESS_INFO.domain}/#business`,
    },
  };
}

/**
 * Generates Service Schema for a specific service page
 */
export function getServiceSchema({
  name,
  description,
  serviceType,
  url,
  image,
  areaServedName,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  image?: string;
  areaServedName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS_INFO.domain}${url}#service`,
    name,
    description,
    serviceType,
    url: `${BUSINESS_INFO.domain}${url}`,
    image: image ? `${BUSINESS_INFO.domain}${image}` : `${BUSINESS_INFO.domain}/assets/wel-img.png`,
    provider: {
      "@type": ["LocalBusiness", "Handyman"],
      "@id": `${BUSINESS_INFO.domain}/#business`,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      url: BUSINESS_INFO.url,
    },
    areaServed: areaServedName
      ? {
          "@type": "AdministrativeArea",
          name: areaServedName,
        }
      : BUSINESS_INFO.areaServed,
  };
}

/**
 * Generates FAQPage Schema
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
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
}

/**
 * Generates BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BUSINESS_INFO.domain}${item.url}`,
    })),
  };
}
