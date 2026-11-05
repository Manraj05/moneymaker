"use client";

import React from "react";
import { ShieldCheck, Award, Zap, ThermometerSnowflake, Hammer, CheckCircle2 } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ProcessBentoProps {
  client: ClientProfile;
}

export default function ProcessBento({ client }: ProcessBentoProps) {
  const isEpoxy = client.niche === "epoxy";

  return (
    <section id="process" className="py-20 border-t border-white/10 bg-obsidian-300 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-bright">
            <Hammer className="h-3.5 w-3.5" />
            <span>Industrial Engineering Standards</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {isEpoxy
              ? "The 4-Step Diamond Mechanical Bonding Protocol"
              : "The 4-Step Weather-Armor Roofing Specification"}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Why {client.businessName} floors and roofs outlast standard retail contractors by decades.
            Zero shortcuts, heavy equipment, and commercial-grade chemical chemistry.
          </p>
        </div>

        {/* 4-Step Bento Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {client.processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-slate-900/95 hover:shadow-xl hover:shadow-amber/5"
            >
              {/* Step Number Top */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-mono text-2xl font-black text-amber-bright/80 group-hover:text-amber">
                    {step.number}
                  </span>
                  <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                    Step {idx + 1} of 4
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-bright">
                    {step.subtitle}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-white group-hover:text-amber-50 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Bottom Spec Badge */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                <span>
                  {idx === 0 && (isEpoxy ? "CSP 2-3 Profile Guaranteed" : "100% Rotten Wood Replaced")}
                  {idx === 1 && (isEpoxy ? "Flexible Polyurea Stitching" : "Self-Adhered Ice Membrane")}
                  {idx === 2 && (isEpoxy ? "Full Broadcast to Rejection" : "Class-F 130 MPH Wind Rated")}
                  {idx === 3 && (isEpoxy ? "100% UV-Stable Polyaspartic" : "3-Pass Magnetic Nail Sweep")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Climate & Engineering Bento Feature Cards */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Card 1: Ontario Freeze-Thaw Resilience */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/20 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-4">
              <ThermometerSnowflake className="h-5 w-5" />
            </div>
            <h4 className="font-heading text-base font-bold text-white">
              Ontario Freeze-Thaw Thermal Armor
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Southern Ontario endures over 60 rapid freeze-thaw cycles every winter. Our materials are rated from -35°C to +35°C, expanding and contracting with the substrate without cracking, delaminating, or ice damming.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Tested to ASTM D4541 Standards</span>
            </div>
          </div>

          {/* Card 2: 15-Year Workmanship Warranty */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/20 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-bright mb-4">
              <Award className="h-5 w-5" />
            </div>
            <h4 className="font-heading text-base font-bold text-white">
              Written 15-Year Workmanship Guarantee
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              We stand behind every square foot. If our coatings peel, hot-tires lift our topcoat, or our roofing shingles fail due to installation error within 15 years, our crew repairs it at zero expense to you.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-amber-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              <span>Direct Contractor-Backed Certificate</span>
            </div>
          </div>

          {/* Card 3: WSIB & Safety Compliance */}
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/20 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="font-heading text-base font-bold text-white">
              WSIB Registered & $5M Liability Insured
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              You are 100% protected. Every crew member on your residential or commercial property is fully covered under the Ontario Workplace Safety and Insurance Board with active clearance certificates.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Full Clearance Certificates Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
