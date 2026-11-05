"use client";

import React from "react";
import { Check, X, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ComparisonTableProps {
  client: ClientProfile;
}

const comparisonFeatures = [
  {
    feature: "Surface Profiling Protocol",
    specName: "Mechanical vs Chemical",
    commercial:
      "Lavina 3-head planetary diamond grind (CSP 3 profile) with HEPA dust extraction. Completely removes surface laitance and opens capillaries.",
    retailDiy:
      "Muriatic acid etch or pressure wash. Acid fails to open pore depth on smooth troweled slabs, causing 90% of premature coating delaminations.",
  },
  {
    feature: "Resin Solids Concentration",
    specName: "Purity & Film Build",
    commercial:
      "100% solids industrial epoxy moisture mitigation base. Zero water or evaporative solvents; 100% of wet film cures to hard polymer.",
    retailDiy:
      "40%–50% waterborne acrylic paint. As water evaporates, the micro-thin film chalks, shrinks, and cracks under vehicle weight.",
  },
  {
    feature: "Clear Armor Topcoat",
    specName: "UV & Chemical Barrier",
    commercial:
      "Aliphatic polyaspartic armor coat. 100% UV-stable (never ambers or yellows), 4x harder than epoxy, chemical and oil impervious.",
    retailDiy:
      "Cheap waterborne polyurethane or no topcoat. Rapidly discolors into dirty amber under garage windows and scratches from car tires.",
  },
  {
    feature: "Hot-Tire Torque Resistance",
    specName: "Thermal Load Tolerance",
    commercial:
      "Heat rated to 150°C. Immune to tire friction torque and chemical plasticizer migration after 400-series highway runs.",
    retailDiy:
      "Softens at 50°C. Hot radial tires physically fuse to the soft paint film, peeling it up in large sheets the first summer.",
  },
  {
    feature: "Ontario Winter Road Salt",
    specName: "Chemical Cross-Linking",
    commercial:
      "Impermeable molecular shield resists calcium chloride brine, slush puddles, motor oil, and battery acid.",
    retailDiy:
      "Salt brine penetrates microscopic cracks, freezing beneath the coating and popping it off the slab in chunks.",
  },
  {
    feature: "Expected Service Lifetime",
    specName: "Longevity & Warranty",
    commercial:
      "15–20+ Years. Backed by a written 15-year contractor delamination guarantee.",
    retailDiy:
      "6–18 Months before peeling starts, requiring expensive diamond strip-down and recoating.",
  },
];

export default function ComparisonTable({ client }: ComparisonTableProps) {
  return (
    <section
      id="comparison"
      className="relative py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden border-y border-slate-200 scroll-mt-20"
    >
      {/* Precision architectural dot grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with Crisp Dark Typography for Palette Reset */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-slate-700 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-900" />
            <span>Materials Engineering Specification</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Why Hardware-Store Kits Fail in Ontario
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A \$250 boxed paint kit ends up costing \$2,200 to diamond-grind off when it peels. Compare {client.businessName} commercial 100% solids polyaspartic against thin retail waterborne kits.
          </p>
        </div>

        {/* Desktop Table View (Hidden on Small Phones for Better Mobile Cards) */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 font-mono text-xs uppercase tracking-wider text-slate-700">
                <th className="py-4 px-6 font-bold w-1/4">Engineering Criteria</th>
                <th className="py-4 px-6 font-black text-slate-950 bg-slate-50 border-x border-slate-200 w-2/5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-950" />
                    <span>{client.businessName} Commercial System</span>
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold text-slate-500 w-1/3">
                  Boxed DIY Kits / Acid Etch
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-5 px-6 font-heading font-bold text-slate-950">
                    <div>{row.feature}</div>
                    <span className="font-mono text-[10px] text-slate-500 font-normal uppercase tracking-wider block mt-0.5">
                      {row.specName}
                    </span>
                  </td>
                  <td className="py-5 px-6 bg-slate-50/60 border-x border-slate-200 text-slate-900 font-medium">
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-white mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed text-xs sm:text-sm">{row.commercial}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 mt-0.5">
                        <X className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed text-xs sm:text-sm">{row.retailDiy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile-Optimized Comparison Cards (Visible on Phones < 768px) */}
        <div className="md:hidden space-y-4">
          {comparisonFeatures.map((row, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
            >
              <div className="border-b border-slate-100 pb-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {row.specName}
                </span>
                <h3 className="font-heading text-base font-bold text-slate-950">
                  {row.feature}
                </h3>
              </div>

              {/* Commercial System */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 text-white">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase text-slate-900">
                    {client.businessName} Commercial
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pl-6">
                  {row.commercial}
                </p>
              </div>

              {/* Boxed DIY */}
              <div className="rounded-xl border border-slate-100 bg-white p-3 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                    <X className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase text-slate-500">
                    Hardware-Store Kit
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  {row.retailDiy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Light Palette Reset Callout Banner */}
        <div className="mt-8 rounded-2xl border border-slate-300 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
              <AlertTriangle className="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg font-bold text-slate-950">
                The Financial Trap of Failed Retail Coatings
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                When waterborne paint peels under hot tires, contractors must aggressively scrape and diamond-grind the sticky residue off at <strong>$2.00–$3.00/sq ft</strong> before a professional system can be installed. Doing it right the first time saves thousands.
              </p>
            </div>
          </div>

          <a
            href="#calculator"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-slate-800 transition-all hover:gap-3"
          >
            <span>Calculate Floor Cost</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
