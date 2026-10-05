import { describe, expect, it } from "vitest";

import { formattedAddress, siteConfig, whatsappLink } from "@/lib/site";

describe("whatsappLink", () => {
  it("builds a wa.me link with the default greeting", () => {
    const link = new URL(whatsappLink());
    expect(link.origin).toBe("https://wa.me");
    expect(link.pathname).toBe(`/${siteConfig.contact.whatsappNumber}`);
    expect(link.searchParams.get("text")).toBe("Hi DotThree, I need help with my computer.");
  });

  it("encodes a custom message safely", () => {
    const link = new URL(whatsappLink("Laptop & printer: help?"));
    expect(link.searchParams.get("text")).toBe("Laptop & printer: help?");
  });
});

describe("formattedAddress", () => {
  it("joins street, locality with postcode, and region", () => {
    const { street, locality, postalCode, region } = siteConfig.contact.address;
    expect(formattedAddress).toBe(`${street}, ${locality} ${postalCode}, ${region}`);
  });
});
