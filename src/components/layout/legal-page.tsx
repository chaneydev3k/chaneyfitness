import * as React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

/**
 * Shared shell for the legal pages (Privacy, Terms, SMS Terms). Keeps the
 * brand hero + readable long-form typography consistent across all three.
 * Content is passed as semantic HTML children and styled via the wrapper.
 */
export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white sm:pt-36">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,#15151a_0%,#0B0B0B_60%)]" />
          <div className="absolute -left-24 top-24 size-80 rounded-full bg-accent/20 blur-[120px]" />
        </div>
        <div className="container-tight max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="headline mt-5 text-[clamp(2.2rem,6vw,3.75rem)] text-white">
            {title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/70">
            {intro}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Effective date: {updated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 sm:py-20">
        <article
          className={
            "container-tight max-w-3xl " +
            "[&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-pretty [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-ink " +
            "[&_h2:first-of-type]:mt-0 " +
            "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-ink " +
            "[&_p]:mt-4 [&_p]:text-pretty [&_p]:leading-relaxed [&_p]:text-muted-foreground " +
            "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 " +
            "[&_li]:leading-relaxed [&_li]:text-muted-foreground [&_li]:marker:text-accent " +
            "[&_strong]:font-semibold [&_strong]:text-ink " +
            "[&_a]:font-medium [&_a]:text-accent [&_a:hover]:underline"
          }
        >
          {children}
        </article>
      </section>
    </>
  );
}

/** Reusable, exact business contact block for the bottom of each policy. */
export function LegalContact({ heading = "Contact us" }: { heading?: string }) {
  return (
    <div className="mt-12 rounded-3xl border border-border bg-muted/40 p-7 sm:p-8">
      <h2 className="!mt-0 text-xl font-extrabold tracking-tight text-ink">
        {heading}
      </h2>
      <p className="!mt-3 text-muted-foreground">
        Questions about this policy? Reach out anytime.
      </p>
      <address className="mt-5 space-y-2 not-italic text-ink/80">
        <p className="!mt-0 font-semibold text-ink">{siteConfig.name}</p>
        <p className="!mt-0 flex items-start gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>
            225 1st Ave N #2902
            <br />
            St. Petersburg, FL 33701
            <br />
            United States
          </span>
        </p>
        <p className="!mt-0">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 text-ink/80 hover:text-accent"
          >
            <Phone className="size-4 text-accent" /> {siteConfig.phone}
          </a>
        </p>
        <p className="!mt-0">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-ink/80 hover:text-accent"
          >
            <Mail className="size-4 text-accent" /> {siteConfig.email}
          </a>
        </p>
        <p className="!mt-0">
          <a
            href={siteConfig.url}
            className="inline-flex items-center gap-2 text-ink/80 hover:text-accent"
          >
            www.chaneyfitness.com
          </a>
        </p>
      </address>
    </div>
  );
}
