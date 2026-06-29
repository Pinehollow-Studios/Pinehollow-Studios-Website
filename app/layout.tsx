import type { Metadata } from "next";
import { Bricolage_Grotesque, Fragment_Mono, Instrument_Sans } from "next/font/google";
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
    "An independent software studio founded by two friends, Tom and Jack. Currently building Vestige, a golf app.",
  openGraph: {
    title: "Pinehollow Studios",
    description:
      "An independent software studio founded by two friends, Tom and Jack. Currently building Vestige, a golf app.",
    // images is auto-resolved from app/opengraph-image.tsx
  },
  // Explicitly enumerate the icons so legacy consumers (Google indexer, older
  // Safari) bind to fresh URLs and don't keep serving cached older marks.
  // The ?v= is a cache-buster — bump it whenever the mark changes, since
  // browsers cache favicons in a separate store that ignores hard refreshes.
  icons: {
    icon: [{ url: "/icon?v=3", sizes: "192x192", type: "image/png" }],
    shortcut: [{ url: "/icon?v=3", type: "image/png" }],
    apple: [{ url: "/apple-icon?v=3", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
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
