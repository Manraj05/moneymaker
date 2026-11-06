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
      style={{ touchAction: "pan-y" }}
      className={`relative overflow-hidden select-none cursor-ew-resize rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-950 shadow-2xl ${
        isHeroEmbedded
          ? "aspect-[3/4] max-h-[520px] sm:max-h-[560px] w-full"
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
      {/* 1. RIGHT LAYER: AFTER (Full Resolution Base Photo) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/after-garage.png"
          alt="Luxury 3D Metallic Marble Epoxy Garage Floor with Hexagonal LED Ceiling Lights"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Crisp Frosted-Glass Corner Badge (Top Right) */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-xl shadow-lg whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-white uppercase whitespace-nowrap">
            AFTER: 3D METALLIC
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. LEFT LAYER: BEFORE (Clipped cleanly via CSS polygon) */}
      {/* 100% Guaranteed Pixel Alignment without width calculations */}
      {/* ======================================================== */}
      <div
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src="/before-garage.png"
          alt="Original Bare Weathered Concrete Slab Floor Before Coating"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Crisp Frosted-Glass Corner Badge (Top Left) */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-xl shadow-lg whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-200 uppercase whitespace-nowrap">
            BEFORE: BARE SLAB
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. VERTICAL DIVIDER & DRAGGABLE HANDLE */}
      {/* ======================================================== */}
      <div
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-white bg-black/90 text-white shadow-2xl backdrop-blur-xl transition-transform hover:scale-110 active:scale-95">
          <MoveHorizontal className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
      </div>

      {/* Bottom helper pill */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 z-20 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[9px] sm:text-[10px] text-slate-300 backdrop-blur-md opacity-80 sm:opacity-90">
        Drag to compare
      </div>
    </div>
  );
}
