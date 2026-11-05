"use client";

import React from "react";
import { ThermometerSnowflake, ShieldCheck, Flame, Droplets } from "lucide-react";

const stats = [
  {
    icon: <ThermometerSnowflake className="h-5 w-5 text-slate-300" />,
    value: "-25°C",
    unit: "Winter Certified",
    label: "Freeze-Thaw Resilient",
    desc: "Absorbs thermal shock without micro-fissuring or lifting",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-slate-300" />,
    value: "15-Year",
    unit: "Delamination",
    label: "Written Warranty",
    desc: "100% contractor-backed anti-peeling protection",
  },
  {
    icon: <Flame className="h-5 w-5 text-slate-300" />,
    value: "150°C",
    unit: "Heat Rating",
    label: "Hot-Tire Immune",
    desc: "Zero softening or pickup from hot summer tire tread",
  },
  {
    icon: <Droplets className="h-5 w-5 text-slate-300" />,
    value: "100%",
    unit: "Solids Resin",
    label: "Zero Water Dilution",
    desc: "Impermeable barrier against winter road-salt brine",
  },
];

export default function TrustStatsBand() {
  return (
    <section className="relative z-20 -mt-2 border-y border-white/10 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950 py-8 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${
                idx !== 0 ? "lg:pl-6" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04]">
                  {stat.icon}
                </div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 font-mono">
                  <span className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
