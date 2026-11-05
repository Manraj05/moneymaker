"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X, Shield, ArrowRight } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface NavbarProps {
  client: ClientProfile;
}

export default function Navbar({ client }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-obsidian-300/90 backdrop-blur-md">
      {/* Top Notification Bar */}
      <div className="hidden border-b border-white/5 bg-slate-950/60 px-4 py-1.5 text-xs text-slate-400 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-300">
              Active Crew Ready in <span className="text-white font-semibold">{client.primaryCity}, {client.province}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Same-Day On-Site Estimates Available</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-bright">
              <span>★</span>
              <span className="font-mono font-semibold text-white">{client.rating.toFixed(1)}</span>
              <span className="text-slate-400">({client.reviewCount} Google Reviews)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-mono font-medium">✓ WSIB Insured</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-amber-950/40 font-heading text-lg font-black tracking-tighter text-amber transition-transform duration-300 group-hover:scale-105 group-hover:border-amber">
            {client.businessName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-tight text-white transition-colors group-hover:text-amber">
                {client.businessName}
              </span>
            </div>
            <p className="font-mono text-[11px] text-slate-400 tracking-wider uppercase">
              {client.niche === "epoxy" ? "Industrial Concrete Coatings" : "Architectural Roofing & Leak Repair"}
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#calculator"
            className="flex items-center gap-1.5 text-sm font-medium text-amber-bright transition-colors hover:text-amber"
          >
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-amber"></span>
            Price Calculator
          </Link>
          <Link
            href="#before-after"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Before & After
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Engineering Process
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Reviews
          </Link>
        </nav>

        {/* Right Action / Direct Click-to-Call */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={client.phoneHref}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2 font-mono text-sm font-bold text-amber-bright shadow-sm transition-all duration-300 hover:border-amber hover:bg-amber hover:text-obsidian hover:shadow-lg hover:shadow-amber/20"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>{client.phone}</span>
          </a>
          <a
            href="#calculator"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-amber px-4 py-2 text-xs font-bold uppercase tracking-wider text-obsidian shadow-md transition-all duration-300 hover:bg-amber-bright hover:shadow-amber/30"
          >
            <span>Instant Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={client.phoneHref}
            className="inline-flex items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/10 p-2 text-amber-bright"
            aria-label="Call Now"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-slate-900 p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-3">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Active Crew Dispatched in {client.primaryCity}</span>
              </div>
              <p className="mt-1 text-xs text-slate-400 font-mono">
                Direct Dispatch: {client.phone}
              </p>
            </div>

            <nav className="flex flex-col gap-3 font-medium text-slate-200">
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-amber"
              >
                Services
              </Link>
              <Link
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1.5 text-base font-semibold text-amber"
              >
                <span>Instant 60s Quote Calculator</span>
                <span className="rounded bg-amber/20 px-2 py-0.5 text-xs text-amber-bright">Live</span>
              </Link>
              <Link
                href="#before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-amber"
              >
                Before & After Transformations
              </Link>
              <Link
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-amber"
              >
                4-Step Engineering Process
              </Link>
              <Link
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-amber"
              >
                Verified Google Reviews ({client.reviewCount})
              </Link>
            </nav>

            <a
              href={client.phoneHref}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-amber py-3 text-center font-mono text-base font-bold text-obsidian shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Call {client.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
