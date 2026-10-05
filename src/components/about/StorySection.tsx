import Image from "next/image";

import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { storyChapters } from "@/data/about";
import { images } from "@/data/images";

export function StorySection() {
  return (
    <section aria-labelledby="story-heading" className="py-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
            <SectionHeading
              id="story-heading"
              index="01"
              eyebrow="Our story"
              title="Built on a simple idea."
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="grid gap-12 lg:gap-16">
            {storyChapters.map((chapter) => (
              <Reveal
                as="li"
                key={chapter.label}
                className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <span className="text-eyebrow font-semibold text-orange-ink uppercase">{chapter.label}</span>
                <p className="text-[clamp(1.35rem,1.05rem+1.1vw,2rem)] leading-[1.3] font-medium tracking-[-0.02em] text-ink">
                  {chapter.text}
                </p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16 grid grid-cols-5 gap-4 lg:mt-24">
            <Reveal className="relative col-span-3 aspect-[4/5] overflow-hidden bg-mist">
              <Image
                src={images.technicianBench.src}
                alt={images.technicianBench.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 60vw"
                className="img-mono object-cover"
              />
            </Reveal>
            <Reveal
              delay={0.1}
              className="relative col-span-2 mt-16 aspect-[3/4] overflow-hidden bg-mist sm:mt-28"
            >
              <Image
                src={images.datacenterAisle.src}
                alt={images.datacenterAisle.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 26vw, 40vw"
                className="img-mono object-cover"
              />
              <span aria-hidden="true" className="absolute top-0 right-0 size-10 bg-orange sm:size-14" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
