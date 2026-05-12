"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { GhostButton, PrimaryButton } from "@/components/shared/buttons";

const items = [
  { label: "Apps", href: "/apps" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
] as const;

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Sticky nav. Nav lives in the root layout so it persists across route
 * changes — and the active-page indicator (a small glow dot) animates
 * smoothly between items as the route changes.
 */
export function Nav() {
  const pathname = usePathname();
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

          <NavLinks pathname={pathname} />

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
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 16,
                  color: isActive(pathname, item.href) ? "var(--lp-fg)" : "var(--lp-fg-mute)",
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

function NavLinks({ pathname }: { pathname: string | null }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const dotRef = useRef<HTMLSpanElement>(null);
  const activeIndex = items.findIndex((it) => isActive(pathname, it.href));

  useLayoutEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    if (activeIndex < 0) {
      dot.style.opacity = "0";
      dot.style.transform = "translate3d(0,0,0) scale(0)";
      return;
    }
    const link = linkRefs.current[activeIndex];
    const container = containerRef.current;
    if (!link || !container) return;
    const cr = container.getBoundingClientRect();
    const lr = link.getBoundingClientRect();
    const x = lr.left - cr.left + lr.width / 2 - 2.5;
    dot.style.opacity = "1";
    dot.style.transform = `translate3d(${x}px, 0, 0) scale(1)`;
  }, [activeIndex, pathname]);

  const dotStyle: CSSProperties = {
    position: "absolute",
    bottom: -10,
    left: 0,
    width: 5,
    height: 5,
    borderRadius: 99,
    background: "var(--lp-pine-glow)",
    boxShadow: "0 0 10px var(--lp-pine-glow)",
    opacity: 0,
    transform: "translate3d(0,0,0) scale(0)",
    transition:
      "transform 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms cubic-bezier(0.2, 0.7, 0.2, 1)",
    willChange: "transform",
    pointerEvents: "none",
  };

  return (
    <div
      ref={containerRef}
      className="nav-links"
      style={{
        position: "relative",
        display: "flex",
        gap: 28,
        fontSize: 14,
        color: "var(--lp-fg-mute)",
      }}
    >
      {items.map((item, i) => {
        const active = i === activeIndex;
        return (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            style={{
              position: "relative",
              color: active ? "var(--lp-fg)" : "var(--lp-fg-mute)",
              transition: "color var(--lp-dur) var(--lp-ease)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lp-fg)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = active ? "var(--lp-fg)" : "var(--lp-fg-mute)")
            }
          >
            {item.label}
          </Link>
        );
      })}
      <span ref={dotRef} aria-hidden="true" style={dotStyle} />
    </div>
  );
}
