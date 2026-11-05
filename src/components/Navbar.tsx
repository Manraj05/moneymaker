"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface NavbarProps {
  client: ClientProfile;
}

export default function Navbar({ client }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-obsidian-300/85 backdrop-blur-2xl">
      {/* Top Notification Bar */}
      <div className="hidden border-b border-white/5 bg-slate-950/70 px-4 py-1.5 text-xs text-slate-400 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="font-medium text-slate-300">
              Active Crew Dispatched in <span className="text-white font-semibold">{client.primaryCity}, {client.province}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Same-Day On-Site Laser Estimates Available</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <span>★</span>
              <span className="font-mono font-semibold text-white">{client.rating.toFixed(1)}</span>
              <span className="text-slate-400 font-mono">({client.reviewCount} Reviews)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-mono text-[11px]">WSIB Certified · $2M Liability</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] font-heading text-lg font-black tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
            {client.businessName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-white transition-colors group-hover:text-slate-200">
              {client.businessName}
            </span>
            <p className="font-mono text-[11px] text-slate-400 tracking-wider uppercase">
              {client.nicheTitle}
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
            className="text-sm font-semibold text-white transition-colors hover:text-slate-300"
          >
            Price Calculator
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Standards
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Reviews
          </Link>
          <Link
            href="#service-areas"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Service Areas
          </Link>
        </nav>

        {/* Right Action / Direct Click-to-Call */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={client.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2 font-mono text-sm font-bold text-white shadow backdrop-blur-xl transition-all duration-200 hover:border-white/40 hover:bg-white/[0.1]"
          >
            <Phone className="h-4 w-4 text-slate-300" />
            <span>{client.phone}</span>
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-obsidian shadow-lg transition-all duration-200 hover:bg-slate-100"
          >
            <span>Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={client.phoneHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] p-2 text-white"
            aria-label="Call Now"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900 p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950/95 px-4 py-5 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="flex items-center gap-2 text-xs font-medium text-white">
                <span className="h-2 w-2 rounded-full bg-white"></span>
                <span>Active Crew Dispatched in {client.primaryCity}</span>
              </div>
              <p className="mt-1 text-xs text-slate-400 font-mono">
                Direct Line: {client.phone}
              </p>
            </div>

            <nav className="flex flex-col gap-3 font-medium text-slate-200">
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-white"
              >
                Services & Pricing
              </Link>
              <Link
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base font-bold text-white"
              >
                Instant Price Calculator
              </Link>
              <Link
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-white"
              >
                Commercial Standards
              </Link>
              <Link
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-white"
              >
                Verified Google Reviews
              </Link>
              <Link
                href="#service-areas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-base hover:text-white"
              >
                GTA Service Areas
              </Link>
            </nav>

            <a
              href={client.phoneHref}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-center font-mono text-base font-bold text-obsidian shadow-lg"
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
