import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  ThermometerSnowflake,
  Flame,
  Droplets,
  Star,
  Sparkles,
  Wifi,
  Battery,
} from "lucide-react";
import { getClientBySlug, getAllClients, getActiveClient } from "@/lib/client";
import BrandLogo from "@/components/BrandLogo";

type PageProps = {
  params: Promise<{
    clientId: string;
  }>;
};

export function generateStaticParams() {
  const clients = getAllClients();
  return clients.map((c) => ({
    clientId: c.slug,
  }));
}

export default async function TeaserPage({ params }: PageProps) {
  const { clientId } = await params;
  const client = getClientBySlug(clientId) || getActiveClient();

  if (!client) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-[#04060A] flex items-center justify-center p-3 sm:p-6 font-body select-none">
      {/* Precision iPhone 16 Pro Device Frame (380px wide, perfectly balanced) */}
      <div className="relative w-full max-w-[380px] rounded-[44px] border-[5px] border-slate-700/80 bg-[#090C13] text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.06)] overflow-hidden flex flex-col justify-between p-4 box-border">
        {/* Subtle Ambient Radial Glows inside Device */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* ======================================================== */}
        {/* 1. iOS Status Bar & Dynamic Island                       */}
        {/* ======================================================== */}
        <div className="relative z-20 px-2 pt-0.5 pb-2 flex items-center justify-between text-xs text-slate-300">
          <span className="font-mono text-[11px] font-bold tracking-tight">9:41</span>

          {/* Dynamic Island Capsule */}
          <div className="h-4.5 w-22 rounded-full bg-black border border-white/15 flex items-center justify-end px-2 shadow-inner">
            <div className="h-2 w-2 rounded-full bg-slate-900 border border-white/20" />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <Wifi className="h-3 w-3" />
            <Battery className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. Brand Identity Header                                 */}
        {/* ======================================================== */}
        <header className="relative z-10 p-2.5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-between gap-2 shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <BrandLogo size="sm" variant="glass" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-sm font-black tracking-tight text-white truncate">
                  {client.businessName}
                </span>
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-medium truncate">
                {client.primaryCity}, {client.province} · Verified Contractor
              </p>
            </div>
          </div>

          {/* Golden Google Star Pill */}
          <div className="flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-300 flex-shrink-0">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{client.rating.toFixed(1)}</span>
            <span className="text-amber-400/60 font-medium text-[9px]">({client.reviewCount})</span>
          </div>
        </header>

        {/* ======================================================== */}
        {/* 3. Core Hero Content Body                                */}
        {/* ======================================================== */}
        <div className="relative z-10 py-3 space-y-3 flex-1 flex flex-col justify-center">
          {/* Subtle Trust Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono font-semibold text-slate-300 backdrop-blur-md self-start">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span>★ 100% 5-Star Reviews · {client.primaryCity} &amp; GTA</span>
          </div>

          {/* Hero H1 Headline */}
          <h1 className="font-heading text-[20px] font-black tracking-tight text-white leading-tight">
            {client.heroHeadline || `${client.nicheTitle} in ${client.primaryCity}`}
          </h1>

          {/* Subtitle */}
          <p className="text-[11px] leading-relaxed text-slate-300 line-clamp-3">
            {client.heroSubtitle ||
              "100% solid commercial epoxy and UV-stable polyaspartic coatings diamond-ground to CSP 3 and rated for Ontario -25°C winters. Starting from $4.50/sq ft installed."}
          </p>

          {/* Interactive CTA Buttons */}
          <div className="space-y-1.5 pt-0.5">
            <div className="w-full flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 font-heading text-xs font-black uppercase tracking-wider text-slate-950 shadow-md">
              <span>Calculate Your Floor Cost</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>

            <div className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2 font-mono text-xs font-bold text-white backdrop-blur-md">
              <Phone className="h-3.5 w-3.5 text-slate-300" />
              <span>Call Direct: {client.phone}</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. Centerpiece Before / After Split Slider Card          */}
          {/* ======================================================== */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-slate-900 aspect-[16/9.5] mt-1">
            {/* Right Half: After Finished Floor */}
            <div
              className="absolute inset-0 h-full w-full"
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
            >
              <Image
                src="/after-garage.png"
                alt={`${client.businessName} Finished Floor`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Left Half: Authentic Bare Concrete Slab */}
            <div
              className="absolute inset-0 h-full w-full"
              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
            >
              <Image
                src="/before-garage.png"
                alt={`${client.businessName} Bare Weathered Slab Before`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Split Laser Divider */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] z-10" />

            {/* Before / After Pills */}
            <div className="absolute top-2 left-2 z-20 rounded-md bg-black/80 px-2 py-0.5 font-mono text-[8px] font-bold text-slate-300 border border-white/10 backdrop-blur-xs">
              BEFORE: BARE SLAB
            </div>
            <div className="absolute top-2 right-2 z-20 rounded-md bg-black/80 px-2 py-0.5 font-mono text-[8px] font-bold text-emerald-300 border border-emerald-500/30 backdrop-blur-xs">
              AFTER: 3D METALLIC
            </div>

            {/* Centered Slider Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/95 border border-white/40 text-white shadow-xl text-[10px] font-bold">
              ↔
            </div>

            {/* Drag Hint */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black/70 px-2.5 py-0.5 text-[8px] font-mono text-slate-300 backdrop-blur-xs border border-white/10">
              Interactive Live Comparison
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. Four Balanced Metric Cards (2x2 Grid)                 */}
          {/* ======================================================== */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-slate-400 text-[9px] font-mono">
                <ThermometerSnowflake className="h-3 w-3 text-blue-400" />
                <span>Winter Tested</span>
              </div>
              <p className="font-heading text-xs font-black text-white mt-0.5">-25°C Certified</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-slate-400 text-[9px] font-mono">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                <span>Written Adhesion</span>
              </div>
              <p className="font-heading text-xs font-black text-white mt-0.5">15-Yr Warranty</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-slate-400 text-[9px] font-mono">
                <Flame className="h-3 w-3 text-amber-400" />
                <span>Thermal Peak</span>
              </div>
              <p className="font-heading text-xs font-black text-white mt-0.5">Zero Tire Pickup</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-slate-400 text-[9px] font-mono">
                <Droplets className="h-3 w-3 text-purple-400" />
                <span>Resin Purity</span>
              </div>
              <p className="font-heading text-xs font-black text-white mt-0.5">100% Solids</p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 6. iOS Bottom Home Bar & Preview Watermark               */}
        {/* ======================================================== */}
        <footer className="relative z-10 pt-2 pb-1 border-t border-white/10 flex flex-col items-center gap-1.5 text-[9px] font-mono text-slate-400">
          <div className="w-full flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-semibold truncate max-w-[210px]">
                Ready for {client.businessName} Domain
              </span>
            </div>
            <span className="text-emerald-400 font-bold uppercase text-[8px]">Tap to Demo</span>
          </div>

          {/* iPhone Home Swipe Indicator Bar */}
          <div className="h-1 w-28 rounded-full bg-white/30 mt-0.5" />
        </footer>
      </div>
    </div>
  );
}
