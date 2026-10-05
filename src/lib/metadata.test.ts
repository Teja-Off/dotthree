import { describe, expect, it } from "vitest";

import { createPageMetadata } from "@/lib/metadata";

describe("createPageMetadata", () => {
  const metadata = createPageMetadata({
    title: "Services",
    description: "Repairs, upgrades and IT support.",
    path: "/services",
  });

  it("sets the page title, description and canonical path", () => {
    expect(metadata.title).toBe("Services");
    expect(metadata.description).toBe("Repairs, upgrades and IT support.");
    expect(metadata.alternates?.canonical).toBe("/services");
  });

  it("mirrors the page details into Open Graph and Twitter cards", () => {
    expect(metadata.openGraph).toMatchObject({
      title: "Services · DotThree",
      description: "Repairs, upgrades and IT support.",
      url: "/services",
      siteName: "DotThree",
    });
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", title: "Services · DotThree" });
  });
});
