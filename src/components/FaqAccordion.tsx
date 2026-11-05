"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
    <section id="faq" className="py-20 border-t border-white/10 bg-obsidian-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {cityName && serviceName
              ? `${serviceName} in ${cityName}: Common Questions`
              : `Answers About ${client.nicheTitle} & Warranty`}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Everything you need to know about pricing, timeline, winter performance, and our 15-year guarantee.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors"
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-300 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 bg-slate-950/60 p-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
