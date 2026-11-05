"use client";

import React from "react";
import { AlertCircle, ShieldAlert, Droplets, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: <AlertCircle className="h-5 w-5 text-slate-300" />,
    title: "Cracked & Stained Concrete",
    problem: "Deep motor oil saturation, settlement cracks, and unsightly dark fissures running across your garage slab.",
    solution: "We diamond-chase and stitch fractures with structural polyurea mender that cures harder than the original slab.",
  },
  {
    icon: <ShieldAlert className="h-5 w-5 text-slate-300" />,
    title: "Winter Salt Pitting & Spalling",
    problem: "Ontario road salt and calcium chloride brine soak into concrete pores, freezing and flaking the surface into rough gravel.",
    solution: "100% solids base coats penetrate concrete pores to form an impermeable hydraulic seal immune to freeze-thaw cycles.",
  },
  {
    icon: <Droplets className="h-5 w-5 text-slate-300" />,
    title: "Damp Basements & Dusting",
    problem: "Moisture vapor pushing upward causes damp musty odors, white powdery efflorescence, and chalky dust tracked into the home.",
    solution: "Hydrostatic moisture vapor barrier epoxy completely locks down dampness and creates a seamless, sanitary living floor.",
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-slate-300" />,
    title: "Peeling Old Paint & DIY Kits",
    problem: "Hardware-store waterborne paint kits or acid-etched coatings peeling under hot tires after just one winter.",
    solution: "Commercial CSP 3 mechanical diamond grinding removes failing coatings and provides a lifetime mechanical profile.",
  },
];

export default function ProblemsSolved() {
  return (
    <section className="py-16 border-t border-white/10 bg-obsidian-200/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Engineered Substrate Restoration
          </span>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-white">
            4 Concrete Failures We Permanently Solve
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            We don&apos;t just cover up bad concrete—our commercial grinding equipment repairs the root structural cause.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-slate-900/90"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] mb-4">
                {item.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {item.problem}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-300">
                <strong className="text-white block font-mono text-[10px] uppercase mb-0.5">
                  Permanent Solution:
                </strong>
                {item.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
