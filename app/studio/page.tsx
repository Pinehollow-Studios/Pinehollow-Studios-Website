import type { Metadata } from "next";
import Image from "next/image";
import { StudioBulletin } from "@/components/sections/studio-bulletin";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { OrbMark } from "@/components/shared/orb-mark";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Studio — Pinehollow Studios",
  description: "Pinehollow Studios is a two-person software studio. Meet Tom and Jack.",
};

const founders = [
  {
    name: "Tom Slater",
    role: "Engineering · Design",
    mark: "t",
    based: "United Kingdom",
    glow: "var(--lp-pine-glow)",
    bio: "Tom designs and builds the apps. He works in Swift and SwiftUI for iOS and macOS, and in TypeScript and React on the web. He spends an unreasonable amount of time on the small details — the kind you only notice when they're wrong.",
    stack: ["Swift", "SwiftUI", "TypeScript", "React", "Figma"],
    quote: "I want to make software the way you make a good chair.",
  },
  {
    name: "Jack",
    role: "Product · Content",
    mark: "j",
    based: "United Kingdom",
    glow: "var(--lp-sky)",
    bio: "Jack leads product direction and content. He decides what we build, who it's for, and how it gets to the people who'd use it. He thinks deeply about the boring things — pricing, words, how an app is introduced — so the rest of the work can stay quiet.",
    stack: ["Product strategy", "Writing", "Research", "A long memory"],
    quote: "The hardest part is deciding what not to build.",
  },
];

export default function StudioPage() {
  return (
    <Page atmosphere="ember">
      <StudioHero />
      <StudioPhoto />
      <FoundersGrid />
      <StudioStory />
      <StudioFacts />
    </Page>
  );
}

function StudioHero() {
  return (
    <Section py="100px">
      <div style={{ paddingTop: 40, maxWidth: 1000 }}>
        <Reveal variant="up" immediate delay={80}>
          <Pill tone="pine" icon="dot">The Studio · Two people · Independent</Pill>
        </Reveal>
        <Reveal variant="up-xl" immediate delay={180} duration={1100}>
          <h1
            style={{
              fontFamily: "var(--lp-font-display)",
              fontWeight: 500,
              letterSpacing: "var(--lp-track-display)",
              fontSize: "var(--lp-text-6xl)",
              lineHeight: "var(--lp-leading-tight)",
              margin: "28px 0 0",
            }}
          >
            Two people,
            <br />
            one <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
              quiet workshop
            </em>
            .
          </h1>
        </Reveal>
        <Reveal variant="up" immediate delay={420}>
          <p
            style={{
              color: "var(--lp-fg-mute)",
              fontSize: "var(--lp-text-lg)",
              lineHeight: 1.55,
              maxWidth: 660,
              marginTop: 28,
            }}
          >
            Pinehollow Studios is a two-person software studio. We design, build, support, and answer for every line of code under our name. No outsourcing. No investors. No urgency that isn&apos;t ours.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function StudioPhoto() {
  return (
    <Section py="40px">
      <div
        className="studio-photo-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <Reveal variant="up-lg" duration={1100}>
          <div
            className="studio-photo-card"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: 560,
              aspectRatio: "4 / 5",
              borderRadius: "var(--lp-r-xl)",
              overflow: "hidden",
              border: "1px solid var(--lp-glass-rim-hi)",
              boxShadow: "var(--lp-glass-inset-hi), var(--lp-shadow-lg)",
              background: "var(--lp-base-raised)",
            }}
          >
            <Image
              src="/jack-on-course.jpg"
              alt="Jack playing a parkland course in Surrey at sunset"
              fill
              priority
              sizes="(max-width: 880px) 100vw, 520px"
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(10,20,16,0.40) 0%, rgba(10,20,16,0) 24%, rgba(10,20,16,0) 60%, rgba(5,10,8,0.85) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                right: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <Pill tone="pine" icon="dot">The studio · in person</Pill>
            </div>
            <div
              style={{
                position: "absolute",
                left: 24,
                right: 24,
                bottom: 22,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--lp-font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--lp-pine-glow)",
                }}
              >
                ● Jack
              </div>
              <div
                style={{
                  fontFamily: "var(--lp-font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 22,
                  letterSpacing: "-0.02em",
                  color: "var(--lp-pine-mist)",
                  marginTop: 6,
                }}
              >
                a Surrey parkland, at last light
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up-lg" duration={1100} delay={180}>
          <StudioBulletin />
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .studio-photo-grid { grid-template-columns: 1fr !important; }
          .studio-photo-card { min-height: 0 !important; }
        }
      `}</style>
    </Section>
  );
}


function FoundersGrid() {
  return (
    <Section py="40px">
      <div
        className="founders-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
      >
        {founders.map((f, idx) => (
          <Reveal key={f.name} variant="up-lg" delay={idx * 140} duration={1100}>
          <GlassCard strong style={{ padding: 0, overflow: "hidden", position: "relative", height: "100%" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 480,
                height: 480,
                borderRadius: 99,
                background: `radial-gradient(circle at center, ${f.glow}, transparent 70%)`,
                opacity: 0.25,
                filter: "blur(40px)",
              }}
            />

            <div
              style={{
                padding: 36,
                display: "flex",
                alignItems: "center",
                gap: 24,
                borderBottom: "1px solid var(--lp-glass-rim)",
                position: "relative",
              }}
            >
              <OrbMark mark={f.mark} size={96} glow={f.glow} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--lp-font-display)",
                    fontSize: 36,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {f.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--lp-font-mono)",
                    fontSize: 11,
                    color: "var(--lp-fg-mute)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginTop: 8,
                  }}
                >
                  {f.role}
                </div>
                <div
                  style={{
                    fontFamily: "var(--lp-font-mono)",
                    fontSize: 11,
                    color: "var(--lp-fg-dim)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  ● {f.based}
                </div>
              </div>
            </div>

            <div style={{ padding: 36, position: "relative" }}>
              <p
                style={{
                  color: "var(--lp-fg-mute)",
                  fontSize: 16,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {f.bio}
              </p>

              <blockquote
                style={{
                  margin: "28px 0 0",
                  padding: "0 0 0 18px",
                  borderLeft: `2px solid ${f.glow}`,
                  fontFamily: "var(--lp-font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 20,
                  color: "var(--lp-pine-mist)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                }}
              >
                &ldquo;{f.quote}&rdquo;
              </blockquote>

              <div
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: "1px solid var(--lp-glass-rim)",
                }}
              >
                <Overline>Toolkit</Overline>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                  {f.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "5px 11px",
                        borderRadius: "var(--lp-r-pill)",
                        background: "var(--lp-glass)",
                        border: "1px solid var(--lp-glass-rim)",
                        fontSize: 12,
                        color: "var(--lp-fg-mute)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .founders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function StudioStory() {
  return (
    <Section py="120px">
      <Reveal variant="up-lg" duration={1100}>
      <GlassCard strong style={{ padding: 0, overflow: "hidden", position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 80% at 80% 20%, rgba(255,149,96,0.10), transparent 70%), radial-gradient(60% 80% at 20% 80%, rgba(63,229,160,0.12), transparent 70%)",
          }}
        />
        <div
          className="story-grid"
          style={{
            padding: "72px 64px",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            position: "relative",
          }}
        >
          <div>
            <Overline>The studio story</Overline>
            <h2
              style={{
                fontFamily: "var(--lp-font-display)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                fontSize: "var(--lp-text-4xl)",
                lineHeight: 1.05,
                margin: "16px 0 0",
              }}
            >
              Why we work
              <br />
              this <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>way</em>.
            </h2>
          </div>
          <div
            style={{
              color: "var(--lp-fg-mute)",
              fontSize: 17,
              lineHeight: 1.75,
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <p style={{ margin: 0 }}>
              Pinehollow started as the two of us, fresh out of university, building the apps we wanted to use ourselves — and asking why so much of modern software felt rushed, loud, or built for someone else&apos;s metrics.
            </p>
            <p style={{ margin: 0 }}>
              A studio of two, owned by two, accountable to two. The pace is set by us. The standard is set by us. The roadmap is set by us. The customer hears from us directly.
            </p>
            <p style={{ margin: 0 }}>
              We don&apos;t expect to ever be bigger than two people. We don&apos;t expect to raise money. We don&apos;t expect to sell. The plan is to keep going, slowly, for a long time.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px !important; }
          }
        `}</style>
      </GlassCard>
      </Reveal>
    </Section>
  );
}

function StudioFacts() {
  const facts = [
    { k: "2", d: "Co-founders" },
    { k: "0", d: "Investors" },
    { k: "0", d: "Ads run" },
    { k: "∞", d: "Years committed" },
  ];
  return (
    <Section py="80px">
      <Reveal variant="up">
        <Overline>The studio, in numbers</Overline>
      </Reveal>
      <div
        className="facts-grid"
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--lp-glass-rim)",
        }}
      >
        {facts.map((f, i) => (
          <Reveal key={i} variant="up" delay={i * 90}>
            <div
              className="fact-cell"
              style={{
                padding: "40px 24px",
                borderRight: i < facts.length - 1 ? "1px solid var(--lp-glass-rim)" : "none",
                borderBottom: "1px solid var(--lp-glass-rim)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--lp-font-display)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  fontSize: 56,
                  lineHeight: 1,
                  color: "var(--lp-pine-glow)",
                }}
              >
                {f.k}
              </div>
              <div style={{ color: "var(--lp-fg-mute)", fontSize: 14, marginTop: 12 }}>{f.d}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .facts-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .fact-cell:nth-child(2) { border-right: none !important; }
        }
      `}</style>
    </Section>
  );
}
