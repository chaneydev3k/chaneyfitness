import { clientResults } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { BeforeAfter } from "@/components/shared/before-after";

export function ResultsShowcase() {
  return (
    <section id="transformations" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Real results"
          title="Real people. Real progress."
          description="A few clients who showed up and put in the work — shared with their permission. Drag the slider to compare. Your results depend on your effort and consistency, but this is what the system looks like when you stick with it."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2">
          {clientResults.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <figure>
                <BeforeAfter
                  beforeSrc={c.beforeSrc}
                  afterSrc={c.afterSrc}
                  beforeAlt={`Before — ${c.alt}`}
                  afterAlt={`After — ${c.alt}`}
                  className="aspect-[3/4] border border-border bg-ink"
                />
                <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                    {c.goal}
                  </span>
                  <span className="font-display text-lg text-ink">
                    {c.result}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/80">
          Individual results vary and depend on effort and consistency. Photos
          shared with client permission.
        </p>
      </div>
    </section>
  );
}
