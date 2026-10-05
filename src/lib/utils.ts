import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge taught about the custom type scale defined in globals.css.
 * Without this, names like `text-h2` are mistaken for text colours and get
 * dropped when combined with `text-ink`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "lead", "eyebrow"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Zero-pads an index into a two-digit label, e.g. 0 -> "01". */
export function toIndexLabel(index: number): string {
  return String(index + 1).padStart(2, "0");
}
