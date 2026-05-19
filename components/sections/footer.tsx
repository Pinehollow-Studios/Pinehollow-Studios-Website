import Link from "next/link";
import { PinehollowIconTile } from "@/components/shared/pinehollow-mark";

interface FooterColProps {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}

function FooterCol({ title, items }: FooterColProps) {
  return (
    <div>
      <div className="lp-overline" style={{ marginBottom: 18 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                style={{
                  fontSize: 14,
                  color: "var(--lp-fg-mute)",
                  transition: "color var(--lp-dur) var(--lp-ease)",
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                style={{
                  fontSize: 14,
                  color: "var(--lp-fg-mute)",
                  transition: "color var(--lp-dur) var(--lp-ease)",
                }}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        marginTop: "var(--lp-section-y)",
        padding: "80px 0 48px",
        borderTop: "1px solid var(--lp-glass-rim)",
        background: "linear-gradient(180deg, transparent 0%, var(--lp-base-deep) 80%)",
      }}
    >
      <div className="lp-container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}
        >
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <PinehollowIconTile size={48} ariaHidden />
              <div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>Pinehollow</div>
                <div
                  style={{
                    fontFamily: "var(--lp-font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "var(--lp-fg-mute)",
                    marginTop: 2,
                  }}
                >
                  STUDIOS — 2026
                </div>
              </div>
            </Link>
            <p
              style={{
                color: "var(--lp-fg-mute)",
                fontSize: 15,
                lineHeight: 1.55,
                maxWidth: 360,
                marginTop: 16,
              }}
            >
              A two-person iOS software studio by Tom and Jack. Trading as Pinehollow Studios Limited.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                padding: "6px 14px",
                borderRadius: "var(--lp-r-pill)",
                border: "1px solid rgba(127,228,255,0.30)",
                background: "rgba(127,228,255,0.06)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 99,
                  background: "var(--lp-pine-glow)",
                  boxShadow: "0 0 10px var(--lp-pine-glow)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--lp-font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--lp-pine-glow)",
                }}
              >
                Currently building Fairways
              </span>
            </div>
          </div>

          <FooterCol
            title="Studio"
            items={[
              { label: "Apps", href: "/apps" },
              { label: "Manifesto", href: "/manifesto" },
              { label: "About", href: "/studio" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
            ]}
          />
          <FooterCol
            title="Elsewhere"
            items={[
              { label: "support@pinehollow.studio", href: "mailto:support@pinehollow.studio", external: true },
            ]}
          />
        </div>

        <div
          className="footer-meta"
          style={{
            borderTop: "1px solid var(--lp-glass-rim)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--lp-font-mono)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--lp-fg-dim)",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>© Pinehollow Studios Limited — 2026 · Registered in England &amp; Wales</div>
          <div>Two people · United Kingdom</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
