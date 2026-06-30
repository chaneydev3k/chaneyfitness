"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Process() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="bg-muted/50 py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="The coaching process"
          title="A clear path from first call to lasting results."
          description="No guesswork. Each phase builds on the last, so progress compounds and stays."
        />

        <div ref={ref} className="relative mt-20">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-[31px] top-2 bottom-2 w-0.5 bg-border lg:left-0 lg:right-0 lg:top-[31px] lg:bottom-auto lg:h-0.5 lg:w-full"
          >
            <motion.div
              style={{
                scaleY: lineScale,
                scaleX: lineScale,
              }}
              className="h-full w-full origin-top bg-gradient-to-b from-accent to-success lg:origin-left lg:bg-gradient-to-r"
            />
          </div>

          <RevealGroup
            className="relative grid gap-10 lg:grid-cols-5 lg:gap-6"
            stagger={0.12}
          >
            {processSteps.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="flex items-start gap-5 lg:flex-col lg:items-stretch">
                  <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-white font-display text-2xl text-ink shadow-soft">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
