import clientsData from "@/data/clients.json";
import activeClientData from "@/data/active-client.json";
import { slugify, unslugify } from "./utils";

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  minRate: number;
  maxRate: number;
  popular: boolean;
  features: string[];
}

export interface CalculatorPreset {
  label: string;
  sqft: number;
}

export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  priceRange?: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ReviewItem {
  author: string;
  city: string;
  rating: number;
  date: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClientProfile {
  id: string;
  slug: string;
  niche: "epoxy" | "roofing";
  nicheTitle: string;
  businessName: string;
  ownerName?: string;
  address: string;
  primaryCity: string;
  province: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  heroSubtitle: string;
  serviceAreas: string[];
  guarantees: string[];
  trustBadges: string[];
  pricingTiers: PricingTier[];
  calculatorPresets: CalculatorPreset[];
  services: ServiceItem[];
  processSteps: ProcessStep[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
}

const clients = clientsData as unknown as Record<string, ClientProfile>;

export function getActiveClient(overrideSlug?: string): ClientProfile {
  const envSlug = process.env.NEXT_PUBLIC_CLIENT_ID;
  const activeSlug =
    overrideSlug || envSlug || activeClientData.clientId || "purest-epoxy";
  const client = clients[activeSlug];

  if (!client) {
    // Fallback to purest-epoxy or first client
    return clients["purest-epoxy"] || Object.values(clients)[0];
  }
  return client;
}

export function getClientBySlug(slug: string): ClientProfile | undefined {
  return clients[slug];
}

export function getAllClients(): ClientProfile[] {
  return Object.values(clients);
}

export function getServiceBySlug(
  client: ClientProfile,
  serviceSlug: string
): ServiceItem | undefined {
  return client.services.find((s) => s.slug === serviceSlug);
}

export function getCityDisplayName(
  citySlug: string,
  serviceAreas: string[]
): string {
  const match = serviceAreas.find(
    (area) => slugify(area) === citySlug.toLowerCase()
  );
  return match || unslugify(citySlug);
}

export function getAllLocationCombinations(client: ClientProfile) {
  const combinations: { city: string; service: string }[] = [];
  for (const city of client.serviceAreas) {
    const citySlug = slugify(city);
    for (const service of client.services) {
      combinations.push({
        city: citySlug,
        service: service.slug,
      });
    }
  }
  return combinations;
}
