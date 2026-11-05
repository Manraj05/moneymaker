"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Factory,
  Sparkles,
  Layers,
  Flame,
  ShieldAlert,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";
import { ClientProfile, ServiceItem } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface ServicesGridProps {
  client: ClientProfile;
}

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-amber" />,
  Factory: <Factory className="h-6 w-6 text-amber" />,
  Sparkles: <Sparkles className="h-6 w-6 text-amber" />,
  Layers: <Layers className="h-6 w-6 text-amber" />,
  Flame: <Flame className="h-6 w-6 text-amber" />,
  ShieldAlert: <ShieldAlert className="h-6 w-6 text-amber" />,
  Wrench: <Wrench className="h-6 w-6 text-amber" />,
};

export default function ServicesGrid({ client }: ServicesGridProps) {
  const citySlug = slugify(client.primaryCity);

  return (
    <section id="services" className="py-20 border-t border-white/10 bg-obsidian-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-bright">
            <span>Specialized Commercial & Residential Services</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contractor Solutions Tailored for {client.primaryCity} & the GTA
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Engineered to resist brutal Ontario freeze-thaw cycles, high wind squalls, and severe daily traffic.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {client.services.map((service) => {
            const icon = iconMap[service.icon] || <ShieldCheck className="h-6 w-6 text-amber" />;
            const locationUrl = `/locations/${citySlug}/${service.slug}`;

            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-amber/5"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-950 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-colors">
                    {icon}
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold text-white group-hover:text-amber-50 transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul className="mt-4 space-y-2 border-t border-white/5 pt-4 text-[11px] text-slate-300">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={locationUrl}
                    className="flex items-center gap-1.5 text-xs font-semibold text-amber-bright transition-colors hover:text-white"
                  >
                    <span>{client.primaryCity} Specs</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  <a
                    href="#calculator"
                    className="rounded bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:bg-amber hover:text-obsidian transition-colors"
                  >
                    Get Estimate
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
