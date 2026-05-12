import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PhilosophyStrip } from "@/components/sections/philosophy-strip";
import { StudioPeek } from "@/components/sections/team";
import { Page } from "@/components/shared/page";

export default function Home() {
  return (
    <Page atmosphere="default">
      <Hero />
      <PhilosophyStrip />
      <StudioPeek />
      <FinalCta />
    </Page>
  );
}
