import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { PageFade } from "@/components/shared/page-fade";
import { ScrollTop } from "@/components/shared/scroll-top";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pinehollow.studio"),
  title: "Pinehollow Studios",
  description:
    "A two-person software studio building independent apps for iOS, macOS, and the web — quietly, and on our own terms.",
  openGraph: {
    title: "Pinehollow Studios",
    description:
      "A two-person software studio building independent apps for iOS, macOS, and the web — quietly, and on our own terms.",
    // images is auto-resolved from app/opengraph-image.tsx
  },
  // Explicitly enumerate the icons so legacy consumers (Google indexer, older
  // Safari) bind to fresh URLs and don't keep serving cached older marks.
  icons: {
    icon: [
      { url: "/icon", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <ScrollTop />
          <Nav />
          <main style={{ position: "relative", zIndex: 1 }}>
            <PageFade>{children}</PageFade>
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
