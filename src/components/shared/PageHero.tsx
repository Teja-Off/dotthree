import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  image?: ImageAsset;
  /** Optional content rendered beside the lead (e.g. quick facts or actions). */
  aside?: ReactNode;
  className?: string;
}

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

/** Editorial hero shared by all inner pages. Animates with CSS so it paints immediately. */
export function PageHero({ eyebrow, title, lead, image, aside, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-[calc(var(--header-height)+3rem)] lg:pt-[calc(var(--header-height)+5.5rem)]",
        image ? "pb-0" : "pb-section",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_5%,transparent_60%)]"
      />
      <Container className="relative">
        <div className="animate-rise" style={delay(0)}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h1 className="text-h1 font-bold text-ink lg:col-span-8">{title}</h1>
          <div className="flex animate-rise flex-col gap-8 lg:col-span-4 lg:pb-2" style={delay(120)}>
            <p className="text-lead text-ink-3">{lead}</p>
            {aside}
          </div>
        </div>
        {image ? (
          <div className="relative mt-14 aspect-[4/3] overflow-hidden bg-mist sm:aspect-[16/9] lg:mt-20 lg:aspect-[21/8]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              fetchPriority="high"
              placeholder="blur"
              sizes="(min-width: 1400px) 1320px, 100vw"
              className="img-mono animate-settle object-cover"
            />
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-2 w-24 bg-orange sm:w-40" />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
