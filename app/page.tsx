import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PhilosophyStrip } from "@/components/sections/philosophy-strip";
import { StudioPeek } from "@/components/sections/team";

export default function Home() {
  // Editorial Volume IV direction: no atmospheric wallpaper. Each section
  // brings its own light (Hero has .ph-hero-aura). Sections below the hero
  // will be replaced as the user sends screenshots for each.
  return (
    <>
      <Hero />
      <PhilosophyStrip />
      <StudioPeek />
      <FinalCta />
    </>
  );
}
