import type { CSSProperties, ReactNode } from "react";

type Tone = "default" | "pine" | "sky" | "ember" | "solid";
type Icon = "dot" | "dot-still";

const tones: Record<Tone, { bg: string; border: string; color: string }> = {
  default: { bg: "var(--lp-glass)", border: "var(--lp-glass-rim)", color: "var(--lp-fg-mute)" },
  pine:    { bg: "rgba(127,228,255,0.10)", border: "rgba(127,228,255,0.30)", color: "var(--lp-pine-glow)" },
  sky:     { bg: "rgba(242,215,168,0.10)", border: "rgba(242,215,168,0.30)", color: "var(--lp-sky)" },
  ember:   { bg: "rgba(255,149,96,0.10)", border: "rgba(255,149,96,0.30)", color: "var(--lp-ember)" },
  solid:   { bg: "var(--lp-pine-glow)", border: "transparent", color: "var(--lp-ice-ink)" },
};

export function Pill({
  children,
  tone = "default",
  icon,
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: Icon;
}) {
  const t = tones[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: "var(--lp-r-pill)",
        background: t.bg,
        border: `1px solid ${t.border}`,
        color: t.color,
        fontFamily: "var(--lp-font-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        backdropFilter: "var(--lp-blur-sm)",
        WebkitBackdropFilter: "var(--lp-blur-sm)",
        whiteSpace: "nowrap",
      }}
    >
      {icon === "dot" ? (
        <span style={{ width: 6, height: 6, borderRadius: 99, background: t.color, boxShadow: `0 0 8px ${t.color}` }} />
      ) : null}
      {icon === "dot-still" ? (
        <span style={{ width: 6, height: 6, borderRadius: 99, background: t.color }} />
      ) : null}
      {children}
    </span>
  );
}

export function Overline({
  children,
  color = "var(--lp-fg-mute)",
  style,
}: {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--lp-font-mono)",
        fontSize: "var(--lp-text-overline)",
        letterSpacing: "var(--lp-track-overline)",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  py = "var(--lp-section-y)",
  style,
}: {
  children: ReactNode;
  py?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        paddingTop: py,
        paddingBottom: py,
        ...style,
      }}
    >
      <div className="lp-container">{children}</div>
    </section>
  );
}

export function MistHeadline({
  pre,
  mist,
  post,
  size = "var(--lp-text-6xl)",
  style,
}: {
  pre?: ReactNode;
  mist?: ReactNode;
  post?: ReactNode;
  size?: string;
  style?: CSSProperties;
}) {
  return (
    <h1
      style={{
        fontFamily: "var(--lp-font-display)",
        fontWeight: 500,
        letterSpacing: "var(--lp-track-display)",
        fontSize: size,
        lineHeight: "var(--lp-leading-tight)",
        margin: 0,
        ...style,
      }}
    >
      {pre}
      {mist ? (
        <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>{mist}</span>
      ) : null}
      {post}
    </h1>
  );
}
