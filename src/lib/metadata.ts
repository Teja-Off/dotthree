import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Builds consistent per-page metadata: title, canonical, Open Graph and Twitter. */
export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteConfig.name}`,
      description,
    },
  };
}
