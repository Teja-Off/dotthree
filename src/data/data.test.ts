import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { capabilities, experienceStats, mission, storyChapters, team, values, vision } from "@/data/about";
import { expertiseAreas, heroFacts, introPillars, processSteps, reasons } from "@/data/home";
import { privacySections, termsSections } from "@/data/legal";
import { legalNav, mainNav } from "@/data/navigation";
import { getFeaturedProjects, projectFilters, projects } from "@/data/projects";
import {
  featuredServiceSlugs,
  getFeaturedServices,
  getServiceBySlug,
  getServicesByGroup,
  serviceGroups,
  serviceOptions,
  services,
} from "@/data/services";
import { audiences } from "@/data/solutions";
import { testimonials } from "@/data/testimonials";

function hasDuplicates(values: string[]): boolean {
  return new Set(values).size !== values.length;
}

describe("services data", () => {
  it("uses unique slugs", () => {
    expect(hasDuplicates(services.map((service) => service.slug))).toBe(false);
  });

  it("assigns every service to a known group, and every group has services", () => {
    const groupIds = serviceGroups.map((group) => group.id);
    services.forEach((service) => expect(groupIds).toContain(service.group));
    serviceGroups.forEach((group) => expect(getServicesByGroup(group.id).length).toBeGreaterThan(0));
  });

  it("gives every service benefits, problems and an image with alt text", () => {
    services.forEach((service) => {
      expect(service.benefits.length).toBeGreaterThan(0);
      expect(service.problems.length).toBeGreaterThan(0);
      expect(service.image.alt.length).toBeGreaterThan(0);
    });
  });

  it("resolves every featured slug to a real service", () => {
    expect(getFeaturedServices()).toHaveLength(featuredServiceSlugs.length);
  });

  it("returns undefined for unknown slugs", () => {
    expect(getServiceBySlug("not-a-service")).toBeUndefined();
  });

  it("exposes one form option per service", () => {
    expect(serviceOptions).toHaveLength(services.length);
    expect(serviceOptions[0]).toEqual({ value: services[0].slug, label: services[0].title });
  });
});

describe("projects data", () => {
  it("uses unique slugs", () => {
    expect(hasDuplicates(projects.map((project) => project.slug))).toBe(false);
  });

  it("maps every project to a filter that exists", () => {
    const filterIds = projectFilters.map((filter) => filter.id);
    projects.forEach((project) => expect(filterIds).toContain(project.filter));
  });

  it("returns the requested number of featured projects", () => {
    expect(getFeaturedProjects(3)).toHaveLength(3);
    expect(getFeaturedProjects()).toHaveLength(3);
  });
});

describe("content collections", () => {
  it("uses unique ids for testimonials, audiences and legal sections", () => {
    expect(hasDuplicates(testimonials.map((item) => item.id))).toBe(false);
    expect(hasDuplicates(audiences.map((item) => item.id))).toBe(false);
    expect(hasDuplicates(privacySections.map((item) => item.id))).toBe(false);
    expect(hasDuplicates(termsSections.map((item) => item.id))).toBe(false);
  });
});

describe("home content", () => {
  it("has exactly six reasons, matching the section headline", () => {
    expect(reasons).toHaveLength(6);
  });

  it("numbers the process steps sequentially", () => {
    expect(processSteps.map((step) => step.number)).toEqual(["01", "02", "03", "04"]);
  });

  it("gives every expertise area a description and tags", () => {
    expertiseAreas.forEach((area) => {
      expect(area.description.length).toBeGreaterThan(0);
      expect(area.tags.length).toBeGreaterThan(0);
    });
  });

  it("provides four hero facts and three intro pillars", () => {
    expect(heroFacts).toHaveLength(4);
    expect(introPillars).toHaveLength(3);
  });
});

describe("about content", () => {
  it("has four values, matching the 'four words' headline", () => {
    expect(values).toHaveLength(4);
  });

  it("derives each team member's initials from their name", () => {
    team.forEach((member) => {
      const initials = member.name
        .split(" ")
        .map((part) => part[0])
        .join("");
      expect(member.initials).toBe(initials);
    });
  });

  it("includes the story, mission, vision and experience content", () => {
    expect(storyChapters.length).toBeGreaterThan(0);
    expect(mission.text.length).toBeGreaterThan(0);
    expect(vision.text.length).toBeGreaterThan(0);
    expect(experienceStats.length).toBeGreaterThan(0);
    expect(capabilities.length).toBeGreaterThan(0);
  });
});

describe("navigation", () => {
  it("only links to routes that exist", () => {
    [...mainNav, ...legalNav].forEach((item) => {
      const segment = item.href === "/" ? "" : item.href.slice(1);
      const pageFile = join(process.cwd(), "src", "app", segment, "page.tsx");
      expect(existsSync(pageFile), `missing page for ${item.href}`).toBe(true);
    });
  });
});
