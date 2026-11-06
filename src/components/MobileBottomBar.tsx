"use client";

import React, { useEffect, useState } from "react";
import { Phone, Calculator, ArrowRight } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface MobileBottomBarProps {
  client: ClientProfile;
}

export default function MobileBottomBar({ client }: MobileBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show the bottom bar after the user scrolls down slightly (past initial hero view)
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={client.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-3 px-2 text-center font-mono text-xs font-bold text-slate-950 shadow-xs active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 text-slate-700 flex-shrink-0" />
          <span className="truncate">Call {client.phone}</span>
        </a>

        {/* Quick Instant Quote Anchor Button */}
        <a
          href="#calculator"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 py-3 px-2 text-center font-heading text-xs font-black uppercase tracking-wider text-white shadow-md active:scale-95 transition-transform"
        >
          <Calculator className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Get Quote</span>
          <ArrowRight className="h-3 w-3 flex-shrink-0" />
        </a>
      </div>
    </aside>
  );
}
