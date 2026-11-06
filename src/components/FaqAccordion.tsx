"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { ClientProfile, FaqItem } from "@/lib/client";

interface FaqAccordionProps {
  client: ClientProfile;
  customFaqs?: FaqItem[];
  cityName?: string;
  serviceName?: string;
}

export default function FaqAccordion({
  client,
  customFaqs,
  cityName,
  serviceName,
}: FaqAccordionProps) {
  const faqs = customFaqs || client.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column (5 Cols): Editorial Anchor & Direct Call Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1 text-xs font-mono font-semibold text-slate-700 shadow-xs">
                <HelpCircle className="h-3.5 w-3.5 text-slate-900" />
                <span>Contractor Knowledge Base</span>
              </div>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                {cityName && serviceName
                  ? `${serviceName} in ${cityName}: Engineering FAQs`
                  : `Answers About ${client.nicheTitle} & 15-Yr Warranty`}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Everything you need to know about pricing, substrate preparation, winter performance, and our 15-year delamination guarantee.
              </p>
            </div>

            {/* Direct Expert Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white font-bold shadow-xs">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-950">
                    Have a non-standard slab condition?
                  </h4>
                  <p className="text-xs text-slate-500">
                    High moisture, deep pitting, or peeling old paint?
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Our lead floor technician can inspect your garage, run a moisture impedance test, and measure with high-precision lasers.
              </p>

              <div className="pt-2">
                <a
                  href={client.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 font-mono text-xs font-bold uppercase text-white shadow-xs hover:bg-slate-800 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Technician Directly: {client.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Accessible Expanding Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-slate-950 bg-white shadow-md"
                      : "border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  >
                    <span className="font-heading text-sm sm:text-base font-bold text-slate-950 pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-slate-950" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-white p-5 sm:p-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
