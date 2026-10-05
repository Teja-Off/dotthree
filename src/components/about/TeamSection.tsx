import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/about";
import { STAGGER_STEP } from "@/lib/motion";

/**
 * Team grid. Uses monogram tiles until real portraits are available;
 * swap the tile for a next/image when photos are added.
 */
export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="py-section">
      <Container>
        <SectionHeading
          id="team-heading"
          index="06"
          eyebrow="Team"
          title="The people behind the work."
          description="A small, experienced team. You'll speak directly with the people doing the work, not a call centre."
          layout="split"
        />
        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal as="li" key={member.name} delay={index * STAGGER_STEP} className="group/member">
              <div
                aria-hidden="true"
                className="dot-grid relative flex aspect-[4/5] items-end overflow-hidden bg-mist p-6 transition-colors duration-500 group-hover/member:bg-mist-2"
              >
                <span className="text-[7rem] leading-[0.8] font-bold tracking-[-0.06em] text-ink/10 transition-colors duration-500 group-hover/member:text-ink/20">
                  {member.initials}
                </span>
                <span className="absolute top-6 right-6 size-3 rounded-full bg-orange" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-ink">{member.name}</h3>
              <p className="mt-1 font-medium text-orange-ink">{member.role}</p>
              <p className="mt-3 text-ink-3">{member.focus}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
