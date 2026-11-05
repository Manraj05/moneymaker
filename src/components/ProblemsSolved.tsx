"use client";

import React, { useState } from "react";
import { AlertCircle, ShieldAlert, Droplets, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

const failures = [
  {
    id: "salt",
    icon: <ShieldAlert className="h-5 w-5 text-white" />,
    title: "Winter Road Salt Pitting & Spalling",
    tagline: "Ontario winter road salt & calcium brine eat unprotected concrete pores.",
    mechanism: "Vehicles drag melting snow and corrosive road salts into the garage. Unsealed concrete absorbs the brine, which freezes, expands by 9%, and pops the concrete surface off into rough gravel pits.",
    solution: "100% solids epoxy base coat penetrates 2–3mm deep into diamond-opened pores, creating an impermeable chemical seal that brine cannot penetrate.",
    stat: "60+ Freeze-Thaw Cycles/Year in Southern Ontario",
  },
  {
    id: "peeling",
    icon: <RefreshCw className="h-5 w-5 text-white" />,
    title: "Hot-Tire Delamination & Peeling",
    tagline: "Hardware-store DIY kits soften and rip off under hot highway tires.",
    mechanism: "Highway driving heats automotive tires to 60°C–80°C. Waterborne or acid-etched paint kits soften under this thermal load. As tires cool, they chemically bond to the paint and peel it right off the slab.",
    solution: "Industrial aliphatic polyaspartic topcoats withstand temperatures up to 150°C. Zero plasticizer migration and zero hot-tire pickup guaranteed.",
    stat: "150°C Heat Resistance Rating",
  },
  {
    id: "cracks",
    icon: <AlertCircle className="h-5 w-5 text-white" />,
    title: "Structural Settlement & Thermal Cracks",
    tagline: "Hairline fissures propagate across slabs and harbor moisture.",
    mechanism: "Concrete naturally shrinks and moves with seasonal temperature swings. Unrepaired hairline cracks allow groundwater and salt to reach rebar, accelerating slab destruction.",
    solution: "We mechanically chase every crack with diamond V-blades and inject structural polyurea mender that cures to 4,500 PSI—stronger than the surrounding concrete.",
    stat: "4,500 PSI Polyurea Tensile Bond",
  },
  {
    id: "damp",
    icon: <Droplets className="h-5 w-5 text-white" />,
    title: "Basement Dampness & Efflorescence",
    tagline: "Hydrostatic vapor pressure pushes white salts and damp odors through.",
    mechanism: "Groundwater vapor forces its way up through porous basement slabs. As moisture evaporates into your living space, it leaves powdery white efflorescence and musty odors.",
    solution: "High-density moisture mitigation epoxy creates an impenetrable vapor barrier holding back up to 25 lbs of hydrostatic head pressure.",
    stat: "Up to 25 lbs/1,000 sq ft MVER Protection",
  },
];

export default function ProblemsSolved() {
  const [activeId, setActiveId] = useState("salt");
  const activeFailure = failures.find((f) => f.id === activeId) || failures[0];

  return (
    <section className="py-20 border-t border-white/10 bg-obsidian-200/50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Split-Screen Asymmetric Layout */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column (5 Cols): Editorial Anchor & Selected Detail Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Substrate Pathology
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Standard Concrete Degrades in Ontario Homes
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Concrete is a porous sponge. Without commercial mechanical profiling and 100% solid chemical isolation, Ontario winter freeze-thaw cycles destroy bare slabs within 3 to 5 years.
              </p>
            </div>

            {/* Dynamic Featured Inspection Card */}
            <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                    {activeFailure.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      Diagnostic Focus
                    </span>
                    <h3 className="font-heading text-sm font-bold text-white">
                      {activeFailure.title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-300">
                  {activeFailure.stat}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-red-400 font-bold block mb-1">
                    ⚠ How It Destroys Slabs:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeFailure.mechanism}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white font-bold block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                    Commercial Engineered Fix:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeFailure.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Problem Stack */}
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
              Select a Failure Mode to Inspect:
            </span>

            {failures.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${
                    isActive
                      ? "border-white bg-white/[0.08] shadow-xl"
                      : "border-white/10 bg-slate-900/40 hover:border-white/25 hover:bg-slate-900/70"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          isActive
                            ? "border-white bg-white text-obsidian"
                            : "border-white/15 bg-white/5 text-white group-hover:border-white/30"
                        }`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                            {item.title}
                          </h4>
                          {isActive && (
                            <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-obsidian">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 pt-1">
                      <ArrowRight
                        className={`h-4 w-4 transition-transform ${
                          isActive
                            ? "text-white translate-x-1"
                            : "text-slate-500 group-hover:text-white"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
