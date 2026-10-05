import type { Testimonial } from "@/types";

/**
 * PLACEHOLDER testimonials.
 * Replace each entry with a real, approved client quote. The shape stays
 * the same, so no component changes are needed.
 */
export const testimonials: Testimonial[] = [
  {
    id: "studio-lead",
    quote:
      "They didn't just fix the Wi-Fi, they explained what was actually wrong and left us with a network diagram we understand. It's been quiet ever since, which is exactly what we wanted.",
    name: "Ananya Rao",
    role: "Studio Manager",
    context: "Architecture studio",
  },
  {
    id: "practice-owner",
    quote:
      "When our archive drive failed, DotThree told us honestly what they could recover before charging anything. We got our records back and a backup plan so it can't happen again.",
    name: "Rahul Menon",
    role: "Partner",
    context: "Accounting practice",
  },
  {
    id: "freelancer",
    quote:
      "Clear quote, repaired in two days, and the laptop came back cleaner than when I bought it. Easy people to deal with.",
    name: "Priya Shah",
    role: "Independent Consultant",
    context: "Laptop repair",
  },
];
