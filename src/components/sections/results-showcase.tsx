import { clientResults } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function ResultsShowcase() {
  return (
    <section id="transformations" className="bg-white py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Real results"
          title="Real people. Real progress."
          description="A few clients who showed up and put in the work — shared with their permission. Your results depend on your effort and consistency, but this is what the system looks like when you stick with it."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          {clientResults.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
                <div className="grid grid-cols-2 gap-px bg-border">
                  <div className="relative bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.beforeSrc}
                      alt={`Before — ${c.alt}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover object-top"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink backdrop-blur">
                      Before
                    </span>
                  </div>
                  <div className="relative bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.afterSrc}
                      alt={`After — ${c.alt}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover object-top"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                      After
                    </span>
                  </div>
                </div>
                <figcaption className="flex flex-wrap items-center justify-between gap-2 p-5">
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
