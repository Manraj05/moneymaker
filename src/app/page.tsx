"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  X,
  Sparkles,
  Gauge,
  Layers,
  Search,
  Bot,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import GrimmerLogo from "@/components/agency/GrimmerLogo";

export default function GrimmerAgenticsPage() {
  const [activeTab, setActiveTab] = useState<"prototype" | "audit">("prototype");
  const [sliderPos, setSliderPos] = useState(52);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const agencyEmail = "hello@grimmeragentics.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setFormSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen lg:h-screen w-full bg-[#0A0C10] text-[#EDEDED] flex flex-col justify-between selection:bg-blue-600 selection:text-white font-body overflow-x-hidden">
      {/* Refined Ambient Glow: Subdued Deep Obsidian / Cobalt (No neon green) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/4 h-[420px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[600px] rounded-full bg-slate-500/[0.03] blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
      </div>

      {/* ======================================================== */}
      {/* 1. MINIMALIST EDITORIAL HEADER                           */}
      {/* ======================================================== */}
      <header className="relative z-20 w-full border-b border-white/[0.06] bg-[#0A0C10]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-10">
          {/* Animated Kinetic Logo */}
          <Link href="/" className="flex items-center">
            <GrimmerLogo size="md" />
          </Link>

          {/* Right Editorial Controls */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-[#667085]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>TORONTO, ON // 2026</span>
            </div>

            <button
              onClick={() => setShowInquiryModal(true)}
              className="flex-shrink-0 group relative inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#161A22] px-2.5 sm:px-3.5 py-1.5 font-mono text-[11px] sm:text-xs font-semibold text-[#EDEDED] hover:text-white hover:border-blue-500/40 transition-all active:scale-95 shadow-sm"
            >
              <span>INQUIRE</span>
              <ArrowRight className="h-3 w-3 text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. MAIN VIEWPORT (Single-screen on Desktop)             */}
      {/* ======================================================== */}
      <main className="relative z-10 flex-1 flex items-center py-8 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Thesis & Editorial Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Tracked Micro-Typography Anchor (No rounded pill) */}
              <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.22em] text-blue-400 mb-3 sm:mb-4">
                <span className="w-6 h-[1.5px] bg-blue-500/80" />
                <span>Web Architecture · SEO · GEO</span>
              </div>

              {/* Confident Headline */}
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#EDEDED] leading-[1.15] max-w-2xl break-words">
                Websites engineered for human search and autonomous agents.
              </h1>

              {/* Punchy Brief Description */}
              <p className="mt-4 text-sm sm:text-base text-[#98A2B3] leading-relaxed max-w-xl font-normal">
                We engineer sub-second web applications, programmatic regional SEO networks, and Generative Engine Optimization (GEO) so frontier models cite your business as the definitive answer.
              </p>

              {/* Editorial Stacked Capabilities (Breathing Room & Asymmetric Balance) */}
              <div className="mt-6 space-y-3 max-w-2xl">
                {/* Highlighted Flagship Pillar */}
                <div className="rounded-xl border border-white/[0.08] bg-[#11141B] p-4 transition-colors hover:border-blue-500/30">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400">
                      01 // High-Speed Web Architecture
                    </span>
                    <span className="font-mono text-[10px] text-[#667085]">
                      SUB-50MS TTFB
                    </span>
                  </div>
                  <p className="text-xs text-[#98A2B3] leading-relaxed">
                    Custom Next.js engineering with sub-second page switches, dynamic multi-tenant client previews, and zero bundle bloat.
                  </p>
                </div>

                {/* Dual Sub-Pillars in Editorial Hairline Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.05] bg-[#0E1015] p-3.5 transition-colors hover:border-white/[0.12]">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#EDEDED] mb-1">
                      02 // Programmatic Regional SEO
                    </span>
                    <p className="text-[11px] text-[#667085] leading-normal">
                      Automated multi-city landing grids capturing high-intent local search volume across entire regional markets.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.05] bg-[#0E1015] p-3.5 transition-colors hover:border-white/[0.12]">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#EDEDED] mb-1">
                      03 // Generative Engine Optimization
                    </span>
                    <p className="text-[11px] text-[#667085] leading-normal">
                      Structured semantic knowledge graph injection so ChatGPT, Perplexity, and Gemini recommend your brand first.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#EDEDED] px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-white active:scale-95 shadow-lg shadow-white/5"
                >
                  <span>Start a Sprint</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <Link
                  href="/preview/layr-epoxy"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#141720] px-4 py-2.5 font-mono text-xs font-medium text-[#98A2B3] hover:text-white hover:border-blue-500/40 transition-all"
                >
                  <span>Live Client Demo</span>
                  <ExternalLink className="h-3 w-3 text-blue-400" />
                </Link>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-transparent px-3 py-2.5 font-mono text-[11px] text-[#667085] hover:text-[#EDEDED] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-blue-400" />
                      <span className="text-blue-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-[#667085]" />
                      <span>{agencyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Right Column: Real Visual Software Artifact (No fake hacker code box) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#11141B] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                {/* Header Switcher: Native Software Artifact Controls */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-wider text-[#667085] uppercase">
                      SYSTEM ARTIFACT //
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#EDEDED]">
                      {activeTab === "prototype" ? "CLIENT_ENGINE_V1" : "LIGHTHOUSE_PERF"}
                    </span>
                  </div>

                  {/* Clean Tab Pill Toggle */}
                  <div className="flex items-center rounded-lg border border-white/[0.08] bg-[#0A0C10] p-0.5">
                    <button
                      onClick={() => setActiveTab("prototype")}
                      className={`px-3 py-1 text-[11px] font-mono font-medium rounded-md transition-all ${
                        activeTab === "prototype"
                          ? "bg-[#1C212B] text-white shadow-sm"
                          : "text-[#667085] hover:text-[#EDEDED]"
                      }`}
                    >
                      Live Prototype
                    </button>
                    <button
                      onClick={() => setActiveTab("audit")}
                      className={`px-3 py-1 text-[11px] font-mono font-medium rounded-md transition-all ${
                        activeTab === "audit"
                          ? "bg-[#1C212B] text-white shadow-sm"
                          : "text-[#667085] hover:text-[#EDEDED]"
                      }`}
                    >
                      Audit Score
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "prototype" ? (
                    <motion.div
                      key="prototype"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Interactive Mobile Split-Frame Artifact */}
                      <div className="relative w-full rounded-xl border border-white/[0.08] bg-[#0A0C10] p-3 overflow-hidden shadow-inner">
                        {/* Top Mini Notch & Brand Pill */}
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.04]">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                            <span className="font-heading text-xs font-bold text-white tracking-tight">
                              LAYR EPOXY // MISSISSAUGA
                            </span>
                          </div>
                          <span className="font-mono text-[9px] text-[#667085]">
                            INTERACTIVE PREVIEW
                          </span>
                        </div>

                        {/* Interactive Real Split-Screen Frame */}
                        <div
                          className="relative h-48 w-full rounded-lg overflow-hidden border border-white/[0.06] select-none cursor-ew-resize group"
                          onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                            setSliderPos(Math.round((x / rect.width) * 100));
                          }}
                        >
                          {/* After Image (Right / Underneath) */}
                          <Image
                            src="/after-garage.png"
                            alt="After Metallic Coating"
                            fill
                            className="object-cover pointer-events-none"
                            priority
                          />

                          {/* Before Image (Left / Clipped) */}
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                            }}
                          >
                            <Image
                              src="/before-garage.png"
                              alt="Before Raw Slab"
                              fill
                              className="object-cover pointer-events-none"
                              priority
                            />
                          </div>

                          {/* Draggable Divider Line */}
                          <div
                            className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
                            style={{ left: `${sliderPos}%` }}
                          >
                            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full border border-white/40 bg-black/80 flex items-center justify-center text-[10px] text-white backdrop-blur-md">
                              ↔
                            </div>
                          </div>

                          {/* Floating Labels */}
                          <div className="absolute top-2 left-2 z-10 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#EDEDED] border border-white/10">
                            BEFORE: BARE SLAB
                          </div>
                          <div className="absolute top-2 right-2 z-10 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-blue-300 border border-white/10">
                            AFTER: 3D RESIN
                          </div>

                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-2.5 py-0.5 font-mono text-[9px] text-[#98A2B3] border border-white/10 backdrop-blur-md">
                            Drag or hover to compare
                          </div>
                        </div>

                        {/* Direct Link to Full Staging */}
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="font-mono text-[11px] text-[#667085]">
                            Instant Floor Estimator + 36 Location Pages
                          </span>
                          <Link
                            href="/preview/layr-epoxy"
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <span>Open Staging</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="audit"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Bold Typographic Performance Score Artifact */}
                      <div className="rounded-xl border border-white/[0.08] bg-[#0A0C10] p-5">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.04]">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#98A2B3]">
                            Production Lighthouse Vitals
                          </span>
                          <span className="font-mono text-[10px] text-blue-400">
                            MEASURED AT EDGE
                          </span>
                        </div>

                        {/* Large Typographic Stat Showcase */}
                        <div className="grid grid-cols-2 gap-4 items-center">
                          <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/[0.08]">
                              <span className="font-heading text-2xl font-black text-blue-400">
                                100
                              </span>
                            </div>
                            <div>
                              <div className="font-heading text-xs font-bold text-[#EDEDED]">
                                Performance
                              </div>
                              <div className="font-mono text-[10px] text-[#667085]">
                                Next.js 15 App Router
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                              <span className="font-heading text-xl font-black text-[#EDEDED]">
                                100
                              </span>
                            </div>
                            <div>
                              <div className="font-heading text-xs font-bold text-[#EDEDED]">
                                Best Practices
                              </div>
                              <div className="font-mono text-[10px] text-[#667085]">
                                100% Valid Schema
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Metrics Hairline List */}
                        <div className="mt-5 space-y-2 pt-4 border-t border-white/[0.04] text-[11px] font-mono">
                          <div className="flex justify-between text-[#98A2B3]">
                            <span>Largest Contentful Paint (LCP)</span>
                            <span className="text-[#EDEDED] font-bold">0.38s</span>
                          </div>
                          <div className="flex justify-between text-[#98A2B3]">
                            <span>Total Blocking Time (TBT)</span>
                            <span className="text-[#EDEDED] font-bold">0 ms</span>
                          </div>
                          <div className="flex justify-between text-[#98A2B3]">
                            <span>Cumulative Layout Shift (CLS)</span>
                            <span className="text-[#EDEDED] font-bold">0.00</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Artifact Status */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#667085]">
                  <span>Stack: Next.js · TypeScript · Edge</span>
                  <span className="text-blue-400">Autonomous Deployment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 3. MINIMALIST EDITORIAL FOOTER                           */}
      {/* ======================================================== */}
      <footer className="relative z-10 w-full border-t border-white/[0.06] bg-[#0A0C10]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-10 text-[11px] font-mono text-[#667085]">
          <span>© 2026 Grimmer Agentics Inc. All systems operational.</span>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">Toronto // 43.6532° N, 79.3832° W</span>
            <button
              onClick={() => setShowInquiryModal(true)}
              className="text-[#98A2B3] hover:text-white transition-colors"
            >
              Contact
            </button>
            <Link
              href="/preview/layr-epoxy"
              className="text-[#98A2B3] hover:text-blue-400 transition-colors"
            >
              Client Staging
            </Link>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 4. FAST INQUIRY MODAL                                     */}
      {/* ======================================================== */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#11141B] p-6 sm:p-8 text-[#EDEDED] shadow-2xl">
            <button
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-5 right-5 rounded-lg p-1 text-[#667085] hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Direct Inquiries</span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
              Start a sprint with Grimmer Agentics
            </h3>

            <p className="mt-1 text-xs text-[#98A2B3]">
              Tell us about your web architecture, programmatic SEO, or GEO requirements.
            </p>

            {formSubmitted ? (
              <div className="my-8 rounded-xl border border-blue-500/30 bg-blue-500/[0.05] p-6 text-center">
                <CheckCircle2 className="mx-auto h-8 w-8 text-blue-400 mb-2" />
                <p className="font-heading text-sm font-bold text-white">
                  Message Transmitted
                </p>
                <p className="mt-1 text-xs text-[#98A2B3]">
                  We will reply within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5 text-xs">
                <div>
                  <label className="block text-[#EDEDED] font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Alex Morgan"
                    className="w-full rounded-lg border border-white/[0.08] bg-[#0A0C10] px-3.5 py-2 text-white placeholder-[#667085] focus:border-blue-500/50 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#EDEDED] font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full rounded-lg border border-white/[0.08] bg-[#0A0C10] px-3.5 py-2 text-white placeholder-[#667085] focus:border-blue-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#EDEDED] font-medium mb-1">
                      Company / Domain
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Company Inc."
                      className="w-full rounded-lg border border-white/[0.08] bg-[#0A0C10] px-3.5 py-2 text-white placeholder-[#667085] focus:border-blue-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#EDEDED] font-medium mb-1">
                    Objective (Web Dev · Local SEO · GEO)
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="We want to engineer our web platform and dominate local search..."
                    className="w-full rounded-lg border border-white/[0.08] bg-[#0A0C10] px-3.5 py-2 text-white placeholder-[#667085] focus:border-blue-500/50 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#667085]">
                    Direct: {agencyEmail}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#EDEDED] px-5 py-2 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-white transition-colors"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
