import Image from "next/image";

import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { STAGGER_STEP } from "@/lib/motion";
import { cn, toIndexLabel } from "@/lib/utils";
import type { Audience } from "@/types";

type AudienceTheme = "light" | "dark" | "mist";

const themeClasses: Record<AudienceTheme, string> = {
  light: "bg-paper text-ink",
  dark: "on-dark bg-ink text-paper",
  mist: "bg-mist text-ink",
};

interface AudienceBlockProps {
  audience: Audience;
  index: number;
  theme: AudienceTheme;
  /** Places the image on the right on large screens. */
  isReversed?: boolean;
}

export function AudienceBlock({ audience, index, theme, isReversed = false }: AudienceBlockProps) {
  const isDark = theme === "dark";

  return (
    <section
      id={audience.id}
      aria-labelledby={`${audience.id}-title`}
      className={cn("py-section", themeClasses[theme])}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-6 border-b pb-6 text-sm font-medium",
            isDark ? "border-paper/15" : "border-line",
          )}
        >
          <Eyebrow index={toIndexLabel(index)} tone={isDark ? "dark" : "light"}>
            {audience.label}
          </Eyebrow>
          <span className={isDark ? "text-paper/60" : "text-ink-3"}>{audience.items.length} solutions</span>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className={cn("lg:col-span-5", isReversed && "lg:order-2 lg:col-start-8")}>
            <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-[4/5]">
              <Image
                src={audience.image.src}
                alt={audience.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="img-mono object-cover"
              />
              <span
                aria-hidden="true"
                className={cn("absolute bottom-0 h-2 w-1/3 bg-orange", isReversed ? "right-0" : "left-0")}
              />
            </div>
          </Reveal>

          <div
            className={cn("flex flex-col lg:col-span-7", isReversed ? "lg:order-1 lg:col-span-6" : "lg:pl-6")}
          >
            <Reveal>
              <h2 id={`${audience.id}-title`} className="max-w-[16ch] text-h2 font-bold">
                {audience.title}
              </h2>
              <p className={cn("mt-6 max-w-xl text-lead", isDark ? "text-paper/70" : "text-ink-3")}>
                {audience.description}
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-x-8 sm:grid-cols-2">
              {audience.items.map((item, itemIndex) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={itemIndex * STAGGER_STEP * 0.5}
                  className={cn("border-t py-6", isDark ? "border-paper/15" : "border-line-strong")}
                >
                  <h3 className="flex items-center gap-3 text-lg font-semibold tracking-[-0.015em]">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-orange" />
                    {item.title}
                  </h3>
                  <p className={cn("mt-2", isDark ? "text-paper/65" : "text-ink-3")}>{item.description}</p>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10">
              <ButtonLink href="/contact" variant={isDark ? "primary" : "dark"} withArrow>
                {audience.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
