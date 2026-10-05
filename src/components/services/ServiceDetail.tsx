import Image from "next/image";
import { ArrowRight, Check, Minus } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Service } from "@/types";

interface ServiceDetailProps {
  service: Service;
  number: string;
}

function DetailList({ title, items, marker }: { title: string; items: string[]; marker: "check" | "dash" }) {
  const Marker = marker === "check" ? Check : Minus;
  return (
    <div>
      <h4 className="mb-4 text-eyebrow font-semibold text-ink-3 uppercase">{title}</h4>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink-2">
            <Marker
              aria-hidden="true"
              className={
                marker === "check"
                  ? "mt-0.5 size-[1.1rem] shrink-0 text-orange-ink"
                  : "mt-0.5 size-[1.1rem] shrink-0 text-ink-4"
              }
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Full description of one service, used on the Services page. */
export function ServiceDetail({ service, number }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <article
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className="scroll-mt-16 border-t border-line py-14 lg:scroll-mt-0 lg:py-20"
    >
      <Reveal className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 100vw"
              className="img-mono object-cover"
            />
            <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-paper text-ink">
              <Icon className="size-5" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="md:col-span-7">
          <span className="text-sm font-semibold text-orange-ink tabular-nums">{number}</span>
          <h3 id={`${service.slug}-title`} className="mt-2 text-h2 font-bold text-ink">
            {service.title}
          </h3>
          <p className="mt-5 max-w-2xl text-lead text-ink-3">{service.description}</p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <DetailList title="Benefits" items={service.benefits} marker="check" />
            <DetailList title="Problems we solve" items={service.problems} marker="dash" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={`/contact?service=${service.slug}`} variant="dark" withArrow>
              Get a quote<span className="sr-only"> for {service.title}</span>
            </ButtonLink>
            <a
              href="#services-top"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-ink-3"
            >
              Back to all services
              <ArrowRight className="size-3.5 -rotate-90" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
