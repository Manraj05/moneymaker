"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowUpRight, Clock } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface ServiceAreasProps {
  client: ClientProfile;
}

export default function ServiceAreas({ client }: ServiceAreasProps) {
  return (
    <section id="service-areas" className="py-20 border-t border-white/10 bg-obsidian-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-bright">
            <Navigation className="h-3.5 w-3.5" />
            <span>GTA & Regional Coverage</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where {client.businessName} Operates
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Dedicated mobile crews providing free on-site laser measurements, diamond grinding, and roofing installations across Southern Ontario.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {client.serviceAreas.map((city) => {
            const citySlug = slugify(city);
            const isPrimary = city.toLowerCase() === client.primaryCity.toLowerCase();
            const firstServiceSlug = client.services[0].slug;

            return (
              <div
                key={city}
                className={`relative rounded-xl border p-5 transition-all ${
                  isPrimary
                    ? "border-amber bg-amber-500/10 shadow-lg shadow-amber/10"
                    : "border-white/10 bg-slate-900/60 hover:border-amber-500/40 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className={`h-4 w-4 ${isPrimary ? "text-amber-bright" : "text-slate-400"}`} />
                    <h3 className="font-heading text-base font-bold text-white">
                      {city}, ON
                    </h3>
                  </div>
                  {isPrimary && (
                    <span className="rounded bg-amber px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-obsidian">
                      Headquarters
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  {client.niche === "epoxy"
                    ? `Residential garage epoxy & commercial polyaspartic coatings in ${city}.`
                    : `24-Hr emergency leak repair & architectural shingle replacement in ${city}.`}
                </p>

                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[11px] font-mono text-slate-500 block mb-1.5">
                    Browse Local City Hubs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {client.services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/locations/${citySlug}/${svc.slug}`}
                        className="rounded border border-white/10 bg-slate-950 px-2 py-1 text-[10px] font-mono text-slate-300 hover:border-amber hover:text-amber-bright transition-colors"
                      >
                        {svc.name.split(" ")[0]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dispatch Guarantee Banner */}
        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-white">
                Same-Day Free On-Site Estimates & Laser Measurements
              </h4>
              <p className="text-xs text-slate-400">
                Live mobile estimators dispatched daily throughout {client.serviceAreas.join(", ")}.
              </p>
            </div>
          </div>

          <a
            href={client.phoneHref}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2 font-mono text-xs font-bold text-obsidian shadow hover:bg-amber-bright transition-colors"
          >
            <span>Book Today: {client.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
