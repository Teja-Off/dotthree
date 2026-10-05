import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Service } from "@/types";

export type ServiceCardVariant = "feature" | "outline" | "dark" | "compact" | "wide";

interface ServiceCardProps {
  service: Service;
  index: number;
  variant: ServiceCardVariant;
  className?: string;
}

function ArrowBadge({ tone }: { tone: "ink" | "paper" | "orange" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[var(--ease-out-expo)]",
        "group-hover/card:rotate-45",
        tone === "ink" &&
          "border-line-strong text-ink group-hover/card:border-orange group-hover/card:bg-orange",
        tone === "paper" &&
          "border-paper/30 text-paper group-hover/card:border-orange group-hover/card:bg-orange group-hover/card:text-ink",
        tone === "orange" &&
          "border-ink bg-ink text-paper group-hover/card:bg-orange group-hover/card:text-ink group-hover/card:border-orange",
      )}
    >
      <ArrowUpRight className="size-5" />
    </span>
  );
}

function IndexLabel({ index, className }: { index: number; className?: string }) {
  return (
    <span className={cn("text-sm font-semibold tabular-nums", className)}>
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

const cardBase =
  "group/card relative flex h-full overflow-hidden transition-colors duration-500 ease-[var(--ease-out-expo)]";

/** Service tile with several deliberate layouts so a grid never looks uniform. */
export function ServiceCard({ service, index, variant, className }: ServiceCardProps) {
  const href = `/services#${service.slug}`;
  const Icon = service.icon;

  if (variant === "feature") {
    return (
      <Link
        href={href}
        className={cn(
          cardBase,
          "min-h-[26rem] flex-col justify-end bg-ink text-paper lg:min-h-[36rem]",
          className,
        )}
      >
        <Image
          src={service.image.src}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="img-mono object-cover opacity-80 transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/card:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="relative flex flex-col gap-6 p-7 sm:p-10">
          <div className="flex items-center gap-3 text-paper/70">
            <IndexLabel index={index} className="text-orange" />
            <span className="h-px w-8 bg-paper/30" aria-hidden="true" />
            <span className="text-sm font-medium">Most requested</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="text-h2 font-bold">{service.title}</h3>
              <p className="mt-4 max-w-md text-lead text-paper/75">{service.summary}</p>
            </div>
            <ArrowBadge tone="paper" />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "wide") {
    return (
      <Link
        href={href}
        className={cn(
          cardBase,
          "flex-col gap-8 bg-orange-soft p-7 sm:p-10 lg:flex-row lg:items-center",
          className,
        )}
      >
        <div className="flex items-center gap-5 lg:w-1/3">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-orange text-ink">
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <h3 className="text-h3 font-bold text-ink">{service.title}</h3>
        </div>
        <p className="text-lead text-ink-2 lg:flex-1">{service.summary}</p>
        <div className="flex items-center gap-4 lg:justify-end">
          <span className="text-sm font-semibold text-ink">Plan your business IT</span>
          <ArrowBadge tone="orange" />
        </div>
      </Link>
    );
  }

  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  return (
    <Link
      href={href}
      className={cn(
        cardBase,
        "flex-col justify-between p-7 sm:p-8",
        isCompact ? "gap-6 sm:gap-10" : "gap-10",
        isDark && "on-dark bg-ink text-paper",
        variant === "outline" && "border border-line bg-paper hover:border-ink",
        isCompact && "bg-paper hover:bg-mist",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex size-12 items-center justify-center rounded-full transition-colors duration-500",
            isDark ? "bg-paper/10 text-orange" : "bg-mist text-ink group-hover/card:bg-orange",
          )}
        >
          <Icon className="size-[1.35rem]" aria-hidden="true" />
        </span>
        <IndexLabel index={index} className={isDark ? "text-orange" : "text-orange-ink"} />
      </div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className={cn("font-bold tracking-[-0.025em]", isCompact ? "text-xl" : "text-h3")}>
            {service.title}
          </h3>
          <p
            className={cn(
              "mt-3 max-w-sm",
              isDark ? "text-paper/70" : "text-ink-3",
              isCompact && "text-[0.95rem]",
            )}
          >
            {service.summary}
          </p>
        </div>
        {isCompact ? null : <ArrowBadge tone={isDark ? "paper" : "ink"} />}
      </div>
      {isCompact ? (
        <ArrowUpRight
          aria-hidden="true"
          className="absolute top-8 right-8 size-5 translate-y-1 opacity-0 transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100 sm:hidden"
        />
      ) : null}
    </Link>
  );
}
