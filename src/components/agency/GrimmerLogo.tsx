"use client";

import React from "react";

interface GrimmerLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export default function GrimmerLogo({
  size = "md",
  className = "",
  showText = true,
}: GrimmerLogoProps) {
  const dimensions = {
    sm: { box: 28, stroke: 1.25, text: "text-xs" },
    md: { box: 34, stroke: 1.5, text: "text-sm" },
    lg: { box: 48, stroke: 1.75, text: "text-lg" },
  }[size];

  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      {/* Animated Kinetic Geometric Emblem */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#181C24] to-[#0E1015] p-1.5 sm:p-2 border border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.6)] group-hover:border-blue-500/40 transition-colors duration-500"
        style={{ width: dimensions.box + 8, height: dimensions.box + 8 }}
      >
        {/* Subtle Ambient Core Glow */}
        <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <svg
          viewBox="0 0 40 40"
          width={dimensions.box}
          height={dimensions.box}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="grimmerGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="grimmerGradSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Kinetic Orbiting Geometric Hexagon / Ring */}
          <polygon
            points="20,3 34,11 34,29 20,37 6,29 6,11"
            stroke="url(#grimmerGradSecondary)"
            strokeWidth={dimensions.stroke}
            strokeDasharray="4 2"
            className="origin-center animate-[spin_24s_linear_infinite]"
            opacity="0.45"
          />

          {/* Isometric Dynamic Prismatic "G" Lattice */}
          {/* Top-Right Facet */}
          <path
            d="M20 7L32 14V26L20 33L8 26V14L20 7Z"
            stroke="url(#grimmerGradPrimary)"
            strokeWidth={dimensions.stroke}
            strokeLinejoin="round"
            className="origin-center transition-transform duration-700 group-hover:scale-105"
            opacity="0.85"
          />

          {/* Inner Intersecting Isometric Struts forming the "G" Agentic Matrix */}
          <path
            d="M20 7V20L32 26"
            stroke="url(#grimmerGradPrimary)"
            strokeWidth={dimensions.stroke}
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M20 20L8 26"
            stroke="url(#grimmerGradSecondary)"
            strokeWidth={dimensions.stroke}
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M20 20L20 33"
            stroke="#FFFFFF"
            strokeWidth={dimensions.stroke}
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Central Pulsing Synaptic Node */}
          <circle
            cx="20"
            cy="20"
            r="2.5"
            fill="#FFFFFF"
            filter="url(#subtleGlow)"
            className="animate-[pulse_3s_ease-in-out_infinite]"
          />

          {/* Agentic Scanning Light Beam */}
          <line
            x1="20"
            y1="7"
            x2="20"
            y2="20"
            stroke="#93C5FD"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="origin-top animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading ${dimensions.text} font-bold tracking-tight text-[#EDEDED] group-hover:text-white transition-colors whitespace-nowrap`}
            >
              GRIMMER AGENTICS
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.18em] text-[#667085]">
            Architecture · Search · GEO
          </span>
        </div>
      )}
    </div>
  );
}
