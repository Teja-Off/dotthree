# DOTTHREE website

Marketing website for DotThree, a computer repair, IT support and technology services company.
Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically generated.

## Commands

```bash
npm install          # install dependencies
npm run dev          # start the dev server on http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # TypeScript, no emit
npm test             # unit tests (Vitest)
npm run test:coverage
npm run format       # Prettier
```

## Pages

| Route             | Content                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `/`               | Hero, introduction, services, why DotThree, process, expertise, projects, testimonials, CTA |
| `/about`          | Story, mission and vision, values, why DotThree, experience, team                           |
| `/services`       | All 14 services, grouped, with a sticky index                                               |
| `/solutions`      | Solutions for individuals, businesses and small businesses                                  |
| `/projects`       | Filterable project gallery                                                                  |
| `/contact`        | Contact details, validated enquiry form, WhatsApp, map placeholder                          |
| `/privacy-policy` | Privacy policy                                                                              |
| `/terms`          | Terms and conditions                                                                        |

Also generated: `sitemap.xml`, `robots.txt`, the Open Graph image, the favicon and a custom 404 page.

## Where things live

```
src/
  app/          routes, metadata, sitemap, robots, OG image, global styles
  components/   layout, home, about, services, solutions, projects, contact, legal, shared, ui
  data/         all site copy: services, projects, testimonials, solutions, legal text, navigation
  lib/          site config, metadata helper, enquiry validation and submission, utilities
  assets/       photography (statically imported, so sizes and blur placeholders are automatic)
```

Content is data-driven. To change copy, edit the files in `src/data`. To change company details (phone, email,
address, hours, social links), edit `src/lib/site.ts`.

## Design system

- **Palette:** black `#111111`, white `#FFFFFF`, orange `#FF6B00`, plus tints derived from them. Tokens are defined
  in `src/app/globals.css`. `--orange-ink` (`#B34700`) is a darker orange used for small text so it keeps WCAG AA
  contrast on white and light grey.
- **Type:** Outfit (variable, via `next/font`) with a fluid scale: `text-display`, `text-h1`, `text-h2`, `text-h3`,
  `text-lead`, `text-eyebrow`.
- **Motifs:** the three-dot mark, a dot-grid texture, numbered section labels and monochrome photography.
- **Motion:** scroll reveals are CSS keyframes triggered by one `IntersectionObserver`. The mobile menu uses CSS
  transitions. Motion (`motion/react`) is loaded only on the Projects page, for the filter animation. Everything
  respects `prefers-reduced-motion`.

## Contact form

The form validates with Zod (`zod/mini`) and React Hook Form. It has no backend of its own:

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_FORM_ENDPOINT` to a Formspree or Web3Forms endpoint (plus `NEXT_PUBLIC_FORM_ACCESS_KEY` for
   Web3Forms).

Without an endpoint, submitting opens the visitor's email app with the enquiry prefilled, so no message is lost.
A hidden honeypot field filters simple spam bots.

## Placeholder content to replace before launch

- Company phone, email, WhatsApp number, address and social links (`src/lib/site.ts`).
- Team names and roles, and the experience figures (`src/data/about.ts`). The team uses monogram tiles until photos
  are added.
- Testimonials (`src/data/testimonials.ts`) and project case studies (`src/data/projects.ts`).
- Legal copy (`src/data/legal.ts`), which should be reviewed by a legal professional.
- The map is a static illustration (`src/components/contact/MapPlaceholder.tsx`). Swap in a Google Maps embed if
  needed.
- `NEXT_PUBLIC_SITE_URL` for the real domain.

## Photography

Photos come from Unsplash (free licence) and live in `src/assets/images`. They are stored as grayscale JPEGs and also
rendered through a grayscale CSS filter, so replacement colour photos still match the monochrome style. Next.js
serves them as AVIF or WebP.
