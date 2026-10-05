import { Check } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities, experienceStats } from "@/data/about";
import { STAGGER_STEP } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="on-dark relative overflow-hidden bg-ink py-section text-paper"
    >
      <div
        aria-hidden="true"
        className="dot-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
      />
      <Container className="relative">
        <SectionHeading
          id="experience-heading"
          index="05"
          eyebrow="Experience"
          title="Hands-on expertise, not just theory."
          tone="dark"
        />

        <dl className="mt-16 grid gap-px overflow-hidden border-y border-paper/15 sm:grid-cols-3 lg:mt-20">
          {experienceStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * STAGGER_STEP}
              className="flex flex-col-reverse gap-4 py-10 sm:border-l sm:border-paper/15 sm:px-8 sm:first:border-l-0 sm:first:pl-0"
            >
              <dt className="max-w-[22ch] text-paper/70">{stat.label}</dt>
              <dd className="text-[clamp(3.5rem,2rem+5vw,6.5rem)] leading-none font-bold tracking-[-0.05em] text-orange">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <h3 className="text-h3 font-semibold lg:col-span-4">What our team works on every week</h3>
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-8">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 border-b border-paper/15 pb-5 text-paper/85"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-orange" aria-hidden="true" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
