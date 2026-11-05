"use client";

import React from "react";
import { Phone, Star, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import QuoteCalculator from "./QuoteCalculator";

interface HeroSectionProps {
  client: ClientProfile;
}

export default function HeroSection({ client }: HeroSectionProps) {
  const isEpoxy = client.niche === "epoxy";

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-obsidian-300">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Asymmetric Conversion Copy */}
          <div className="lg:col-span-7">
            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 backdrop-blur-md">
              <div className="flex text-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
              </div>
              <span className="font-mono text-xs font-semibold text-white">
                ★ {client.rating.toFixed(1)} Google Rating
              </span>
              <span className="text-slate-500">·</span>
              <span className="font-mono text-xs text-amber-bright">
                {client.reviewCount} Verified Reviews
              </span>
            </div>

            {/* Localized Bold H1 */}
            <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.08]">
              {isEpoxy ? (
                <>
                  Showroom-Grade{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-bright">
                    Epoxy & Polyaspartic
                  </span>{" "}
                  Flooring in {client.primaryCity}, ON
                </>
              ) : (
                <>
                  24-Hour Emergency{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-bright">
                    Roof Leak Repair & Shingle
                  </span>{" "}
                  Replacement in {client.primaryCity}
                </>
              )}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl">
              {client.heroSubtitle}
            </p>

            {/* 3 Technical Guarantees */}
            <div className="mt-6 space-y-3">
              {client.guarantees.map((guarantee, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#calculator"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-obsidian shadow-xl shadow-amber/20 transition-all hover:bg-amber-bright hover:shadow-2xl hover:shadow-amber/30"
              >
                <span>Get Instant Price Estimate</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={client.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-slate-900/80 px-5 py-3.5 font-mono text-sm font-bold text-white shadow transition-all hover:border-amber-500/50 hover:bg-slate-900 hover:text-amber-bright"
              >
                <Phone className="h-4 w-4 text-amber-bright" />
                <span>Call {client.phone}</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              {client.trustBadges.map((badge, idx) => (
                <span key={idx} className="flex items-center gap-1.5 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Embedded Interactive Instant Quote Calculator */}
          <div className="lg:col-span-5">
            <QuoteCalculator client={client} isEmbedded={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
