"use client";

import React from "react";
import { ThermometerSnowflake, ShieldCheck, Flame, Droplets, CheckCircle2 } from "lucide-react";

interface StatItem {
  value: string;
  unit: string;
  title: string;
  spec: string;
  subtext: string;
  badge: string;
}

const stats: StatItem[] = [
  {
    value: "-25°C",
    unit: "Winter Certified",
    title: "Freeze-Thaw Elasticity",
    spec: "ASTM C-666 Protocol",
    subtext: "Flexes with slab micro-expansion; zero spalling or brine lifting.",
    badge: "Ontario Winter Proof",
  },
  {
    value: "15-Yr",
    unit: "Delamination",
    title: "Written Adhesion Warranty",
    spec: "400+ PSI Pull-Off Strength",
    subtext: "Mechanical CSP 3 anchor penetrates deeper than concrete tensile failure.",
    badge: "Contractor Backed",
  },
  {
    value: "150°C",
    unit: "Thermal Peak",
    title: "Hot-Tire Torque Immune",
    spec: "Zero Plasticizer Migration",
    subtext: "Withstands scorching summer tires straight from 400-series highway runs.",
    badge: "Zero Tire Pickup",
  },
  {
    value: "100%",
    unit: "Resin Solids",
    title: "Zero Water or Solvent Dilution",
    spec: "Commercial Pure Build",
    subtext: "Dense molecular cross-link forms an impermeable shield against salt slurry.",
    badge: "CFIA Compliant Base",
  },
];

export default function TrustStatsBand() {
  return (
    <section className="relative z-20 -mt-2 border-y border-white/10 bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 py-10 shadow-2xl backdrop-blur-2xl">
      {/* Precision hairline grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Architectural Datum Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${
                idx !== 0 ? "lg:pl-8" : ""
              } ${idx !== stats.length - 1 ? "lg:pr-8" : ""}`}
            >
              <div>
                {/* Micro Specification Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {stat.spec}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5 text-[9px] font-mono text-slate-300">
                    {stat.badge}
                  </span>
                </div>

                {/* Primary Metric Number Display */}
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {stat.unit}
                  </span>
                </div>

                <h4 className="mt-2 font-heading text-sm font-bold text-white">
                  {stat.title}
                </h4>
              </div>

              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
