import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { mission, vision } from "@/data/about";
import { STAGGER_STEP } from "@/lib/motion";

const statements = [mission, vision];

export function MissionVision() {
  return (
    <section aria-label="Mission and vision" className="bg-mist py-section">
      <Container>
        <Eyebrow index="02">What drives us</Eyebrow>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
          {statements.map((statement, index) => (
            <Reveal
              key={statement.title}
              delay={index * STAGGER_STEP}
              className="flex flex-col gap-10 bg-mist p-8 sm:p-12 lg:p-16"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-h3 font-bold text-ink">{statement.title}</h2>
                <span
                  aria-hidden="true"
                  className={index === 0 ? "size-3 rounded-full bg-ink" : "size-3 rounded-full bg-orange"}
                />
              </div>
              <p className="text-[clamp(1.5rem,1.1rem+1.5vw,2.5rem)] leading-[1.2] font-medium tracking-[-0.03em] text-ink">
                {statement.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
