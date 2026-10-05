import { describe, expect, it } from "vitest";

import { isActivePath } from "@/lib/navigation";

describe("isActivePath", () => {
  it("matches the home link only on the home page", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/about", "/")).toBe(false);
  });

  it("matches a section and its nested pages", () => {
    expect(isActivePath("/services", "/services")).toBe(true);
    expect(isActivePath("/services/laptop-repair", "/services")).toBe(true);
  });

  it("does not match a different route that shares a prefix", () => {
    expect(isActivePath("/services-old", "/services")).toBe(false);
    expect(isActivePath("/contact", "/services")).toBe(false);
  });
});
