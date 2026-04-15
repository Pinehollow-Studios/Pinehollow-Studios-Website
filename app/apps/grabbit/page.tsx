import type { Metadata } from "next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { GrabbitFeatures } from "@/components/sections/grabbit/features";
import { GrabbitHero } from "@/components/sections/grabbit/hero";
import { GrabbitIntro } from "@/components/sections/grabbit/intro";
import { GrabbitNotifyCta } from "@/components/sections/grabbit/notify-cta";
import { GrabbitPartnership } from "@/components/sections/grabbit/partnership";
import { GrabbitSteps } from "@/components/sections/grabbit/steps";

export const metadata: Metadata = {
  title: "Grabbit — Pinehollow Studios",
  description: "A private iPhone app for saving screenshots and photos, then finding them again in plain English.",
};

export default function GrabbitPage() {
  return (
    <main className="page-shell">
      <Nav />
      <GrabbitHero />
      <GrabbitIntro />
      <GrabbitSteps />
      <GrabbitFeatures />
      <GrabbitPartnership />
      <GrabbitNotifyCta />
      <Footer />
    </main>
  );
}
