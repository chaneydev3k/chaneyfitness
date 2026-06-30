import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Chaney Fitness wordmark with a minimal monogram mark.
 */
export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const text = tone === "white" ? "text-white" : "text-ink";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-lg bg-ink shadow-soft"
      >
        <span className="font-display text-lg leading-none tracking-tight text-white">
          CF
        </span>
      </span>
      <span className={cn("font-display text-xl leading-none tracking-tight", text)}>
        Chaney Fitness<span className="text-accent">.</span>
      </span>
    </span>
  );
}
