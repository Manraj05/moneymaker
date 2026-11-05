"use client";

import React from "react";
import { Star, CheckCircle, MapPin, Quote } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ReviewMarqueeProps {
  client: ClientProfile;
}

export default function ReviewMarquee({ client }: ReviewMarqueeProps) {
  // Duplicate reviews to create a smooth, continuous loop
  const duplicatedReviews = [
    ...client.reviews,
    ...client.reviews,
    ...client.reviews,
    ...client.reviews,
  ];

  return (
    <section id="reviews" className="py-20 border-t border-white/10 bg-obsidian-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-bright">
              <Star className="h-3.5 w-3.5 fill-amber text-amber" />
              <span>Verified Google Reputation</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Homeowners Across the GTA
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Unfiltered feedback from real property owners in Brampton, Mississauga, and neighboring cities.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="flex items-center gap-3 self-start sm:self-auto rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-obsidian font-heading font-black text-lg">
              {client.rating.toFixed(1)}
            </div>
            <div>
              <div className="flex text-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
              </div>
              <p className="font-mono text-xs text-slate-300">
                <span className="font-bold text-white">{client.reviewCount}</span> Verified Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {duplicatedReviews.map((rev, index) => (
            <div
              key={`${rev.author}-${index}`}
              className="flex w-[320px] sm:w-[380px] flex-col justify-between rounded-xl border border-white/10 bg-slate-900/80 p-5 shadow-lg backdrop-blur-md transition-all hover:border-amber-500/40 hover:bg-slate-900"
            >
              <div>
                {/* Review Top: Stars + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    <CheckCircle className="h-3 w-3 text-emerald-400" />
                    <span>Verified Review</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Review Author */}
              <div className="mt-5 border-t border-white/5 pt-3 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xs font-bold text-white">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                    <MapPin className="h-3 w-3 text-amber-bright" />
                    <span>{rev.city}, ON</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
