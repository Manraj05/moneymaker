"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Shield, Star } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { slugify } from "@/lib/utils";

interface FooterProps {
  client: ClientProfile;
}

export default function Footer({ client }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      {/* Upper Footer CTA Strip */}
      <div className="border-b border-white/5 bg-slate-900/40 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h4 className="font-heading text-lg font-bold text-white">
              Ready to Upgrade Your Floor with {client.businessName}?
            </h4>
            <p className="text-xs text-slate-400">
              Lock in your 2026 contractor pricing and get a free on-site laser measure in {client.primaryCity} & the GTA.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={client.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-mono text-sm font-bold text-obsidian shadow hover:bg-slate-100 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Direct: {client.phone}</span>
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center rounded-xl border border-white/20 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Price My Project
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Business Overview */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white font-heading font-black text-sm">
                {client.businessName.substring(0, 2).toUpperCase()}
              </div>
              <span className="font-heading text-lg font-bold text-white">
                {client.businessName}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              {client.tagline}
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-300 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{client.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-300 flex-shrink-0" />
                <a href={client.phoneHref} className="font-mono text-slate-200 hover:text-white">
                  {client.phone}
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-300 font-mono">
              <Shield className="h-4 w-4" />
              <span>WSIB Certified · $2M Commercial Liability</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Specialized Services
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              {client.services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/locations/${slugify(client.primaryCity)}/${svc.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: GTA Service Areas */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Regional Service Areas
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {client.serviceAreas.map((city) => (
                <span
                  key={city}
                  className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1 text-[11px] font-mono text-slate-300"
                >
                  {city}, ON
                </span>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-500">
              Active mobile crews dispatched across Hamilton, Halton, Peel, and surrounding areas.
            </p>
          </div>

          {/* Col 4: Trust & Guarantees */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Standards & Guarantees
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              {client.guarantees.map((g, i) => (
                <li key={i} className="flex items-center gap-1.5 text-slate-300">
                  <span className="text-white">✓</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-white/10 bg-slate-900 p-3.5">
              <div className="flex items-center gap-1.5 text-white">
                <Star className="h-4 w-4 fill-white" />
                <span className="font-heading text-xs font-bold text-white">
                  {client.rating.toFixed(1)} / 5.0 Star Rating
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                Verified on Google Maps with {client.reviewCount} customer reviews.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Cross-Links Matrix */}
        <div className="mt-10 border-t border-white/5 pt-8">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-3">
            Programmatic Local SEO Directory ({client.serviceAreas.length * client.services.length} Local Pages):
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
            {client.serviceAreas.flatMap((city) =>
              client.services.map((svc) => {
                const citySlug = slugify(city);
                return (
                  <Link
                    key={`${city}-${svc.slug}`}
                    href={`/locations/${citySlug}/${svc.slug}`}
                    className="hover:text-slate-200 transition-colors"
                  >
                    {svc.name.split(" ")[0]} in {city}
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} {client.businessName}. All Rights Reserved. Ontario Registered Contractor.
          </p>
          <div className="flex items-center gap-4">
            <span>Powered by GTA Contractor SEO Engine</span>
            <Link href="/llms.txt" className="text-slate-400 hover:text-white">
              /llms.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
