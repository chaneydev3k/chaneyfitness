import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Gift, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { CalendlyEmbed } from "@/components/shared/calendly";

const pageUrl = `${siteConfig.url}/personal-trainer-bradenton-fl`;
const pageTitle = "Personal Trainer in Bradenton, FL | Chaney Fitness";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description:
    "Private 1:1 and small-group personal training for Bradenton, FL at a private studio in nearby Palmetto — plus live virtual sessions where I coach every rep. No contracts, free first session.",
  alternates: { canonical: "/personal-trainer-bradenton-fl" },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description:
      "Private 1:1, small-group, and live virtual personal training for Bradenton, FL — fat loss, strength, and nutrition coaching at a private studio in Palmetto.",
  },
};

const services = [
  "Private 1:1 personal training",
  "Small-group training",
  "Fat loss & body recomposition",
  "Strength & toning",
  "Flexible nutrition & meal planning",
  "Live virtual sessions (every rep)",
];

const faqs = [
  {
    q: "Do you train in person in Bradenton?",
    a: "Yes. In-person 1:1 and small-group sessions run out of my private studio in Palmetto — a quick drive over the Green Bridge from Bradenton — and I can come to you in Bradenton if that's easier. I also run live virtual sessions where I coach you through every rep.",
  },
  {
    q: "Where do sessions happen for Bradenton clients?",
    a: "Most Bradenton clients train at my private studio just across the river in Palmetto — no crowded big-box gym and no waiting on equipment. Prefer to stay in Bradenton? I can come to your home or building gym, or we train live over video.",
  },
  {
    q: "I'm a beginner and haven't trained in years — can you help?",
    a: "Absolutely — that's most of who I work with. Every plan begins from your real starting point after an individual assessment, so we build from where you actually are.",
  },
  {
    q: "How much does a personal trainer in Bradenton cost?",
    a: "Your first session is a free evaluation so you can see how I coach. After that, sessions run $65–85, and most clients train on a package — for example 12 sessions for $900 or 24 for $1,750 — at a 2–4x per week cadence that fits their schedule.",
  },
  {
    q: "Do you help with nutrition too?",
    a: "Yes — flexible nutrition and meal-planning coaching built around your tastes and schedule, not a rigid meal plan you'll abandon. Eating right is a core part of the fat-loss results.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Personal Trainer in Bradenton, FL",
      item: pageUrl,
    },
  ],
};

export default function BradentonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero (dark) */}
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-32 text-white sm:pt-36">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,#15151a_0%,#0B0B0B_60%)]" />
          <div className="absolute inset-0 bg-grid opacity-70 mask-fade-b" />
          <div className="absolute -left-24 top-24 size-80 rounded-full bg-accent/20 blur-[120px]" />
        </div>

        <div className="container-tight">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">
              Personal Trainer in Bradenton, FL
            </span>
          </nav>

          <span className="eyebrow mt-6">
            <MapPin className="size-3.5" /> Bradenton, Florida
          </span>

          <h1 className="headline mt-5 max-w-4xl text-[clamp(2.4rem,7vw,5rem)] text-white">
            Personal Training in Bradenton, FL
          </h1>

          <p className="mt-6 max-w-prose text-pretty text-lg leading-relaxed text-white/70">
            Private 1:1 and small-group strength and fat-loss coaching for busy
            Bradenton professionals — in person at my private studio just over
            the river in Palmetto, plus live virtual sessions where I coach
            every rep. No contracts, no crash diets. Just a system that keeps
            working through a packed week.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="accent" size="xl">
              <a href="#book">
                Book your free Bradenton consult
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link href="/#programs">Explore coaching options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-tight max-w-3xl">
          <Reveal>
            <h2 className="headline text-[2rem] text-ink sm:text-4xl">
              Coaching built around a Bradenton schedule
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              If your calendar runs your day and training is the first thing that
              gets cut when work gets busy, that&apos;s exactly who I built this
              for. Bradenton clients get private, focused sessions a few minutes
              away at my studio in Palmetto — or live over video. Every plan
              starts with an assessment of how you move and what your week
              allows, then the focus is simple: lose fat, get stronger and more
              toned, and eat right without a rigid meal plan you&apos;ll quit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services + where we train */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="headline text-[2rem] text-ink sm:text-4xl">
              How I train Bradenton clients
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Every plan is built for your body, your goals, and the time you
              actually have. Core services:
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-[0.95rem]">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 inline-flex items-start gap-2.5 rounded-2xl border border-border bg-white p-4 text-sm text-muted-foreground shadow-soft">
              <Gift className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                I go above and beyond for my clients — expect thoughtful extras
                for signing on and for hitting milestones along the way.
              </span>
            </p>
          </Reveal>

          <Reveal from="up" delay={0.05}>
            <h2 className="headline text-[2rem] text-ink sm:text-4xl">
              Where we train
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Most in-person sessions are private 1:1 or small-group at my
              private studio in Palmetto — a quick hop over the Green Bridge from
              Bradenton, with no crowded gym floor to fight through. If it&apos;s
              easier, I&apos;ll come to you in Bradenton — home or building gym —
              from Downtown and the Riverwalk to West Bradenton and out toward
              Lakewood Ranch.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Short on time or traveling for work? We train live over video,
              where I coach you through every rep in real time instead of just
              handing you a program and walking away.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-tight grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h2 className="headline text-[2rem] text-ink sm:text-4xl">
              Getting started from Bradenton
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Your first session is a free evaluation: you get a real workout,
              see exactly how I coach, and we map out a plan around your goals
              and schedule. Most clients are training within a week of that
              consult.
            </p>
          </Reveal>

          <Reveal from="up" delay={0.05}>
            <div className="rounded-3xl border border-border bg-muted/30 p-7 shadow-soft sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                Simple, no-contract pricing
              </p>
              <div className="mt-5 space-y-4 text-ink">
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <span className="font-semibold">First session</span>
                  <span className="font-display text-2xl">Free eval</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <span className="font-semibold">Single session</span>
                  <span className="font-display text-2xl">$65–85</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">
                    Packages
                    <span className="block text-sm font-normal text-muted-foreground">
                      8–24 sessions · 2–4x / week
                    </span>
                  </span>
                  <span className="text-right font-display text-lg leading-tight text-ink">
                    12 for $900
                    <span className="block">24 for $1,750</span>
                  </span>
                </div>
              </div>
              <Button asChild variant="primary" size="lg" className="mt-7 w-full">
                <a href="#book">Book your free consult</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container-tight max-w-3xl">
          <h2 className="headline text-[2rem] text-ink sm:text-4xl">
            Bradenton personal training FAQ
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-accent transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose text-pretty leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            More on how coaching works:{" "}
            <Link href="/#programs" className="font-semibold text-accent hover:underline">
              coaching options
            </Link>{" "}
            ·{" "}
            <Link
              href="/personal-trainer-palmetto-fl"
              className="font-semibold text-accent hover:underline"
            >
              Palmetto
            </Link>{" "}
            ·{" "}
            <Link
              href="/personal-trainer-st-petersburg-fl"
              className="font-semibold text-accent hover:underline"
            >
              St. Petersburg
            </Link>
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
        />
        <div className="container-tight relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-xl">
            <span className="eyebrow">Book your consultation</span>
            <h2 className="headline mt-5 text-balance text-[2.4rem] sm:text-5xl">
              Start with a free session.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/70">
              Grab a time below. We&apos;ll talk through your goals, do a real
              eval session, and figure out whether we&apos;re a fit — no
              pressure, no contracts.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Prefer to talk first? Call{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-white hover:underline">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-lift backdrop-blur sm:p-3">
            <CalendlyEmbed
              url={siteConfig.calendlyEmbedUrl}
              height={640}
              className="overflow-hidden rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
