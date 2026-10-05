import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/home";
import { STAGGER_STEP } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Timeline: vertical rail on mobile, horizontal rail from lg upwards.
 * The rail and dots are decorative; the ordered list carries the meaning.
 */
export function ProcessSection() {
  const lastIndex = processSteps.length - 1;

  return (
    <section aria-labelledby="process-heading" className="bg-mist py-section">
      <Container>
        <SectionHeading
          id="process-heading"
          index="04"
          eyebrow="How we work"
          title="A clear process, from first call to handover."
          description="Every job follows the same four steps, so you always know what's happening, what it costs and when it will be done."
          layout="split"
        />

        <ol className="relative mt-16 grid gap-12 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-line-strong lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
          />
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * STAGGER_STEP}
              className="relative pl-12 lg:pt-14 lg:pl-0"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1 left-0 size-[15px] rounded-full border-2 lg:top-0",
                  index === lastIndex ? "border-orange bg-orange" : "border-ink bg-mist",
                )}
              />
              <span className="block text-[clamp(3rem,2rem+3vw,4.75rem)] leading-none font-bold tracking-[-0.05em] text-ink/15 tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-4 text-h3 font-bold text-ink">{step.title}</h3>
              <p className="mt-3 max-w-xs text-ink-3">{step.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-3.5 py-1.5 text-sm font-medium text-ink-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-orange" />
                {step.detail}
              </span>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
