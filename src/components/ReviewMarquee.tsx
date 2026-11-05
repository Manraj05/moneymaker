"use client";

import React from "react";
import { Star, CheckCircle, MapPin, Quote, ShieldCheck } from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ReviewMarqueeProps {
  client: ClientProfile;
}

export default function ReviewMarquee({ client }: ReviewMarqueeProps) {
  const featuredReview = client.reviews[0];
  const duplicatedReviews = [
    ...client.reviews,
    ...client.reviews,
    ...client.reviews,
    ...client.reviews,
  ];

  return (
    <section id="reviews" className="py-24 border-t border-white/10 bg-[#090D16] overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-xs font-mono font-semibold text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-white" />
              <span>Verified Homeowner &amp; Commercial Client Proof</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Reputation Built on Southern Ontario Concrete
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Authentic reviews from homeowners and industrial facility managers across {client.primaryCity} and the Golden Horseshoe.
            </p>
          </div>

          {/* Rating Summary Capsule */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 backdrop-blur-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-obsidian font-heading font-black text-xl shadow-lg">
              {client.rating.toFixed(1)}
            </div>
            <div>
              <div className="flex items-center gap-1 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-white text-white" />
                ))}
              </div>
              <p className="font-mono text-xs text-slate-300 mt-1">
                <strong className="text-white font-bold">{client.reviewCount} Verified Google Reviews</strong>
                <span className="text-slate-500 block text-[10px]">Zero Paid or Incentivized Testimonials</span>
              </p>
            </div>
          </div>
        </div>

        {/* Featured Case Study Spotlight Card */}
        {featuredReview && (
          <div className="mt-8 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#0E1524] to-slate-950 p-6 sm:p-9 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-2">
                  <div className="flex text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white text-white" />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-slate-400">·</span>
                  <span className="font-mono text-xs text-slate-300">
                    Verified Ontario Homeowner Installation
                  </span>
                </div>

                <blockquote className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                  &ldquo;{featuredReview.text}&rdquo;
                </blockquote>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="font-heading text-sm font-bold text-white">
                    {featuredReview.author}
                  </div>
                  <span className="text-slate-600">|</span>
                  <div className="flex items-center gap-1 font-mono text-xs text-slate-300">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    <span>{featuredReview.city}, ON</span>
                  </div>
                  <span className="text-slate-600">|</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-300">
                    Full-Flake Polyaspartic System
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0 self-start md:self-center">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-obsidian shadow-lg hover:bg-slate-100 transition-colors"
                >
                  <span>Get Similar Results</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auto-Scrolling Marquee Wall */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused] py-2">
          {duplicatedReviews.map((rev, index) => (
            <div
              key={`${rev.author}-${index}`}
              className="flex w-[320px] sm:w-[400px] flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-200 hover:border-white/30 hover:bg-slate-900"
            >
              <div>
                {/* Header: Stars + Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-slate-300">
                    <CheckCircle className="h-3 w-3 text-white" />
                    <span>Verified Project</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author & City */}
              <div className="mt-6 border-t border-white/5 pt-3.5 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xs font-bold text-white">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-0.5">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    <span>{rev.city}, Ontario</span>
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
