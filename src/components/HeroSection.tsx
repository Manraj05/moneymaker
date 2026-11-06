"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star } from "lucide-react";
import { ClientProfile } from "@/lib/client";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface HeroSectionProps {
  client: ClientProfile;
}

export default function HeroSection({ client }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-obsidian flex items-center py-6 sm:py-10 lg:py-16">
      {/* ======================================================== */}
      {/* Full-Bleed Ken Burns Background with Dark Obsidian Overlay */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
            alt={`${client.businessName} - ${client.primaryCity} Showroom Epoxy & Surface Coatings`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Deep Obsidian Gradients for Text Legibility & Architectural Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16]/95 via-[#090D16]/85 to-[#090D16]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/60" />
      </div>

      {/* ======================================================== */}
      {/* Main Content: Sleek Split Layout */}
      {/* ======================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (Clean, Mobile-Optimized Elements) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 min-w-0 w-full">
            {/* 1. Minimal Frosted-Glass Badge (Flex-wrap safe for mobile screens) */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-2xl shadow-lg text-[11px] sm:text-xs">
              <span className="flex items-center text-white font-bold">
                ★ <span className="ml-1 font-mono">{client.rating.toFixed(1)}</span>
              </span>
              <span className="text-white/30">·</span>
              <span className="text-slate-200">{client.reviewCount} Verified Reviews</span>
              <span className="text-white/30">·</span>
              <span className="font-mono text-slate-300">{client.primaryCity} &amp; GTA</span>
              <span className="text-white/30 hidden xs:inline">·</span>
              <span className="font-mono text-slate-300 hidden xs:inline">15-Yr Warranty</span>
            </div>

            {/* 2. Responsive H1 Structured with Clean Line Breaks */}
            <h1 className="font-heading text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
              {client.heroHeadline ? (
                <span>{client.heroHeadline}</span>
              ) : (
                <>
                  <span>Garage, Basement &amp; Commercial</span>{" "}
                  <span className="block mt-0.5 sm:mt-1">
                    Epoxy Flooring in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                      {client.primaryCity}
                    </span>
                  </span>
                </>
              )}
            </h1>

            {/* 3. Concise High-Conversion Subheadline */}
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-xl">
              {client.heroSubtitle ||
                "100% solid epoxy base coats and UV-stable polyaspartic topcoats diamond-ground to CSP 3 and rated for -25°C Ontario winters. Starting from $4.50/sq ft installed."}
            </p>

            {/* 4. Two Sleek Buttons: Pure Crisp White + Frosted Dark Glass */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#calculator"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-obsidian shadow-2xl transition-all duration-200 hover:bg-slate-100 active:scale-95 text-center"
              >
                <span>Calculate Your Floor Cost</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={client.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-5 py-3.5 font-mono text-xs sm:text-sm font-bold text-white shadow-lg backdrop-blur-2xl transition-all duration-200 hover:border-white/40 hover:bg-white/[0.1] active:scale-95 text-center"
              >
                <Phone className="h-4 w-4 text-slate-300" />
                <span>Call {client.phone}</span>
              </a>
            </div>

            {/* Subtle Quick Guarantee Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-mono text-slate-400">
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
          <div className="lg:col-span-6 flex justify-center w-full min-w-0">
            <div className="w-full max-w-full sm:max-w-lg lg:max-w-none">
              <BeforeAfterSlider isHeroEmbedded={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
