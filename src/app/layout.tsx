import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getActiveClient } from "@/lib/client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = getActiveClient();
  const isEpoxy = client.niche === "epoxy";

  return {
    title: {
      default: `${client.businessName} | ${client.tagline}`,
      template: `%s | ${client.businessName}`,
    },
    description: `${client.businessName} delivers ${isEpoxy ? "commercial polyaspartic and epoxy flooring" : "emergency roof leak repair and architectural shingles"} in ${client.primaryCity} and across the GTA. ${client.rating}★ Google Rating. Call ${client.phone}.`,
    keywords: [
      client.businessName,
      `${client.primaryCity} ${isEpoxy ? "epoxy flooring" : "roofing contractor"}`,
      `${client.primaryCity} garage floor coating`,
      "Ontario contractor quote calculator",
      "GTA home exterior renovation",
      ...client.serviceAreas.map((city) => `${city} ${client.niche}`),
    ],
    authors: [{ name: client.businessName }],
    creator: client.businessName,
    metadataBase: new URL("https://example.com"),
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: "https://example.com",
      title: `${client.businessName} — ${client.tagline}`,
      description: client.heroSubtitle,
      siteName: client.businessName,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-obsidian text-slate-100 antialiased selection:bg-amber selection:text-obsidian font-body">
        {children}
      </body>
    </html>
  );
}
