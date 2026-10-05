import { describe, expect, it } from "vitest";

import { EASE_OUT_EXPO, STAGGER_STEP } from "@/lib/motion";

describe("motion constants", () => {
  it("defines a valid cubic-bezier easing (x values within 0..1)", () => {
    expect(EASE_OUT_EXPO).toHaveLength(4);
    const [x1, , x2] = EASE_OUT_EXPO;
    expect(x1).toBeGreaterThanOrEqual(0);
    expect(x1).toBeLessThanOrEqual(1);
    expect(x2).toBeGreaterThanOrEqual(0);
    expect(x2).toBeLessThanOrEqual(1);
  });

  it("uses a short, positive stagger step", () => {
    expect(STAGGER_STEP).toBeGreaterThan(0);
    expect(STAGGER_STEP).toBeLessThan(0.2);
  });
});
