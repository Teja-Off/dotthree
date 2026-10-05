"use client";

import { AnimatePresence, LazyMotion, MotionConfig, domMax } from "motion/react";
import * as m from "motion/react-m";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Project, ProjectFilterId } from "@/types";

interface ProjectGalleryProps {
  projects: Project[];
  filters: { id: ProjectFilterId; label: string }[];
}

function matchesFilter(project: Project, filterId: ProjectFilterId): boolean {
  return filterId === "all" || project.filter === filterId;
}

export function ProjectGallery({ projects, filters }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const options = useMemo(
    () =>
      filters.map((filter) => ({
        ...filter,
        count: projects.filter((project) => matchesFilter(project, filter.id)).length,
      })),
    [filters, projects],
  );

  const visibleProjects = projects.filter((project) => matchesFilter(project, activeFilter));

  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-center md:justify-between">
          <ProjectFilter options={options} activeId={activeFilter} onChange={setActiveFilter} />
          <p aria-live="polite" className="text-sm text-ink-3">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>
        </div>

        <m.ul layout className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project) => (
              <m.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              >
                <ProjectCard project={project} />
              </m.li>
            ))}
          </AnimatePresence>
        </m.ul>
      </MotionConfig>
    </LazyMotion>
  );
}
