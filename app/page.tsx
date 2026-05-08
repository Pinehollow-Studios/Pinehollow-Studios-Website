import { Craft } from "@/components/sections/craft";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Materials } from "@/components/sections/materials";
import { Nav } from "@/components/sections/nav";
import { PhilosophyStrip } from "@/components/sections/philosophy-strip";
import { Team } from "@/components/sections/team";

export default function Home() {
  return (
    <main className="page-shell">
      <Nav />
      <Hero />
      <PhilosophyStrip />
      <Team />
      <Craft />
      <Materials />
      <Footer />
    </main>
  );
}
