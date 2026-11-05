"use client";

import React, { useState } from "react";
import {
  Hammer,
  CheckCircle2,
  Wrench,
  Sparkles,
  Layers,
  ArrowRight,
  Shield,
  Clock,
  Gauge,
} from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ProcessBentoProps {
  client: ClientProfile;
}

interface StepDetail {
  number: string;
  phaseName: string;
  title: string;
  tradeSummary: string;
  machinery: string;
  surfaceProfile: string;
  cureSchedule: string;
  inspections: string[];
  whyItMatters: string;
}

const detailedProtocol: StepDetail[] = [
  {
    number: "01",
    phaseName: "Mechanical Profiling",
    title: "Planetary Diamond Grinding to CSP 3 Standard",
    tradeSummary:
      "We never use muriatic acid or pressure washing. Our crews operate heavy Lavina 3-head planetary diamond grinders fitted with aggressive metal-bond diamond segments to mill away weak concrete laitance, glues, and curing compounds down to clean, porous aggregate.",
    machinery: "3-Phase Lavina Planetary Grinders + HEPA 500-CFM Extractors",
    surfaceProfile: "CSP 3 (Concrete Surface Profile: Medium 60-Grit Sandpaper)",
    cureSchedule: "Immediate Mechanical Anchor (Zero Moisture Added)",
    inspections: [
      "Zero chemical etching or dangerous acid vapors inside your home",
      "Integrated industrial HEPA extractors capture 99.9% of silica dust",
      "Completely opens aggregate capillaries for deep resin penetration",
    ],
    whyItMatters:
      "Concrete laitance is a weak chalky slurry layer on top of all slabs. If you don't grind it off with diamonds, your coating bonds to chalk rather than solid concrete, guaranteeing failure within 12 months.",
  },
  {
    number: "02",
    phaseName: "Structural Mending",
    title: "Diamond V-Blade Chasing & 4,500 PSI Polyurea Stitching",
    tradeSummary:
      "Every crack, spall hole, and expansion joint is mechanically opened with diamond tuck-point blades to expose solid sound concrete. We vacuum out all pulverized debris and pressure-inject rapid-curing structural polyurea mender flush with the surrounding slab.",
    machinery: "Diamond V-Chase Saws & Dual-Cartridge Polyurea Dispenser",
    surfaceProfile: "Seamless Monolithic Slab Restoration (Flush Ground)",
    cureSchedule: "Cures to Full 4,500 PSI Strength in 15 Minutes",
    inspections: [
      "Stitches micro-fractures so they cannot telegraph through the finished coat",
      "Polyurea maintains tensile flexibility across winter temperature swings",
      "Eliminates tire-pounding expansion joint gaps for easy broom sweeping",
    ],
    whyItMatters:
      "Standard concrete patch compounds are brittle and crack under vehicular weight. Polyurea forms a chemical weld with 4,500 PSI tensile strength—stronger than the surrounding slab itself.",
  },
  {
    number: "03",
    phaseName: "Prime Fusion & Broadcast",
    title: "100% Solids Moisture Tolerant Epoxy & Rejection Broadcast",
    tradeSummary:
      "We squeegee and back-roll industrial 100% solids epoxy base coat. While the resin is wet, our technicians broadcast high-durability polymer vinyl flakes by hand until total rejection—completely blanketing the floor with zero bare spots.",
    machinery: "Calibrated Flat Squeegees & High-Nap Lint-Free Microfiber Rollers",
    surfaceProfile: "Full Broadcast Saturation to Complete Visual Rejection",
    cureSchedule: "Overnight Molecular Cross-Linking & Substrate Lock",
    inspections: [
      "Zero water or evaporative solvents; 100% of liquid volume cures to polymer",
      "Hydrostatic moisture mitigation prevents bubbling from ground dampness",
      "Provides multi-colored granite appearance and slip-resistant texture",
    ],
    whyItMatters:
      "Thin coatings broadcast flakes sparingly, leaving exposed resin prone to tire peeling. Full-broadcast to rejection creates a structural composite layer over 30 mils thick that withstands tool drops and floor jacks.",
  },
  {
    number: "04",
    phaseName: "Armor Topcoat",
    title: "Aliphatic Polyaspartic Chemical & Thermal Seal",
    tradeSummary:
      "After the base cures, we scrape and vacuum all unbonded chips flat to a smooth orange-peel texture. We then squeegee and cross-roll a heavy clear aliphatic polyaspartic topcoat that locks the flakes into an impermeable, glass-smooth, UV-stable shield.",
    machinery: "Floor Scraper Blades & Heavy-Duty Chemical-Resistant Rollers",
    surfaceProfile: "Tactile Anti-Slip Semi-Gloss Architectural Finish",
    cureSchedule: "Light Foot Traffic in 6 Hours · Vehicle Parking in 24 Hours",
    inspections: [
      "100% UV-stable chemistry: will never yellow, amber, or fade in sunlight",
      "150°C thermal peak rating: totally immune to hot highway tire pickup",
      "Impervious to brake fluid, motor oils, and corrosive winter road salts",
    ],
    whyItMatters:
      "Epoxy yellowed by garage door sunlight looks terrible after 2 years. Polyaspartic is aliphatic—meaning its molecular structure cannot be degraded by UV radiation or heat, preserving showroom brilliance for 15+ years.",
  },
];

export default function ProcessBento({ client }: ProcessBentoProps) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = detailedProtocol[activeStepIdx];

  return (
    <section
      id="process"
      className="py-24 border-t border-white/10 bg-[#090D16] relative overflow-hidden scroll-mt-20"
    >
      {/* Precision blueprint grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-mono font-semibold text-slate-300 shadow-sm backdrop-blur-xl">
            <Hammer className="h-3.5 w-3.5 text-white" />
            <span>Industrial Engineering Protocol</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            The 4-Step CSP 3 Diamond-Grinding Protocol
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Mechanical surface prep is 80% of a lifetime coating. Here is the exact diamond-grinding and chemical cross-linking standard {client.businessName} executes on every single Ontario floor.
          </p>
        </div>

        {/* Interactive Connected Horizontal Timeline Stepper */}
        <div className="mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {detailedProtocol.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStepIdx(idx)}
                  className={`group relative text-left rounded-2xl border p-4 sm:p-5 transition-all duration-200 ${
                    isActive
                      ? "border-white bg-white text-obsidian shadow-2xl scale-[1.02]"
                      : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/25 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xl sm:text-2xl font-black ${
                        isActive ? "text-obsidian" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                        isActive
                          ? "bg-obsidian text-white"
                          : "border border-white/10 bg-white/5 text-slate-400"
                      }`}
                    >
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-heading text-xs sm:text-sm font-bold leading-tight ${
                      isActive ? "text-obsidian" : "text-white"
                    }`}
                  >
                    {step.phaseName}
                  </h3>
                  <span
                    className={`font-mono text-[10px] block mt-1 ${
                      isActive ? "text-slate-700" : "text-slate-400"
                    }`}
                  >
                    {step.surfaceProfile.split("(")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Protocol Feature Stage (Deep Dramatic Card) */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0A0E1A] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Narrative Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-mono text-white">
                <span>Phase {activeStep.number} of 04</span>
                <span>·</span>
                <span>{activeStep.phaseName}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.tradeSummary}
              </p>

              {/* Execution Checkpoints */}
              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-3 font-bold">
                  Quality Assurance Checkpoints in this Phase:
                </span>
                <div className="space-y-2.5 text-xs text-slate-200">
                  {activeStep.inspections.map((check, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Engineering Specs Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-white/15 bg-slate-900/90 p-6 shadow-xl space-y-4 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 block border-b border-white/10 pb-2 font-bold">
                  Machine &amp; Material Specifications
                </span>

                <div>
                  <span className="text-slate-400 block text-[11px]">Primary Machinery:</span>
                  <span className="text-white font-bold block mt-0.5 font-sans text-xs">
                    {activeStep.machinery}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Substrate Profile Target:</span>
                  <span className="text-white font-bold block mt-0.5 font-sans text-xs">
                    {activeStep.surfaceProfile}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Cure &amp; Traffic Window:</span>
                  <span className="text-white font-bold block mt-0.5 font-sans text-xs">
                    {activeStep.cureSchedule}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10 text-slate-300 text-xs font-sans leading-relaxed">
                  <strong className="text-white font-bold block font-mono text-[11px] mb-1">
                    Why This Phase is Non-Negotiable:
                  </strong>
                  {activeStep.whyItMatters}
                </div>
              </div>

              {/* Instant Action Prompt */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 block font-heading font-bold">
                    Need on-site laser assessment?
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    Free in {client.primaryCity} &amp; surrounding areas
                  </span>
                </div>
                <a
                  href={client.phoneHref}
                  className="rounded-xl bg-white px-3.5 py-2 font-mono text-xs font-bold uppercase text-obsidian hover:bg-slate-100 transition-colors"
                >
                  Call {client.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
