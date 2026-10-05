import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceNav, type ServiceNavGroup } from "@/components/services/ServiceNav";
import { Container } from "@/components/ui/Container";
import { getServicesByGroup, serviceGroups } from "@/data/services";
import { toIndexLabel } from "@/lib/utils";

/** The full service catalogue: sticky index on the left, grouped details on the right. */
export function ServiceGrid() {
  const groups = serviceGroups.map((group) => ({ ...group, services: getServicesByGroup(group.id) }));

  const navGroups: ServiceNavGroup[] = groups.map((group) => ({
    id: group.id,
    label: group.label,
    services: group.services.map(({ slug, title }) => ({ slug, title })),
  }));

  const orderedSlugs = navGroups.flatMap((group) => group.services.map((service) => service.slug));

  return (
    <section id="services-top" aria-label="All services" className="pb-section">
      <Container className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-10">
        <aside className="sticky top-(--header-height) z-20 -mx-gutter min-w-0 border-b border-line bg-paper/95 px-gutter backdrop-blur lg:top-[calc(var(--header-height)+2.5rem)] lg:col-span-3 lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none">
          <ServiceNav groups={navGroups} />
        </aside>

        <div className="lg:col-span-9">
          {groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`group-${group.id}`}
              className="pt-12 first:pt-4 lg:first:pt-0"
            >
              <header className="flex flex-col gap-3 bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h2 id={`group-${group.id}`} className="text-h3 font-bold text-ink">
                    {group.label}
                  </h2>
                  <p className="mt-1 text-ink-3">{group.description}</p>
                </div>
                <span className="text-sm font-medium text-ink-3 tabular-nums">
                  {group.services.length} services
                </span>
              </header>
              {group.services.map((service) => (
                <ServiceDetail
                  key={service.slug}
                  service={service}
                  number={toIndexLabel(orderedSlugs.indexOf(service.slug))}
                />
              ))}
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
