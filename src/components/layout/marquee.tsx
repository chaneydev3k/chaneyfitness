import * as React from "react";

import { cn } from "@/lib/utils";

const words = [
  "Strength",
  "Performance",
  "Longevity",
  "Evidence-Based",
  "Built For Life",
];

/**
 * Kinetic billboard ticker. The word set is rendered twice so the
 * translateX(-50%) loop is seamless. Pauses on hover.
 */
export function Marquee({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      aria-hidden="true"
      className={cn(
        "overflow-hidden border-y-2 py-5 sm:py-6",
        dark ? "border-white/10 bg-ink text-white" : "border-ink bg-white text-ink",
        className
      )}
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap hover:[animation-play-state:paused] sm:gap-14">
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-10 sm:gap-14">
            <span className="headline text-4xl sm:text-6xl">{word}</span>
            <span className="size-2.5 shrink-0 rotate-45 bg-accent sm:size-3" />
          </span>
        ))}
      </div>
    </section>
  );
}
