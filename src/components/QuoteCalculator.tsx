"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Clock,
  MapPin,
  Flame,
} from "lucide-react";
import { ClientProfile, PricingTier } from "@/lib/client";
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
    initialSqft ||
    (client.niche === "epoxy" ? 450 : 1800);

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
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setNotes("");
  };

  return (
    <div
      id="calculator"
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-obsidian-300 p-5 sm:p-7 shadow-2xl backdrop-blur-xl ${
        isEmbedded ? "w-full" : "max-w-4xl mx-auto my-12"
      }`}
    >
      {/* Background Accent Gradients */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative mb-6 border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-bright">
            <Calculator className="h-3.5 w-3.5" />
            <span>60-Second Instant GTA Price Calculator</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-mono text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            2026 Ontario Labor & Material Rates
          </span>
        </div>
        <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
          Estimate Your {client.niche === "epoxy" ? "Floor Coating" : "Roof Replacement"} in {city}, ON
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-400">
          Select your square footage and finish tier for transparent, real-time Ontario contractor pricing.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Step 1: Square Footage Slider & Presets */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              1. Project Size:
            </label>
            <span className="font-mono text-lg font-bold text-amber-bright">
              {sqft.toLocaleString()} <span className="text-xs font-normal text-slate-400">SQ FT</span>
            </span>
          </div>

          <div className="mt-3">
            <input
              type="range"
              min={client.niche === "epoxy" ? 200 : 800}
              max={client.niche === "epoxy" ? 2500 : 3500}
              step={25}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
            <div className="mt-1.5 flex justify-between text-[11px] font-mono text-slate-500">
              <span>{client.niche === "epoxy" ? "200 sq ft" : "800 sq ft"}</span>
              <span>Typical GTA Average: {client.niche === "epoxy" ? "450 sq ft" : "1,800 sq ft"}</span>
              <span>{client.niche === "epoxy" ? "2,500 sq ft" : "3,500 sq ft"}</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="mt-3.5 flex flex-wrap gap-2">
            {client.calculatorPresets.map((preset) => {
              const isActive = sqft === preset.sqft;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setSqft(preset.sqft)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "border-amber bg-amber/20 text-white font-semibold shadow-sm"
                      : "border-white/10 bg-slate-900/60 text-slate-400 hover:border-white/20 hover:text-slate-200"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Material Tier */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
            2. Select Material System:
          </label>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {client.pricingTiers.map((tier) => {
              const isSelected = selectedTierId === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`relative cursor-pointer rounded-xl border p-3.5 transition-all ${
                    isSelected
                      ? "border-amber bg-amber-500/10 shadow-md shadow-amber/10"
                      : "border-white/10 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/80"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-amber to-amber-bright px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-obsidian shadow-sm">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${isSelected ? "text-amber-bright" : "text-white"}`}>
                      {tier.name}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      ${tier.minRate.toFixed(2)}–${tier.maxRate.toFixed(2)}/sf
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400 leading-tight">
                    {tier.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Animated Price Output Box */}
        <div className="rounded-xl border border-amber-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 p-4 sm:p-5 text-center shadow-inner">
          <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
            Estimated Ontario Contractor Price Range (CAD)
          </span>
          <div className="mt-2 flex items-baseline justify-center gap-2 font-mono">
            <span className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {formatCAD(minPrice)}
            </span>
            <span className="text-lg font-bold text-amber">—</span>
            <span className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-amber-bright">
              {formatCAD(maxPrice)}
            </span>
            <span className="text-xs text-slate-400 font-mono">CAD</span>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Includes All Mechanical Prep & Labor
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              15-Year Workmanship Warranty
            </span>
            <span>•</span>
            <span className="font-mono text-slate-400">
              ~${((currentTier.minRate + currentTier.maxRate) / 2).toFixed(2)}/sq ft Avg
            </span>
          </div>
        </div>

        {/* Step 3: Lead Capture / Lock In Estimate */}
        <div className="border-t border-white/10 pt-5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Lock In This Estimate & Book Free On-Site Measure
                </span>
                <span className="text-[11px] font-mono text-amber-bright">
                  ✓ Price Locked for 30 Days
                </span>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (Cell) *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber font-mono"
                  />
                </div>
                <div>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
                  >
                    {client.serviceAreas.map((area) => (
                      <option key={area} value={area} className="bg-slate-900 text-white">
                        {area}, ON
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Street Address or Project Notes (e.g., Garage has oil stains / active roof leak)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-amber py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wider text-obsidian shadow-lg shadow-amber/20 transition-all hover:bg-amber-bright hover:shadow-xl hover:shadow-amber/30 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-obsidian border-t-transparent" />
                    Locking In Estimate...
                  </span>
                ) : (
                  <>
                    <span>Lock In Estimate ({formatCAD(minPrice)} – {formatCAD(maxPrice)}) & Request Laser Measure</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  No pushy sales calls. Local Ontario crews only.
                </span>
                <span className="hidden sm:inline">100% Free · No Obligation</span>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-5 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <span className="rounded bg-emerald-500/20 px-2.5 py-1 font-mono text-xs font-bold text-emerald-300">
                Estimate Reference: #{estimateRef}
              </span>
              <h4 className="mt-2 font-heading text-lg font-bold text-white">
                Estimate Locked: {formatCAD(minPrice)} – {formatCAD(maxPrice)} CAD
              </h4>
              <p className="mt-1 text-xs text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. An estimator from{" "}
                <strong className="text-amber">{client.businessName}</strong> is reviewing your{" "}
                {sqft} sq ft {currentTier.name} project for {city}, ON and will call{" "}
                <strong className="text-white font-mono">{phone}</strong> shortly to confirm your free on-site measure.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={client.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber px-4 py-2 font-mono text-xs font-bold text-obsidian shadow hover:bg-amber-bright"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call Now for Priority Dispatch: {client.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg border border-white/10 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Recalculate Another Size
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
