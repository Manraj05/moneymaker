"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Factory,
  ArrowRight,
  Check,
  Calculator,
  Compass,
} from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface ServicesGridProps {
  client: ClientProfile;
}

export default function ServicesGrid({ client }: ServicesGridProps) {
  const citySlug = slugify(client.primaryCity);

  const flakeService = client.services[0];
  const metallicService = client.services[1];
  const basementService = client.services[2];
  const commercialService = client.services[3];

  return (
    <section
      id="services"
      className="py-24 bg-[#F1F5F9] text-slate-900 border-y border-slate-200 relative overflow-hidden scroll-mt-20"
    >
      {/* Precision architectural dot grid in warm gray */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1px, transparent 1px)`,
          backgroundSize: `28px 28px`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header: Crisp Editorial Palette Reset */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-slate-700 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-slate-900" />
            <span>Architectural Finish Deck &amp; Systems</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Engineered Systems for {client.primaryCity} &amp; the GTA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every slab has unique moisture, traffic, and aesthetic requirements. Explore our commercial-grade resin finishes calibrated for Ontario homes and facilities.
          </p>
        </div>

        {/* Asymmetric System Showcase: 2 Hero Systems on Top */}
        <div className="grid gap-8 lg:grid-cols-12 mb-8">
          {/* System 01: Full-Flake Polyaspartic (7 Cols - Most Popular Hero) */}
          {flakeService && (
            <div className="lg:col-span-7 group relative flex flex-col justify-between rounded-3xl border border-slate-300/80 bg-white p-7 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        System 01 · Flagship
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-900">
                          Most Popular in GTA
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 font-mono text-xs font-bold text-slate-950 shadow-sm">
                    {flakeService.priceRange || "$6.50 – $10.00 / sq ft"}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-extrabold text-slate-950">
                  {flakeService.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {flakeService.shortDesc}
                </p>

                {/* Key Technical Characteristics */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px] bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Traction Rating</span>
                    <strong className="text-slate-900 font-bold">ASTM D-2047 0.70+</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Thickness</span>
                    <strong className="text-slate-900 font-bold">30–35 Mils Build</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">UV Stability</span>
                    <strong className="text-slate-900 font-bold">100% Aliphatic</strong>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {flakeService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white mt-0.5 flex-shrink-0">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/locations/${citySlug}/${flakeService.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-slate-600 transition-colors"
                >
                  <span>{client.primaryCity} Specs &amp; Engineering</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-slate-800 transition-all"
                >
                  <Calculator className="h-3.5 w-3.5" />
                  <span>Estimate Flake Cost</span>
                </a>
              </div>
            </div>
          )}

          {/* System 02: 3D Metallic Marble Epoxy (5 Cols - Artisan Luxury) */}
          {metallicService && (
            <div className="lg:col-span-5 group relative flex flex-col justify-between rounded-3xl border border-slate-300/80 bg-white p-7 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        System 02 · Artisan
                      </span>
                      <span className="rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-slate-800 block mt-0.5">
                        High-Gloss Luxury
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 font-mono text-xs font-bold text-slate-950 shadow-sm">
                    {metallicService.priceRange || "$8.50 – $14.00 / sq ft"}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-extrabold text-slate-950">
                  {metallicService.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {metallicService.shortDesc}
                </p>

                {/* Key Technical Characteristics */}
                <div className="mt-6 grid grid-cols-2 gap-3 font-mono text-[11px] bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Optical Finish</span>
                    <strong className="text-slate-900 font-bold">Deep Glass Marble</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Application</span>
                    <strong className="text-slate-900 font-bold">Hand-Manipulated</strong>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                  {metallicService.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white mt-0.5 flex-shrink-0">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/locations/${citySlug}/${metallicService.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-slate-600 transition-colors"
                >
                  <span>Gallery Specs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-slate-600"
                >
                  <span>Price Metallic</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Tier: Basement & Commercial Systems (Split Columns) */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* System 03: Basement Moisture Barrier */}
          {basementService && (
            <div className="rounded-3xl border border-slate-300/80 bg-white p-7 sm:p-9 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-900">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-500">
                      System 03
                    </span>
                    <h4 className="font-heading text-lg font-bold text-slate-950">
                      {basementService.name}
                    </h4>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  {basementService.priceRange || "$5.50 – $8.00 / sq ft"}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {basementService.shortDesc}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <Link
                  href={`/locations/${citySlug}/${basementService.slug}`}
                  className="font-mono text-xs font-bold text-slate-900 hover:underline"
                >
                  {client.primaryCity} Basement Ingress Details →
                </Link>
                <a
                  href="#calculator"
                  className="font-heading text-xs font-bold text-slate-700 hover:text-slate-950"
                >
                  Calculate Cost →
                </a>
              </div>
            </div>
          )}

          {/* System 04: CFIA Commercial & Industrial Systems */}
          {commercialService && (
            <div className="rounded-3xl border border-slate-300/80 bg-white p-7 sm:p-9 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-900">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-500">
                      System 04
                    </span>
                    <h4 className="font-heading text-lg font-bold text-slate-950">
                      {commercialService.name}
                    </h4>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  {commercialService.priceRange || "$7.00 – $12.00 / sq ft"}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {commercialService.shortDesc}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <Link
                  href={`/locations/${citySlug}/${commercialService.slug}`}
                  className="font-mono text-xs font-bold text-slate-900 hover:underline"
                >
                  CFIA Industrial Standards →
                </Link>
                <a
                  href={client.phoneHref}
                  className="font-heading text-xs font-bold text-slate-700 hover:text-slate-950"
                >
                  Commercial Estimating: {client.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
