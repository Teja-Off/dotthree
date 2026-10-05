import { cn } from "@/lib/utils";

interface TriDotProps {
  className?: string;
  /** Colour of the first two dots; the third is always brand orange. */
  tone?: "ink" | "paper";
}

/** The DOTTHREE mark: three dots, the last one lit in orange. */
export function TriDot({ className, tone = "ink" }: TriDotProps) {
  const base = tone === "ink" ? "fill-ink" : "fill-paper";
  return (
    <svg
      viewBox="0 0 30 8"
      aria-hidden="true"
      focusable="false"
      className={cn("h-2 w-[30px] shrink-0", className)}
    >
      <circle cx="4" cy="4" r="3.25" className={base} />
      <circle cx="15" cy="4" r="3.25" className={base} />
      <circle cx="26" cy="4" r="3.25" className="fill-orange" />
    </svg>
  );
}
