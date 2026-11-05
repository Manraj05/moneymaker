"use client";

import React from "react";
import { Check, X, Shield, Award, ThermometerSnowflake, Hammer } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ProcessBentoProps {
  client: ClientProfile;
}

const comparisonFeatures = [
  {
    feature: "Surface Preparation",
    purest: "Lavina 3-head planetary diamond grind (CSP 3 profile) with HEPA dust vacuums",
    cheapDiy: "Muriatic acid etch or pressure washing (leads to 90% of coating peeling)",
  },
  {
    feature: "Resin Solids & Purity",
    purest: "100% solids industrial epoxy moisture mitigation base (zero water/solvent dilution)",
    cheapDiy: "40%–50% waterborne acrylic paint (evaporates thin, chalks, and blisters)",
  },
  {
    feature: "Clear Topcoat Chemistry",
    purest: "Aliphatic polyaspartic armor (UV-stable, chemical proof, 4x harder than epoxy)",
    cheapDiy: "Cheap polyurethane or no topcoat at all (yellows and clouds quickly)",
  },
  {
    feature: "Hot-Tire Pickup Resistance",
    purest: "Rated to 150°C. Zero hot tire stick or tire torque delamination",
    cheapDiy: "Softens under hot tires from highway driving and pulls up in sheets",
  },
  {
    feature: "Ontario Winter Road Salt",
    purest: "100% impermeable cross-linked barrier against calcium chloride & slush",
    cheapDiy: "Salt brine penetrates micro-fissures, causing spalling and lifting",
  },
  {
    feature: "Expected Service Lifetime",
    purest: "15–20+ Years (Backed by written 15-year delamination warranty)",
    cheapDiy: "6–18 Months before requiring complete stripping and re-doing",
  },
  {
    feature: "Insurance & Coverage",
    purest: "WSIB Certified & $2M Commercial General Liability insurance",
    cheapDiy: "Uninsured cash handymen or DIY homeowner liability",
  },
];

export default function ProcessBento({ client }: ProcessBentoProps) {
  return (
    <section id="process" className="py-20 border-t border-white/10 bg-obsidian-300 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Commercial Standards vs DIY Kits
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Hardware-Store Kits Fail in Ontario
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Compare industrial 100% solid polyaspartic systems against thin retail waterborne kits.
          </p>
        </div>

        {/* Technical Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur-xl shadow-2xl mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-slate-950/80 font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 text-slate-400 font-bold w-1/4">Specification</th>
                  <th className="py-4 px-5 text-white font-bold bg-white/[0.06] border-x border-white/10 w-2/5">
                    {client.businessName} Commercial System
                  </th>
                  <th className="py-4 px-5 text-slate-400 font-bold w-1/3">
                    Retail Paint Kits / DIY Acid Etch
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-5 font-heading font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 bg-white/[0.03] border-x border-white/10 font-medium text-slate-200">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                        <span>{row.purest}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                        <span>{row.cheapDiy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4-Step CSP 3 Diamond-Grind Process Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Engineering Protocol
          </span>
          <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-white">
            The 4-Step CSP 3 Diamond-Grinding Process
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Prep is 80% of coating longevity. Here is how our crews guarantee a lifetime bond.
          </p>
        </div>

        {/* 4-Step Bento Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {client.processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-slate-900/90"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-mono text-2xl font-black text-white/40 group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-400">
                    Step {idx + 1} of 4
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {step.subtitle}
                  </span>
                  <h4 className="mt-1 font-heading text-base font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>
                  {idx === 0 && "CSP 3 Anchor Profile"}
                  {idx === 1 && "Polyurea Structural Stitch"}
                  {idx === 2 && "100% Solids Moisture Base"}
                  {idx === 3 && "UV Polyaspartic Clear Armor"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
