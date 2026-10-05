import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

interface ProjectCardProps {
  project: Project;
  aspect?: keyof typeof aspectClasses;
  sizes?: string;
  /** When set, the whole card links here. */
  href?: string;
  className?: string;
}

function CardShell({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn("group/project flex flex-col", className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}

export function ProjectCard({
  project,
  aspect = "landscape",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  href,
  className,
}: ProjectCardProps) {
  return (
    <article id={href ? undefined : project.slug} className={cn("h-full", className)}>
      <CardShell href={href} className="h-full">
        <div className={cn("relative overflow-hidden bg-mist", aspectClasses[aspect])}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            placeholder="blur"
            sizes={sizes}
            className="img-mono object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/project:scale-[1.04]"
          />
          <span className="absolute top-4 left-4 rounded-full bg-paper px-3 py-1.5 text-xs font-semibold text-ink">
            {project.category}
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-1 w-0 bg-orange transition-[width] duration-700 ease-[var(--ease-out-expo)] group-hover/project:w-full"
          />
        </div>
        <div className="flex flex-1 flex-col pt-6">
          <p className="text-sm text-ink-3">{project.client}</p>
          <h3 className="mt-2 text-h3 font-semibold text-ink">{project.title}</h3>
          <p className="mt-3 text-ink-3">{project.description}</p>
          <p className="mt-5 flex items-center gap-2.5 border-t border-line pt-4 text-sm font-medium text-ink">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-orange" />
            {project.outcome}
          </p>
        </div>
      </CardShell>
    </article>
  );
}
