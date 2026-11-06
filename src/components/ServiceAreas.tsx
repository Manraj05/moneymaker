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
      className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden scroll-mt-20"
    >
      {/* Precision grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1 text-xs font-mono font-semibold text-slate-700 shadow-xs">
            <Radio className="h-3.5 w-3.5 text-slate-900 animate-pulse" />
            <span>Southern Ontario Mobile Fleet Dispatch</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Where {client.businessName} Operates
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Mobile planetary grinding crews stationed throughout the Golden Horseshoe. Direct residential and commercial dispatch within 24 hours.
          </p>
        </div>

        {/* Dispatch Console Stage */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
          {/* Municipal Selection Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-slate-100">
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
                      ? "border-slate-950 bg-slate-950 text-white font-bold shadow-md scale-105"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <MapPin
                    className={`h-3.5 w-3.5 ${
                      isSelected ? "text-white" : "text-slate-400 group-hover:text-slate-900"
                    }`}
                  />
                  <span>{city}, ON</span>
                  {isHQ && (
                    <span
                      className={`rounded px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider ${
                        isSelected ? "bg-white text-slate-950" : "bg-slate-200 text-slate-700"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold">Stationed Coverage in {activeCity}, Ontario</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                Polyaspartic &amp; Commercial Epoxy in {activeCity}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our heavy mobile equipment trailers are dispatched across {activeCity} neighborhoods and commercial corridors. We provide free on-site laser measurements, diamond CSP 3 profiling, and seamless resin installations.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700 font-mono">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <Clock className="h-4 w-4 text-slate-900 flex-shrink-0" />
                  <span>24-Hour Estimate Turnaround</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <ShieldCheck className="h-4 w-4 text-slate-900 flex-shrink-0" />
                  <span>WSIB Insured &amp; $2M Liability</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>15-Year Delamination Guarantee</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>HEPA Dust-Free Air Filtration</span>
                </div>
              </div>
            </div>

            {/* Right Column (6 Cols): Dedicated Localized Service Directory Links */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-slate-950">
                  Available Services in {activeCity}, ON:
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  Select for Local Specs &amp; Rates
                </span>
              </div>

              <div className="space-y-2.5">
                {client.services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/locations/${activeCitySlug}/${svc.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-700 transition-all duration-200 hover:border-slate-300 hover:shadow-xs hover:text-slate-950"
                  >
                    <div>
                      <span className="font-semibold text-slate-900 block group-hover:underline">
                        {svc.name}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {activeCity}, ON · {svc.priceRange}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-900" />
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={client.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 font-mono text-xs font-bold uppercase text-white shadow-sm hover:bg-slate-800 transition-colors"
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
