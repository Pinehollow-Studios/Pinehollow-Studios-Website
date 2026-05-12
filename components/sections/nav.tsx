"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GhostButton, PrimaryButton } from "@/components/shared/buttons";

type NavKey = "apps" | "manifesto" | "studio" | "contact" | null;

const items: { label: string; href: string; id: Exclude<NavKey, null> }[] = [
  { label: "Apps", href: "/apps", id: "apps" },
  { label: "Manifesto", href: "/manifesto", id: "manifesto" },
  { label: "Studio", href: "/studio", id: "studio" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export function Nav({ active = null }: { active?: NavKey }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "20px 0",
      }}
    >
      <div className="lp-container">
        <nav
          style={{
            background: "var(--lp-glass)",
            backdropFilter: "var(--lp-blur-lg)",
            WebkitBackdropFilter: "var(--lp-blur-lg)",
            border: "1px solid var(--lp-glass-rim)",
            borderRadius: "var(--lp-r-pill)",
            padding: "10px 14px 10px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "var(--lp-glass-inset), var(--lp-shadow)",
            gap: 16,
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }} aria-label="Pinehollow home">
            <Image
              src="/pinehollow-icon.png"
              alt=""
              width={32}
              height={32}
              priority
              style={{ width: 30, height: 30, borderRadius: 8 }}
            />
            <span style={{ fontWeight: 500, fontSize: 17, letterSpacing: "-0.02em" }}>Pinehollow</span>
            <span
              className="nav-monogram"
              style={{
                fontFamily: "var(--lp-font-mono)",
                fontSize: 11,
                color: "var(--lp-fg-mute)",
                letterSpacing: "0.14em",
                marginLeft: 6,
              }}
            >
              STUDIOS
            </span>
          </Link>

          <div
            className="nav-links"
            style={{
              display: "flex",
              gap: 28,
              fontSize: 14,
              color: "var(--lp-fg-mute)",
            }}
          >
            {items.map((item) => (
              <NavLink key={item.id} {...item} isActive={active === item.id} />
            ))}
          </div>

          <div className="nav-cta" style={{ display: "flex", gap: 10 }}>
            <GhostButton href="/contact">Get in touch</GhostButton>
            <PrimaryButton href="/manifesto">Read manifesto</PrimaryButton>
          </div>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={isOpen}
            onClick={() => setOpen((v) => !v)}
            className="nav-burger"
            style={{
              display: "none",
              width: 40,
              height: 40,
              borderRadius: 99,
              border: "1px solid var(--lp-glass-rim)",
              background: "var(--lp-glass)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ display: "block", width: 16, height: 1, background: "var(--lp-fg)" }} />
              <span style={{ display: "block", width: 16, height: 1, background: "var(--lp-fg)" }} />
            </span>
          </button>
        </nav>

        {isOpen ? (
          <div
            className="nav-mobile-panel"
            style={{
              marginTop: 10,
              background: "var(--lp-glass)",
              backdropFilter: "var(--lp-blur-lg)",
              WebkitBackdropFilter: "var(--lp-blur-lg)",
              border: "1px solid var(--lp-glass-rim)",
              borderRadius: "var(--lp-r-xl)",
              padding: 18,
              boxShadow: "var(--lp-glass-inset), var(--lp-shadow)",
              display: "none",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 16,
                  color: active === item.id ? "var(--lp-fg)" : "var(--lp-fg-mute)",
                  padding: "6px 4px",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              <GhostButton href="/contact">Get in touch</GhostButton>
              <PrimaryButton href="/manifesto">Read manifesto</PrimaryButton>
            </div>
          </div>
        ) : null}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .nav-links, .nav-cta, .nav-monogram { display: none !important; }
          .nav-burger { display: inline-flex !important; }
          .nav-mobile-panel { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function NavLink({
  label,
  href,
  id,
  isActive,
}: {
  label: string;
  href: string;
  id: string;
  isActive: boolean;
}) {
  return (
    <Link
      key={id}
      href={href}
      style={{
        position: "relative",
        color: isActive ? "var(--lp-fg)" : "var(--lp-fg-mute)",
        transition: "color var(--lp-dur) var(--lp-ease)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lp-fg)")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = isActive ? "var(--lp-fg)" : "var(--lp-fg-mute)")
      }
    >
      {label}
      {isActive ? (
        <span
          style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 4,
            height: 4,
            borderRadius: 99,
            background: "var(--lp-pine-glow)",
            boxShadow: "0 0 8px var(--lp-pine-glow)",
          }}
        />
      ) : null}
    </Link>
  );
}
