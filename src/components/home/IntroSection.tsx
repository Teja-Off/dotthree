import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { introPillars } from "@/data/home";
import { STAGGER_STEP } from "@/lib/motion";
import { toIndexLabel } from "@/lib/utils";

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className="py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Eyebrow index="01">About DotThree</Eyebrow>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <h2
              id="intro-heading"
              className="text-[clamp(1.65rem,1.1rem+2vw,3rem)] leading-[1.14] font-medium tracking-[-0.03em] text-ink"
            >
              We&apos;re a technology services company for people and businesses who depend on their
              computers.{" "}
              <span className="text-ink-4">
                We repair, upgrade, secure and support the systems that keep work moving, with the care of
                engineers and the clarity of good service.
              </span>
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-3 sm:gap-8">
            {introPillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.title} delay={index * STAGGER_STEP}>
                <span className="text-sm font-semibold text-orange-ink tabular-nums">
                  {toIndexLabel(index)}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink">{pillar.title}</h3>
                <p className="mt-2 text-ink-3">{pillar.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
