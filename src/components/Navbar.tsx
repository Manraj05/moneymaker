"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface NavbarProps {
  client: ClientProfile;
}

export default function Navbar({ client }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-xs transition-colors">
      {/* Top Notification Bar */}
      <div className="hidden border-b border-slate-200 bg-slate-50 px-4 py-1.5 text-xs text-slate-600 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            <span className="font-medium text-slate-800">
              Active Crew Dispatched in <span className="text-slate-950 font-bold">{client.primaryCity}, {client.province}</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Same-Day On-Site Laser Estimates Available</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-800">
              <span className="text-amber-500">★</span>
              <span className="font-mono font-bold text-slate-950">{client.rating.toFixed(1)}</span>
              <span className="text-slate-500 font-mono">({client.reviewCount} Reviews)</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-mono text-[11px] font-medium">WSIB Certified · $2M Liability</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 font-heading text-lg font-black tracking-tighter text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            {client.businessName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <span className="font-heading text-lg font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-slate-700">
              {client.businessName}
            </span>
            <p className="font-mono text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
              {client.nicheTitle}
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="#services"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
          >
            Floor Systems
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
          >
            Work Gallery
          </Link>
          <Link
            href="#calculator"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
          >
            Price Estimator
          </Link>
          <Link
            href="#process"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
          >
            Engineering Prep
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
          >
            Client Reviews
          </Link>
          <Link
            href="#service-areas"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
          >
            Service Areas
          </Link>
        </nav>

        {/* Right Action / Direct Click-to-Call */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={client.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 font-mono text-xs font-bold text-slate-900 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
          >
            <Phone className="h-3.5 w-3.5 text-slate-700" />
            <span>{client.phone}</span>
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-slate-800"
          >
            <span>Instant Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={client.phoneHref}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-2 text-slate-900 shadow-sm"
            aria-label="Call Now"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-2 text-slate-900 shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4 font-heading text-base font-semibold text-slate-800">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-slate-950"
            >
              Floor Systems
            </Link>
            <Link
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-slate-950"
            >
              Work Gallery
            </Link>
            <Link
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-slate-950"
            >
              Price Estimator
            </Link>
            <Link
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-slate-950"
            >
              Engineering Prep
            </Link>
            <Link
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-slate-950"
            >
              Client Reviews
            </Link>
            <Link
              href="#service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 transition-colors hover:text-slate-950"
            >
              Service Areas
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={client.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 font-mono text-sm font-bold text-slate-900 shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call {client.phone}</span>
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-md"
              >
                <span>Calculate Your Floor Cost</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
