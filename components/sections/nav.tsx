"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PinehollowMark } from "@/components/shared/pinehollow-mark";

const navItems = [
  { label: "Apps", href: "/apps", no: "01" },
  { label: "Manifesto", href: "/manifesto", no: "02" },
  { label: "Studio", href: "/studio", no: "03" },
] as const;

const menuItems = [
  { label: "Home", href: "/", no: "00" },
  ...navItems,
  { label: "Hello", href: "/contact", no: "04" },
] as const;

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Label that flips up to a duplicate of itself on hover. */
function FlipLabel({ children }: { children: string }) {
  return (
    <span className="ph-flip">
      <span className="ph-flip-inner">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}

/**
 * Masthead + sticky nav. The mono masthead strip (volume, coordinates,
 * studio-open dot) scrolls away; the nav row stays pinned and picks up a
 * blurred backdrop once the page moves. Mobile gets a full-screen overlay
 * with staggered oversized links.
 */
export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // close the overlay on navigation — state adjustment during render,
  // per the React "you might not need an effect" pattern
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll lock while the overlay is up
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="ph-header">
      {/* masthead strip — scrolls away */}
      <div className="ph-masthead">
        <div className="lp-container ph-masthead-row">
          <div className="ph-masthead-meta">
            <span>Vol. I — No. 01</span>
            <span className="ph-masthead-hide">United Kingdom · 51.5°N</span>
            <span className="ph-masthead-hide">Field notes from a small software studio</span>
          </div>
          <div className="ph-masthead-status">
            <span className="ph-live-dot" />
            <span>Studio open</span>
          </div>
        </div>
      </div>

      {/* nav row — sticks */}
      <div className="ph-navrow" data-scrolled={scrolled || undefined}>
        <div className="lp-container ph-nav">
          <Link href="/" className="ph-nav-brand" aria-label="Pinehollow home">
            <PinehollowMark size={26} colour="var(--lp-fg)" ariaHidden />
            <span className="ph-nav-wordmark">Pinehollow</span>
          </Link>

          <nav className="ph-nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ph-nav-link"
                data-active={isActive(pathname, item.href) || undefined}
              >
                <sup className="ph-nav-no">{item.no}</sup>
                <FlipLabel>{item.label}</FlipLabel>
              </Link>
            ))}
          </nav>

          <div className="ph-nav-right">
            <Link href="/contact" className="ph-nav-hello" data-cursor-label="Hello">
              <span className="ph-nav-hello-bracket">[</span>
              <FlipLabel>Say hello</FlipLabel>
              <span className="ph-nav-hello-bracket">]</span>
            </Link>
            <button
              type="button"
              className="ph-nav-burger"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="ph-nav-burger-icon" data-open={open || undefined}>
                <span />
                <span />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* full-screen overlay menu */}
      <div className="ph-mmenu" data-open={open || undefined} aria-hidden={!open}>
        <div className="lp-container ph-mmenu-inner">
          <nav className="ph-mmenu-links" aria-label="Menu">
            {menuItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="ph-mmenu-link"
                data-active={isActive(pathname, item.href) || undefined}
                tabIndex={open ? 0 : -1}
              >
                <span className="ph-mmenu-link-mask">
                  <span className="ph-mmenu-link-in" style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}>
                    <span className="ph-mmenu-no">{item.no}</span>
                    {item.label}
                  </span>
                </span>
              </Link>
            ))}
          </nav>
          <div className="ph-mmenu-foot">
            <span>support@pinehollow.studio</span>
            <span>United Kingdom · MMXXVI</span>
          </div>
        </div>
      </div>

      <style>{NAV_CSS}</style>
    </header>
  );
}

const NAV_CSS = `
  .ph-header {
    position: sticky;
    top: -41px; /* masthead height — it scrolls away, nav row stays */
    z-index: 100;
  }

  .ph-masthead {
    height: 40px;
    border-bottom: 1px solid var(--ph-rule-faint);
    background: var(--ph-base);
  }
  .ph-masthead-row {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-masthead-meta { display: flex; gap: 32px; }
  .ph-masthead-status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--lp-pine-glow);
  }

  .ph-navrow {
    /* keep the brand + menu toggle above the full-screen overlay */
    position: relative;
    z-index: 95;
    border-bottom: 1px solid transparent;
    transition: background 400ms var(--lp-ease), border-color 400ms var(--lp-ease),
                backdrop-filter 400ms var(--lp-ease);
  }
  .ph-navrow[data-scrolled] {
    background: rgba(6, 10, 15, 0.72);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    border-bottom-color: var(--ph-rule);
  }

  .ph-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
    gap: 24px;
  }
  .ph-nav-brand {
    display: inline-flex;
    align-items: center;
    gap: 13px;
  }
  .ph-nav-wordmark {
    font-family: var(--ph-headline);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--lp-fg);
  }

  .ph-nav-links {
    display: flex;
    gap: 40px;
    align-items: baseline;
  }
  .ph-nav-link {
    font-size: 14px;
    color: var(--lp-fg-mute);
    letter-spacing: -0.005em;
    display: inline-flex;
    align-items: baseline;
    gap: 7px;
    transition: color 240ms var(--lp-ease);
  }
  .ph-nav-link:hover { color: var(--lp-fg); }
  .ph-nav-link[data-active] { color: var(--lp-pine-glow); }
  .ph-nav-no {
    font-family: var(--lp-font-mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    color: var(--lp-fg-dim);
  }
  .ph-nav-link[data-active] .ph-nav-no { color: var(--lp-pine-glow); }

  /* flip-up hover label — duplicate sits just below the mask */
  .ph-flip {
    display: inline-block;
    overflow: hidden;
    line-height: 1.25;
    vertical-align: bottom;
  }
  .ph-flip-inner {
    display: inline-block;
    position: relative;
    transition: transform 480ms var(--ph-ease-expo);
  }
  .ph-flip-inner > span { display: block; }
  .ph-flip-inner > span:last-child {
    position: absolute;
    left: 0;
    top: 100%;
  }
  .ph-nav-hello:hover .ph-flip-inner,
  .ph-nav-link:hover .ph-flip-inner { transform: translateY(-100%); }

  .ph-nav-right {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .ph-nav-hello {
    font-family: var(--lp-font-mono);
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--lp-fg);
    display: inline-flex;
    align-items: baseline;
    gap: 9px;
    transition: color 240ms var(--lp-ease);
  }
  .ph-nav-hello:hover { color: var(--lp-pine-glow); }
  .ph-nav-hello-bracket { color: var(--lp-pine-glow); }

  .ph-nav-burger {
    display: none;
    align-items: center;
    gap: 10px;
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg);
  }
  .ph-nav-burger-icon {
    position: relative;
    width: 18px;
    height: 10px;
    display: inline-block;
  }
  .ph-nav-burger-icon span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: var(--lp-fg);
    transition: transform 400ms var(--ph-ease-expo), top 400ms var(--ph-ease-expo);
  }
  .ph-nav-burger-icon span:first-child { top: 0; }
  .ph-nav-burger-icon span:last-child { top: 8px; }
  .ph-nav-burger-icon[data-open] span:first-child { top: 4px; transform: rotate(45deg); }
  .ph-nav-burger-icon[data-open] span:last-child { top: 4px; transform: rotate(-45deg); }

  /* ── overlay menu ── */
  .ph-mmenu {
    position: fixed;
    inset: 0;
    z-index: 90;
    background: var(--lp-base-deep);
    clip-path: inset(0 0 100% 0);
    transition: clip-path 700ms var(--ph-ease-expo);
    visibility: hidden;
  }
  .ph-mmenu[data-open] {
    clip-path: inset(0 0 0% 0);
    visibility: visible;
  }
  .ph-mmenu-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    padding-top: 80px;
  }
  .ph-mmenu-links {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .ph-mmenu-link-mask { display: block; overflow: hidden; }
  .ph-mmenu-link-in {
    display: flex;
    align-items: baseline;
    gap: 18px;
    font-family: var(--ph-headline);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    font-size: clamp(40px, 9.5vw, 72px);
    line-height: 1.06;
    color: var(--lp-fg);
    transform: translateY(110%);
    transition: transform 800ms var(--ph-ease-expo);
  }
  .ph-mmenu[data-open] .ph-mmenu-link-in { transform: translateY(0); }
  .ph-mmenu-link[data-active] .ph-mmenu-link-in { color: var(--lp-pine-glow); }
  .ph-mmenu-no {
    font-family: var(--lp-font-mono);
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.2em;
    color: var(--lp-pine-glow);
  }
  .ph-mmenu-foot {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    border-top: 1px solid var(--ph-rule);
    padding-top: 20px;
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }

  @media (max-width: 880px) {
    .ph-nav-links, .ph-nav-hello { display: none; }
    .ph-nav-burger { display: inline-flex; }
    .ph-nav { height: 64px; }
    .ph-header { top: -41px; }
    .ph-masthead-hide { display: none; }
  }
`;
