import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getActiveClient } from "@/lib/client";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090D16",
};

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
  return {
    title: {
      default: "Grimmer Agentics — Web Architecture, SEO & GEO",
      template: "%s | Grimmer Agentics",
    },
    description:
      "Grimmer Agentics engineers sub-second web applications, programmatic local SEO matrices, and direct Generative Engine Optimization (GEO) for modern businesses.",
    keywords: [
      "Grimmer Agentics",
      "Web Architecture Agency",
      "Generative Engine Optimization",
      "GEO Agency",
      "Programmatic SEO Toronto",
      "Next.js Engineering",
      "AI Search Optimization",
    ],
    authors: [{ name: "Grimmer Agentics Inc." }],
    creator: "Grimmer Agentics Inc.",
    metadataBase: new URL("https://grimmeragentics.com"),
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: "https://grimmeragentics.com",
      title: "Grimmer Agentics — Web Architecture, SEO & GEO",
      description:
        "Websites engineered for human search and autonomous AI agents.",
      siteName: "Grimmer Agentics",
    },
    twitter: {
      card: "summary_large_image",
      title: "Grimmer Agentics — Web Architecture, SEO & GEO",
      description:
        "Websites engineered for human search and autonomous AI agents.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white font-body">
        {children}
      </body>
    </html>
  );
}
