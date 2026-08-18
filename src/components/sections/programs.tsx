"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { programs } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Programs() {
  return (
    <section id="programs" className="bg-muted/50 py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Programs"
          title="Three ways to train together."
          description="Every option is coached, personalized, and scaled to your level — from your first day in the gym to advanced training. Pick the structure and support that fit your life right now."
        />

        <RevealGroup className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {programs.map((program) => (
            <RevealItem key={program.id}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition-shadow duration-300",
                  program.highlight
                    ? "border-transparent bg-ink text-white shadow-lift ring-2 ring-accent"
                    : "border-border bg-white text-ink shadow-soft hover:shadow-lift"
                )}
              >
                {program.badge && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lift">
                    <Sparkles className="size-3.5" /> {program.badge}
                  </span>
                )}

                <h3 className="headline text-3xl">{program.name}</h3>
                <p
                  className={cn(
                    "mt-3 text-pretty text-[0.95rem] font-bold leading-snug",
                    program.highlight ? "text-white" : "text-ink"
                  )}
                >
                  {program.tagline}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-end gap-1.5">
                  {program.price ? (
                    <>
                      <span className="font-display text-4xl leading-none">
                        {program.price}
                      </span>
                      <span
                        className={cn(
                          "pb-1 text-sm",
                          program.highlight
                            ? "text-white/60"
                            : "text-muted-foreground"
                        )}
                      >
                        {program.priceNote}
                      </span>
                    </>
                  ) : (
                    <span
                      className={cn(
                        "text-sm font-semibold",
                        program.highlight
                          ? "text-white/70"
                          : "text-muted-foreground"
                      )}
                    >
                      Custom — starts with a free consult
                    </span>
                  )}
                </div>

                <p
                  className={cn(
                    "mt-5 text-pretty text-sm leading-relaxed",
                    program.highlight ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {program.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          program.highlight
                            ? "bg-accent text-white"
                            : "bg-success/10 text-success"
                        )}
                      >
                        <Check className="size-3.5" />
                      </span>
                      <span
                        className={
                          program.highlight ? "text-white/90" : "text-ink/80"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {program.note && (
                  <p
                    className={cn(
                      "mt-5 text-xs leading-relaxed",
                      program.highlight
                        ? "text-white/50"
                        : "text-muted-foreground/80"
                    )}
                  >
                    {program.note}
                  </p>
                )}

                <Button
                  asChild
                  size="lg"
                  variant={program.highlight ? "accent" : "primary"}
                  className="mt-7 w-full"
                >
                  <a href="#contact">
                    Get started
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
