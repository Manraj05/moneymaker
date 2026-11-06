"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  Globe,
  Bot,
  CheckCircle2,
  X,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function GrimmerAgenticsPage() {
  const [activeTab, setActiveTab] = useState<"agentic" | "legacy">("agentic");
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
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
    <div className="relative min-h-screen lg:h-screen w-full bg-[#0B0D12] text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950 font-body overflow-x-hidden">
      {/* Subtle Ambient Grain & Dark Charcoal Glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-slate-400/[0.03] blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-600/[0.03] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* ======================================================== */}
      {/* 1. MINIMALIST HEADER                                      */}
      {/* ======================================================== */}
      <header className="relative z-10 w-full border-b border-white/[0.06] bg-[#0B0D12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-10">
          {/* Brand Lockup */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-all group-hover:border-emerald-500/40 group-hover:bg-emerald-500/[0.08]">
              <span className="font-heading text-sm font-black tracking-tighter text-white group-hover:text-emerald-400">
                G
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xs sm:text-sm font-bold tracking-tight text-white whitespace-nowrap">
                GRIMMER AGENTICS
              </span>
              <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-slate-400">
                Web Architecture · SEO · GEO
              </span>
            </div>
          </Link>

          {/* Right Status & Inquire Button */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] font-mono text-slate-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>TORONTO, ON · AVAILABLE</span>
            </div>

            <button
              onClick={() => setShowInquiryModal(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-white/20 bg-white px-3 sm:px-4 py-1.5 font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-slate-200 active:scale-95"
            >
              <span>Inquire</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. MAIN VIEWPORT (Single-screen on Desktop)             */}
      {/* ======================================================== */}
      <main className="relative z-10 flex-1 flex items-center py-8 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Thesis & Capabilities */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-5">
                <Cpu className="h-3 w-3" />
                <span>Next-Generation Digital Infrastructure</span>
              </div>

              {/* Bold Minimalist Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl">
                Websites engineered for human search and autonomous agents.
              </h1>

              {/* Punchy Brief Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                We design and build sub-second web applications, programmatic
                regional SEO matrices, and direct Generative Engine Optimization
                (GEO) so LLMs like ChatGPT, Perplexity, and Gemini recommend your
                business first.
              </p>

              {/* 3 Capabilities Minimal Spec List */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.12]">
                  <div className="flex items-center gap-2 text-white text-xs font-heading font-bold mb-1">
                    <Zap className="h-3.5 w-3.5 text-emerald-400" />
                    <span>01 / Web Architecture</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Custom Next.js engines, instant page switches, and sub-50ms TTFB.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.12]">
                  <div className="flex items-center gap-2 text-white text-xs font-heading font-bold mb-1">
                    <Globe className="h-3.5 w-3.5 text-blue-400" />
                    <span>02 / Regional SEO</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Programmatic landing networks dominating multi-city organic search.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.12]">
                  <div className="flex items-center gap-2 text-white text-xs font-heading font-bold mb-1">
                    <Bot className="h-3.5 w-3.5 text-purple-400" />
                    <span>03 / GEO Systems</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Structured LLM schema authority so AI agents cite you as the answer.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-slate-200 active:scale-95 shadow-lg shadow-white/5"
                >
                  <span>Start a Sprint</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <Link
                  href="/preview/layr-epoxy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 font-heading text-xs font-semibold text-slate-300 hover:text-white hover:border-white/20 transition-all"
                >
                  <span>Explore Live Prototype</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </Link>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-transparent px-3.5 py-2.5 font-mono text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-slate-400" />
                      <span>{agencyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Sleek System Telemetry Console */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#0E1117] p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                {/* Window Chrome / Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">
                      TELEMETRY_ENGINE.TS
                    </span>
                  </div>

                  {/* Interactive Tab Switcher */}
                  <div className="flex items-center rounded-lg border border-white/[0.08] bg-black/40 p-0.5">
                    <button
                      onClick={() => setActiveTab("agentic")}
                      className={`px-2.5 py-1 text-[10px] font-mono font-medium rounded-md transition-all ${
                        activeTab === "agentic"
                          ? "bg-white/[0.12] text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Grimmer
                    </button>
                    <button
                      onClick={() => setActiveTab("legacy")}
                      className={`px-2.5 py-1 text-[10px] font-mono font-medium rounded-md transition-all ${
                        activeTab === "legacy"
                          ? "bg-white/[0.12] text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Legacy
                    </button>
                  </div>
                </div>

                {/* Telemetry Metrics Comparison */}
                {activeTab === "agentic" ? (
                  <div className="space-y-3.5">
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                          Core Web Vitals Performance
                        </span>
                        <span className="font-mono text-xs font-bold text-emerald-300">
                          99 / 100
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-white/[0.05] overflow-hidden">
                        <div className="h-full w-[99%] rounded-full bg-emerald-400" />
                      </div>
                      <p className="mt-2 text-[11px] text-slate-400">
                        Sub-second First Contentful Paint. Zero CLS layout shifts.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300">
                          GEO / LLM Knowledge Index
                        </span>
                        <span className="font-mono text-[10px] rounded bg-purple-500/20 text-purple-300 px-1.5 py-0.5">
                          High Authority
                        </span>
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-300">
                        Direct semantic JSON-LD entity graph feeding ChatGPT, Perplexity, and Gemini answers.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300">
                          Programmatic Search Footprint
                        </span>
                        <span className="font-mono text-xs font-bold text-white">
                          30+ Live Hubs
                        </span>
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-400">
                        Automated high-intent regional landing pages capturing qualified municipal search volume.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5 opacity-80">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-red-400">
                          Legacy WordPress / Builder Performance
                        </span>
                        <span className="font-mono text-xs font-bold text-red-400">
                          42 / 100
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-white/[0.05] overflow-hidden">
                        <div className="h-full w-[42%] rounded-full bg-red-400" />
                      </div>
                      <p className="mt-2 text-[11px] text-slate-400">
                        Bloated scripts, plugin conflicts, 3.8s mobile load delay.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          AI Agent Visibility
                        </span>
                        <span className="font-mono text-[10px] rounded bg-slate-800 text-slate-400 px-1.5 py-0.5">
                          Invisible
                        </span>
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-400">
                        Unstructured generic markup ignored by frontier LLM search bots.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          Search Footprint
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          1 Single Page
                        </span>
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-400">
                        Generic contact form with zero neighborhood organic rank authority.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Console Status */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stack: Next.js 15 · Tailwind · Edge</span>
                  <span className="text-emerald-400">● 100% SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 3. MINIMALIST FOOTER                                      */}
      {/* ======================================================== */}
      <footer className="relative z-10 w-full border-t border-white/[0.06] bg-[#0B0D12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-10 text-[11px] font-mono text-slate-400">
          <span>© 2026 Grimmer Agentics Inc. All systems operational.</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Toronto · Mississauga · GTA</span>
            <button
              onClick={() => setShowInquiryModal(true)}
              className="text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors"
            >
              Contact
            </button>
            <Link
              href="/preview/layr-epoxy"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Client Preview
            </Link>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 4. FAST INQUIRY MODAL                                     */}
      {/* ======================================================== */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#0F1218] p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-5 right-5 rounded-lg p-1 text-slate-400 hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Direct Inquiries</span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
              Start a sprint with Grimmer Agentics
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Tell us about your business or schedule a 15-minute technical intro.
            </p>

            {formSubmitted ? (
              <div className="my-8 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.05] p-6 text-center">
                <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-400 mb-2" />
                <p className="font-heading text-sm font-bold text-white">
                  Message Transmitted
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  We will reply within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
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
                    className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3.5 py-2 text-white placeholder-slate-400 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
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
                      className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3.5 py-2 text-white placeholder-slate-400 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Company / Domain
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Company Inc."
                      className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3.5 py-2 text-white placeholder-slate-400 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Objective (Web Dev · Local SEO · GEO)
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="We want to rebuild our web platform and dominate local search..."
                    className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3.5 py-2 text-white placeholder-slate-400 focus:border-emerald-500/50 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Direct: {agencyEmail}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-slate-200 transition-colors"
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
