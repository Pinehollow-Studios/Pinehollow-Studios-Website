import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinehollow Studios",
  description: "A two-person software studio building apps for iOS, macOS, and the web.",
  openGraph: {
    title: "Pinehollow Studios",
    description: "A two-person software studio building apps for iOS, macOS, and the web.",
    images: [{ url: "/pinehollow-icon.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
