import Image from "next/image";
import { GhostButton } from "@/components/shared/buttons";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Section } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

export function StudioPeek() {
  return (
    <Section py="120px">
      <Reveal variant="up-lg" duration={1100}>
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
              gap: 64,
              alignItems: "center",
              position: "relative",
              padding: 56,
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

            <Reveal variant="up-lg" delay={180} duration={1100}>
              <div
                className="peek-photo"
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: "var(--lp-r-xl)",
                  overflow: "hidden",
                  border: "1px solid var(--lp-glass-rim-hi)",
                  boxShadow: "var(--lp-glass-inset-hi), var(--lp-shadow-lg)",
                }}
              >
                <Image
                  src="/tom-and-jack.jpg"
                  alt="Tom and Jack on a windy course in the UK"
                  fill
                  sizes="(max-width: 880px) 100vw, 600px"
                  priority
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
                {/* gradient veil for legibility of the caption */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,20,16,0) 55%, rgba(5,10,8,0.75) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 18,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--lp-font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--lp-pine-glow)",
                      }}
                    >
                      ● Tom &amp; Jack
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--lp-font-display)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: 20,
                        color: "var(--lp-pine-mist)",
                        marginTop: 4,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      out on a links course
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <style>{`
            @media (max-width: 880px) {
              .peek-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 36px !important; }
              .peek-photo { max-width: 480px; }
            }
          `}</style>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
