"use client";

import { motion } from "framer-motion";

import { features } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="What's included"
          title="Everything that moves the needle. Nothing that doesn't."
          description="A complete system for training, fueling, and recovering — supported by a coach who's paying attention."
        />

        <RevealGroup
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <RevealItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-ink/15 hover:shadow-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-muted text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold tracking-tight text-ink">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
