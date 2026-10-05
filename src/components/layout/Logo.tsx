import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "ink" | "paper";
  onNavigate?: () => void;
}

/** Text wordmark: DOTTHREE followed by the orange "third dot". */
export function Logo({ className, tone = "ink", onNavigate }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="DotThree, go to homepage"
      onClick={onNavigate}
      className={cn(
        "group/logo inline-flex items-baseline text-[1.3rem] leading-none font-bold tracking-[-0.03em]",
        tone === "ink" ? "text-ink" : "text-paper",
        className,
      )}
    >
      <span>DOT</span>
      <span className="font-medium">THREE</span>
      <span
        aria-hidden="true"
        className="ml-[0.12em] inline-block size-[0.34em] translate-y-[-0.02em] rounded-full bg-orange transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/logo:scale-125"
      />
    </Link>
  );
}
