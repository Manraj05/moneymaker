"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface HeroSectionProps {
  client: ClientProfile;
}

export default function HeroSection({ client }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-obsidian flex items-center pt-8 pb-16 lg:py-20">
      {/* ======================================================== */}
      {/* Full-Bleed Ken Burns Background with Dark Obsidian Overlay */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.07] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/after-garage.png"
            alt="Hamilton & GTA Showroom Epoxy Garage"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>

        {/* Deep Obsidian Gradients for Text Legibility & Architectural Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16]/95 via-[#090D16]/85 to-[#090D16]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/50" />
      </div>

      {/* ======================================================== */}
      {/* Main Content: Sleek Split Layout */}
      {/* ======================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (Max 4 Clean Elements) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Minimal Frosted-Glass Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-2xl shadow-lg">
              <span className="flex items-center text-white text-xs">
                ★ <span className="ml-1 font-mono font-bold">{client.rating.toFixed(1)}</span>
              </span>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-xs font-medium text-slate-200">
                Google Rating
              </span>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-xs font-mono text-slate-300">
                WSIB Certified
              </span>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-xs font-mono text-slate-300">
                $2M Liability
              </span>
            </div>

            {/* 2. Clean Crisp White H1 */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Garage, Basement & Commercial Epoxy Flooring in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {client.primaryCity}
              </span>
            </h1>

            {/* 3. Concise High-Conversion Subheadline */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              100% solid epoxy base coats and UV-stable polyaspartic topcoats diamond-ground to CSP 3 and rated for -25°C Ontario winters. Starting from <strong className="text-white font-mono">$4.50/sq ft</strong> installed.
            </p>

            {/* 4. Two Sleek Buttons: Pure Crisp White + Frosted Dark Glass */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#calculator"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-obsidian shadow-2xl transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02] active:scale-95"
              >
                <span>Calculate Your Floor Cost</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={client.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.05] px-5 py-3.5 font-mono text-xs sm:text-sm font-bold text-white shadow-lg backdrop-blur-2xl transition-all duration-200 hover:border-white/40 hover:bg-white/[0.1] active:scale-95"
              >
                <Phone className="h-4 w-4 text-slate-300" />
                <span>Call {client.phone}</span>
              </a>
            </div>

            {/* Subtle Quick Guarantee Pills */}
            <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Free On-Site Laser Measure
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                1-Day Turnaround Available
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                15-Year Written Warranty
              </span>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Before & After Slider */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none">
              <BeforeAfterSlider isHeroEmbedded={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
