"use client";

import React from "react";
import { Check, X, AlertTriangle, ShieldCheck } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ComparisonTableProps {
  client: ClientProfile;
}

const comparisonFeatures = [
  {
    feature: "Surface Preparation",
    purest: "Lavina 3-head planetary diamond grind (CSP 3 profile) with industrial HEPA dust extractors",
    cheapDiy: "Muriatic acid etch or pressure washing (acid fails to open concrete pores, causing 90% of failures)",
  },
  {
    feature: "Resin Solids & Purity",
    purest: "100% solids industrial epoxy moisture mitigation base (zero water or solvent evaporative loss)",
    cheapDiy: "40%–50% waterborne acrylic paint (water evaporates, leaving a micro-thin film that chalks)",
  },
  {
    feature: "Clear Topcoat Chemistry",
    purest: "Aliphatic polyaspartic armor coat (100% UV-stable, chemical proof, 4x harder than epoxy)",
    cheapDiy: "Cheap waterborne polyurethane or no topcoat at all (turns cloudy, yellow, and scratches easily)",
  },
  {
    feature: "Hot-Tire Pickup Resistance",
    purest: "Heat rated to 150°C. Immune to plasticizer migration and tire torque peeling",
    cheapDiy: "Softens under hot tires after highway driving; tires literally rip the coating off in sheets",
  },
  {
    feature: "Ontario Winter Road Salt",
    purest: "Impermeable molecular cross-linking resists calcium chloride, road brine, and slush puddles",
    cheapDiy: "Salt brine penetrates micro-cracks, freezing under the paint and popping it off the slab",
  },
  {
    feature: "Expected Service Lifetime",
    purest: "15–20+ Years (Backed by written 15-year contractor delamination warranty)",
    cheapDiy: "6–18 Months before requiring complete diamond strip-down and expensive re-coating",
  },
  {
    feature: "WSIB & Commercial Liability",
    purest: "WSIB Certified crews with $2M–$5M Commercial General Liability insurance",
    cheapDiy: "Zero liability coverage; homeowner bears 100% of risk for chemical burns or injury",
  },
];

export default function ComparisonTable({ client }: ComparisonTableProps) {
  return (
    <section id="comparison" className="relative py-20 bg-[#F8FAFC] text-slate-900 overflow-hidden border-y border-slate-200 scroll-mt-20">
      {/* Subtle architectural dot grid in light gray */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with Dark Typography for Palette Reset */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-slate-700 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-900" />
            <span>Engineering Truth &amp; Material Analysis</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Why Hardware-Store Kits Fail in Ontario
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A quick \$200 paint kit ends up costing \$2,000 to grind off when it peels. Compare professional 100% solid polyaspartic systems against thin retail waterborne kits.
          </p>
        </div>

        {/* Crisp Light Comparison Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/90 font-mono text-xs uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-5 font-bold w-1/4">Specification</th>
                  <th className="py-4 px-5 font-black text-slate-950 bg-slate-50 border-x border-slate-200 w-2/5">
                    {client.businessName} Commercial System
                  </th>
                  <th className="py-4 px-5 font-semibold text-slate-500 w-1/3">
                    Retail Paint Kits / Acid Etch
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-5 font-heading font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 bg-slate-50/50 border-x border-slate-200 font-medium text-slate-900">
                      <div className="flex items-start gap-2.5">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-white mt-0.5">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{row.purest}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-500">
                      <div className="flex items-start gap-2.5">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 mt-0.5">
                          <X className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{row.cheapDiy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Light Palette Reset Callout Banner */}
        <div className="mt-8 rounded-2xl border border-slate-300 bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900">
                The True Cost of a Failed DIY Kit
              </h4>
              <p className="text-xs text-slate-600">
                Grinding off failed, sticky waterborne paint requires aggressive diamond scraping at $2.00–$3.00/sq ft before new coatings can even adhere.
              </p>
            </div>
          </div>

          <a
            href="#calculator"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-slate-800 transition-colors"
          >
            <span>Price It Right the First Time</span>
          </a>
        </div>
      </div>
    </section>
  );
}
