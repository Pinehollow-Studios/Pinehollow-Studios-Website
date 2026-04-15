import { Craft } from "@/components/sections/craft";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Nav } from "@/components/sections/nav";
import { PhilosophyStrip } from "@/components/sections/philosophy-strip";
import { Products } from "@/components/sections/products";

export default function Home() {
  return (
    <main className="page-shell">
      <Nav />
      <Hero />
      <PhilosophyStrip />
      <Products />
      <Craft />
      <Footer />
    </main>
  );
}