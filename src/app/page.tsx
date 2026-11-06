import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStatsBand from "@/components/TrustStatsBand";
import ProblemsSolved from "@/components/ProblemsSolved";
import ComparisonTable from "@/components/ComparisonTable";
import ProcessBento from "@/components/ProcessBento";
import ProjectGallery from "@/components/ProjectGallery";
import ServicesGrid from "@/components/ServicesGrid";
import QuoteCalculator from "@/components/QuoteCalculator";
import ReviewMarquee from "@/components/ReviewMarquee";
import ServiceAreas from "@/components/ServiceAreas";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import JsonLd from "@/components/JsonLd";
import { getActiveClient } from "@/lib/client";

export default function HomePage() {
  const client = getActiveClient();

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-16 sm:pb-0">
      {/* Schema Injection */}
      <JsonLd client={client} />

      {/* Conversion Sticky Navigation */}
      <Navbar client={client} />

      {/* Refactored Hero Section: Background Photo Ken Burns + 4 Clean Elements + Embedded BeforeAfterSlider */}
      <HeroSection client={client} />

      {/* Full-Width Architectural Trust Metric Stat Band */}
      <TrustStatsBand />

      {/* 4 Concrete Problems We Permanently Solve (Asymmetric Split-Screen Diagnostic) */}
      <ProblemsSolved />

      {/* Materials Engineering Comparison Table (Why Hardware Store Kits Fail) */}
      <ComparisonTable client={client} />

      {/* Technical 4-Step CSP 3 Diamond Prep Protocol (Connected Horizontal Stepper Timeline) */}
      <ProcessBento client={client} />

      {/* Recent Work Portfolio & Completed Installations Gallery */}
      <ProjectGallery client={client} />

      {/* Residential & Commercial Services Editorial Layout with $/sq ft Pills */}
      <ServicesGrid client={client} />

      {/* Dedicated Full-Width Cost Calculator Section */}
      <QuoteCalculator client={client} />

      {/* Auto-scrolling Verified Google Reviews Marquee Wall */}
      <ReviewMarquee client={client} />

      {/* Regional Service Areas & Coverage Console */}
      <ServiceAreas client={client} />

      {/* Frequently Asked Questions */}
      <FaqAccordion client={client} />

      {/* Architectural Industrial Footer with Programmatic Local SEO Directory */}
      <Footer client={client} />

      {/* Fixed High-Converting Mobile Bottom Quick Action Bar */}
      <MobileBottomBar client={client} />
    </main>
  );
}
