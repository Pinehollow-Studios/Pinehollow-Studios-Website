import type { Metadata } from "next";
import { PageFade } from "@/components/shared/page-fade";
import { ScrollTop } from "@/components/shared/scroll-top";
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
        <ScrollTop />
        <PageFade>{children}</PageFade>
      </body>
    </html>
  );
}
