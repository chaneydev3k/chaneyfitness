"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  // Solidify the nav after a small scroll threshold.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section currently in view for the active indicator.
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over the dark hero (top of page) the nav uses light text; once the page
  // scrolls and the bar turns to white glass, it flips to ink.
  const onHero = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled || open
          ? "border-b border-border/70 glass py-2.5"
          : "border-b border-transparent bg-transparent py-4"
      )}
    >
      <nav
        className="container-tight flex items-center justify-between gap-6"
        aria-label="Primary"
      >
        <a href="#top" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${siteConfig.name} — home`}>
          <Logo tone={onHero ? "white" : "ink"} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.78rem] font-bold uppercase tracking-wide transition-colors duration-300",
                    isActive
                      ? onHero
                        ? "text-white"
                        : "text-ink"
                      : onHero
                        ? "text-white/65 hover:text-white"
                        : "text-muted-foreground hover:text-ink"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full",
                        onHero ? "bg-white/15" : "bg-muted"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "text-sm font-semibold transition-colors",
              onHero ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-ink"
            )}
          >
            {siteConfig.phone}
          </a>
          <Button asChild variant="accent" size="md">
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
            onHero ? "text-white hover:bg-white/10" : "text-ink hover:bg-muted"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="container-tight mt-2 lg:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl border border-border/70 p-3 shadow-lift">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-2 w-full"
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  Book Free Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
