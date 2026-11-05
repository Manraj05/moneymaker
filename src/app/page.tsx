import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSolved from "@/components/ProblemsSolved";
import ServicesGrid from "@/components/ServicesGrid";
import QuoteCalculator from "@/components/QuoteCalculator";
import ProcessBento from "@/components/ProcessBento";
import ReviewMarquee from "@/components/ReviewMarquee";
import ServiceAreas from "@/components/ServiceAreas";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getActiveClient } from "@/lib/client";

export default function HomePage() {
  const client = getActiveClient();

  return (
    <main className="min-h-screen bg-obsidian text-slate-100">
      {/* Schema Injection */}
      <JsonLd client={client} />

      {/* Conversion Sticky Navigation */}
      <Navbar client={client} />

      {/* Refactored Hero Section: Background Photo Ken Burns + 4 Clean Elements + Embedded BeforeAfterSlider */}
      <HeroSection client={client} />

      {/* 4 Concrete Problems We Permanently Solve Strip */}
      <ProblemsSolved />

      {/* Residential & Commercial Services Grid with $/sq ft Pills */}
      <ServicesGrid client={client} />

      {/* Dedicated Full-Width Cost Calculator Section (Horizontal Selectable Rows) */}
      <QuoteCalculator client={client} />

      {/* Technical Comparison Table (Commercial vs Cheap DIY) + 4-Step CSP 3 Diamond Prep */}
      <ProcessBento client={client} />

      {/* Auto-scrolling Verified Google Reviews Marquee Wall */}
      <ReviewMarquee client={client} />

      {/* Regional Service Areas & Coverage */}
      <ServiceAreas client={client} />

      {/* Frequently Asked Questions */}
      <FaqAccordion client={client} />

      {/* Architectural Industrial Footer with Programmatic Local SEO Directory */}
      <Footer client={client} />
    </main>
  );
}
