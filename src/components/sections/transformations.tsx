"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { transformations } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { BeforeAfter } from "@/components/shared/before-after";
import { Reveal } from "@/components/shared/reveal";

export function Transformations() {
  const [active, setActive] = React.useState(0);
  const current = transformations[active];

  return (
    <section id="transformations" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="How it works"
          title="What coaching looks like for real goals."
          description="Illustrative examples of how training and nutrition get built around different lives and goals — not specific client results. Drag the slider to compare."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Slider */}
          <Reveal from="right" className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <BeforeAfter
                  beforeSrc={current.beforeSrc}
                  afterSrc={current.afterSrc}
                  beforeAlt={`Illustrative before silhouette — ${current.name}`}
                  afterAlt={`Illustrative after silhouette — ${current.name}`}
                />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {/* Story + selector */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {current.meta}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {current.name}
                </h3>
                <p className="mt-4 max-w-prose text-pretty text-lg leading-relaxed text-muted-foreground">
                  {current.story}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-2">
              {transformations.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    i === active
                      ? "border-ink bg-ink text-white"
                      : "border-border bg-white text-muted-foreground hover:border-ink/30 hover:text-ink"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground/80">
              Illustrative examples of coaching approaches — not specific
              clients or guaranteed results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
