import { Overline, Section } from "@/components/shared/primitives";

const items = [
  {
    no: "01",
    label: "Restraint",
    body: "One thousand no's for every yes. Each app does one thing well. Feature creep is the slow death of considered software — we'd rather start something new.",
  },
  {
    no: "02",
    label: "Privacy",
    body: "On-device by default. Your data stays where it is yours. No analytics. No tracking. No third-party scripts on this website.",
  },
  {
    no: "03",
    label: "Permanence",
    body: "Software you can settle into. We build for ten years, not for next quarter. Free at the core, long support, calm updates.",
  },
];

export function PhilosophyStrip() {
  return (
    <Section py="120px">
      <div style={{ marginBottom: 64 }}>
        <Overline>How we build</Overline>
        <h2
          style={{
            fontFamily: "var(--lp-font-display)",
            fontWeight: 500,
            letterSpacing: "-0.035em",
            fontSize: "var(--lp-text-5xl)",
            lineHeight: 1,
            margin: "16px 0 0",
            maxWidth: 800,
          }}
        >
          Three things, held loosely
          <br />
          and{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
            kept very still
          </em>
          .
        </h2>
      </div>

      <div
        className="philosophy-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--lp-glass-rim)",
        }}
      >
        {items.map((it, i) => (
          <div
            key={it.no}
            className="philosophy-cell"
            style={{
              padding: "40px 32px 40px 0",
              borderRight: i < items.length - 1 ? "1px solid var(--lp-glass-rim)" : "none",
              paddingLeft: i > 0 ? 32 : 0,
            }}
          >
            <div
              style={{
                fontFamily: "var(--lp-font-display)",
                fontWeight: 500,
                fontSize: "var(--lp-text-4xl)",
                color: "var(--lp-pine-glow)",
                letterSpacing: "-0.04em",
              }}
            >
              {it.no}
            </div>
            <div
              style={{
                fontSize: "var(--lp-text-2xl)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                marginTop: 12,
              }}
            >
              {it.label}
            </div>
            <p style={{ color: "var(--lp-fg-mute)", fontSize: 15, lineHeight: 1.6, marginTop: 12 }}>
              {it.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
          .philosophy-cell { padding: 32px 0 !important; border-right: none !important; border-bottom: 1px solid var(--lp-glass-rim); }
          .philosophy-cell:last-child { border-bottom: none; }
        }
      `}</style>
    </Section>
  );
}
