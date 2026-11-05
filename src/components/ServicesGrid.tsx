"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Factory,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  Calculator,
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
    <section id="services" className="py-24 border-t border-white/10 bg-obsidian-200/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Showroom &amp; Industrial Systems
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Floor Coatings Tailored for {client.primaryCity} &amp; the GTA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Engineered to resist -25°C freeze-thaw cycles, corrosive road salt brine, and intense hot-tire torque.
          </p>
        </div>

        {/* Asymmetric Tier Layout: 2 Featured Hero Systems on Top */}
        <div className="grid gap-6 lg:grid-cols-12 mb-6">
          {/* Featured Hero 1: Full-Flake Polyaspartic (7 Cols) */}
          {flakeService && (
            <div className="lg:col-span-7 group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-white/35 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  </div>

                  <span className="rounded-full border border-white/20 bg-black/80 px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-inner">
                    {flakeService.priceRange || "$6.50 – $10.00 / sq ft"}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  {flakeService.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {flakeService.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-white/10 grid sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {flakeService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/locations/${citySlug}/${flakeService.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <span>{client.primaryCity} Specs &amp; Engineering</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-obsidian shadow-lg hover:bg-slate-100 transition-all"
                >
                  <Calculator className="h-3.5 w-3.5" />
                  <span>Estimate Flake Cost</span>
                </a>
              </div>
            </div>
          )}

          {/* Featured Hero 2: 3D Metallic Marble (5 Cols) */}
          {metallicService && (
            <div className="lg:col-span-5 group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-950 to-[#0A101D] p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-white/35 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-white/20 bg-black/80 px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-inner">
                    {metallicService.priceRange || "$9.00 – $16.00 / sq ft"}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Luxury Architectural
                  </span>
                </div>
                <h3 className="mt-1 font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  {metallicService.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {metallicService.shortDesc}
                </p>

                <ul className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs text-slate-200">
                  {metallicService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-white mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/locations/${citySlug}/${metallicService.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Gallery</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs font-bold text-white hover:bg-white hover:text-obsidian transition-all"
                >
                  <span>Estimate</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Tier: 2 Secondary Systems (Basement + Commercial) */}
        <div className="grid gap-6 md:grid-cols-2">
          {basementService && (
            <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-slate-900/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {basementService.name}
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-slate-300">
                  {basementService.priceRange || "$4.50 – $10.00 / sq ft"}
                </span>
              </div>
              <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                {basementService.shortDesc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">
                  Hydrostatic Vapor Barrier Included
                </span>
                <Link
                  href={`/locations/${citySlug}/${basementService.slug}`}
                  className="font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  View Specs →
                </Link>
              </div>
            </div>
          )}

          {commercialService && (
            <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-slate-900/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white">
                    <Factory className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {commercialService.name}
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-slate-300">
                  {commercialService.priceRange || "$3.50 – $8.00 / sq ft"}
                </span>
              </div>
              <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                {commercialService.shortDesc}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">
                  CFIA Sanitary &amp; High-Traffic Rated
                </span>
                <Link
                  href={`/locations/${citySlug}/${commercialService.slug}`}
                  className="font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  View Specs →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
