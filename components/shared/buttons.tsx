"use client";

import Link from "next/link";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, CSSProperties> = {
  sm: { padding: "8px 14px", fontSize: 13 },
  md: { padding: "11px 18px", fontSize: 14 },
  lg: { padding: "15px 26px", fontSize: 15 },
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  size?: Size;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export function PrimaryButton({ children, href, onClick, size = "md", type, external }: ButtonProps) {
  const style: CSSProperties = {
    background: "linear-gradient(180deg, #B0F1FF 0%, #7FE4FF 100%)",
    color: "#06181F",
    border: "1px solid rgba(255,255,255,0.30)",
    borderRadius: "var(--lp-r-pill)",
    fontWeight: 600,
    fontFamily: "var(--lp-font-body)",
    letterSpacing: "-0.005em",
    whiteSpace: "nowrap",
    boxShadow:
      "0 0 28px -4px rgba(127,228,255,0.55), inset 0 1px 0 rgba(255,255,255,0.5)",
    transition:
      "transform var(--lp-dur) var(--lp-ease), box-shadow var(--lp-dur) var(--lp-ease), filter var(--lp-dur) var(--lp-ease)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    textDecoration: "none",
    ...sizes[size],
  };
  const hover = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(-1px)";
    e.currentTarget.style.filter = "brightness(1.08)";
  };
  const out = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.filter = "brightness(1)";
  };

  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a href={href} style={style} onMouseEnter={hover} onMouseLeave={out} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={style} onMouseEnter={hover} onMouseLeave={out} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} style={style} onClick={onClick} onMouseEnter={hover} onMouseLeave={out}>
      {children}
    </button>
  );
}

export function GhostButton({ children, href, onClick, size = "md", type, external }: ButtonProps) {
  const style: CSSProperties = {
    background: "var(--lp-glass)",
    backdropFilter: "var(--lp-blur-sm)",
    WebkitBackdropFilter: "var(--lp-blur-sm)",
    color: "var(--lp-fg)",
    border: "1px solid var(--lp-glass-rim)",
    borderRadius: "var(--lp-r-pill)",
    fontFamily: "var(--lp-font-body)",
    whiteSpace: "nowrap",
    transition:
      "transform var(--lp-dur) var(--lp-ease), border-color var(--lp-dur) var(--lp-ease), background var(--lp-dur) var(--lp-ease)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    textDecoration: "none",
    ...sizes[size],
  };
  const hover = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(-1px)";
    e.currentTarget.style.borderColor = "var(--lp-glass-rim-hi)";
    e.currentTarget.style.background = "var(--lp-glass-strong)";
  };
  const out = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "var(--lp-glass-rim)";
    e.currentTarget.style.background = "var(--lp-glass)";
  };

  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a href={href} style={style} onMouseEnter={hover} onMouseLeave={out} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={style} onMouseEnter={hover} onMouseLeave={out} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} style={style} onClick={onClick} onMouseEnter={hover} onMouseLeave={out}>
      {children}
    </button>
  );
}
