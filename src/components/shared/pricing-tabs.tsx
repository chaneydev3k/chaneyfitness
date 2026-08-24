"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Tab = "personal" | "group";

const tabs: [Tab, string][] = [
  ["personal", "1:1 Training"],
  ["group", "Small Group"],
];

/** No-contract pricing card with 1:1 and Small Group tabs (used on city pages). */
export function PricingTabs() {
  const [tab, setTab] = React.useState<Tab>("personal");

  return (
    <div className="rounded-3xl border border-border bg-muted/30 p-7 shadow-soft sm:p-9">
      <div
        role="tablist"
        aria-label="Pricing options"
        className="mb-6 inline-flex rounded-full border border-border bg-white p-1 shadow-soft"
      >
        {tabs.map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
              tab === id
                ? "bg-ink text-white"
                : "text-muted-foreground hover:text-ink"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
        Simple, no-contract pricing
      </p>

      <div hidden={tab !== "personal"} className="mt-5 space-y-4 text-ink">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
          <span className="font-semibold">First session</span>
          <span className="font-display text-2xl">Free eval</span>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
          <span className="font-semibold">Single session</span>
          <span className="font-display text-2xl">$65–85</span>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-semibold">
            Packages
            <span className="block text-sm font-normal text-muted-foreground">
              8–24 sessions · 2–4x / week
            </span>
          </span>
          <span className="text-right font-display text-lg leading-tight text-ink">
            12 for $900
            <span className="block">24 for $1,750</span>
          </span>
        </div>
      </div>

      <div hidden={tab !== "group"} className="mt-5 text-ink">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
          <span className="font-semibold">Small Group</span>
          <span className="text-right">
            <span className="font-display text-2xl">
              $550
              <span className="text-sm font-normal text-muted-foreground">
                {" "}
                /mo
              </span>
            </span>
            <span className="block text-xs font-semibold text-accent">
              Referral discounts available
            </span>
          </span>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-ink/80">
          <li>3 coached sessions every week</li>
          <li>50–60 minute sessions</li>
          <li>Small groups of 2–4</li>
          <li>Strength, conditioning &amp; HIIT — scaled to your level</li>
        </ul>
      </div>

      <Button asChild variant="primary" size="lg" className="mt-7 w-full">
        <a href="#book">Book your free consult</a>
      </Button>
    </div>
  );
}
