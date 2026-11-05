"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  className?: string;
  isHeroEmbedded?: boolean;
}

export default function BeforeAfterSlider({
  className = "",
  isHeroEmbedded = false,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Automatic intro sweep animation (35% -> 65% -> 50% on initial load)
  useEffect(() => {
    const t1 = setTimeout(() => setSliderPosition(35), 400);
    const t2 = setTimeout(() => setSliderPosition(65), 1100);
    const t3 = setTimeout(() => setSliderPosition(50), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(3, Math.min(97, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

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
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-ew-resize rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-950 shadow-2xl ${
        isHeroEmbedded
          ? "aspect-[3/4] max-h-[560px] w-full"
          : "aspect-[3/4] sm:aspect-[4/3] max-h-[580px] w-full"
      } ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches.length > 0) handleMove(e.touches[0].clientX);
      }}
    >
      {/* ======================================================== */}
      {/* 1. RIGHT LAYER: AFTER (Pure Mirror-Gloss Metallic Finish) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 h-full w-full">
        {/* Full resolution garage photo */}
        <Image
          src="/after-garage.png"
          alt="Luxury 3D Metallic Marble Epoxy Garage Floor with Hexagonal LED Ceiling Lights"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Crisp Frosted-Glass Corner Badge (Top Right) */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 backdrop-blur-xl shadow-lg">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-white uppercase">
            AFTER: 3D METALLIC EPOXY
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. LEFT LAYER: BEFORE (Pixel-for-Pixel Upper + Raw Concrete Slab) */}
      {/* ======================================================== */}
      <div
        className="absolute inset-0 h-full overflow-hidden transition-[width] duration-75 ease-out will-change-[width]"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* Underlying Full Image Container to maintain identical aspect ratio & alignment */}
        <div
          className="relative h-full pointer-events-none"
          style={{
            // Container width dynamically tracks the parent width via containerRef
            width: containerRef.current
              ? `${containerRef.current.clientWidth}px`
              : "100%",
          }}
        >
          {/* Base photo (ceiling, slatwalls, white door, cabinet, tires align 100% pixel-for-pixel) */}
          <Image
            src="/after-garage.png"
            alt="Original Garage Room Structure"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center pointer-events-none"
          />

          {/* Realistic Raw Unfinished Concrete Slab Composite overlaid over the exact floor polygon */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: "polygon(0% 52.5%, 47% 48.5%, 100% 55%, 100% 100%, 0% 100%)",
            }}
          >
            {/* 2a. Desaturated, low-contrast, weathered base concrete */}
            <div className="absolute inset-0">
              <Image
                src="/after-garage.png"
                alt="Desaturated Concrete Slab"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center pointer-events-none"
                style={{
                  filter: "grayscale(100%) contrast(45%) brightness(85%)",
                }}
              />
            </div>

            {/* 2b. Matte Industrial Cement Tint Layer */}
            <div className="absolute inset-0 bg-[#5A6068]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[#42474E]/40 mix-blend-overlay" />

            {/* 2c. Gritty Surface Noise & Salt Texture */}
            <div
              className="absolute inset-0 opacity-45 mix-blend-color-burn"
              style={{
                backgroundImage: `radial-gradient(#1E232A 1.5px, transparent 1.5px), radial-gradient(#2C333C 2px, transparent 2px)`,
                backgroundSize: `12px 12px, 20px 20px`,
                backgroundPosition: `0 0, 10px 10px`,
              }}
            />

            {/* 2d. Dark Oil Stain & Tire Track Patches */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Central engine oil drip puddle */}
              <div
                className="absolute rounded-full bg-[#181A1D]/80 blur-md"
                style={{
                  top: "72%",
                  left: "38%",
                  width: "28%",
                  height: "18%",
                  transform: "rotate(-10deg)",
                }}
              />
              {/* Secondary automotive fluid stain */}
              <div
                className="absolute rounded-full bg-[#1A1D20]/75 blur-sm"
                style={{
                  top: "63%",
                  left: "18%",
                  width: "18%",
                  height: "12%",
                  transform: "rotate(15deg)",
                }}
              />
              {/* Right side tire salt burn mark */}
              <div
                className="absolute rounded-full bg-[#2B2F36]/80 blur-md"
                style={{
                  top: "68%",
                  left: "64%",
                  width: "26%",
                  height: "22%",
                }}
              />
            </div>

            {/* 2e. SVG Jagged Winter Salt Cracks & Fractures */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none opacity-85"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
            >
              {/* Major cross-slab freeze crack */}
              <path
                d="M 120 540 Q 220 620 340 680 T 560 770 T 820 890"
                stroke="#121417"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 120 540 Q 220 620 340 680 T 560 770 T 820 890"
                stroke="#2A2F37"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Branching spider fractures */}
              <path
                d="M 340 680 L 410 630 L 470 655"
                stroke="#15171A"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M 560 770 L 520 840 L 490 870"
                stroke="#181B1F"
                strokeWidth="3.5"
                fill="none"
              />
              <path
                d="M 240 780 L 290 840 L 310 920"
                stroke="#121417"
                strokeWidth="4"
                fill="none"
              />
              {/* Salt pockmark craters */}
              <circle cx="380" cy="740" r="14" fill="#20242B" />
              <circle cx="490" cy="690" r="10" fill="#1C1F26" />
              <circle cx="720" cy="820" r="16" fill="#181B21" />
            </svg>

            {/* 2f. Soft feathering along the baseboard seam */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(15,18,24,0.7) 48%, transparent 58%)",
              }}
            />
          </div>

          {/* Crisp Frosted-Glass Corner Badge (Top Left) */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3.5 py-1.5 backdrop-blur-xl shadow-lg">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-slate-200 uppercase">
              BEFORE: CRACKED BARE CONCRETE
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. VERTICAL DIVIDER & DRAGGABLE HANDLE */}
      {/* ======================================================== */}
      <div
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white bg-black/85 text-white shadow-2xl backdrop-blur-xl transition-transform hover:scale-110 active:scale-95">
          <MoveHorizontal className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
      </div>

      {/* Bottom helper pill on hover */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 z-20 rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[10px] text-slate-300 backdrop-blur-md opacity-80 sm:opacity-90">
        Drag left/right to compare
      </div>
    </div>
  );
}
