"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Flame,
  Droplets,
  Activity,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

interface FailureDiagnostic {
  id: string;
  tabLabel: string;
  title: string;
  rootCause: string;
  microscopicDestruction: string;
  contractorSolution: string;
  mechanicsTag: string;
  criticalMetric: string;
  metricLabel: string;
}

const diagnostics: FailureDiagnostic[] = [
  {
    id: "salt",
    tabLabel: "01 · Road Salt Pitting",
    title: "Ontario Winter Road Salt & Freeze-Thaw Spalling",
    rootCause: "Corrosive calcium chloride brine dragged into the garage by winter tires.",
    microscopicDestruction:
      "Concrete is naturally porous, like a hard mineral sponge. Unsealed capillaries draw in road salt brine. As temperatures oscillate across 0°C (60+ times per winter in the GTA), trapped moisture expands by 9% upon freezing, generating over 10,000 PSI internal hydraulic pressure that fractures the slab surface into loose gravel craters.",
    contractorSolution:
      "We grind away the weak top laitance to CSP 3 profile and flood the opened pores with 100% solids low-viscosity epoxy that cross-links chemically inside the concrete matrix. Brine simply puddles on top without penetrating.",
    mechanicsTag: "CSP 3 Diamond Mechanical Fusion",
    criticalMetric: "60+ Cycles",
    metricLabel: "Annual GTA Freeze-Thaw Shocks",
  },
  {
    id: "peeling",
    tabLabel: "02 · Hot-Tire Delamination",
    title: "Hot Highway Tire Torque & Plasticizer Migration",
    rootCause: "Highway-speed friction heating synthetic tire treads to 70°C–85°C.",
    microscopicDestruction:
      "When a vehicle parks after highway driving, radial tires radiate intense heat into the floor. Hardware-store acrylics and DIY waterborne kits have low glass transition temperatures—they soften, liquefy, and plasticizers migrate between tire rubber and paint. As the tire cools, it physically welds to the coating, ripping whole sheets off when you back out.",
    contractorSolution:
      "Commercial aliphatic polyaspartic topcoats feature heat stability up to 150°C and high cross-link density. Zero softening, zero plasticizer bonding, and 100% hot-tire pickup immunity guaranteed.",
    mechanicsTag: "Aliphatic Cross-Linked Chemistry",
    criticalMetric: "150°C",
    metricLabel: "Thermal Load Rating",
  },
  {
    id: "cracks",
    tabLabel: "03 · Stress & Shrink Cracks",
    title: "Subgrade Settlement & Thermal Expansion Fissures",
    rootCause: "Seasonal ground heave and slab micro-shrinkage fracturing concrete.",
    microscopicDestruction:
      "Hairline cracks are not merely cosmetic; they act as drainage conduits directing salt water straight to steel rebar. Once rebar rusts, it expands by 400%, creating catastrophic sub-surface pop-outs and structural slab displacement.",
    contractorSolution:
      "We chase every crack with diamond V-blades to sound concrete, vacuum all micro-dust with HEPA extraction, and inject low-viscosity polyurea mender that cures to 4,500 PSI tensile strength—significantly stronger than virgin 3,000 PSI concrete.",
    mechanicsTag: "V-Chase & 4,500 PSI Polyurea Weld",
    criticalMetric: "4,500 PSI",
    metricLabel: "Polyurea Tensile Strength",
  },
  {
    id: "vapor",
    tabLabel: "04 · Vapor Efflorescence",
    title: "Hydrostatic Groundwater Pressure & White Salt Crusts",
    rootCause: "Under-slab groundwater pushing dissolved mineral salts upward.",
    microscopicDestruction:
      "Subterranean water vapor constantly migrates upward through concrete slabs under hydrostatic head pressure. When vapor hits standard latex paint, trapped moisture cannot escape, generating vapor blistering, mold, and white mineral efflorescence crusts that destroy adhesion.",
    contractorSolution:
      "We apply a dedicated 100% solids epoxy moisture vapor barrier rated to suppress up to 25 lbs of hydrostatic moisture vapor emission rate (MVER) per 1,000 sq ft over 24 hours.",
    mechanicsTag: "25 lb MVER Hydrostatic Suppressant",
    criticalMetric: "25 lbs",
    metricLabel: "MVER Vapor Barrier Rating",
  },
];

export default function ProblemsSolved() {
  const [selectedId, setSelectedId] = useState("salt");
  const activeDiag = diagnostics.find((d) => d.id === selectedId) || diagnostics[0];

  return (
    <section className="relative py-24 bg-[#0A0D16] border-b border-slate-800 text-white overflow-hidden scroll-mt-20">
      {/* Precision ambient glow */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 text-xs font-mono font-semibold text-emerald-400 shadow-sm backdrop-blur-md">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            <span>Forensic Concrete Pathology</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Why Bare Concrete Fails in Southern Ontario
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Ontario is one of the harshest environments on earth for concrete slabs. Understanding the physics of substrate degradation explains why paint kits peel and why diamond-profiled polyaspartic lasts for decades.
          </p>
        </div>

        {/* Interactive Diagnostic Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {diagnostics.map((diag) => {
            const isSelected = selectedId === diag.id;
            return (
              <button
                key={diag.id}
                type="button"
                onClick={() => setSelectedId(diag.id)}
                className={`group relative rounded-xl border px-4 py-2.5 text-left font-mono text-xs transition-all duration-200 ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-bold shadow-md scale-[1.02]"
                    : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                <span>{diag.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Split-Screen Diagnostic Stage */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Panel (7 Cols): Forensic Breakdown & Contractor Solution */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#111522] p-6 sm:p-9 shadow-xl">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  Primary Failure Mode
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 font-mono text-xs font-semibold text-slate-200">
                  {activeDiag.mechanicsTag}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  {activeDiag.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  <strong className="text-white font-bold">Root Cause: </strong>
                  {activeDiag.rootCause}
                </p>
              </div>

              {/* Forensic Physics Analysis */}
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                  How Unprotected Concrete Degrades Micro-Structurally:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeDiag.microscopicDestruction}
                </p>
              </div>

              {/* Commercial Engineering Fix */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  The Commercial Preparation &amp; Polymer Cure:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeDiag.contractorSolution}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400">
                Backed by our comprehensive 15-year delamination warranty
              </span>
              <a
                href="#calculator"
                className="font-mono text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Calculate Floor Prep Cost →
              </a>
            </div>
          </div>

          {/* Right Panel (5 Cols): Architectural Cross-Section Schematic */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#111522] p-6 sm:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-emerald-400" />
                  <span className="font-heading text-sm font-bold text-white">
                    Slab Profile Cross-Section
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  Engineering Schematic
                </span>
              </div>

              {/* Visual Multi-Layer Stratum Diagram */}
              <div className="space-y-3 font-mono text-xs">
                {/* Stratum 01: Clear Armor Topcoat */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Topcoat: Aliphatic Polyaspartic (4–6 Mils)</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      100% UV &amp; Heat Safe
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-300 font-sans leading-relaxed">
                    Resists 150°C hot tires, brake fluids, engine oils, and calcium chloride road salt slush.
                  </p>
                </div>

                {/* Stratum 02: Full Broadcast Chip Matrix */}
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Decorative Matrix: Vinyl Chip Broadcast</span>
                    <span className="text-[10px] font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                      100% Saturation
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-300 font-sans leading-relaxed">
                    Provides multi-dimensional texture, hides concrete imperfections, and guarantees non-slip traction.
                  </p>
                </div>

                {/* Stratum 03: 100% Solids Deep Penetrating Base */}
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Prime Base: 100% Solids Epoxy Primer</span>
                    <span className="text-[10px] font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                      2–3mm Infiltration
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-300 font-sans leading-relaxed">
                    Fuses mechanically into opened concrete pores. Resists hydrostatic moisture back-pressure.
                  </p>
                </div>

                {/* Stratum 04: CSP 3 Diamond-Profiled Concrete */}
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-300">Substrate: CSP 3 Diamond-Ground Slab</span>
                    <span className="text-[10px] font-mono text-slate-400">Medium Sandpaper Profile</span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-400 font-sans leading-relaxed">
                    Weak surface laitance, oils, and curing agents completely milled away using heavy planetary grinders.
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Callout Card */}
            <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0A0D16] p-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                  {activeDiag.metricLabel}
                </span>
                <span className="font-heading text-2xl font-black text-white">
                  {activeDiag.criticalMetric}
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
