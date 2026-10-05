import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";
import { STAGGER_STEP } from "@/lib/motion";

export function ProjectsPreview() {
  const [lead, ...rest] = getFeaturedProjects(3);

  return (
    <section aria-labelledby="work-heading" className="py-section">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="work-heading"
            index="06"
            eyebrow="Selected work"
            title="Recent projects, solved properly."
          />
          <ButtonLink href="/projects" variant="outline" withArrow className="w-fit">
            View all projects
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 lg:mt-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProjectCard
              project={lead}
              aspect="portrait"
              href={`/projects#${lead.slug}`}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </Reveal>
          <div className="grid gap-14 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-12">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={(index + 1) * STAGGER_STEP}>
                <ProjectCard
                  project={project}
                  aspect="landscape"
                  href={`/projects#${project.slug}`}
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
