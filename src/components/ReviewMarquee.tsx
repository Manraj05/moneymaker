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
    <section id="reviews" className="py-24 bg-white text-slate-900 border-b border-slate-200 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1 text-xs font-mono font-semibold text-slate-700 shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-slate-900" />
              <span>Verified Homeowner &amp; Commercial Client Proof</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Reputation Built on Southern Ontario Concrete
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Authentic reviews from homeowners and industrial facility managers across {client.primaryCity} and the Golden Horseshoe.
            </p>
          </div>

          {/* Rating Summary Capsule */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white font-heading font-black text-xl shadow-sm">
              {client.rating.toFixed(1)}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="font-mono text-xs text-slate-700 mt-1">
                <strong className="text-slate-950 font-bold">{client.reviewCount} Verified Google Reviews</strong>
                <span className="text-slate-500 block text-[10px]">Zero Paid or Incentivized Testimonials</span>
              </p>
            </div>
          </div>
        </div>

        {/* Featured Case Study Spotlight Card */}
        {featuredReview && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-9 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-slate-400">·</span>
                  <span className="font-mono text-xs text-slate-700 font-semibold">
                    Verified Ontario Homeowner Installation
                  </span>
                </div>

                <blockquote className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-slate-950 leading-snug">
                  &ldquo;{featuredReview.text}&rdquo;
                </blockquote>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="font-heading text-sm font-bold text-slate-950">
                    {featuredReview.author}
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1 font-mono text-xs text-slate-700">
                    <MapPin className="h-3 w-3 text-slate-500" />
                    <span>{featuredReview.city}, ON</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[10px] text-slate-700 font-medium">
                    {featuredReview.projectTag || "Verified Customer Project"}
                  </span>
                </div>

                {featuredReview.ownerReply && (
                  <div className="mt-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 text-xs text-slate-700 shadow-xs">
                    <div className="flex items-center gap-1.5 font-heading font-bold text-slate-950 mb-1">
                      <span>{client.businessName} (Owner Response)</span>
                    </div>
                    <p className="italic text-slate-600">
                      &ldquo;{featuredReview.ownerReply}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <div className="flex-shrink-0 self-start md:self-center">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-slate-800 transition-colors"
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
              className="flex w-[320px] sm:w-[400px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
            >
              <div>
                {/* Header: Stars + Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-mono text-slate-700">
                    <CheckCircle className="h-3 w-3 text-emerald-600" />
                    <span>Verified Client</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>

                {rev.projectTag && (
                  <div className="mt-3">
                    <span className="inline-block rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-mono text-slate-700 font-semibold">
                      {rev.projectTag}
                    </span>
                  </div>
                )}

                {rev.ownerReply && (
                  <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200/80 p-2.5 text-[11px] text-slate-600">
                    <span className="font-bold text-slate-900 block text-[10px] uppercase font-mono">
                      Owner Response:
                    </span>
                    <p className="italic line-clamp-2 mt-0.5">
                      &ldquo;{rev.ownerReply}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Author & City */}
              <div className="mt-6 border-t border-slate-100 pt-3.5 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xs font-bold text-slate-950">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mt-0.5">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    <span>{rev.city}, Ontario</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
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
