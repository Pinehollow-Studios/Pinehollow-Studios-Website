import type { Metadata } from "next";
import { GlassCard } from "@/components/shared/glass-card";
import { Overline, Pill, Section } from "@/components/shared/primitives";
import { Page } from "@/components/shared/page";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Pinehollow Studios",
  description: "Privacy policy for Pinehollow Studios.",
};

const policySections = [
  {
    title: "Scope",
    body: "This policy covers the Pinehollow Studios website, direct contact with the studio, and the apps we ship. Each app's own privacy summary is shown in-app before you use it, so you always know what's collected before anything is sent.",
  },
  {
    title: "What we collect on this website",
    body: "Basic web request data needed to serve the site (your IP address and the page you asked for, briefly held in server logs). If you email us, the address and the message you send. We don't load third-party tracking scripts or build a marketing profile of you.",
  },
  {
    title: "Anonymous usage data in our apps",
    body: "Some of our apps collect anonymised, aggregate usage data — the kind of thing that says \"a player walked this hole in 12 minutes\" without saying which player. This data is what lets the apps stay free. It is never tied to your identity, and the opt-out is one tap inside the app.",
  },
  {
    title: "B2B insights — what gets sold, and what doesn't",
    body: "We sell aggregate, anonymised insights derived from app usage to relevant industry partners — for Fairways, that means golf clubs and course operators. Personal data is never sold, shared, or transferred. Identifiers are stripped before any data leaves the app, and partners only ever see aggregated patterns, not individuals.",
  },
  {
    title: "What we never do",
    body: "We never sell personal information. We never share anything tied to your identity with third parties. We never run advertising. We never build marketing profiles of you.",
  },
  {
    title: "Cookies",
    body: "Minimal cookies on the website, only what's needed for the page to function.",
  },
  {
    title: "Support",
    body: "If you email us, we keep the message so we can reply and follow up. We don't share it.",
  },
  {
    title: "Security",
    body: "Standard security practices. We collect as little data as we can, and what we do collect is held only as long as it's useful.",
  },
  {
    title: "Your data",
    body: "Email us to request a copy of any data we hold, to opt out of anonymous app collection, or to have your records deleted.",
  },
  {
    title: "Contact",
    body: "For privacy questions, email support@pinehollow.studio.",
  },
];

export default function PrivacyPage() {
  return (
    <Page atmosphere="quiet">
      <Section py="80px">
        <div className="lp-hero-pad-top" style={{ paddingTop: 40, maxWidth: 900 }}>
          <Reveal variant="up" immediate delay={80}>
            <Pill>Privacy Policy</Pill>
          </Reveal>
          <Reveal variant="up-xl" immediate delay={180} duration={1100}>
            <h1
              style={{
                fontFamily: "var(--lp-font-display)",
                fontWeight: 500,
                letterSpacing: "var(--lp-track-display)",
                fontSize: "var(--lp-text-5xl)",
                lineHeight: "var(--lp-leading-tight)",
                margin: "28px 0 0",
              }}
            >
              Anonymous data,
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--lp-pine-mist)" }}>
                never personal
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
                maxWidth: 580,
                marginTop: 28,
              }}
            >
              What our apps collect, what gets sold to industry partners, and what stays entirely yours.
            </p>
            <div
              style={{
                fontFamily: "var(--lp-font-mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                color: "var(--lp-fg-dim)",
                textTransform: "uppercase",
                marginTop: 24,
              }}
            >
              Last updated · May 2026
            </div>
          </Reveal>
        </div>
      </Section>

      <Section py="40px">
        <div
          className="privacy-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1.3fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <GlassCard style={{ padding: 28, position: "sticky", top: 100 }}>
              <Overline>Pinehollow Studios</Overline>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--lp-fg-mute)",
                }}
              >
                A two-person software studio. This policy covers the studio brand and this website.
              </p>
              <a
                href="mailto:support@pinehollow.studio"
                style={{
                  display: "block",
                  marginTop: 20,
                  fontFamily: "var(--lp-font-display)",
                  fontSize: 17,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--lp-pine-glow)",
                }}
              >
                support@pinehollow.studio
              </a>
            </GlassCard>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--lp-glass-rim)",
              borderBottom: "1px solid var(--lp-glass-rim)",
            }}
          >
            {policySections.map((section, i) => (
              <Reveal key={section.title} variant="up">
                <div
                  style={{
                    padding: "32px 0",
                    borderTop: i === 0 ? "none" : "1px solid var(--lp-glass-rim)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--lp-font-display)",
                      fontSize: "var(--lp-text-2xl)",
                      fontWeight: 500,
                      letterSpacing: "-0.025em",
                      margin: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "var(--lp-fg-mute)",
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .privacy-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </Section>
    </Page>
  );
}
