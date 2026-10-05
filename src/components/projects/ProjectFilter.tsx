"use client";

import { cn } from "@/lib/utils";
import type { ProjectFilterId } from "@/types";

interface FilterOption {
  id: ProjectFilterId;
  label: string;
  count: number;
}

interface ProjectFilterProps {
  options: FilterOption[];
  activeId: ProjectFilterId;
  onChange: (id: ProjectFilterId) => void;
}

/** Toggle-button group; each button reports how many projects it will show. */
export function ProjectFilter({ options, activeId, onChange }: ProjectFilterProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.id === activeId;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.id)}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300",
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-line-strong bg-paper text-ink-2 hover:border-ink hover:text-ink",
            )}
          >
            {option.label}
            <span className={cn("text-xs tabular-nums", isActive ? "text-orange" : "text-ink-3")}>
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
