import { describe, expect, it } from "vitest";

import { cn, toIndexLabel } from "@/lib/utils";

describe("cn", () => {
  it("keeps a custom font size when combined with a text colour", () => {
    // Regression: text-h2 used to be treated as a colour and dropped.
    expect(cn("max-w-[18ch] text-h2 font-bold", "text-ink")).toBe("max-w-[18ch] text-h2 font-bold text-ink");
  });

  it("lets a later custom font size replace an earlier one", () => {
    expect(cn("text-lead text-ink-3", "text-h3")).toBe("text-ink-3 text-h3");
  });

  it("resolves conflicting utilities in favour of the last one", () => {
    expect(cn("inline-flex px-2", "hidden px-4")).toBe("hidden px-4");
  });

  it("ignores falsy values", () => {
    expect(cn("a", false, undefined, null, "", "b")).toBe("a b");
  });
});

describe("toIndexLabel", () => {
  it("zero-pads single digit positions", () => {
    expect(toIndexLabel(0)).toBe("01");
    expect(toIndexLabel(8)).toBe("09");
  });

  it("leaves two digit positions unchanged", () => {
    expect(toIndexLabel(9)).toBe("10");
    expect(toIndexLabel(13)).toBe("14");
  });
});
