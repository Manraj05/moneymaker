import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light" | "glass";
}

export default function BrandLogo({
  className = "",
  size = "md",
  variant = "dark",
}: BrandLogoProps) {
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const containerSizes = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-md flex-shrink-0 transition-transform duration-200 group-hover:scale-105 ${containerSizes} ${
        variant === "light"
          ? "bg-slate-950 border border-slate-800"
          : variant === "glass"
          ? "bg-white/[0.08] border border-white/20 backdrop-blur-md"
          : "bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/15"
      } ${className}`}
    >
      {/* Subtle Ambient Glow inside Logo Box */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-transparent to-cyan-500/10 pointer-events-none" />

      {/* Precision Geometric Architectural Logo Symbol:
          Three sleek stacked isometric layers (evoking "LAYR" resin coatings & diamond substrate)
      */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 relative z-10"
      >
        <defs>
          {/* Top Layer Gradient: Mirror Luminous Crystal */}
          <linearGradient id="layr-top-grad" x1="12" y1="9" x2="28" y2="17" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Middle Layer Gradient: Titanium / Platinum */}
          <linearGradient id="layr-mid-grad" x1="10" y1="16" x2="30" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="70%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Base Layer Gradient: Deep Carbon Obsidian */}
          <linearGradient id="layr-base-grad" x1="10" y1="23" x2="30" y2="31" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="40%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Bottom Foundation Layer (Base Resin Seal - Emerald/Cyan Tech Glow) */}
        <path
          d="M20 33L10 27.5L20 22L30 27.5L20 33Z"
          fill="url(#layr-base-grad)"
          opacity="0.9"
        />

        {/* Middle Structural Layer (100% Solids Matrix - Platinum) */}
        <path
          d="M20 25.5L10 20L20 14.5L30 20L20 25.5Z"
          fill="url(#layr-mid-grad)"
        />

        {/* Top Armor Layer (Mirror-Gloss Polyaspartic Clear - Pure Crystal White) */}
        <path
          d="M20 18L10 12.5L20 7L30 12.5L20 18Z"
          fill="url(#layr-top-grad)"
        />

        {/* Center Diamond Specular Highlight Sparkle */}
        <circle cx="20" cy="12.5" r="1.2" fill="#FFFFFF" opacity="0.9" />
        <line x1="20" y1="9.5" x2="20" y2="15.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        <line x1="17" y1="12.5" x2="23" y2="12.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}
