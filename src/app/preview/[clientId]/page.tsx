import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ClientPitchBanner from "@/components/ClientPitchBanner";
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
import { getAllClients, getClientBySlug } from "@/lib/client";

type PreviewPageProps = {
  params: Promise<{
    clientId: string;
  }>;
};

export async function generateStaticParams() {
  const clients = getAllClients();
  return clients.map((c) => ({
    clientId: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: PreviewPageProps): Promise<Metadata> {
  const { clientId } = await params;
  const client = getClientBySlug(clientId);

  if (!client) {
    return { title: "Client Preview Not Found" };
  }

  return {
    title: `[PREVIEW] ${client.businessName} - ${client.nicheTitle} in ${client.primaryCity}`,
    description: `Private live prototype preview for ${client.businessName}. Instant 60-second floor cost estimator, local Google review showcase, and service directory for ${client.primaryCity}, ${client.province}.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ClientPreviewPage({ params }: PreviewPageProps) {
  const { clientId } = await params;
  const client = getClientBySlug(clientId);

  if (!client) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-16 sm:pb-0">
      {/* Schema Injection */}
      <JsonLd client={client} />

      {/* Client Pitch Preview Concept Banner */}
      <ClientPitchBanner client={client} />

      {/* Conversion Sticky Navigation */}
      <Navbar client={client} />

      {/* Refactored Hero Section: Background Photo Ken Burns + Embedded BeforeAfterSlider */}
      <HeroSection client={client} />

      {/* Full-Width Architectural Trust Metric Stat Band */}
      <TrustStatsBand />

      {/* 4 Concrete Problems We Permanently Solve */}
      <ProblemsSolved />

      {/* Materials Engineering Comparison Table */}
      <ComparisonTable client={client} />

      {/* Technical 4-Step CSP 3 Diamond Prep Protocol */}
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

      {/* Architectural Industrial Footer */}
      <Footer client={client} />

      {/* Fixed High-Converting Mobile Bottom Quick Action Bar */}
      <MobileBottomBar client={client} />
    </main>
  );
}
