import type { Metadata } from "next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { RoostDownloadCta } from "@/components/sections/roost/download-cta";
import { RoostFeatures } from "@/components/sections/roost/features";
import { RoostHazel } from "@/components/sections/roost/hazel";
import { RoostHero } from "@/components/sections/roost/hero";
import { RoostPricing } from "@/components/sections/roost/pricing";
import { RoostPrivacy } from "@/components/sections/roost/privacy";
import { RoostSteps } from "@/components/sections/roost/steps";

export const metadata: Metadata = {
  title: "Roost — Pinehollow Studios",
  description: "Shared household management for couples across Mac and iPhone.",
};

export default function RoostPage() {
  return (
    <main className="page-shell">
      <Nav />
      <RoostHero />
      <RoostFeatures />
      <RoostSteps />
      <RoostHazel />
      <RoostPricing />
      <RoostPrivacy />
      <RoostDownloadCta />
      <Footer />
    </main>
  );
}