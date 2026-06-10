import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Fragment_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { Cursor } from "@/components/shared/cursor";
import { Preloader } from "@/components/shared/preloader";
import { ScrollTop } from "@/components/shared/scroll-top";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Instrument_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const monoFont = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pinehollow.studio"),
  title: "Pinehollow Studios",
  description:
    "A two-person iOS software studio by Tom and Jack. Currently building Vestige, a golf app.",
  openGraph: {
    title: "Pinehollow Studios",
    description:
      "A two-person iOS software studio by Tom and Jack. Currently building Vestige, a golf app.",
    // images is auto-resolved from app/opengraph-image.tsx
  },
  // Explicitly enumerate the icons so legacy consumers (Google indexer, older
  // Safari) bind to fresh URLs and don't keep serving cached older marks.
  icons: {
    icon: [{ url: "/icon", sizes: "192x192", type: "image/png" }],
    shortcut: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${serifFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <ScrollTop />
          <Nav />
          <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
