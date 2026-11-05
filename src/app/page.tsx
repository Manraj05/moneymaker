import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
    <main className="min-h-screen bg-obsidian">
      {/* Schema Injection */}
      <JsonLd client={client} />

      {/* Conversion Sticky Navigation */}
      <Navbar client={client} />

      {/* Asymmetric Split Hero Section with Embedded Instant Calculator */}
      <HeroSection client={client} />

      {/* Services Grid with 4 Specialized Deliverables */}
      <ServicesGrid client={client} />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider client={client} />

      {/* 4-Step Technical Bento Engineering Process & Warranty */}
      <ProcessBento client={client} />

      {/* Auto-scrolling Google Reviews Marquee Wall */}
      <ReviewMarquee client={client} />

      {/* GTA Regional Service Areas & Coverage */}
      <ServiceAreas client={client} />

      {/* Localized FAQ Accordion */}
      <FaqAccordion client={client} />

      {/* Architectural Industrial Footer */}
      <Footer client={client} />
    </main>
  );
}
