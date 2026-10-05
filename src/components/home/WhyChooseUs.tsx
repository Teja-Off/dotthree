import Image from "next/image";

import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/data/home";
import { images } from "@/data/images";
import { toIndexLabel } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface WhyChooseUsProps {
  index?: string;
  image?: ImageAsset;
}

export function WhyChooseUs({
  index: sectionIndex = "03",
  image = images.technicianBench,
}: WhyChooseUsProps) {
  return (
    <section aria-labelledby="why-heading" className="border-t border-line py-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-10 lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
            <SectionHeading
              id="why-heading"
              index={sectionIndex}
              eyebrow="Why DotThree"
              title="Six reasons clients keep calling us back."
            />
            <div className="relative hidden aspect-[5/4] max-w-md overflow-hidden bg-mist lg:block">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="img-mono object-cover"
              />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-orange" />
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {reasons.map((reason, index) => (
            <Reveal
              as="li"
              key={reason.title}
              className="group/reason grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-9 last:border-b sm:grid-cols-[6rem_1fr] sm:gap-6 lg:py-11"
            >
              <span className="text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-none font-bold tracking-[-0.04em] text-ink-4 tabular-nums transition-colors duration-500 group-hover/reason:text-orange-ink">
                {toIndexLabel(index)}
              </span>
              <div>
                <h3 className="text-h3 font-semibold text-ink">{reason.title}</h3>
                <p className="mt-3 max-w-lg text-lead text-ink-3">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
