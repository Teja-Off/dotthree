import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { formattedAddress, siteConfig } from "@/lib/site";

/**
 * Lightweight, privacy-friendly map placeholder drawn in SVG.
 * To use a live map, replace the <svg> with a Google Maps embed <iframe>
 * (loading="lazy", title="DotThree location") inside the same frame.
 */
export function MapPlaceholder() {
  return (
    <section aria-labelledby="map-heading" className="pb-section">
      <Container>
        <div className="relative border border-line bg-mist">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[21/8]">
            <svg
              aria-hidden="true"
              className="absolute inset-0 size-full"
              viewBox="0 0 1200 460"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" className="stroke-line" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1200" height="460" fill="url(#map-grid)" />
              <g fill="none" className="stroke-paper" strokeLinecap="round">
                <path d="M-20 300 C 200 280, 380 330, 620 250 S 980 170, 1220 210" strokeWidth="26" />
                <path d="M300 -20 C 330 120, 420 240, 470 480" strokeWidth="18" />
                <path d="M820 -20 L 760 480" strokeWidth="14" />
                <path d="M-20 120 L 1220 90" strokeWidth="10" />
                <path d="M560 480 C 600 400, 700 360, 1220 380" strokeWidth="10" />
              </g>
              <g className="fill-mist-2">
                <rect x="80" y="160" width="150" height="80" />
                <rect x="520" y="60" width="200" height="120" />
                <rect x="880" y="250" width="180" height="90" />
                <rect x="180" y="360" width="120" height="70" />
              </g>
              <circle cx="620" cy="250" r="60" className="fill-orange" opacity="0.12" />
              <circle cx="620" cy="250" r="30" className="fill-orange" opacity="0.22" />
              <circle cx="620" cy="250" r="11" className="fill-orange stroke-paper" strokeWidth="4" />
            </svg>
          </div>

          {/* Below the map on phones (so the pin stays visible), overlaid from sm up. */}
          <div className="relative mx-4 -mt-10 mb-4 flex flex-col gap-4 border border-line bg-paper p-6 sm:absolute sm:bottom-8 sm:left-8 sm:m-0 sm:max-w-sm">
            <h2 id="map-heading" className="text-xl font-bold tracking-[-0.02em] text-ink">
              Visit the workshop
            </h2>
            <p className="text-ink-3">{formattedAddress}</p>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex w-fit items-center gap-1.5 font-semibold text-ink"
            >
              Open in Google Maps
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
