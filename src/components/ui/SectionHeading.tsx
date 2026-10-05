import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  /** "split" puts the description beside the title on large screens. */
  layout?: "stacked" | "split";
  as?: "h1" | "h2";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  tone = "light",
  layout = "stacked",
  as: Heading = "h2",
  className,
  id,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const isSplit = layout === "split";

  return (
    <div className={cn("grid gap-6", isSplit && "lg:grid-cols-12 lg:items-end lg:gap-12", className)}>
      <div className={cn("flex flex-col gap-6", isSplit && "lg:col-span-7")}>
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
        <Heading id={id} className={cn("max-w-[18ch] text-h2 font-bold", isDark ? "text-paper" : "text-ink")}>
          {title}
        </Heading>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-lead",
            isDark ? "text-paper/70" : "text-ink-3",
            isSplit && "lg:col-span-5 lg:justify-self-end",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
