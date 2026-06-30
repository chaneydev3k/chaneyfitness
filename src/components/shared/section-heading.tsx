import * as React from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Use a darker palette on light sections (default) or light text on dark. */
  tone?: "light" | "dark";
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "light",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-prose flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag
        className={cn(
          "headline text-balance text-[2.1rem] sm:text-5xl md:text-6xl",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-1 max-w-prose text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/65" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
