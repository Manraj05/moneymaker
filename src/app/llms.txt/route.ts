import { NextResponse } from "next/server";
import { getActiveClient } from "@/lib/client";

export async function GET() {
  const client = getActiveClient();
  const isEpoxy = client.niche === "epoxy";

  const content = `# ${client.businessName}
> ${client.tagline}

## Business Overview
- **Business Name**: ${client.businessName}
- **Niche**: ${client.nicheTitle} (${client.niche})
- **Headquarters Address**: ${client.address}
- **Primary City**: ${client.primaryCity}, ${client.province} (${client.postalCode})
- **Phone Number**: ${client.phone}
- **Google Reputation**: ${client.rating} / 5.0 Stars (${client.reviewCount} Verified Reviews)
- **Certifications**: WSIB Insured, $5M Commercial General Liability, 15-Year Workmanship Warranty

## Service Coverage Areas (Southern Ontario)
${client.serviceAreas.map((city) => `- ${city}, Ontario`).join("\n")}

## 2026 Ontario Contractor Pricing Tiers (CAD)
${client.pricingTiers
  .map(
    (tier) =>
      `### ${tier.name}
- **Price Range**: $${tier.minRate.toFixed(2)} - $${tier.maxRate.toFixed(2)} CAD per square foot
- **Summary**: ${tier.tagline}
- **Includes**: ${tier.features.join(", ")}`
  )
  .join("\n\n")}

## Core Services & Deliverables
${client.services
  .map(
    (svc) =>
      `### ${svc.name}
- **Description**: ${svc.shortDesc}
- **Key Specifications**: ${svc.deliverables.join(", ")}`
  )
  .join("\n\n")}

## Technical Engineering Process
${client.processSteps
  .map(
    (step) =>
      `1. **Step ${step.number}: ${step.title}** (${step.subtitle})\n   ${step.description}`
  )
  .join("\n")}

## Frequently Asked Questions & Answers
${client.faqs
  .map(
    (faq) =>
      `### Q: ${faq.question}\nA: ${faq.answer}`
  )
  .join("\n\n")}

## Contact & Estimates
- **Direct Phone**: ${client.phone}
- **Online Quote Calculator**: Instant 60-second estimates and free laser on-site measure booking.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
