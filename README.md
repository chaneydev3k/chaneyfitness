# Chaney Fitness

A premium marketing site for an evidence-based coaching brand — built to establish
trust in seconds and convert qualified visitors into booked consultations.

**Strength. Performance. Longevity.**

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS 3** with a custom design system
- **Framer Motion** for all motion (fade / blur / translate / parallax — no bounce)
- **Radix UI** (accessible accordion) + shadcn-style primitives
- **Lucide** icons
- Dynamic **OG/Twitter images** via `next/og`, JSON-LD, sitemap, robots, manifest

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm run start    # serve the production build
```

> Node.js 24 LTS is installed at `~/.local/node` on this machine and added to your
> shell via `~/.zshrc`. Open a new terminal (or `source ~/.zshrc`) so `node` / `npm`
> are on your PATH.

## Project structure

```
src/
  app/
    layout.tsx            Root layout: fonts, metadata, JSON-LD, nav/footer
    page.tsx              Section composition
    globals.css           Design tokens + utilities
    opengraph-image.tsx   Dynamic 1200×630 social card
    twitter-image.tsx     Re-exports the OG card
    sitemap.ts / robots.ts / manifest.ts / icon.svg
  components/
    layout/               Navbar, Footer, ScrollProgress, Logo
    sections/             Hero, Why, Programs, Results, Transformations,
                          Process, Features, About, Faq, FinalCta
    shared/               Reveal, AnimatedCounter, BeforeAfter, SectionHeading
    ui/                   Button, Accordion (shadcn-style)
    seo/                  json-ld.tsx (Organization, LocalBusiness, Website, FAQ)
  lib/
    site.ts               ← ALL copy & data (single source of truth)
    utils.ts              cn() helper
public/
  transformations/        before/after placeholder art
  portrait.svg            coach portrait placeholder
```

## Before you launch — edit these

All content lives in **`src/lib/site.ts`**. Update:

1. **`siteConfig.url`** — the real production domain (drives canonical URLs,
   sitemap, OG image URLs, and JSON-LD).
2. **`email`, `phone`, `social`** — real contact + social links.
3. **`address` / `geo`** in `src/components/seo/json-ld.tsx` — exact business
   location for Local Business schema.
4. **Replace placeholder art** in `public/transformations/` and
   `public/portrait.svg` with real photography (keep the same filenames, or
   update the `src` paths in `site.ts` / `about.tsx`).
5. **Wire the consultation form** in `src/components/sections/final-cta.tsx`
   (`onSubmit`) to your booking provider — Calendly, Formspree, or a Next.js
   route handler. It currently shows a success state without sending data.

## Notes

- WCAG-minded: skip link, keyboard-operable slider/accordion/carousel, focus
  rings, reduced-motion support, semantic landmarks and heading hierarchy.
- Fully static export — strong Core Web Vitals out of the box.
- Target keywords (Tampa / St. Pete personal training, online & executive
  coaching) are wired through metadata, headings, and structured data.
