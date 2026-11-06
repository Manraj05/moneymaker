"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  MapPin,
  Clock,
  Layers,
  ArrowRight,
  Maximize2,
  X,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import { ClientProfile } from "@/lib/client";

interface ProjectGalleryProps {
  client: ClientProfile;
}

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "metallic" | "flake" | "commercial" | "basement";
  categoryLabel: string;
  city: string;
  sqft: number;
  duration: string;
  system: string;
  finishType: string;
  tierId: string;
  description: string;
  imageSrc: string;
  badge: string;
  keyHighlights: string[];
}

const projects: ProjectItem[] = [
  {
    id: "hamilton-metallic",
    title: "Artisan 3D Metallic Marble Showroom Floor",
    category: "metallic",
    categoryLabel: "3D Metallic",
    city: "Hamilton Mountain",
    sqft: 520,
    duration: "2-Day Application",
    system: "Multi-Pigment Artisan Metallic Epoxy + Polyaspartic Clear Armor",
    finishType: "Silver Pearl & Obsidian Swirl (Mirror-Gloss Glass)",
    tierId: "metallic-marble",
    description:
      "Hand-manipulated pearlescent metallic pigments poured over a jet-black epoxy base, crowned with glowing hexagonal ceiling illumination and aliphatic clear armor.",
    imageSrc: "/after-garage.png",
    badge: "Flagship Showroom",
    keyHighlights: [
      "100% Seamless Hand-Troweled Marble Veining",
      "150°C Thermal Peak Rating (Zero Hot-Tire Pickup)",
      "Deep 30-Mil Glass-Like Optical Depth",
      "15-Year Delamination Contractor Guarantee",
    ],
  },
  {
    id: "burlington-flake",
    title: "Tuxedo Full-Flake Polyaspartic 2-Car Garage",
    category: "flake",
    categoryLabel: "Full-Flake",
    city: "Burlington Estates",
    sqft: 460,
    duration: "1-Day Rapid Install",
    system: "Full-Broadcast Vinyl Chip System to 100% Rejection",
    finishType: "Tuxedo Blend (Granite Black, Silver & Crisp White)",
    tierId: "flake-polyaspartic",
    description:
      "Complete diamond-grinding down to CSP 3 mechanical tooth, saturated with heavy polymer vinyl chips to full rejection, sealed with UV-stable aliphatic polyaspartic.",
    imageSrc: "/after-garage.png",
    badge: "Most Popular in GTA",
    keyHighlights: [
      "ASTM D-2047 0.70+ Anti-Slip Wet/Dry Traction",
      "Impervious to Ontario Calcium Chloride Road Salt Brine",
      "Walk on in 6 Hours · Park in 24 Hours",
      "Completely Covers Concrete Pitting & Hairline Cracks",
    ],
  },
  {
    id: "ancaster-metallic",
    title: "Glacier Silver Metallic Luxury Garage Bay",
    category: "metallic",
    categoryLabel: "3D Metallic",
    city: "Ancaster Luxury Build",
    sqft: 420,
    duration: "2-Day Precision Cure",
    system: "Deep-Pour Pearlescent Metallic Resin",
    finishType: "Glacier Silver & Smoke Quartz",
    tierId: "metallic-marble",
    description:
      "A mirror-reflective metallic surface engineered for an exotic car collector. Highly resistant to automotive solvents, brake fluid, and hot radial tires.",
    imageSrc: "/after-garage.png",
    badge: "Collector Grade",
    keyHighlights: [
      "100% UV-Stable Aliphatic Chemistry (Never Ambers)",
      "Zero Solvent Odors / CFIA Safe Formulations",
      "Effortless Dust-Free Swiffer Maintenance",
      "Light-Reflective Surface Brightens Garage by 300%",
    ],
  },
  {
    id: "mississauga-commercial",
    title: "Commercial Heavy Fleet Bay & Tech Center",
    category: "commercial",
    categoryLabel: "Commercial",
    city: "Mississauga Logistics Corridor",
    sqft: 1850,
    duration: "3-Day Commercial Turnaround",
    system: "High-Traffic Polyurea & Chemical-Resistant Polyaspartic",
    finishType: "Safety Industrial Gray with Safety Line Striping",
    tierId: "commercial-industrial",
    description:
      "Heavy-duty mechanical prep for commercial fleet maintenance. Formulated to handle heavy floor jacks, pallet trucks, and chemical washdowns.",
    imageSrc: "/after-garage.png",
    badge: "Industrial Grade",
    keyHighlights: [
      "Forklift & Hydraulic Fluid Chemical Immersion Proof",
      "WSIB Certified & $5M Commercial Liability Coverage",
      "Extreme Impact & Abrasion Resistance",
      "Seamless CFIA Sanitation Washdown Compliant",
    ],
  },
  {
    id: "oakville-basement",
    title: "Waterproof Moisture-Barrier Finished Basement",
    category: "basement",
    categoryLabel: "Basement",
    city: "Oakville Waterfront",
    sqft: 640,
    duration: "2-Day Vapor Lock",
    system: "Hydrostatic Vapor-Block Epoxy + Low-Sheen Satin Seal",
    finishType: "Natural Polished Concrete Slate Tone",
    tierId: "flake-polyaspartic",
    description:
      "Applied to an older basement slab prone to dampness. Holds back up to 25 lbs of hydrostatic head pressure, eliminating musty odors and efflorescence.",
    imageSrc: "/after-garage.png",
    badge: "Waterproof Shield",
    keyHighlights: [
      "Suppresses 25 lbs/1,000 sq ft Hydrostatic Groundwater Pressure",
      "Permanent Dampness & Efflorescence Isolation",
      "Hypoallergenic & Mold-Resistant Seamless Living Floor",
      "Warm to the Touch Compared to Bare Cold Concrete",
    ],
  },
  {
    id: "stoney-creek-flake",
    title: "Carbon Black & Silver 3-Car Estate Garage",
    category: "flake",
    categoryLabel: "Full-Flake",
    city: "Stoney Creek Foothills",
    sqft: 780,
    duration: "1-Day Turnaround",
    system: "Full Broadcast Flake System with Polyurea Joint Weld",
    finishType: "Carbon Graphite Flake Matrix",
    tierId: "flake-polyaspartic",
    description:
      "Custom three-car residential floor featuring diamond V-blade joint mending and full rejection vinyl flakes. Engineered for winter SUV snow melt.",
    imageSrc: "/after-garage.png",
    badge: "Estate Installation",
    keyHighlights: [
      "Stitched Expansion Joints Flush with the Slab",
      "Tough 32-Mil Total System Build Thickness",
      "Heavy Steel Tool Drop Resilience",
      "Written 15-Year Zero-Delamination Warranty",
    ],
  },
];

export default function ProjectGallery({ client }: ProjectGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="gallery"
      className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle light architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1 text-xs font-mono font-semibold text-slate-700 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-slate-900" />
            <span>Verified Portfolio &amp; Completed Works</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Recent Work Across {client.primaryCity} &amp; the GTA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Inspect real finished residential garages, artisan 3D metallic basements, and commercial facilities installed by {client.ownerName || "our"} and the {client.businessName} crew.
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects (6)" },
            { id: "flake", label: "Full-Flake Garages (2)" },
            { id: "metallic", label: "3D Metallic Marble (2)" },
            { id: "commercial", label: "Commercial Bays (1)" },
            { id: "basement", label: "Basement Waterproofing (1)" },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl border px-4 py-2 font-mono text-xs transition-all duration-200 ${
                  isSelected
                    ? "border-slate-950 bg-slate-950 text-white font-bold shadow-md scale-105"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {project.badge}
                    </span>
                  </div>

                  {/* Expand Lightbox Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-950 shadow-sm transition-transform hover:scale-110 hover:bg-white"
                    aria-label="View Project Details"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>

                  {/* Bottom Image Stats Bar */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-300" />
                      <span>{project.city}, ON</span>
                    </div>
                    <span>{project.sqft} sq ft</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 font-mono text-[10px] text-slate-500">
                      <Clock className="h-3 w-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <h3 className="mt-3 font-heading text-lg font-bold text-slate-950 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200/80 p-3 font-mono text-[11px] text-slate-700 space-y-1">
                    <div>
                      <strong className="text-slate-900">Finish: </strong>
                      {project.finishType}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-mono text-xs font-bold text-slate-900 hover:underline"
                >
                  Inspect Specs →
                </button>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-3.5 py-2 font-heading text-[11px] font-bold uppercase tracking-wider text-white shadow hover:bg-slate-800 transition-colors"
                >
                  <Calculator className="h-3 w-3" />
                  <span>Price This</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Guarantee Pill */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-slate-950">
                All Projects Installed with 15-Year Delamination Warranties
              </h4>
              <p className="text-xs text-slate-600">
                We bring physical material samples and color flake chips directly to your on-site laser estimate.
              </p>
            </div>
          </div>

          <a
            href={client.phoneHref}
            className="flex-shrink-0 font-mono text-xs font-bold uppercase text-slate-900 hover:underline"
          >
            Call {client.phone} to Book Free Consultation →
          </a>
        </div>
      </div>

      {/* Interactive Detail Modal / Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 p-5 bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-950 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-white">
                  {selectedProject.badge}
                </span>
                <span className="font-mono text-xs text-slate-600 font-semibold">
                  {selectedProject.city}, Ontario
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300"
                aria-label="Close Modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-heading text-2xl font-black text-slate-950">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Floor Area:</span>
                  <strong className="text-slate-950 font-bold">{selectedProject.sqft} sq ft</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Turnaround:</span>
                  <strong className="text-slate-950 font-bold">{selectedProject.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Warranty:</span>
                  <strong className="text-slate-950 font-bold">15-Year Delamination</strong>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Installed Engineering Attributes:
                </span>
                <div className="space-y-2 text-xs text-slate-800">
                  {selectedProject.keyHighlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-xs"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <a
                  href={client.phoneHref}
                  className="text-xs font-mono font-bold text-slate-800 hover:underline"
                >
                  Direct Technician Call: {client.phone}
                </a>

                <a
                  href="#calculator"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-slate-800 transition-colors"
                >
                  <Calculator className="h-4 w-4" />
                  <span>Estimate Cost for This System</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
