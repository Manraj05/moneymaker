import React from "react";
import { ClientProfile, FaqItem } from "@/lib/client";

interface JsonLdProps {
  client: ClientProfile;
  faqs?: FaqItem[];
  canonicalUrl?: string;
}

export default function JsonLd({ client, faqs, canonicalUrl }: JsonLdProps) {
  const isRoofing = client.niche === "roofing";
  const businessType = isRoofing ? "RoofingContractor" : "HomeAndConstructionBusiness";

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": businessType,
    name: client.businessName,
    telephone: client.phone,
    description: client.tagline,
    url: canonicalUrl || "https://example.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: client.address.split(",")[0],
      addressLocality: client.primaryCity,
      addressRegion: client.province,
      postalCode: client.postalCode,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.7315",
      longitude: "-79.7624",
    },
    priceRange: "$$",
    areaServed: client.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, Ontario`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: client.rating.toString(),
      reviewCount: client.reviewCount.toString(),
      bestRating: "5.0",
      worstRating: "1.0",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${client.businessName} Services`,
      itemListElement: client.services.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.name,
          description: svc.shortDesc,
        },
      })),
    },
  };

  const activeFaqs = faqs || client.faqs;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: activeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
