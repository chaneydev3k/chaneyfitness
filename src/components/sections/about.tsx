"use client";

import { Award, Dumbbell } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

const credentials = [
  { icon: Award, label: "Certified Personal Trainer" },
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
              src="/portrait.svg"
              alt="Coach Chaney, founder of Chaney Fitness"
              width={520}
              height={640}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-white/90 p-4 shadow-lift backdrop-blur sm:block">
              <p className="font-display text-2xl font-semibold text-ink">
                Coach Chaney
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
                I grew up an athlete and spent years chasing performance the
                hard way — too much intensity, not enough strategy. Then I built
                a career, and learned what it actually takes to stay strong when
                your calendar isn&apos;t your own.
              </p>
              <p>
                {siteConfig.name} is the result: an evidence-based approach for
                adults who refuse to choose between their ambition and their
                health. No fads, no shame, no all-or-nothing. Just smart
                programming, honest accountability, and habits that hold up in
                real life.
              </p>
              <p>
                My job isn&apos;t to get you ready for a photo. It&apos;s to
                build a body that performs — for your work, your family, and the
                next thirty years.
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
