"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { programs } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

type View = "overview" | "compare";

const compareRows: { label: string; values: (boolean | string)[] }[] = [
  { label: "Personalized workouts", values: [true, true, true] },
  { label: "Nutrition coaching", values: [true, true, "Add-on"] },
  { label: "Weekly check-ins", values: [true, true, true] },
  { label: "Progress tracking", values: [true, true, true] },
  { label: "Exercise video library", values: [true, true, false] },
  { label: "Habit coaching", values: [true, true, true] },
  { label: "Unlimited messaging", values: [true, "Priority", true] },
  { label: "Priority communication", values: [false, true, false] },
  { label: "Lifestyle optimization", values: [false, true, false] },
  { label: "Travel planning", values: [false, true, false] },
  { label: "Performance coaching", values: [false, true, true] },
  { label: "Private in-person sessions", values: [false, false, true] },
];

export function Programs() {
  const [view, setView] = React.useState<View>("overview");

  return (
    <section id="programs" className="bg-muted/50 py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Programs"
          title="Three ways to work together."
          description="Every program is fully personalized. Choose the level of access and support that fits your life right now — you can always evolve as you progress."
        />

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Program view"
            className="inline-flex items-center rounded-full border border-border bg-white p-1 shadow-soft"
          >
            {(["overview", "compare"] as View[]).map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={view === v}
                onClick={() => setView(v)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors duration-300",
                  view === v ? "text-white" : "text-muted-foreground hover:text-ink"
                )}
              >
                {view === v && (
                  <motion.span
                    layoutId="program-toggle"
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
                {v}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "overview" ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <RevealGroup className="mt-12 grid items-start gap-5 lg:grid-cols-3">
                {programs.map((program) => (
                  <RevealItem key={program.id}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "relative flex h-full flex-col rounded-3xl border p-8 transition-shadow duration-300",
                        program.highlight
                          ? "border-transparent bg-ink text-white shadow-lift ring-1 ring-ink"
                          : "border-border bg-white text-ink shadow-soft hover:shadow-lift"
                      )}
                    >
                      {program.badge && (
                        <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                          <Sparkles className="size-3" /> {program.badge}
                        </span>
                      )}
                      <h3 className="headline text-3xl sm:text-[2rem]">
                        {program.name}
                      </h3>
                      <p className="mt-2.5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                        {program.tagline}
                      </p>
                      <p
                        className={cn(
                          "mt-4 text-pretty text-sm leading-relaxed",
                          program.highlight ? "text-white/70" : "text-muted-foreground"
                        )}
                      >
                        {program.description}
                      </p>

                      <ul className="mt-6 flex-1 space-y-3 text-sm">
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

                      <Button
                        asChild
                        size="lg"
                        variant={program.highlight ? "accent" : "primary"}
                        className="mt-8 w-full"
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
            </motion.div>
          ) : (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-soft"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-5 text-left font-medium text-muted-foreground">
                        Included
                      </th>
                      {programs.map((p) => (
                        <th
                          key={p.id}
                          className={cn(
                            "p-5 text-center font-display text-base font-semibold",
                            p.highlight ? "text-accent" : "text-ink"
                          )}
                        >
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={cn(
                          "border-b border-border/60",
                          i % 2 === 1 && "bg-muted/40"
                        )}
                      >
                        <td className="p-4 pl-5 text-left font-medium text-ink/80">
                          {row.label}
                        </td>
                        {row.values.map((val, idx) => (
                          <td key={idx} className="p-4 text-center">
                            {typeof val === "string" ? (
                              <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                                {val}
                              </span>
                            ) : val ? (
                              <Check className="mx-auto size-5 text-success" />
                            ) : (
                              <Minus className="mx-auto size-4 text-muted-foreground/50" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 sm:flex-row sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Not sure which fits? We&apos;ll help you decide on your call.
                </p>
                <Button asChild variant="primary" size="lg">
                  <a href="#contact">
                    Book a free consultation
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
