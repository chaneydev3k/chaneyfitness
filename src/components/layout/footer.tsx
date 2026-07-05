import * as React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { GoogleG } from "@/components/shared/google-reviews";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-tight py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Private 1:1 &amp; small-group personal
              training in Downtown St. Pete and Palmetto — plus live virtual
              sessions, anywhere.
            </p>
            <div className="mt-5">
              <a
                href={siteConfig.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chaney Fitness reviews on Google"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-muted"
              >
                <GoogleG className="size-4" /> 5.0 on Google
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-8 lg:grid-cols-4" aria-label="Footer">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Explore
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className="text-ink/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
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
                  <Link href="/#programs" className="text-ink/80 transition-colors hover:text-accent">
                    Virtual Training
                  </Link>
                </li>
                <li>
                  <Link href="/#programs" className="text-ink/80 transition-colors hover:text-accent">
                    Executive Coaching
                  </Link>
                </li>
                <li>
                  <Link href="/#programs" className="text-ink/80 transition-colors hover:text-accent">
                    Personal Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Service areas
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/personal-trainer-palmetto-fl"
                    className="text-ink/80 transition-colors hover:text-accent"
                  >
                    Personal Trainer in Palmetto
                  </Link>
                </li>
                <li className="text-ink/50">St. Petersburg (soon)</li>
                <li className="text-ink/50">Bradenton (soon)</li>
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
