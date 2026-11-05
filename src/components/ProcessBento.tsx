"use client";

import React, { useState } from "react";
import { Hammer, CheckCircle2, Shield, Wrench, Sparkles, Layers, ArrowRight } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ProcessBentoProps {
  client: ClientProfile;
}

const detailedStepSpecs: Record<string, { equipment: string; profile: string; cureTime: string; highlight: string }> = {
  "01": {
    equipment: "3-Phase Lavina Planetary Diamond Grinders with HEPA Vacuums",
    profile: "CSP 3 Mechanical Anchor (Medium Sandpaper Texture)",
    cureTime: "Immediate Mechanical Bond",
    highlight: "Removes all weak laitance, oils, and curing compounds without acid.",
  },
  "02": {
    equipment: "Diamond V-Chase Blades & Dual-Component Polyurea Gun",
    profile: "4,500 PSI Tensile Polymer Weld",
    cureTime: "Rapid Cure in 15 Minutes",
    highlight: "Stitches cracks and fills salt pockmarks flush with the floor.",
  },
  "03": {
    equipment: "Notched Squeegees & 100% Solids Moisture Tolerant Epoxy",
    profile: "Full Saturation Vinyl Chip Broadcast to Complete Rejection",
    cureTime: "Overnight Chemical Crosslink",
    highlight: "Forms an impermeable barrier holding back 25 lbs hydrostatic pressure.",
  },
  "04": {
    equipment: "Floor Scrapers & Aliphatic UV-Stable Polyaspartic Clear Topcoat",
    profile: "Mirror-Gloss Textured Slip-Resistant Seal",
    cureTime: "Walk in 6 Hours · Park in 24 Hours",
    highlight: "150°C heat rating, hot-tire pickup immune, 15-year delamination warranty.",
  },
};

export default function ProcessBento({ client }: ProcessBentoProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = client.processSteps;
  const currentStep = steps[activeStepIndex] || steps[0];
  const currentSpec = detailedStepSpecs[currentStep.number] || detailedStepSpecs["01"];

  return (
    <section id="process" className="py-24 border-t border-white/10 bg-obsidian-300 relative overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-mono font-semibold text-slate-300 shadow-sm backdrop-blur-xl">
            <Hammer className="h-3.5 w-3.5 text-white" />
            <span>Industrial Engineering Standards</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            The 4-Step CSP 3 Diamond-Grinding Protocol
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Prep is 80% of a lifetime floor. Here is the exact mechanical engineering protocol {client.businessName} executes on every single slab.
          </p>
        </div>

        {/* Connected Horizontal Timeline Stepper */}
        <div className="mb-10">
          {/* Guide Line & Stepper Buttons */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative text-left rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${
                    isActive
                      ? "border-white bg-white/[0.1] shadow-2xl scale-[1.02]"
                      : "border-white/10 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xl sm:text-2xl font-black transition-colors ${
                        isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                        isActive
                          ? "bg-white text-obsidian"
                          : "border border-white/10 bg-white/5 text-slate-400"
                      }`}
                    >
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xs sm:text-sm font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400 block mt-1">
                    {step.subtitle}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute -bottom-[1px] left-4 right-4 h-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Stage (Deep Dramatic Card) */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Column (7 Cols): Step Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono text-white">
                <span>Phase {currentStep.number} of 04</span>
                <span>·</span>
                <span>{currentStep.subtitle}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                  Key Technical Guarantees in this Step:
                </span>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                    <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                    <span>Zero acid washing or chemical etching</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                    <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                    <span>Integrated HEPA dust-free air filtration</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                    <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                    <span>Complete crack &amp; joint reinforcement</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                    <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                    <span>15-Year delamination warranty certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 Cols): Live Technical Spec Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-slate-900/90 p-6 shadow-xl space-y-4 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 block border-b border-white/10 pb-2">
                  Technical Engineering Specifications
                </span>

                <div>
                  <span className="text-slate-400 block text-[11px]">Heavy Equipment:</span>
                  <span className="text-white font-bold block mt-0.5">{currentSpec.equipment}</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Substrate Profile:</span>
                  <span className="text-white font-bold block mt-0.5">{currentSpec.profile}</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Cure Schedule:</span>
                  <span className="text-white font-bold block mt-0.5">{currentSpec.cureTime}</span>
                </div>

                <div className="pt-2 border-t border-white/10 text-slate-300 text-[11px] leading-relaxed">
                  <strong className="text-white font-bold">Why it matters: </strong>
                  {currentSpec.highlight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
