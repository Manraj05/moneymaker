"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, Clock, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface ServiceAreasProps {
  client: ClientProfile;
}

export default function ServiceAreas({ client }: ServiceAreasProps) {
  const [activeCity, setActiveCity] = useState(client.primaryCity);
  const activeCitySlug = slugify(activeCity);

  return (
    <section id="service-areas" className="py-24 border-t border-white/10 bg-obsidian-300 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-mono font-semibold text-slate-300 shadow-sm backdrop-blur-xl">
            <Navigation className="h-3.5 w-3.5 text-white" />
            <span>Southern Ontario Mobile Dispatch</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Where {client.businessName} Operates
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Mobile planetary grinding crews stationed across Southern Ontario. Same-day on-site laser measurements available.
          </p>
        </div>

        {/* Segmented City Hub Matrix (Breaks the Card Grid Monotony) */}
        <div className="rounded-3xl border border-white/15 bg-slate-900/60 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {/* Top Segmented City Filter Pills */}
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
                      ? "border-white bg-white text-obsidian font-bold shadow-lg scale-105"
                      : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-white/30 hover:bg-slate-900 hover:text-white hover:-translate-y-0.5"
                  }`}
                >
                  <MapPin className={`h-3.5 w-3.5 ${isSelected ? "text-obsidian" : "text-slate-400"}`} />
                  <span>{city}, ON</span>
                  {isHQ && (
                    <span
                      className={`rounded px-1.5 py-0.2 text-[9px] font-bold uppercase ${
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

          {/* Active City Dispatch Console */}
          <div className="pt-8 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Col (6 Cols): Active City Dispatch Specs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs text-white">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>Active Coverage in {activeCity}, Ontario</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Commercial &amp; Garage Epoxy in {activeCity}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our mobile crews provide free on-site laser measurements, diamond profiling, and seamless polyaspartic applications throughout all {activeCity} residential subdivisions and commercial corridors.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-white flex-shrink-0" />
                  <span>24-Hour Estimate Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-white flex-shrink-0" />
                  <span>WSIB Insured Crews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-white flex-shrink-0" />
                  <span>15-Year Written Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-white flex-shrink-0" />
                  <span>Free Laser Measurement</span>
                </div>
              </div>
            </div>

            {/* Right Col (6 Cols): Quick Link Matrix to All Services in this City */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/15 bg-slate-950/80 p-5 sm:p-6 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block pb-1 border-b border-white/10 font-bold">
                  Browse {activeCity} Service Portals:
                </span>

                <div className="grid gap-2 sm:grid-cols-2">
                  {client.services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/locations/${activeCitySlug}/${svc.slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.06] hover:-translate-y-0.5"
                    >
                      <span className="font-heading text-xs font-bold text-white group-hover:text-slate-100 flex items-center justify-between">
                        <span>{svc.name.split(" ")[0]} Finish</span>
                        <ArrowRight className="h-3 w-3 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 mt-1 block">
                        {activeCity}, ON Specs →
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={client.phoneHref}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-mono text-xs font-bold text-obsidian shadow hover:bg-slate-100 transition-colors"
                  >
                    <span>Direct Call {activeCity} Dispatch: {client.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
