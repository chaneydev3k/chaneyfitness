import { Apple, Dumbbell, Scale } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const focuses = [
  {
    icon: Scale,
    title: "Fat Loss",
    body: "Drop body fat without crash diets or endless cardio. We build a sustainable nutrition and training plan that fits your week — so the weight comes off and actually stays off.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Toning",
    body: "Get stronger and leaner with smart resistance training. You'll move better, build a defined, athletic shape, and see the change in the mirror — not just on the scale.",
  },
  {
    icon: Apple,
    title: "Eating Right",
    body: "Flexible nutrition and meal-planning coaching built around your tastes and schedule. No rigid meal plans you'll abandon — just simple habits that make eating well stick.",
  },
];

export function Transformations() {
  return (
    <section id="focus" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="What we focus on"
          title="Fat loss, strength, and eating right."
          description="No gimmicks or six-week sprints — just the few things that actually change how you look, move, and feel."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {focuses.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.05}>
                <article className="h-full rounded-3xl border border-border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
