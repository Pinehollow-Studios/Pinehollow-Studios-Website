import { Overline, Section } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

const items = [
  {
    no: "01",
    label: "One thing at a time",
    body: "We make one app, well, then move on. If we have a new idea, we start something new rather than piling features onto something that's already finished.",
  },
  {
    no: "02",
    label: "Self-funded",
    body: "No investors, no ads. The studio runs on what the apps earn. That keeps the choices ours.",
  },
  {
    no: "03",
    label: "iOS first",
    body: "We focus on iPhone. Mac, web, or Android come later if and when they make sense for a given app.",
  },
];

export function PhilosophyStrip() {
  return (
    <Section py="120px">
      <Reveal variant="up-lg">
        <div style={{ marginBottom: 64 }}>
          <Overline>What we believe</Overline>
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
            A few things we&rsquo;ve{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              decided
            </em>
            .
          </h2>
        </div>
      </Reveal>

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
          <Reveal key={it.no} variant="up" delay={i * 110}>
            <div
              className="philosophy-cell"
              style={{
                padding: "40px 32px 40px 0",
                borderRight: i < items.length - 1 ? "1px solid var(--lp-glass-rim)" : "none",
                paddingLeft: i > 0 ? 32 : 0,
                height: "100%",
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
          </Reveal>
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
