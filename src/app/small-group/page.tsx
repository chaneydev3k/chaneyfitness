import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";

import { siteConfig, testimonials } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { GoogleG } from "@/components/shared/google-reviews";
import { CalendlyEmbed } from "@/components/shared/calendly";
import { ResultsShowcase } from "@/components/sections/results-showcase";

const pageUrl = `${siteConfig.url}/small-group`;
const pageTitle =
  "Small-Group Personal Training in Palmetto, FL | Chaney Fitness";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description:
    "Coached small-group training in Palmetto, FL (serving Bradenton) — get stronger and leaner with real coaching and accountability, without the price of private 1:1. 4 spots, $500/month. Book a free consult.",
  alternates: { canonical: "/small-group" },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description:
      "4 spots. Coached 3x/week small-group training in Palmetto & Bradenton. Get stronger and leaner without paying for private 1:1.",
  },
};

const offerChips = [
  "3 coached workouts / week",
  "50–60 min sessions",
  "Only 4 spots",
  "$500 / month",
];

const benefits = [
  {
    title: "Coached through every rep",
    body: "You're guided the whole session — not copying the person next to you in a class.",
  },
  {
    title: "A real program, not a random class",
    body: "A structured plan built to actually progress you, week over week.",
  },
  {
    title: "Scaled to your ability",
    body: "Every exercise is modified to your level — day one or year ten.",
  },
  {
    title: "Real accountability",
    body: "Three set sessions a week and a coach who notices when you're not there.",
  },
  {
    title: "Semi-private, just 2 of you",
    body: "You and one other motivated person — real accountability without the crowded-gym chaos.",
  },
  {
    title: "1:1 attention, not the 1:1 price",
    body: "Personalized coaching for a fraction of what private training costs.",
  },
];

const whoFor = [
  "You want to lose fat and build lean muscle",
  "You've struggled to stay consistent on your own",
  "You're not sure what to actually do in the gym",
  "You want coaching but don't need full private 1:1",
  "You're done with crowded commercial gyms",
  "You want a simple, structured 3-day-a-week routine",
  "You want accountability that keeps you showing up",
];

const value = [
  {
    label: "Private 1:1 training",
    price: "$780–$1,020 / mo",
    note: "Maximum attention — premium price (3 sessions/week at $65–85).",
    dim: true,
  },
  {
    label: "Small-Group Training",
    price: "$500 / mo",
    note: "Real coaching, a real plan, and accountability — about $40 a session.",
    highlight: true,
  },
  {
    label: "Figuring it out alone",
    price: "$30–60 gym / mo",
    note: "Cheapest up front — and the reason most people quit by spring.",
    dim: true,
  },
];

const faqs = [
  {
    q: "How big is the group?",
    a: "Tiny — just 2 people per group (semi-private), with 4 spots in this launch. You'll never be a face in a crowd.",
  },
  {
    q: "I'm a total beginner. Is this for me?",
    a: "Yes — that's most of who starts here. Every movement is scaled to you and I coach your form in real time.",
  },
  {
    q: "What if I miss a session?",
    a: "Make-up sessions are available. Life happens; your progress shouldn't stall for it.",
  },
  {
    q: "Why $500 a month?",
    a: "Because it's real coaching and a real program — not a class. It's roughly half the cost of private training for the same results-driving system, plus nutrition guidance and accountability.",
  },
  {
    q: "Where and when do we train?",
    a: "A private studio in Palmetto (quick from Bradenton), 3x a week. Exact days and times are set around the group once it's formed.",
  },
  {
    q: "What happens after I book?",
    a: "We hop on a quick call to talk through your goals, and if it's a fit you're in. No pressure, no hard sell.",
  },
];

function CtaButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="accent" size="xl" className={className}>
      <a href="#apply">
        Apply for a spot
        <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </a>
    </Button>
  );
}

export default function SmallGroupPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-32 text-white sm:pt-36">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,#15151a_0%,#0B0B0B_60%)]" />
          <div className="absolute inset-0 bg-grid opacity-70 mask-fade-b" />
          <div className="absolute -left-24 top-24 size-80 rounded-full bg-accent/20 blur-[120px]" />
        </div>

        <div className="container-tight">
          <span className="eyebrow">
            <MapPin className="size-3.5" /> Small-Group Training · Palmetto, FL
          </span>

          <h1 className="headline mt-5 max-w-4xl text-[clamp(2.6rem,8vw,5.5rem)] text-white">
            Get stronger. Get leaner. Train with a coach.
          </h1>

          <p className="mt-6 max-w-prose text-pretty text-lg leading-relaxed text-white/75">
            I&apos;m opening <strong className="text-white">4 spots</strong> for a
            small group of adults in Palmetto & Bradenton who want structured
            workouts, real coaching, and accountability — without paying for
            private 1:1 personal training.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {offerChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton />
            <span className="text-sm text-white/55">
              Takes 60 seconds · No commitment to apply
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/60">
            <a
              href={siteConfig.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </span>
              <span className="font-semibold text-white">5.0</span>
              <span className="inline-flex items-center gap-1">
                on <GoogleG className="size-3.5" /> Google
              </span>
            </a>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-success" />
              ISSA-certified coach · Beginner-friendly
            </span>
          </div>
        </div>
      </section>

      {/* Why small-group */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-tight">
          <span className="eyebrow">Why small-group training</span>
          <h2 className="headline mt-4 max-w-3xl text-[2.1rem] text-ink sm:text-5xl">
            Private-training coaching. Small-group price.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Reveal key={b.title}>
                <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <span className="grid size-10 place-items-center rounded-xl bg-ink text-white">
                    <Check className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/40 py-24 sm:py-28">
        <div className="container-tight grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Who it&apos;s for</span>
            <h2 className="headline mt-4 text-[2.1rem] text-ink sm:text-5xl">
              This is for you if…
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              You don&apos;t need to be fit already. You need a plan, a coach,
              and a reason to show up. If a few of these sound like you, apply.
            </p>
            <CtaButton className="mt-8" />
          </Reveal>
          <Reveal from="up" delay={0.05}>
            <ul className="space-y-3">
              {whoFor.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 text-ink shadow-soft"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/10 text-success">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-[0.95rem]">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Real results (reuses the before/after showcase) */}
      <ResultsShowcase />

      {/* Value / why $500 */}
      <section className="bg-ink py-24 text-white sm:py-28">
        <div className="container-tight">
          <span className="eyebrow">The math</span>
          <h2 className="headline mt-4 max-w-3xl text-[2.1rem] text-white sm:text-5xl">
            Why $500 a month is the smart middle.
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-white/70">
            The same coaching that drives private-training results, at close to
            half the cost — and a world apart from guessing your way through a
            commercial gym.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {value.map((v) => (
              <div
                key={v.label}
                className={
                  v.highlight
                    ? "rounded-3xl border border-transparent bg-white p-8 text-ink shadow-lift ring-2 ring-accent"
                    : "rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-white"
                }
              >
                <p
                  className={
                    v.highlight
                      ? "text-xs font-bold uppercase tracking-[0.14em] text-accent"
                      : "text-xs font-bold uppercase tracking-[0.14em] text-white/50"
                  }
                >
                  {v.label}
                </p>
                <p className="mt-3 font-display text-3xl">{v.price}</p>
                <p
                  className={
                    v.highlight
                      ? "mt-3 text-sm leading-relaxed text-muted-foreground"
                      : "mt-3 text-sm leading-relaxed text-white/60"
                  }
                >
                  {v.note}
                </p>
                {v.highlight && (
                  <CtaButton className="mt-6 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the coach */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-tight grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right" className="order-1">
            <div className="relative mx-auto max-w-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait.jpg"
                alt="Jamaal Chaney, ISSA-certified personal trainer and owner of Chaney Fitness"
                width={917}
                height={1400}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl border border-border object-cover object-top shadow-lift"
              />
            </div>
          </Reveal>
          <div className="order-2">
            <span className="eyebrow">Your coach</span>
            <h2 className="headline mt-4 text-[2.1rem] text-ink sm:text-4xl">
              You&apos;ll be coached by Jamaal, not a rotating staff.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m Jamaal Chaney — ISSA-certified trainer and owner of Chaney
              Fitness. I coach busy adults across Palmetto and Manatee County to get stronger and
              leaner with programming that fits real life. In this group you get
              my eyes on every session: real-time form coaching, exercises
              scaled to you, nutrition guidance, and a plan that actually
              progresses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft">
                <ShieldCheck className="size-4 text-accent" /> ISSA Certified
                Personal Trainer
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft">
                <MapPin className="size-4 text-accent" /> Palmetto, FL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity */}
      <section className="bg-muted/40 py-16">
        <div className="container-tight text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Real spots, not a fake countdown
          </p>
          <h2 className="headline mx-auto mt-3 max-w-3xl text-[2rem] text-ink sm:text-4xl">
            This first group has 4 spots. When it fills, the next group opens at
            a higher price.
          </h2>
          <CtaButton className="mt-8" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-tight max-w-3xl">
          <h2 className="headline text-[2rem] text-ink sm:text-4xl">
            Questions, answered
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
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
        />
        <div className="container-tight relative grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-xl">
            <span className="eyebrow">Apply for a spot</span>
            <h2 className="headline mt-5 text-balance text-[2.4rem] sm:text-5xl">
              Claim one of the 4 spots.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/70">
              Grab a time below for a quick, no-pressure consult. We&apos;ll talk
              through your goals, whether you can train 2–3x a week, and if
              it&apos;s a fit, get you started.
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-white/80">
              &ldquo;{testimonials[0].quote}&rdquo;
              <span className="mt-2 block text-sm text-white/50">
                — {testimonials[0].name}, Google review
              </span>
            </blockquote>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-lift backdrop-blur sm:p-3">
            <CalendlyEmbed
              url={siteConfig.calendlyEmbedUrl}
              height={720}
              className="overflow-hidden rounded-2xl"
            />
            <p className="px-4 py-3 text-center text-xs text-white/45">
              No payment now. Booking just starts the conversation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
