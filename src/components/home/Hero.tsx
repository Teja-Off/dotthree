import Image from "next/image";
import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { heroFacts } from "@/data/home";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

const diagnosticChecks = [
  { label: "Thermals", status: "Normal" },
  { label: "Storage health", status: "Passed" },
  { label: "Network", status: "Stable" },
];

/** Staggers the CSS rise animation; the hero uses CSS (not JS) so it paints instantly. */
function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

function DiagnosticCard() {
  return (
    <div
      className="relative z-10 mx-4 -mt-16 animate-rise border border-line bg-paper p-5 shadow-[0_24px_60px_-24px_rgb(17_17_17/0.35)] sm:absolute sm:bottom-6 sm:left-[-1rem] sm:mx-0 sm:mt-0 sm:w-72 lg:bottom-10 lg:left-[-2.5rem]"
      style={delay(450)}
    >
      <div className="mb-4 flex items-center justify-between text-xs font-semibold tracking-[0.08em] text-ink-3 uppercase">
        <span>System check</span>
        <span className="flex items-center gap-1.5 text-ink">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-orange" aria-hidden="true" />3 / 3
        </span>
      </div>
      <ul className="grid gap-2.5">
        {diagnosticChecks.map((check) => (
          <li key={check.label} className="flex items-center justify-between text-sm">
            <span className="text-ink-2">{check.label}</span>
            <span className="flex items-center gap-2 font-medium text-ink">
              {check.status}
              <span className="size-2 rounded-full bg-ink" aria-hidden="true" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative lg:col-span-5">
      <div
        aria-hidden="true"
        className="absolute -top-5 -right-3 size-24 animate-fade bg-orange sm:size-32 lg:-top-8 lg:-right-8"
        style={delay(300)}
      />
      <div className="relative aspect-[4/3] overflow-hidden bg-mist sm:aspect-[16/11] lg:aspect-[4/5]">
        <Image
          src={images.heroCpu.src}
          alt={images.heroCpu.alt}
          fill
          preload
          fetchPriority="high"
          placeholder="blur"
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="img-mono animate-settle object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
        />
      </div>
      <DiagnosticCard />
    </div>
  );
}

function HeroFacts() {
  return (
    <dl className="mt-16 grid grid-cols-2 border-t border-line lg:mt-24 lg:grid-cols-4">
      {heroFacts.map((fact, index) => (
        <div
          key={fact.label}
          className={cn(
            "animate-rise py-6 pr-4",
            index % 2 === 1 && "border-l border-line pl-4 lg:pl-6",
            index >= 2 && "border-t border-line lg:border-t-0",
            index === 2 && "lg:border-l lg:pl-6",
          )}
          style={delay(450 + index * 60)}
        >
          <dt className="mb-2 text-eyebrow font-semibold text-ink-3 uppercase">{fact.label}</dt>
          <dd className="text-[1.0625rem] leading-snug font-medium text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-[calc(var(--header-height)+2.5rem)] lg:pt-[calc(var(--header-height)+4.5rem)]"
    >
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-y-0 right-0 w-full [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)] lg:w-2/3"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
            <p
              className="mb-8 inline-flex w-fit animate-rise items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-2"
              style={delay(0)}
            >
              <span className="size-2 animate-pulse-dot rounded-full bg-orange" aria-hidden="true" />
              Computer repair · IT support · Networks
            </p>
            <h1 id="hero-heading" className="font-bold text-ink">
              <span className="block text-[clamp(3.2rem,16vw,5.25rem)] leading-[0.94] tracking-[-0.045em] lg:text-display">
                Technology
                <br />
                that works.
              </span>
              <span className="mt-5 block max-w-[20ch] text-h2 font-medium text-ink-3">
                Solutions that move your business forward.
              </span>
            </h1>
            <p className="mt-8 max-w-[34rem] animate-rise text-lead text-ink-2" style={delay(120)}>
              DotThree delivers reliable computer, IT and technology services that keep people and businesses
              connected, productive and secure.
            </p>
            <div className="mt-10 flex animate-rise flex-col gap-3 sm:flex-row" style={delay(200)}>
              <ButtonLink href="/services" size="lg" withArrow>
                Explore Our Services
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outline">
                Get in Touch
              </ButtonLink>
            </div>
          </div>
          <HeroVisual />
        </div>
        <HeroFacts />
      </Container>
    </section>
  );
}
