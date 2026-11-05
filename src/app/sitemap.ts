import { MetadataRoute } from "next";
import { getActiveClient, getAllLocationCombinations } from "@/lib/client";

export default function sitemap(): MetadataRoute.Sitemap {
  const client = getActiveClient();
  const baseUrl = "https://example.com";
  const now = new Date();

  // Root URL
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // All Programmatic Location/Service combinations
  const combinations = getAllLocationCombinations(client);
  for (const { city, service } of combinations) {
    routes.push({
      url: `${baseUrl}/locations/${city}/${service}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  return routes;
}
