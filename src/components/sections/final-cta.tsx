"use client";

import { CalendarCheck, MapPin, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";
import { CalendlyEmbed } from "@/components/shared/calendly";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
      />

      <div className="container-tight relative grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="eyebrow">Book your consultation</span>
          <Reveal>
            <h2 className="headline mt-5 text-balance text-[2.5rem] sm:text-6xl md:text-7xl">
              Become the strongest version of yourself.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-white/70">
              Your health shouldn&apos;t compete with your career or your
              family. Let&apos;s build a plan that fits your life — and lasts.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="size-5 text-accent" />
                <span>
                  In-person in St. Petersburg &amp; across Manatee County —
                  plus online coaching, anywhere.
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CalendarCheck className="size-5 text-success" />
                <span>Flexible scheduling that works around your calendar.</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-accent" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-accent" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Booking — embedded Calendly */}
        <Reveal from="up" delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-lift backdrop-blur sm:p-3">
            <CalendlyEmbed
              url={siteConfig.calendlyEmbedUrl}
              height={720}
              className="overflow-hidden rounded-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
