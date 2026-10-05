import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/data/about";
import { STAGGER_STEP } from "@/lib/motion";
import { toIndexLabel } from "@/lib/utils";

export function ValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="py-section">
      <Container>
        <SectionHeading
          id="values-heading"
          index="03"
          eyebrow="Values"
          title="How we work, in four words."
          description="These aren't slogans on a wall. They're the checks we apply to every job before it leaves our hands."
          layout="split"
        />
        <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal
              as="li"
              key={value.title}
              delay={index * STAGGER_STEP}
              className="group/value flex min-h-72 flex-col justify-between gap-12 bg-paper p-8 transition-colors duration-500 hover:bg-mist"
            >
              <span className="text-sm font-semibold text-orange-ink tabular-nums">
                {toIndexLabel(index)}
              </span>
              <div>
                <h3 className="text-[clamp(2rem,1.4rem+1.5vw,2.75rem)] leading-none font-bold tracking-[-0.035em] text-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-ink-3">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
