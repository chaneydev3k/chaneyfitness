import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/layout/marquee";
import { Why } from "@/components/sections/why";
import { Programs } from "@/components/sections/programs";
import { Results } from "@/components/sections/results";
import { Transformations } from "@/components/sections/transformations";
import { Process } from "@/components/sections/process";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Why />
      <Programs />
      <Results />
      <Transformations />
      <Process />
      <Features />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
