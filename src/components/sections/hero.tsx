"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Star } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/shared/before-after";
import { GoogleG } from "@/components/shared/google-reviews";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);

  // Mouse-reactive lighting.
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.25);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const lightX = useTransform(glowX, (v) => `${v * 100}%`);
  const lightY = useTransform(glowY, (v) => `${v * 100}%`);
  const light = useMotionTemplate`radial-gradient(720px circle at ${lightX} ${lightY}, rgba(59,130,246,0.28), transparent 60%)`;

  // Scroll parallax.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yShapeA = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yShapeB = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink pb-20 pt-32 text-white sm:pt-36"
    >
      {/* Layered background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,#15151a_0%,#0B0B0B_55%)]" />
        <motion.div className="absolute inset-0" style={{ background: light }} />
        <div className="absolute inset-0 bg-grid opacity-70 mask-fade-b" />

        <motion.div
          style={{ y: reduceMotion ? 0 : yShapeA }}
          className="absolute -left-24 top-24 size-80 rounded-full bg-accent/25 blur-[120px]"
        />
        <motion.div
          style={{ y: reduceMotion ? 0 : yShapeB }}
          className="absolute -right-20 bottom-0 size-96 rounded-full bg-success/15 blur-[130px]"
        />
        <div className="absolute right-[16%] top-32 hidden size-24 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm md:block animate-float-slow" />
        <div className="absolute left-[8%] bottom-28 hidden size-14 rotate-12 border border-white/10 bg-white/[0.03] backdrop-blur-sm lg:block animate-float-slow [animation-delay:1.5s]" />
      </div>

      <div className="container-tight grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur"
          >
            <span className="flex size-1.5 rounded-full bg-success" />
            Limited spots available
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.05 }}
            className="headline mt-7 text-[clamp(3.1rem,9vw,7rem)] text-white"
          >
            Fitness built
            <br />
            around{" "}
            <span className="text-accent">your life.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="mt-7 max-w-prose text-pretty text-lg leading-relaxed text-white/70"
          >
            Personalized coaching that helps busy professionals become
            stronger, leaner, and healthier — without sacrificing work or
            family.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="accent" size="xl">
              <a href="#contact">
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href="#programs">Explore Programs</a>
            </Button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/60"
          >
            <a
              href={siteConfig.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#FBBC04] text-[#FBBC04]"
                    aria-hidden="true"
                  />
                ))}
              </span>
              <span className="font-semibold text-white">5.0</span>
              <span className="inline-flex items-center gap-1">
                on <GoogleG className="size-3.5" /> Google
              </span>
            </a>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-success" />
              Evidence-based · No contracts
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" />
              St. Petersburg · Manatee County · Online
            </span>
          </motion.div>
        </div>

        {/* Interactive before/after */}
        <motion.div
          style={{ opacity: reduceMotion ? 1 : heroFade }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <BeforeAfter
            beforeSrc="/transformations/before-1.svg"
            afterSrc="/transformations/after-1.svg"
            beforeAlt="Illustrative before-and-after silhouette — starting point"
            afterAlt="Illustrative before-and-after silhouette — after coaching"
            initial={52}
            className="border-2 border-white/10"
          />
          <div className="pointer-events-none absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-soft/95 p-4 shadow-lift backdrop-blur">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold uppercase tracking-wide text-white">
                Drag to compare
              </span>
              <span className="text-white/55">Illustrative</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: reduceMotion ? 1 : [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
