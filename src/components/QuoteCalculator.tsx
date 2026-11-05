"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MapPin,
  Check,
} from "lucide-react";
import { ClientProfile } from "@/lib/client";
import { formatCAD } from "@/lib/utils";

interface QuoteCalculatorProps {
  client: ClientProfile;
  initialSqft?: number;
  initialTierId?: string;
  isEmbedded?: boolean;
}

export default function QuoteCalculator({
  client,
  initialSqft,
  initialTierId,
  isEmbedded = false,
}: QuoteCalculatorProps) {
  const defaultSqft =
    initialSqft || (client.niche === "epoxy" ? 450 : 1800);

  const [sqft, setSqft] = useState<number>(defaultSqft);
  const [selectedTierId, setSelectedTierId] = useState<string>(
    initialTierId ||
      client.pricingTiers.find((t) => t.popular)?.id ||
      client.pricingTiers[0].id
  );

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(client.primaryCity);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimateRef, setEstimateRef] = useState("");

  const currentTier =
    client.pricingTiers.find((t) => t.id === selectedTierId) ||
    client.pricingTiers[0];

  const minPrice = Math.round(sqft * currentTier.minRate);
  const maxPrice = Math.round(sqft * currentTier.maxRate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = `ON-${Math.floor(1000 + Math.random() * 9000)}`;
      setEstimateRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setNotes("");
  };

  return (
    <section
      id="calculator"
      className="py-20 border-t border-white/10 bg-obsidian-200 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Instant 60-Second Ballpark
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Floor Cost & Investment Calculator
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Select your square footage and finish system. Calculated using 2026 Ontario commercial-grade contractor rates.
          </p>
        </div>

        {/* Full-Width Split Layout */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN (7 Cols): Slider + 3 Full-Width Horizontal Rows */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 space-y-7">
            {/* 1. Square Footage Slider & Presets */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  1. Choose Slab Square Footage
                </span>
                <div className="flex items-baseline gap-1.5 font-mono">
                  <span className="text-2xl font-black text-white">
                    {sqft.toLocaleString()}
                  </span>
                  <span className="text-xs font-normal text-slate-400">SQ FT</span>
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="range"
                  min={client.niche === "epoxy" ? 200 : 800}
                  max={client.niche === "epoxy" ? 2500 : 3500}
                  step={25}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-500">
                  <span>{client.niche === "epoxy" ? "200 sq ft" : "800 sq ft"}</span>
                  <span>Typical GTA 2-Car: 450 sq ft</span>
                  <span>{client.niche === "epoxy" ? "2,500 sq ft" : "3,500 sq ft"}</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                {client.calculatorPresets.map((preset) => {
                  const isActive = sqft === preset.sqft;
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setSqft(preset.sqft)}
                      className={`rounded-lg border px-3.5 py-1.5 text-xs font-mono transition-all ${
                        isActive
                          ? "border-white bg-white text-obsidian font-bold shadow-md"
                          : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Full-Width Horizontal Selectable Rows (Zero Text Collision!) */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                2. Select Your Floor Finish System
              </span>

              {client.pricingTiers.map((tier) => {
                const isSelected = selectedTierId === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTierId(tier.id)}
                    className={`group relative cursor-pointer rounded-2xl border p-5 backdrop-blur-xl transition-all duration-200 ${
                      isSelected
                        ? "border-white bg-white/[0.08] shadow-2xl"
                        : "border-white/10 bg-slate-900/50 hover:border-white/20 hover:bg-slate-900/80"
                    }`}
                  >
                    {/* Header Row: Radio + Title + Popular Tag + Price */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        {/* Custom Radio Button */}
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                            isSelected
                              ? "border-white bg-white text-obsidian"
                              : "border-white/30 bg-transparent group-hover:border-white"
                          }`}
                        >
                          {isSelected && <div className="h-2 w-2 rounded-full bg-obsidian" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-sm sm:text-base font-bold text-white">
                              {tier.name}
                            </span>
                            {tier.popular && (
                              <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                                Most Popular
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {tier.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div className="sm:text-right font-mono self-start sm:self-auto pl-8 sm:pl-0">
                        <span className="text-sm sm:text-base font-bold text-white">
                          ${tier.minRate.toFixed(2)}–${tier.maxRate.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-400"> / sq ft</span>
                      </div>
                    </div>

                    {/* Features list inside row with zero collision */}
                    <div className="mt-3.5 pt-3 border-t border-white/5 pl-8 grid sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-300">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-white flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (5 Cols): Live Price Box + 3-Field Booking Form */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live CAD Estimate Box */}
            <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-slate-900/90 to-obsidian p-6 shadow-2xl backdrop-blur-2xl text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Live 2026 Ontario Ballpark Estimate
              </span>

              <div className="mt-3 flex items-baseline justify-center gap-2 font-mono">
                <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {formatCAD(minPrice)}
                </span>
                <span className="text-xl text-slate-500 font-light">—</span>
                <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {formatCAD(maxPrice)}
                </span>
                <span className="text-xs text-slate-400 font-mono">CAD</span>
              </div>

              {/* Breakdown details */}
              <div className="mt-4 rounded-xl border border-white/5 bg-slate-950/60 p-3.5 text-xs text-slate-300 space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Size:</span>
                  <span className="text-white font-semibold">{sqft} sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected System:</span>
                  <span className="text-white font-semibold">{currentTier.name.split(" ")[0]} Finish</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Turnaround Time:</span>
                  <span className="text-white">1–2 Days</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-1.5 text-slate-200">
                  <span className="text-slate-400">Warranty:</span>
                  <span className="text-white font-semibold">15-Year Delamination</span>
                </div>
              </div>

              {/* Form / Submitted State */}
              <div className="mt-6 border-t border-white/10 pt-5 text-left">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Lock In This Ballpark & Book Free Laser Measure
                    </span>

                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number (Cell) *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 font-mono focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                      />
                    </div>

                    <div>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3.5 py-3 text-xs sm:text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                      >
                        {client.serviceAreas.map((area) => (
                          <option key={area} value={area} className="bg-slate-900 text-white">
                            {area}, ON
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-obsidian shadow-2xl transition-all hover:bg-slate-100 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Locking In Ballpark...</span>
                      ) : (
                        <>
                          <span>Lock In Estimate & Book Measure</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                      <span>✓ No pushy sales calls</span>
                      <span>✓ 100% Free & No Obligation</span>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border border-white/20 bg-white/[0.04] p-5 text-center"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-obsidian mb-2.5">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 font-mono text-xs text-white">
                      Ref: #{estimateRef}
                    </span>
                    <h4 className="mt-2 font-heading text-base font-bold text-white">
                      Estimate Locked: {formatCAD(minPrice)} – {formatCAD(maxPrice)}
                    </h4>
                    <p className="mt-1 text-xs text-slate-300">
                      Thank you, <strong className="text-white">{name}</strong>. Estimator from{" "}
                      <strong className="text-white">{client.businessName}</strong> will call{" "}
                      <strong className="text-white font-mono">{phone}</strong> shortly to confirm your laser measurement in {city}, ON.
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      <a
                        href={client.phoneHref}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-mono text-xs font-bold text-obsidian shadow"
                      >
                        <PhoneCall className="h-3.5 w-3.5" />
                        <span>Direct Call: {client.phone}</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-[11px] text-slate-400 hover:text-white"
                      >
                        Recalculate Another Size
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
