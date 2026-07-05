import * as React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-tight py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Evidence-based personal training in{" "}
              {siteConfig.locality} and across Manatee County — plus online
              coaching, anywhere.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chaney Fitness on Instagram"
                className="grid size-10 place-items-center rounded-full border border-border text-ink transition-colors hover:border-ink/30 hover:bg-muted"
              >
                <Instagram className="size-[18px]" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chaney Fitness on LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-border text-ink transition-colors hover:border-ink/30 hover:bg-muted"
              >
                <Linkedin className="size-[18px]" />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3" aria-label="Footer">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Explore
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-ink/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Programs
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#programs" className="text-ink/80 transition-colors hover:text-accent">
                    Online Coaching
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-ink/80 transition-colors hover:text-accent">
                    Executive Coaching
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-ink/80 transition-colors hover:text-accent">
                    Personal Training
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Contact
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-accent"
                  >
                    <Mail className="size-4" /> {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 text-ink/80 transition-colors hover:text-accent"
                  >
                    <Phone className="size-4" /> {siteConfig.phone}
                  </a>
                </li>
                <li className="text-ink/60">
                  {siteConfig.locality}, {siteConfig.region} · Manatee County · Online
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
