import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseAreas } from "@/data/home";
import { toIndexLabel } from "@/lib/utils";

/** Typographic index of expertise areas on the one dark section of the page. */
export function ExpertiseSection() {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="on-dark relative overflow-hidden bg-ink py-section text-paper"
    >
      <div
        aria-hidden="true"
        className="dot-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_55%)]"
      />
      <Container className="relative">
        <SectionHeading
          id="expertise-heading"
          index="05"
          eyebrow="Expertise"
          title="Deep knowledge across the whole stack."
          description="Most technology problems sit where two areas meet. Knowing all of them is how we find the real cause faster."
          tone="dark"
          layout="split"
        />

        <ul className="mt-16 border-t border-paper/15 lg:mt-24">
          {expertiseAreas.map((area, index) => (
            <Reveal
              as="li"
              key={area.title}
              className="group/area grid gap-4 border-b border-paper/15 py-7 transition-colors duration-500 hover:bg-paper/[0.03] md:grid-cols-12 md:items-center md:gap-6 lg:py-9"
            >
              <span className="text-sm font-semibold text-orange tabular-nums md:col-span-1">
                {toIndexLabel(index)}
              </span>
              <h3 className="text-[clamp(2.25rem,1.1rem+4.2vw,5.25rem)] leading-[0.95] font-bold tracking-[-0.045em] transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover/area:translate-x-2 group-hover/area:text-orange md:col-span-6">
                {area.title}
              </h3>
              <div className="md:col-span-5">
                <p className="text-paper/70">{area.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${area.title} focus areas`}>
                  {area.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-paper/20 px-3 py-1 text-sm text-paper/80 transition-colors duration-500 group-hover/area:border-paper/40"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
