import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/tokens";

export function Footer() {
  return (
    <footer
      id="contact"
      className="grain-surface-dark border-t border-[var(--color-border-dark)] bg-[var(--color-charcoal)] text-[var(--color-cream)]"
    >
      <div className="container-shell py-14 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-[1fr_auto_auto] sm:gap-16">

          {/* Brand */}
          <div className="max-w-[24rem]">
            <Image
              src="/pinehollow-icon.png"
              alt="Pinehollow Studios"
              width={56}
              height={56}
              className="mb-5 h-14 w-14 rounded-[10px]"
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "var(--color-cream)",
              }}
            >
              Pinehollow Studios
            </p>
            <p
              className="mt-4"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.72,
                color: "rgba(250,248,245,0.55)",
              }}
            >
              A two-person software studio. Apps for iOS, macOS, and the web.
            </p>
            <p
              className="mt-6"
              style={{ fontSize: "0.875rem", color: "rgba(250,248,245,0.32)" }}
            >
              © 2026 Pinehollow Studios
            </p>
          </div>

          {/* Studio */}
          <div>
            <p className="label-overline mb-5" style={{ color: "rgba(250,248,245,0.32)" }}>
              Studio
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/#principles"
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                Principles
              </Link>
              <Link
                href="/#team"
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                Team
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="label-overline mb-5" style={{ color: "rgba(250,248,245,0.32)" }}>
              Contact
            </p>
            <nav className="flex flex-col gap-3">
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                {siteContent.contact.email}
              </a>
              <Link
                href="/privacy"
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}
