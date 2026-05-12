"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { PineBloom } from "@/components/shared/pine-bloom";
import { Overline } from "@/components/shared/primitives";

/**
 * "Workshop bulletin" card — sits next to the founders photo on the studio
 * page. Three concrete blocks separated by hairlines:
 *
 *   1. The first app — Fairways, in development. Brief teaser + link out.
 *   2. The line-up — small visual roadmap (Now → Next → Then).
 *   3. Stay close — email signup that opens a pre-filled message to the
 *      studio inbox so visitors can be notified when something ships.
 */
export function StudioBulletin() {
  return (
    <GlassCard
      strong
      style={{
        position: "relative",
        height: "100%",
        minHeight: 560,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Soft accent glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 460,
          height: 460,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(63,229,160,0.16), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(159,224,255,0.08), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <FirstApp />
      <Divider />
      <Lineup />
      <Divider />
      <StayClose />
    </GlassCard>
  );
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "relative", height: 1, background: "var(--lp-glass-rim)" }}
    />
  );
}

function FirstApp() {
  return (
    <div style={{ position: "relative", padding: "32px 36px 28px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Overline color="var(--lp-fg-mute)">The first app</Overline>
        <LiveTag>In development</LiveTag>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 18 }}>
        <PineBloom
          size={64}
          ariaHidden
          style={{ borderRadius: 16, boxShadow: "0 0 24px -6px rgba(63,229,160,0.45)" }}
        />
        <div>
          <div
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              fontSize: 38,
              letterSpacing: "-0.035em",
              lineHeight: 1,
              color: "var(--lp-fg)",
            }}
          >
            Fairways
          </div>
          <div
            style={{
              fontFamily: "var(--lp-font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 18,
              letterSpacing: "-0.02em",
              color: "var(--lp-pine-mist)",
              marginTop: 4,
            }}
          >
            a golf app
          </div>
        </div>
      </div>

      <p
        style={{
          color: "var(--lp-fg-mute)",
          fontSize: 15,
          lineHeight: 1.6,
          marginTop: 18,
          marginBottom: 18,
        }}
      >
        We&apos;re keeping the details under wraps. What we can tell you: iOS, free, and the
        codename is here to stay until the work earns the announcement.
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
        <Chip>iOS only</Chip>
        <Chip>Free</Chip>
        <Chip>Codename</Chip>
      </div>

      <Link
        href="/apps"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "var(--lp-pine-glow)",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        See the Fairways page <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

function Lineup() {
  const stages = [
    { label: "Now", value: "Fairways", state: "active" as const },
    { label: "Next", value: "TBA", state: "pending" as const },
    { label: "Then", value: "TBA", state: "pending" as const },
  ];

  return (
    <div style={{ position: "relative", padding: "28px 36px" }}>
      <Overline color="var(--lp-fg-mute)">The line-up</Overline>

      <div
        style={{
          position: "relative",
          marginTop: 22,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
        }}
      >
        {/* Connecting line behind the dots */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 6,
            left: "calc(100% / 6)",
            right: "calc(100% / 6)",
            height: 1,
            background:
              "linear-gradient(90deg, var(--lp-pine-glow) 0%, var(--lp-pine-glow) 33%, var(--lp-glass-rim) 33%, var(--lp-glass-rim) 100%)",
          }}
        />

        {stages.map((s, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 13,
                height: 13,
                borderRadius: 99,
                background:
                  s.state === "active"
                    ? "var(--lp-pine-glow)"
                    : "var(--lp-base-deep)",
                border:
                  s.state === "active"
                    ? "2px solid rgba(255,255,255,0.30)"
                    : "1px solid var(--lp-glass-rim-hi)",
                boxShadow:
                  s.state === "active" ? "0 0 12px var(--lp-pine-glow)" : "none",
                animation:
                  s.state === "active" ? "lp-pulse 2.4s ease-in-out infinite" : "none",
              }}
            />
            <div
              style={{
                fontFamily: "var(--lp-font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:
                  s.state === "active" ? "var(--lp-pine-glow)" : "var(--lp-fg-dim)",
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: "-0.02em",
                color: s.state === "active" ? "var(--lp-fg)" : "var(--lp-fg-dim)",
              }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StayClose() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Notify me — Fairways");
    const body = encodeURIComponent(
      `Please notify me when Fairways is ready to download.\n\nEmail: ${email}\n`,
    );
    window.location.href = `mailto:support@pinehollow.studio?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: CSSProperties = {
    flex: 1,
    minWidth: 0,
    padding: "10px 14px",
    background: focused ? "var(--lp-glass-strong)" : "var(--lp-glass)",
    border: `1px solid ${focused ? "var(--lp-pine-glow)" : "var(--lp-glass-rim)"}`,
    borderRadius: "var(--lp-r)",
    fontFamily: "var(--lp-font-body)",
    fontSize: 14,
    color: "var(--lp-fg)",
    outline: "none",
    transition: "all var(--lp-dur) var(--lp-ease)",
    boxShadow: focused ? "0 0 0 3px rgba(63,229,160,0.10)" : "none",
  };

  return (
    <div style={{ position: "relative", padding: "28px 36px 32px", marginTop: "auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Overline color="var(--lp-fg-mute)">Stay close</Overline>
        <Overline color="var(--lp-fg-dim)">No spam. One email when it ships.</Overline>
      </div>

      <div
        style={{
          fontFamily: "var(--lp-font-display)",
          fontWeight: 500,
          fontSize: 22,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          color: "var(--lp-fg)",
          marginTop: 12,
        }}
      >
        Want the heads-up when{" "}
        <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
          Fairways
        </em>{" "}
        arrives?
      </div>

      {submitted ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 16,
            padding: "10px 14px",
            borderRadius: "var(--lp-r)",
            background: "rgba(63,229,160,0.08)",
            border: "1px solid rgba(63,229,160,0.30)",
            color: "var(--lp-pine-glow)",
            fontSize: 14,
          }}
        >
          <span aria-hidden="true">✓</span>
          Your mail client should have opened — we&apos;ll add you when it arrives.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "stretch" }}
        >
          <input
            type="email"
            inputMode="email"
            required
            placeholder="you@somewhere.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={inputStyle}
            aria-label="Email"
          />
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              background: "linear-gradient(180deg, #5EFFBE 0%, #3FE5A0 100%)",
              color: "#04190E",
              border: "1px solid rgba(255,255,255,0.30)",
              borderRadius: "var(--lp-r)",
              fontFamily: "var(--lp-font-body)",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "-0.005em",
              cursor: "pointer",
              boxShadow:
                "0 0 20px -6px rgba(63,229,160,0.55), inset 0 1px 0 rgba(255,255,255,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            Notify me →
          </button>
        </form>
      )}
    </div>
  );
}

function LiveTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: "var(--lp-r-pill)",
        background: "rgba(63,229,160,0.10)",
        border: "1px solid rgba(63,229,160,0.30)",
        color: "var(--lp-pine-glow)",
        fontFamily: "var(--lp-font-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 6,
          height: 6,
          borderRadius: 99,
          background: "var(--lp-pine-glow)",
          boxShadow: "0 0 8px var(--lp-pine-glow)",
          animation: "lp-pulse 2.4s ease-in-out infinite",
        }}
      />
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        padding: "5px 11px",
        borderRadius: "var(--lp-r-pill)",
        background: "var(--lp-glass)",
        border: "1px solid var(--lp-glass-rim)",
        fontFamily: "var(--lp-font-mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--lp-fg-mute)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
