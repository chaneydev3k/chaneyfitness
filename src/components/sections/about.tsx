"use client";

import { Award, Dumbbell } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

const credentials = [
  { icon: Award, label: "ISSA Certified Personal Trainer" },
  { icon: Dumbbell, label: "7 years coaching" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="container-tight grid items-center gap-14 lg:grid-cols-2">
        {/* Portrait */}
        <Reveal from="right" className="order-1">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/15 via-transparent to-success/15 blur-2xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt="Jamaal Chaney, ISSA-certified personal trainer and founder of Chaney Fitness, at his training studio"
              width={917}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl border border-border object-cover object-top shadow-lift"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-white/90 p-4 shadow-lift backdrop-blur sm:block">
              <p className="font-display text-2xl font-semibold text-ink">
                Jamaal Chaney
              </p>
              <p className="text-sm text-muted-foreground">
                Founder · Head Coach
              </p>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div className="order-2">
          <span className="eyebrow">About</span>
          <Reveal>
            <h2 className="headline mt-5 text-balance text-4xl text-ink sm:text-5xl">
              A coach who&apos;s lived both sides of the equation.
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            <div className="space-y-4">
              <p>
                I grew up playing sports and spent years learning what it takes
                to get stronger, move better, and perform at a high level. Like
                a lot of athletes, I also learned the hard way that working
                harder doesn&apos;t always mean getting better. Training needs
                to have a purpose.
              </p>
              <p>
                As my career and responsibilities grew, I realized the same
                thing applies outside of sports. You can have a demanding
                career, raise a family, and still take care of yourself. It just
                takes a smarter approach and a plan you can actually stick to.
              </p>
              <p>
                That&apos;s what I built {siteConfig.name} around. Evidence-based
                training, personalized programming, and real accountability for
                people who want to get stronger, leaner, and healthier without
                putting their entire life on hold. I work with all training
                levels, from people stepping into the gym for the first time to
                experienced athletes looking to take their performance to the
                next level. My clients typically lose 20–30 pounds while
                building the strength and habits to maintain those results.
              </p>
              <p>
                Whether you&apos;re just getting started or you&apos;ve been
                training for years, my goal is to give you a program that fits
                where you are now and helps you keep progressing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft"
                  >
                    <Icon className="size-4 text-accent" aria-hidden="true" />
                    {c.label}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
