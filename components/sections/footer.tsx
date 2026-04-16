import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contact"
      className="grain-surface-dark border-t border-[var(--color-border-dark)] bg-[var(--color-charcoal)] text-[var(--color-cream)]"
    >
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto] sm:gap-16">

          {/* Brand */}
          <div className="max-w-[22rem]">
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
              Thoughtfully crafted software for everyday life. Built with care, for people who notice.
            </p>
            <p
              className="mt-6"
              style={{ fontSize: "0.875rem", color: "rgba(250,248,245,0.32)" }}
            >
              © 2026 Pinehollow Studios
            </p>
          </div>

          {/* Apps */}
          <div>
            <p className="label-overline mb-5" style={{ color: "rgba(250,248,245,0.32)" }}>
              Applications
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/apps/roost"
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                Roost
              </Link>
              <Link
                href="/apps/grabbit"
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                Grabbit
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
                href="mailto:hello@pinehollow.studio"
                className="text-[0.9375rem] text-[rgba(250,248,245,0.68)] transition-colors duration-300 hover:text-[var(--color-cream)]"
              >
                hello@pinehollow.studio
              </a>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}
