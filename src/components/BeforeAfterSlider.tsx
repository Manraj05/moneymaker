"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Sparkles, AlertTriangle, CheckCircle2, MoveHorizontal } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface BeforeAfterSliderProps {
  client: ClientProfile;
}

export default function BeforeAfterSlider({ client }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isEpoxy = client.niche === "epoxy";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(5, Math.min(95, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="before-after" className="py-20 border-t border-white/10 bg-obsidian-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-bright">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven GTA Transformations</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {isEpoxy
              ? "From Salt-Eaten Concrete to Showroom Mirror Gloss"
              : "From Leaking Wind-Damaged Shingles to 130 MPH Protection"}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Slide the divider to inspect how {client.businessName} repairs structural degradation,
            stops Ontario freeze-thaw pitting, and installs multi-layer industrial armor.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="mt-12 mx-auto max-w-5xl">
          <div
            ref={containerRef}
            className="relative h-[380px] sm:h-[460px] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl select-none cursor-ew-resize"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches.length > 0) handleMove(e.touches[0].clientX);
            }}
          >
            {/* RIGHT LAYER: AFTER (High Performance Finish) */}
            <div className="absolute inset-0 bg-slate-900">
              {isEpoxy ? (
                // Epoxy AFTER visual surface
                <div className="relative h-full w-full bg-[#121926] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Flake Texture effect */}
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px), radial-gradient(#FFFFFF 1.5px, transparent 1.5px), radial-gradient(#64748B 2px, transparent 2px)`,
                      backgroundSize: `16px 16px, 24px 24px, 32px 32px`,
                      backgroundPosition: `0 0, 8px 8px, 16px 16px`,
                    }}
                  />
                  {/* High gloss specular highlight sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-white/10 pointer-events-none" />

                  {/* Top Right Label */}
                  <div className="relative z-10 self-end flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-950/80 px-3.5 py-1.5 backdrop-blur-md">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-heading text-xs font-bold text-emerald-300">
                      AFTER: Polyaspartic Full-Flake
                    </span>
                  </div>

                  {/* Callout Badges */}
                  <div className="relative z-10 self-end max-w-xs space-y-2 text-right">
                    <span className="inline-block rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-slate-200">
                      ✓ 100% Salt & Hot-Tire Proof
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-emerald-400">
                      ✓ Zero Peeling Guaranteed (15-Yr)
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-amber-bright">
                      ✓ Slip-Resistant Textured Clearcoat
                    </span>
                  </div>
                </div>
              ) : (
                // Roofing AFTER visual surface
                <div className="relative h-full w-full bg-[#18202F] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Architectural Shingle Texture */}
                  <div
                    className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, #0F172A 0px, #0F172A 18px, #334155 19px, #1E293B 20px)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />

                  <div className="relative z-10 self-end flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-950/80 px-3.5 py-1.5 backdrop-blur-md">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-heading text-xs font-bold text-emerald-300">
                      AFTER: Architectural Shingles
                    </span>
                  </div>

                  <div className="relative z-10 self-end max-w-xs space-y-2 text-right">
                    <span className="inline-block rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-slate-200">
                      ✓ Class-F 130 MPH Wind Rated
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-emerald-400">
                      ✓ Double Ice & Water Shield Barrier
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono text-amber-bright">
                      ✓ 50-Year Non-Prorated Lifetime
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* LEFT LAYER: BEFORE (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden bg-stone-950"
              style={{ width: `${sliderPosition}%` }}
            >
              {isEpoxy ? (
                // Epoxy BEFORE visual surface
                <div className="relative h-full w-[1000px] bg-[#242220] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Concrete Pitting & Cracking Texture */}
                  <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(#151413 2px, transparent 2px), radial-gradient(#3B3733 3px, transparent 3px)`,
                      backgroundSize: `20px 20px, 40px 40px`,
                    }}
                  />
                  {/* Crack Lines */}
                  <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-70">
                    <path
                      d="M 40 50 L 120 180 L 190 230 L 280 340 L 320 420"
                      stroke="#111111"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M 120 180 L 180 160 L 240 190"
                      stroke="#0a0a0a"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="210" cy="270" r="35" fill="#1c1a17" opacity="0.8" />
                  </svg>

                  {/* Top Left Label */}
                  <div className="relative z-10 self-start flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/80 px-3.5 py-1.5 backdrop-blur-md">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span className="font-heading text-xs font-bold text-red-300">
                      BEFORE: Salt-Pitted Raw Concrete
                    </span>
                  </div>

                  {/* Callout Badges */}
                  <div className="relative z-10 self-start max-w-xs space-y-2 text-left">
                    <span className="inline-block rounded-md border border-red-500/30 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-red-400">
                      ⚠ Ontario Road Salt Flaking & Spalling
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-stone-300">
                      ⚠ Stubborn Oil Stains & Fractures
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-stone-400">
                      ⚠ Concrete Dusting into House
                    </span>
                  </div>
                </div>
              ) : (
                // Roofing BEFORE visual surface
                <div className="relative h-full w-[1000px] bg-[#221c1a] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Weathered, Missing Shingle Texture */}
                  <div
                    className="absolute inset-0 opacity-70 pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, #161210 0px, #161210 22px, #3A2F2A 23px, #2A221E 24px)`,
                    }}
                  />
                  <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-80">
                    <rect x="80" y="120" width="70" height="35" fill="#0d0a09" />
                    <rect x="220" y="240" width="90" height="40" fill="#0d0a09" />
                    <circle cx="160" cy="180" r="25" fill="#1b2a1a" opacity="0.6" />
                  </svg>

                  <div className="relative z-10 self-start flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/80 px-3.5 py-1.5 backdrop-blur-md">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span className="font-heading text-xs font-bold text-red-300">
                      BEFORE: Failing 3-Tab Shingles
                    </span>
                  </div>

                  <div className="relative z-10 self-start max-w-xs space-y-2 text-left">
                    <span className="inline-block rounded-md border border-red-500/30 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-red-400">
                      ⚠ Missing Tabs & Wind Uplift
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-stone-300">
                      ⚠ Winter Ice Damming Leaks
                    </span>
                    <br />
                    <span className="inline-block rounded-md border border-white/20 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-stone-400">
                      ⚠ Granular Loss Clogging Gutters
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-amber shadow-[0_0_15px_rgba(245,158,11,0.9)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-amber text-obsidian shadow-2xl transition-transform hover:scale-110 active:scale-95">
                <MoveHorizontal className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Helper caption */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-red-400">
              <span>◀</span> Drag Left to Reveal AFTER Finish
            </span>
            <span className="hidden sm:inline text-slate-500">
              Interactive Divider · Click or Drag Anywhere
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              Drag Right to Inspect BEFORE Damage <span>▶</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
