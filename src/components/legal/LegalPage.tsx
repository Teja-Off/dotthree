import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { toIndexLabel } from "@/lib/utils";
import type { LegalSection } from "@/types";

interface LegalPageProps {
  title: string;
  intro: string;
  /** ISO date, e.g. "2026-09-30". */
  lastUpdated: string;
  sections: LegalSection[];
}

const displayDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });

/** Readable legal document layout with a sticky table of contents. */
export function LegalPage({ title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <article className="pt-[calc(var(--header-height)+3rem)] pb-section lg:pt-[calc(var(--header-height)+5rem)]">
      <Container>
        <header className="max-w-3xl border-b border-line pb-12">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-h1 font-bold text-ink">{title}</h1>
          <p className="mt-6 text-lead text-ink-3">{intro}</p>
          <p className="mt-6 text-sm text-ink-3">
            Last updated <time dateTime={lastUpdated}>{displayDate.format(new Date(lastUpdated))}</time>
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
              <p className="mb-4 text-eyebrow font-semibold text-ink-3 uppercase">On this page</p>
              <ol className="grid gap-2 border-l border-line">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px flex gap-3 border-l-2 border-transparent py-1 pl-4 text-[0.95rem] text-ink-3 transition-colors hover:border-orange hover:text-ink"
                    >
                      <span className="text-ink-3 tabular-nums">{toIndexLabel(index)}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-2xl lg:col-span-8 lg:col-start-5">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="border-t border-line py-10 first:border-t-0 first:pt-0"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="flex items-baseline gap-4 text-h3 font-bold text-ink"
                >
                  <span className="text-base font-semibold text-orange-ink tabular-nums">
                    {toIndexLabel(index)}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-4 text-[1.0625rem] leading-relaxed text-ink-2">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul className="grid gap-2.5 pl-1">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-orange"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
