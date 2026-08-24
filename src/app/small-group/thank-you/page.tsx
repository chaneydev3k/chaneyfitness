import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "Application received | Chaney Fitness" },
  description: "Your small-group application was received.",
  alternates: { canonical: "/small-group/thank-you" },
  // Keep this conversion page out of search results.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-ink py-24 text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,#15151a_0%,#0B0B0B_60%)]" />
        <div className="absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
      </div>

      <div className="container-tight max-w-2xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-9" />
        </span>
        <h1 className="headline mt-7 text-[2.4rem] text-white sm:text-5xl">
          You&apos;re in the queue.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-white/70">
          Thanks for applying for a spot in the St. Pete small group. I&apos;ll
          reach out personally — usually the same day — to talk through your
          goals and see if it&apos;s a fit. Keep an eye on your phone.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="onDark" size="lg">
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" /> Or call {siteConfig.phone}
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
            <Link href="/">Back to Chaney Fitness</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
