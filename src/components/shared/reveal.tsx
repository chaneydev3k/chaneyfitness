"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Direction the element travels from. */
  from?: Direction;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Travel distance in pixels. */
  distance?: number;
  /** Render as a different element for correct semantics. */
  as?: "div" | "section" | "li" | "span" | "article";
  once?: boolean;
}

const offset = (from: Direction, distance: number) => {
  switch (from) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Scroll-triggered reveal: fade + subtle blur + translate.
 * Honors prefers-reduced-motion by rendering content immediately.
 */
export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  distance = 28,
  as = "div",
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      ...offset(from, distance),
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger container — children using `RevealItem` animate in sequence.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "section";
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={cn(className)} variants={revealItemVariants}>
      {children}
    </MotionTag>
  );
}
