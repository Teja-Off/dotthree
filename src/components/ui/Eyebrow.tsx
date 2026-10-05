import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** Optional index shown before the label, e.g. "01". */
  index?: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Small label that introduces a section: "(01) — Services". */
export function Eyebrow({ children, index, tone = "light", className }: EyebrowProps) {
  const isDark = tone === "dark";
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow font-semibold uppercase",
        isDark ? "text-paper/70" : "text-ink-3",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-orange" />
      {index ? (
        <span className={cn("tabular-nums", isDark ? "text-orange" : "text-orange-ink")}>{index}</span>
      ) : null}
      {index ? (
        <span aria-hidden="true" className={cn("h-px w-6", isDark ? "bg-paper/30" : "bg-ink/25")} />
      ) : null}
      <span>{children}</span>
    </p>
  );
}
