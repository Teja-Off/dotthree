import { ServiceCard, type ServiceCardVariant } from "@/components/services/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedServices } from "@/data/services";
import { STAGGER_STEP } from "@/lib/motion";

/**
 * Bento layout: each position in the featured list gets its own card style
 * and grid placement, so the section reads as composed rather than repeated.
 */
const bentoSlots: { variant: ServiceCardVariant; className: string }[] = [
  { variant: "feature", className: "lg:col-span-7 lg:row-span-2" },
  { variant: "outline", className: "lg:col-span-5" },
  { variant: "dark", className: "lg:col-span-5" },
  { variant: "compact", className: "sm:col-span-1 lg:col-span-3" },
  { variant: "compact", className: "sm:col-span-1 lg:col-span-3" },
  { variant: "compact", className: "sm:col-span-1 lg:col-span-3" },
  { variant: "compact", className: "sm:col-span-1 lg:col-span-3" },
  { variant: "wide", className: "lg:col-span-12" },
];

const COMPACT_START = 3;
const COMPACT_END = 7;

export function ServicesPreview() {
  const services = getFeaturedServices();
  const primary = services.slice(0, COMPACT_START);
  const compact = services.slice(COMPACT_START, COMPACT_END);
  const wide = services.slice(COMPACT_END);

  return (
    <section aria-labelledby="services-heading" className="pb-section">
      <Container>
        <SectionHeading
          id="services-heading"
          index="02"
          eyebrow="Services"
          title="Everything your technology needs, under one roof."
          description="From a single laptop repair to an office-wide network, every job gets the same structured approach and the same standard of work."
          layout="split"
        />

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">
          {primary.map((service, index) => (
            <Reveal key={service.slug} delay={index * STAGGER_STEP} className={bentoSlots[index].className}>
              <ServiceCard service={service} index={index} variant={bentoSlots[index].variant} />
            </Reveal>
          ))}

          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:col-span-12 lg:grid-cols-12">
            {compact.map((service, offset) => {
              const index = COMPACT_START + offset;
              return (
                <Reveal
                  key={service.slug}
                  delay={offset * STAGGER_STEP}
                  className={bentoSlots[index].className}
                >
                  <ServiceCard service={service} index={index} variant="compact" />
                </Reveal>
              );
            })}
          </div>

          {wide.map((service, offset) => {
            const index = COMPACT_END + offset;
            return (
              <Reveal key={service.slug} className={bentoSlots[index].className}>
                <ServiceCard service={service} index={index} variant="wide" />
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/services" variant="outline" withArrow>
            View all 14 services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
