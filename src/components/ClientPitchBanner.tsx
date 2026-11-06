"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Phone,
  CheckCircle2,
  X,
  Eye,
  EyeOff,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Star,
  Layers,
  ArrowRight,
} from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ClientPitchBannerProps {
  client: ClientProfile;
}

export default function ClientPitchBanner({ client }: ClientPitchBannerProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // If user minimized the banner, render a tiny floating badge in the bottom-right corner
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-3.5 py-1.5 text-[11px] font-mono font-medium text-slate-200 shadow-xl backdrop-blur-md transition-all hover:border-slate-500 hover:text-white"
        >
          <Sparkles className="h-3 w-3 text-emerald-400" />
          <span>Client Pitch Mode: {client.businessName}</span>
          <Eye className="h-3 w-3 text-slate-400 ml-1" />
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Top Fixed Ribbon */}
      <aside
        aria-label="Client Website Concept Banner"
        className="relative z-50 border-b border-emerald-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-3 py-2 text-xs shadow-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          {/* Left: Indicator & Pitch Context */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>

            <span className="rounded bg-emerald-950/80 border border-emerald-500/40 px-1.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-wider flex-shrink-0">
              Client Concept
            </span>

            <p className="truncate text-slate-200 text-[11px] sm:text-xs">
              Live Preview Prepared for{" "}
              <strong className="text-white font-bold">{client.businessName}</strong>{" "}
              <span className="text-slate-400 hidden md:inline">
                ({client.primaryCity}, ON · {client.rating.toFixed(1)}★ Google Rating)
              </span>
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-slate-950 shadow-sm transition-all hover:bg-emerald-400 active:scale-95"
            >
              <span>Preview Walkthrough</span>
              <ArrowRight className="h-3 w-3" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              title="Hide pitch bar for clean preview"
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Interactive Pitch Walkthrough Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Tailored Contractor Sales Engine</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
              Prepared for {client.businessName}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              {client.address} · {client.primaryCity}, {client.province}
            </p>

            {/* Differentiators Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 font-bold text-slate-100 font-heading">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>Real Google Reviews Verified</span>
                </div>
                <p className="mt-1.5 text-slate-400 text-[11px] leading-relaxed">
                  Directly highlights your 5.0★ rating with real customer feedback on your flake porches, artisan countertops, and garage jobs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 font-bold text-slate-100 font-heading">
                  <Layers className="h-4 w-4 text-emerald-400" />
                  <span>Instant 60-Sec Estimator</span>
                </div>
                <p className="mt-1.5 text-slate-400 text-[11px] leading-relaxed">
                  Allows homeowners to spec their square footage and finish instantly, turning cold clicks into pre-qualified quote submissions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 font-bold text-slate-100 font-heading">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>Mobile 1-Tap Calling Bar</span>
                </div>
                <p className="mt-1.5 text-slate-400 text-[11px] leading-relaxed">
                  Fixed mobile quick-action bar connects ready-to-buy homeowners in Peel Region directly to your phone.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 font-bold text-slate-100 font-heading">
                  <ShieldCheck className="h-4 w-4 text-purple-400" />
                  <span>Programmatic Local SEO</span>
                </div>
                <p className="mt-1.5 text-slate-400 text-[11px] leading-relaxed">
                  Dedicated landing pages for Mississauga, Meadowvale, Brampton, Oakville &amp; Milton targeting high-intent search traffic.
                </p>
              </div>
            </div>

            {/* Call to Action Bar */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-white">
                  Ready to launch this on your domain?
                </p>
                <p className="text-[11px] text-slate-400">
                  Includes DNS setup, custom branding, and lead capture routing.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={client.phoneHref}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md hover:bg-slate-100 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Connect with Owner</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs text-slate-300 hover:text-white"
                >
                  Explore Site
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
