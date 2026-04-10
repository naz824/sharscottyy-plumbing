import type { Metadata } from "next";
import { BUSINESS } from "./constants";

const baseUrl = "https://sharscottyyplumbing.com"; /* TODO: Update with actual deployed URL */

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${BUSINESS.name} — Miami Plumber`;
  const url = `${baseUrl}${path}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`; /* TODO: Create OG image */

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    image: `${baseUrl}/images/carlos-hero.jpg`, /* TODO: Real photo */
    telephone: BUSINESS.phone,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.reviews.averageRating,
      reviewCount: BUSINESS.reviews.total,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Miami",
      sameAs: "https://en.wikipedia.org/wiki/Miami",
    },
    knowsLanguage: ["English", "Spanish"],
    paymentAccepted: "Cash, Check, Zelle",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Repair & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toilet Repair & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodel Plumbing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Emergency Plumbing" } },
      ],
    },
  };
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
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

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}
