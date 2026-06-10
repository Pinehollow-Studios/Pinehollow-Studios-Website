import type { Metadata } from "next";
import { Archivo, Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { Cursor } from "@/components/shared/cursor";
import { Preloader } from "@/components/shared/preloader";
import { ScrollTop } from "@/components/shared/scroll-top";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
      className={`${archivo.variable} ${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
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
