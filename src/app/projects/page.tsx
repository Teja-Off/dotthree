import { CTASection } from "@/components/home/CTASection";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { projectFilters, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected DotThree projects across computer repair, business IT, networking, hardware upgrades, data recovery and system setup.",
  path: "/projects",
});

const projectCategories = Array.from(new Set(projects.map((project) => project.category)));

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that keeps people moving."
        lead="A selection of recent jobs, from single-device repairs to office-wide networks. Each one started with a problem and ended with a system that works."
        aside={
          <ul className="flex flex-wrap gap-2" aria-label="Project categories">
            {projectCategories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-line-strong px-3 py-1 text-sm text-ink-2"
              >
                {category}
              </li>
            ))}
          </ul>
        }
      />
      <section aria-labelledby="gallery-heading" className="pb-section">
        <Container>
          <h2 id="gallery-heading" className="sr-only">
            Project gallery
          </h2>
          <ProjectGallery projects={projects} filters={projectFilters} />
        </Container>
      </section>
      <CTASection
        title="Have a project in mind?"
        text="Share what you need, and we'll come back with a clear plan, timeline and quote."
      />
    </>
  );
}
