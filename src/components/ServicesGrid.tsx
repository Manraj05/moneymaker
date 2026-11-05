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

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-5 w-5 text-white" />,
  Sparkles: <Sparkles className="h-5 w-5 text-white" />,
  Layers: <Layers className="h-5 w-5 text-white" />,
  Factory: <Factory className="h-5 w-5 text-white" />,
};

export default function ServicesGrid({ client }: ServicesGridProps) {
  const citySlug = slugify(client.primaryCity);

  return (
    <section id="services" className="py-20 border-t border-white/10 bg-obsidian-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Showroom & Industrial Systems
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Residential & Commercial Floor Coatings
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Engineered for {client.primaryCity} & the GTA. Built to handle -25°C winter road salt, high tire torque, and heavy industrial equipment.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {client.services.map((service) => {
            const icon = iconMap[service.icon] || <ShieldCheck className="h-5 w-5 text-white" />;
            const locationUrl = `/locations/${citySlug}/${service.slug}`;

            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-slate-900/90 shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon + $/sq ft Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] group-hover:bg-white/[0.1] transition-colors">
                      {icon}
                    </div>
                    {service.priceRange && (
                      <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                        {service.priceRange}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul className="mt-5 space-y-2 border-t border-white/5 pt-4 text-[11px] text-slate-300">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-white mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={locationUrl}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>{client.primaryCity} Specs</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200 hover:bg-white hover:text-obsidian hover:font-bold transition-all"
                  >
                    <Calculator className="h-3 w-3" />
                    <span>Estimate</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
