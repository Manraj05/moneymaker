import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  CheckCircle2,
  ThermometerSnowflake,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import QuoteCalculator from "@/components/QuoteCalculator";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  getActiveClient,
  getAllLocationCombinations,
  getCityDisplayName,
  getServiceBySlug,
  FaqItem,
} from "@/lib/client";
import { slugify } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    city: string;
    service: string;
  }>;
};

export function generateStaticParams() {
  const client = getActiveClient();
  return getAllLocationCombinations(client);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const client = getActiveClient();
  const cityName = getCityDisplayName(citySlug, client.serviceAreas);
  const service = getServiceBySlug(client, serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const title = `${service.name} in ${cityName}, ON | ${client.businessName}`;
  const description = `Looking for ${service.name.toLowerCase()} in ${cityName}, Ontario? ${client.businessName} provides commercial-grade diamond prep, 15-year warranty, and instant pricing. Call ${client.phone}.`;
  const canonicalUrl = `https://example.com/locations/${citySlug}/${serviceSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default async function LocationServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const client = getActiveClient();
  const cityName = getCityDisplayName(citySlug, client.serviceAreas);
  const service = getServiceBySlug(client, serviceSlug);

  if (!service) {
    notFound();
  }

  const isEpoxy = client.niche === "epoxy";
  const canonicalUrl = `https://example.com/locations/${citySlug}/${serviceSlug}`;

  // Localized 5-Question FAQ Matrix
  const localizedFaqs: FaqItem[] = [
    {
      question: `How quickly can ${client.businessName} complete ${service.name} in ${cityName}?`,
      answer: `Our dedicated ${cityName} mobile crew typically completes residential projects within 1 to 2 business days. Laser on-site estimates are scheduled within 24 hours of inquiry.`,
    },
    {
      question: `What is the estimated cost per square foot for ${service.name} in ${cityName}, ON?`,
      answer: `In Ontario for 2026, professional ${service.name.toLowerCase()} ranges from $${client.pricingTiers[0].minRate.toFixed(2)} to $${client.pricingTiers[client.pricingTiers.length - 1].maxRate.toFixed(2)} CAD per square foot depending on slab condition, CSP 3 mechanical prep, and finish tier. Use our instant calculator on this page for an exact ballpark.`,
    },
    {
      question: `How does Ontario winter weather in ${cityName} affect ${isEpoxy ? "epoxy floor coatings" : "roofing systems"}?`,
      answer: `${cityName} experiences extreme freeze-thaw cycles between November and April. Our materials are engineered with high thermal flexibility to absorb thermal shock, road salt brine, and winter expansion without cracking or lifting.`,
    },
    {
      question: `Is ${client.businessName} fully insured for residential and commercial jobs in ${cityName}?`,
      answer: `Yes, we carry active Workplace Safety and Insurance Board (WSIB) clearance and $2,000,000 comprehensive commercial liability insurance on every job site in ${cityName} and the GTA.`,
    },
    {
      question: `What warranty coverage is included with ${service.name} in ${cityName}?`,
      answer: `Every full installation in ${cityName} is protected by our written 15-year delamination and adhesion guarantee, backed directly by ${client.businessName}.`,
    },
  ];

  return (
    <main className="min-h-screen bg-obsidian text-slate-100">
      {/* Schema Injection */}
      <JsonLd client={client} faqs={localizedFaqs} canonicalUrl={canonicalUrl} />

      {/* Conversion Navigation */}
      <Navbar client={client} />

      {/* Localized Breadcrumb Strip */}
      <div className="border-b border-white/5 bg-slate-950/70 px-4 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <Link href="/#service-areas" className="hover:text-white transition-colors">
            Locations
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-slate-300">{cityName}, ON</span>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-white font-semibold">{service.name}</span>
        </div>
      </div>

      {/* Localized Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 bg-obsidian-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Localized Rating Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="font-mono text-xs font-semibold text-white">
                Serving {cityName}, ON & Surrounding Areas
              </span>
              <span className="text-slate-500">·</span>
              <span className="font-mono text-xs text-slate-300">
                ★ {client.rating.toFixed(1)} Rating
              </span>
            </div>

            {/* Localized H1 */}
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              {service.name} in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {cityName}, Ontario
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              {service.shortDesc} Specially engineered for {cityName} homes and commercial facilities facing Ontario winter freeze-thaw stresses, road salt exposure, and heavy use.
            </p>

            {/* Deliverables Checklist */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading block">
                Standard Specifications for {cityName} Projects:
              </span>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-obsidian shadow-2xl hover:bg-slate-100 transition-all"
              >
                <span>Instant {cityName} Price Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={client.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-5 py-3.5 font-mono text-xs sm:text-sm font-bold text-white hover:border-white/40 transition-all"
              >
                <Phone className="h-4 w-4 text-slate-300" />
                <span>Call {client.phone}</span>
              </a>
            </div>

            {/* Quick Assurances */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> 15-Year Delamination Warranty
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> WSIB Certified
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> Free Laser On-Site Measure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Full-Width Quote Calculator for this location */}
      <QuoteCalculator client={client} />

      {/* Climate & Engineering Section for this City */}
      <section className="py-16 border-t border-white/10 bg-obsidian-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs font-semibold text-slate-200">
                <ThermometerSnowflake className="h-3.5 w-3.5" />
                <span>Ontario Climate Engineering</span>
              </div>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Why {cityName} Properties Require Industrial-Grade Materials
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Southern Ontario winters subject {cityName} buildings to intense thermal cycling. Between November and April, road salt, calcium brine, and freezing moisture penetrate untreated concrete pores.
              </p>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <h4 className="font-heading text-xs font-bold text-white">
                    Protection Against Winter Road Salt & Spalling
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Ontario road salt aggressively deteriorates unprotected concrete slabs. Our 100% solids polyaspartic topcoat forms an impermeable shield.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <h4 className="font-heading text-xs font-bold text-white">
                    Thermal Flexibility (-25°C to +35°C)
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Unlike brittle retail DIY products that crack during summer heatwaves or sub-zero snaps, our commercial materials maintain structural flexibility year-round.
                  </p>
                </div>
              </div>
            </div>

            {/* City Dispatch Info Card */}
            <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="font-heading text-lg font-bold text-white">
                {client.businessName} Service Dispatch in {cityName}
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                We provide prompt, direct service to all residential neighborhoods and commercial zones in {cityName}, ON.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Primary Region:</span>
                  <span className="text-white font-semibold">{cityName}, ON</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Headquarters Address:</span>
                  <span className="text-white">{client.address}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Direct Phone:</span>
                  <a href={client.phoneHref} className="text-white font-bold hover:underline">
                    {client.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Typical Estimate Turnaround:</span>
                  <span className="text-white">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Workmanship Guarantee:</span>
                  <span className="text-white font-semibold">15-Year Written Warranty</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <a
                  href={client.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-bold font-mono uppercase text-obsidian shadow hover:bg-slate-100"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {cityName} Dispatch: {client.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQ Accordion */}
      <FaqAccordion
        client={client}
        customFaqs={localizedFaqs}
        cityName={cityName}
        serviceName={service.name}
      />

      {/* Internal Cross-Linking Matrix */}
      <section className="py-16 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Other Services in this City */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-3">
                Other Services Available in {cityName}, ON:
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {client.services
                  .filter((s) => s.slug !== service.slug)
                  .map((otherSvc) => (
                    <Link
                      key={otherSvc.slug}
                      href={`/locations/${citySlug}/${otherSvc.slug}`}
                      className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5 text-xs text-slate-300 hover:border-white/30 hover:text-white transition-colors"
                    >
                      <span className="font-semibold block text-white">{otherSvc.name}</span>
                      <span className="text-[11px] text-slate-400">{cityName}, ON</span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Same Service in Other GTA Cities */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-3">
                {service.name} in Other GTA Municipalities:
              </h4>
              <div className="flex flex-wrap gap-2">
                {client.serviceAreas
                  .filter((c) => slugify(c) !== citySlug)
                  .map((otherCity) => (
                    <Link
                      key={otherCity}
                      href={`/locations/${slugify(otherCity)}/${service.slug}`}
                      className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-white/30 hover:text-white transition-colors"
                    >
                      {otherCity}, ON
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer client={client} />
    </main>
  );
}
