"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, Clock } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface ServiceAreasProps {
  client: ClientProfile;
}

export default function ServiceAreas({ client }: ServiceAreasProps) {
  return (
    <section id="service-areas" className="py-20 border-t border-white/10 bg-obsidian-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Regional Dispatch
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Where {client.businessName} Operates
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Mobile crews providing free on-site laser measurements, diamond grinding, and polyaspartic installations across Southern Ontario.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {client.serviceAreas.map((city) => {
            const citySlug = slugify(city);
            const isPrimary = city.toLowerCase() === client.primaryCity.toLowerCase();

            return (
              <div
                key={city}
                className={`relative rounded-2xl border p-5 backdrop-blur-xl transition-all ${
                  isPrimary
                    ? "border-white/30 bg-white/[0.06] shadow-xl"
                    : "border-white/10 bg-slate-900/50 hover:border-white/25 hover:bg-slate-900/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <h3 className="font-heading text-base font-bold text-white">
                      {city}, ON
                    </h3>
                  </div>
                  {isPrimary && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                      HQ
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Residential garage flake & commercial epoxy installations in {city}.
                </p>

                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                    Browse Local City Hubs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {client.services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/locations/${citySlug}/${svc.slug}`}
                        className="rounded-lg border border-white/10 bg-slate-950/70 px-2 py-1 text-[10px] font-mono text-slate-300 hover:border-white/30 hover:text-white transition-colors"
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
        <div className="mt-10 rounded-2xl border border-white/15 bg-gradient-to-r from-slate-900/80 via-slate-950 to-slate-900/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/15 text-white">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                Same-Day Free On-Site Estimates & Laser Measurements
              </h4>
              <p className="text-xs text-slate-400">
                Live mobile estimators dispatched daily throughout {client.serviceAreas.join(", ")}.
              </p>
            </div>
          </div>

          <a
            href={client.phoneHref}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-mono text-xs font-bold text-obsidian shadow hover:bg-slate-100 transition-colors"
          >
            <span>Book Today: {client.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
