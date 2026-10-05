import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/data/testimonials";
import { STAGGER_STEP } from "@/lib/motion";
import type { Testimonial } from "@/types";

function Attribution({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figcaption className="flex items-center gap-4">
      <span
        aria-hidden="true"
        className="flex size-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper"
      >
        {testimonial.name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </span>
      <span className="flex flex-col">
        <span className="font-semibold text-ink">{testimonial.name}</span>
        <span className="text-sm text-ink-3">
          {testimonial.role} · {testimonial.context}
        </span>
      </span>
    </figcaption>
  );
}

export function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <section aria-labelledby="testimonials-heading" className="border-t border-line py-section">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Eyebrow index="07">Client words</Eyebrow>
          <h2 id="testimonials-heading" className="sr-only">
            What our clients say
          </h2>
          <Reveal>
            <figure className="mt-10">
              <span aria-hidden="true" className="block text-[7rem] leading-[0.6] font-bold text-orange">
                &ldquo;
              </span>
              <blockquote className="mt-4 text-[clamp(1.5rem,1.05rem+1.7vw,2.6rem)] leading-[1.2] font-medium tracking-[-0.025em] text-ink">
                <p>{featured.quote}</p>
              </blockquote>
              <div className="mt-10">
                <Attribution testimonial={featured} />
              </div>
            </figure>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-24">
          {others.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={(index + 1) * STAGGER_STEP}>
              <figure className="flex flex-col gap-8 border-l-2 border-orange bg-mist p-7 sm:p-9">
                <blockquote className="text-lg leading-relaxed text-ink-2">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
                <Attribution testimonial={testimonial} />
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
