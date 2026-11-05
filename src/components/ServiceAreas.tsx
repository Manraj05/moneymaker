"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  Clock,
  ShieldCheck,
  ArrowRight,
  Check,
  Phone,
  Radio,
} from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface ServiceAreasProps {
  client: ClientProfile;
}

export default function ServiceAreas({ client }: ServiceAreasProps) {
  const [activeCity, setActiveCity] = useState(client.primaryCity);
  const activeCitySlug = slugify(activeCity);

  return (
    <section
      id="service-areas"
      className="py-24 border-t border-white/10 bg-[#090D16] relative overflow-hidden scroll-mt-20"
    >
      {/* Precision grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-mono font-semibold text-slate-300 shadow-sm backdrop-blur-xl">
            <Radio className="h-3.5 w-3.5 text-white animate-pulse" />
            <span>Southern Ontario Mobile Fleet Dispatch</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Where {client.businessName} Operates
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Mobile planetary grinding crews stationed throughout the Golden Horseshoe. Direct residential and commercial dispatch within 24 hours.
          </p>
        </div>

        {/* Dispatch Console Stage */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#0B101D] to-slate-950 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {/* Municipal Selection Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-white/10">
            {client.serviceAreas.map((city) => {
              const isSelected = activeCity.toLowerCase() === city.toLowerCase();
              const isHQ = city.toLowerCase() === client.primaryCity.toLowerCase();

              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className={`group relative flex items-center gap-2 rounded-xl border px-4 py-2.5 font-mono text-xs transition-all duration-200 ${
                    isSelected
                      ? "border-white bg-white text-obsidian font-bold shadow-xl scale-105"
                      : "border-white/10 bg-slate-950/60 text-slate-300 hover:border-white/25 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <MapPin
                    className={`h-3.5 w-3.5 ${
                      isSelected ? "text-obsidian" : "text-slate-400 group-hover:text-white"
                    }`}
                  />
                  <span>{city}, ON</span>
                  {isHQ && (
                    <span
                      className={`rounded px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider ${
                        isSelected ? "bg-obsidian text-white" : "bg-white/10 text-slate-300"
                      }`}
                    >
                      HQ
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active City Console Stage */}
          <div className="pt-8 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Column (6 Cols): Municipal Specs & Guarantee */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-white">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>Stationed Coverage in {activeCity}, Ontario</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Polyaspartic &amp; Commercial Epoxy in {activeCity}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our heavy mobile equipment trailers are dispatched across {activeCity} neighborhoods and commercial corridors. We provide free on-site laser measurements, diamond CSP 3 profiling, and seamless resin installations.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                  <Clock className="h-4 w-4 text-white flex-shrink-0" />
                  <span>24-Hour Estimate Turnaround</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                  <ShieldCheck className="h-4 w-4 text-white flex-shrink-0" />
                  <span>WSIB Insured &amp; $2M Liability</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                  <Check className="h-4 w-4 text-white flex-shrink-0" />
                  <span>15-Year Delamination Guarantee</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                  <Check className="h-4 w-4 text-white flex-shrink-0" />
                  <span>HEPA Dust-Free Air Filtration</span>
                </div>
              </div>
            </div>

            {/* Right Column (6 Cols): Dedicated Localized Service Directory Links */}
            <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-slate-900/90 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                  Available Services in {activeCity}, ON:
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  Select for Local Specs &amp; Rates
                </span>
              </div>

              <div className="space-y-2.5">
                {client.services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/locations/${activeCitySlug}/${svc.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs text-slate-300 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                  >
                    <div>
                      <span className="font-semibold text-white block group-hover:underline">
                        {svc.name}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {activeCity}, ON · {svc.priceRange}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={client.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-mono text-xs font-bold uppercase text-obsidian shadow hover:bg-slate-100 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {activeCity} Dispatch: {client.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
