import type { Metadata } from "next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { PageFade } from "@/components/shared/page-fade";
import { ScrollTop } from "@/components/shared/scroll-top";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinehollow Studios",
  description:
    "A two-person software studio building independent apps for iOS, macOS, and the web — quietly, and on our own terms.",
  openGraph: {
    title: "Pinehollow Studios",
    description:
      "A two-person software studio building independent apps for iOS, macOS, and the web — quietly, and on our own terms.",
    images: [{ url: "/pinehollow-icon.png", width: 512, height: 512 }],
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
      </body>
    </html>
  );
}
