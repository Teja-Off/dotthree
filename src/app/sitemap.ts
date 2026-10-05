import type { MetadataRoute } from "next";

import { legalNav, mainNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

const PRIORITY_BY_PATH: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/contact": 0.8,
};
const DEFAULT_PRIORITY = 0.7;
const LEGAL_PRIORITY = 0.3;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = mainNav.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: PRIORITY_BY_PATH[item.href] ?? DEFAULT_PRIORITY,
  }));

  const legal = legalNav.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "yearly" as const,
    priority: LEGAL_PRIORITY,
  }));

  return [...pages, ...legal];
}
