"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PinehollowMark } from "@/components/shared/pinehollow-mark";

/**
 * Editorial TopBar — Volume IV direction.
 *
 * Two stacked rows:
 *   1. Masthead strip — Vol / No. / location / studio-open indicator
 *   2. Nav row — inline links, no glass pill, no shadow
 *
 * The brand mark rises into place on initial page load (.ph-moonrise-moon).
 */

const navItems = [
  { label: "Apps", href: "/apps" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Studio", href: "/studio" },
] as const;

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header style={{ position: "relative", zIndex: 5 }}>
      {/* Masthead strip — issue / date / location / live */}
      <div style={{ borderBottom: "1px solid var(--ph-rule)" }}>
        <div className="lp-container">
          <div className="ph-masthead">
            <div className="ph-masthead-meta">
              <span>Vol. I</span>
              <span>No. 01 · May 2026</span>
              <span style={{ color: "var(--lp-fg-mute)" }}>
                United Kingdom · 51.5°N
              </span>
            </div>
            <div className="ph-masthead-status">
              <span className="ph-live-dot" />
              <span>Studio open</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nav row */}
      <div className="lp-container">
        <nav className="ph-nav">
          <Link href="/" className="ph-nav-brand" aria-label="Pinehollow home">
            <span className="ph-moonrise-moon" style={{ display: "inline-flex" }}>
              <PinehollowMark size={28} colour="var(--lp-fg)" ariaHidden />
            </span>
            <span className="ph-nav-wordmark">Pinehollow</span>
            <span className="ph-nav-sub">Studios</span>
          </Link>

          <div className="ph-nav-links">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ph-nav-link"
                  data-active={active || undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <span className="ph-nav-sep" aria-hidden="true" />
            <Link href="/contact" className="ph-link ph-nav-hello">
              Hello&nbsp;↗
            </Link>
          </div>
        </nav>
      </div>

      <style>{NAV_CSS}</style>
    </header>
  );
}

const NAV_CSS = `
  .ph-masthead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    gap: 24px;
    font-family: var(--lp-font-mono);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--lp-fg-dim);
  }
  .ph-masthead-meta {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
  }
  .ph-masthead-status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--lp-pine-glow);
  }

  .ph-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    gap: 24px;
  }
  .ph-nav-brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
  }
  .ph-nav-wordmark {
    font-family: var(--lp-font-display);
    font-weight: 500;
    font-size: 19px;
    letter-spacing: -0.025em;
    color: var(--lp-fg);
  }
  .ph-nav-sub {
    font-family: var(--lp-font-mono);
    font-size: 10px;
    letter-spacing: 0.22em;
    color: var(--lp-fg-dim);
    text-transform: uppercase;
    margin-left: -2px;
    margin-top: 4px;
  }

  .ph-nav-links {
    display: flex;
    gap: 28px;
    align-items: center;
  }
  .ph-nav-link {
    font-size: 14px;
    color: var(--lp-fg-mute);
    letter-spacing: -0.005em;
    transition: color 240ms var(--lp-ease);
  }
  .ph-nav-link:hover,
  .ph-nav-link[data-active] { color: var(--lp-fg); }

  .ph-nav-sep {
    width: 1px;
    height: 16px;
    background: var(--ph-rule);
  }
  .ph-nav-hello { font-size: 14px; }

  @media (max-width: 720px) {
    .ph-masthead { font-size: 10px; gap: 16px; }
    .ph-masthead-meta { gap: 16px; }
    .ph-masthead-meta > span:last-child { display: none; }
    .ph-nav { padding: 18px 0; }
    .ph-nav-sub { display: none; }
    .ph-nav-links { gap: 18px; }
  }
  @media (max-width: 520px) {
    .ph-nav-links .ph-nav-link:nth-child(2),
    .ph-nav-links .ph-nav-link:nth-child(3) { display: none; }
    .ph-nav-sep { display: none; }
  }
`;
