"use client";

import { ArrowRight } from "lucide-react";

import { faqs, siteConfig } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-muted/50 py-24 sm:py-32">
      <div className="container-tight grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered."
            description="Everything you need to know before your free consultation."
          />
          <Reveal delay={0.1} className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-ink"
            >
              Still curious? Ask on your call
              <ArrowRight className="size-4" />
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-ink underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal from="up">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
