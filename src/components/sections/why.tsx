"use client";

import { motion } from "framer-motion";

import { pillars } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Why() {
  return (
    <section id="why" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Why Chaney Fitness"
          title="Coaching that respects how you actually live."
          description="This isn't bodybuilding or six-week transformations. It's a calm, intelligent system built to make you stronger for decades — designed around your schedule, not the other way around."
        />

        <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.title}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full rounded-2xl border border-border bg-white p-7 shadow-soft transition-shadow duration-300 hover:border-ink/15 hover:shadow-lift"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
