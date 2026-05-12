import { GhostButton } from "@/components/shared/buttons";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Section } from "@/components/shared/primitives";

const founders = [
  { name: "Tom", role: "Engineering · Design", glow: "var(--lp-pine-glow)" },
  { name: "Jack", role: "Product · Content", glow: "var(--lp-sky)" },
];

export function StudioPeek() {
  return (
    <Section py="120px">
      <GlassCard strong style={{ padding: 0, position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: -80,
            top: -80,
            width: 480,
            height: 480,
            borderRadius: 99,
            background:
              "radial-gradient(circle at center, rgba(63,229,160,0.20), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -120,
            bottom: -120,
            width: 520,
            height: 520,
            borderRadius: 99,
            background:
              "radial-gradient(circle at center, rgba(255,149,96,0.10), transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          className="peek-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            position: "relative",
            padding: 64,
          }}
        >
          <div>
            <Overline>The studio</Overline>
            <h2
              style={{
                fontFamily: "var(--lp-font-display)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                fontSize: "var(--lp-text-5xl)",
                lineHeight: 1,
                margin: "16px 0 0",
              }}
            >
              Two people,
              <br />
              one quiet workshop.
            </h2>
            <p
              style={{
                color: "var(--lp-fg-mute)",
                fontSize: 17,
                lineHeight: 1.6,
                marginTop: 20,
                maxWidth: 460,
              }}
            >
              Pinehollow is the joint studio of Tom and Jack — old friends, now business partners. Tom leads engineering and design. Jack leads product and content. We do all the work ourselves. No outsourcing. No investors. No urgency that isn&apos;t ours.
            </p>
            <div style={{ marginTop: 32 }}>
              <GhostButton href="/studio" size="lg">Meet the studio →</GhostButton>
            </div>
          </div>

          <div
            className="peek-portraits"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {founders.map((p) => (
              <div
                key={p.name}
                style={{
                  aspectRatio: "3 / 4",
                  borderRadius: "var(--lp-r-xl)",
                  background: "var(--lp-glass)",
                  border: "1px solid var(--lp-glass-rim)",
                  boxShadow: "var(--lp-glass-inset), var(--lp-shadow)",
                  backdropFilter: "var(--lp-blur)",
                  WebkitBackdropFilter: "var(--lp-blur)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 20,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(60% 40% at 50% 35%, ${p.glow}, transparent 65%)`,
                    opacity: 0.25,
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "32%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 96,
                    height: 96,
                    borderRadius: 99,
                    background: `linear-gradient(180deg, ${p.glow}, var(--lp-pine-deep))`,
                    border: "1px solid var(--lp-glass-rim-hi)",
                    boxShadow: "inset 0 2px 0 rgba(255,255,255,0.30)",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      fontFamily: "var(--lp-font-display)",
                      fontSize: 28,
                      fontWeight: 500,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--lp-font-mono)",
                      fontSize: 11,
                      color: "var(--lp-fg-mute)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {p.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .peek-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 40px !important; }
            .peek-portraits { max-width: 420px; }
          }
        `}</style>
      </GlassCard>
    </Section>
  );
}
