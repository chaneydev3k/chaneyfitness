"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { stats, testimonials } from "@/lib/site";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { GoogleReviewsBadge } from "@/components/shared/google-reviews";
import { Reveal } from "@/components/shared/reveal";

export function Results() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = testimonials.length;

  const go = React.useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  const active = testimonials[index];

  return (
    <section
      id="results"
      className="relative overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />
      <div
        aria-hidden
        className="absolute -left-32 top-10 size-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-0 size-96 rounded-full bg-success/15 blur-[120px]"
      />

      <div className="container-tight relative">
        <div className="max-w-prose">
          <span className="eyebrow">Client results</span>
          <Reveal>
            <h2 className="headline mt-5 text-balance text-[2.1rem] sm:text-5xl md:text-6xl">
              Proof that the approach works.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/65">
              Real numbers from real professionals who decided their health was
              worth a system, not a streak.
            </p>
          </Reveal>
        </div>

        {/* Counters */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="border-l-2 border-white/15 pl-5">
              <div className="headline text-6xl text-white sm:text-7xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div
          className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Quote className="size-9 text-accent" aria-hidden="true" />
            <GoogleReviewsBadge />
          </div>
          <div className="relative mt-6 min-h-[9.5rem] sm:min-h-[7.5rem]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="text-balance text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-accent to-success text-sm font-semibold text-white">
                    {active.initials}
                  </span>
                  <span>
                    <span className="block font-medium text-white">
                      {active.name}
                    </span>
                    <span className="block text-sm text-white/60">
                      {active.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-accent" : "w-2.5 bg-white/25 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
