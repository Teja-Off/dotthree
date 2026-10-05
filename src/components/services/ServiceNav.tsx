"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface ServiceNavGroup {
  id: string;
  label: string;
  services: { slug: string; title: string }[];
}

interface ServiceNavProps {
  groups: ServiceNavGroup[];
}

/** Portion of the viewport height an article must scroll past to become active. */
const ACTIVE_OFFSET_RATIO = 0.35;

/** Returns the id of the last article whose top has passed the activation line. */
function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const activationLine = window.innerHeight * ACTIVE_OFFSET_RATIO;
      const passed = ids.filter((id) => {
        const element = document.getElementById(id);
        return element !== null && element.getBoundingClientRect().top <= activationLine;
      });
      setActiveId(passed.at(-1) ?? ids[0] ?? null);
    };
    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return activeId;
}

/**
 * One nav, two layouts: a horizontal, sticky chip rail on small screens and a
 * grouped vertical index on large screens.
 */
export function ServiceNav({ groups }: ServiceNavProps) {
  const [ids] = useState(() => groups.flatMap((group) => group.services.map((service) => service.slug)));
  const activeId = useActiveSection(ids);
  const railRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !activeId || rail.scrollWidth <= rail.clientWidth) return;
    const link = rail.querySelector<HTMLElement>(`[data-slug="${activeId}"]`);
    if (!link) return;
    const target = link.offsetLeft - rail.clientWidth / 2 + link.clientWidth / 2;
    rail.scrollTo({ left: target, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav aria-label="Services">
      <ul
        ref={railRef}
        className="no-scrollbar -mx-gutter flex gap-2 overflow-x-auto px-gutter py-3 lg:mx-0 lg:flex-col lg:gap-8 lg:overflow-visible lg:p-0"
      >
        {groups.map((group) => (
          <li key={group.id} className="contents lg:block">
            <p className="mb-3 hidden text-eyebrow font-semibold text-ink-3 uppercase lg:block">
              {group.label}
            </p>
            <ul className="contents lg:flex lg:flex-col lg:border-l lg:border-line">
              {group.services.map((service) => {
                const isActive = service.slug === activeId;
                return (
                  <li key={service.slug} className="shrink-0">
                    <a
                      href={`#${service.slug}`}
                      data-slug={service.slug}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "block rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300",
                        "lg:-ml-px lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-1.5 lg:text-[0.95rem]",
                        isActive
                          ? "border-ink bg-ink text-paper lg:border-orange lg:bg-transparent lg:text-ink"
                          : "border-line-strong text-ink-3 hover:text-ink lg:border-transparent",
                      )}
                    >
                      {service.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
