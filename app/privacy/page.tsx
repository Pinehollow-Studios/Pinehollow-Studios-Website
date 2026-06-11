import type { Metadata } from "next";
import Link from "next/link";
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
    body: "Basic web request data needed to serve the site (your IP address and the page you asked for, briefly held in our hosting provider's edge logs). We use Vercel's Web Analytics to count aggregate page views — it records the page you visited, your country, browser and device class, and how you got here. It uses no cookies, doesn't follow you to other sites, and never identifies you as an individual. If you email us, the address and the message you send.",
  },
  {
    title: "Anonymous usage data in our apps",
    body: "Some of our apps collect anonymised, aggregate usage data — the kind of thing that says “a player walked this hole in 12 minutes” without saying which player. This data is what lets the apps stay free. It is never tied to your identity, and the opt-out is one tap inside the app.",
  },
  {
    title: "B2B insights — what gets sold, and what doesn't",
    body: "We sell aggregate, anonymised insights derived from app usage to relevant industry partners — for Vestige, that means golf clubs and course operators. Personal data is never sold, shared, or transferred. Identifiers are stripped before any data leaves the app, and partners only ever see aggregated patterns, not individuals.",
  },
  {
    title: "What we don't do",
    body: "We don't sell personal information, don't share identifiable data with third parties, don't run advertising, and don't build marketing profiles of you.",
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
    <>
      <section className="ph-pg-hero">
        <div className="ph-hero-aura" aria-hidden="true" />
        <div className="lp-container" style={{ position: "relative" }}>
          <Reveal variant="up" immediate delay={80}>
            <div className="ph-eyebrow" style={{ marginBottom: 28 }}>
              <span
                aria-hidden="true"
                style={{ width: 24, height: 1, background: "var(--lp-fg-mute)" }}
              />
              <span>01 · Privacy</span>
            </div>
          </Reveal>

          <Reveal variant="up-xl" immediate delay={180} duration={1100}>
            <h1 className="ph-display ph-pg-hero-h1">
              Privacy
              <br />
              <em>policy.</em>
            </h1>
          </Reveal>

          <Reveal variant="up" immediate delay={420}>
            <p className="ph-pg-hero-lede">
              What this site and our apps collect, what we share with partners,
              and what stays yours.
            </p>
            <div className="ph-privacy-updated">Last updated · May 2026</div>
          </Reveal>
        </div>

        <style>{`
          .ph-pg-hero { position: relative; padding: 80px 0 100px; }
          .ph-pg-hero-h1 {
            margin: 0;
            font-size: clamp(56px, 7.4vw, 124px);
            max-width: 14ch;
          }
          .ph-pg-hero-lede {
            color: var(--lp-fg-mute);
            font-size: clamp(17px, 1.2vw, 19px);
            line-height: 1.55;
            max-width: 580px;
            margin-top: 36px;
          }
          .ph-privacy-updated {
            font-family: var(--lp-font-mono);
            font-size: 11px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--lp-fg-dim);
            margin-top: 24px;
          }
        `}</style>
      </section>

      <section className="ph-privacy-body-section">
        <div className="lp-container">
          <div className="ph-privacy-grid">
            <aside className="ph-privacy-side">
              <div className="ph-eyebrow" style={{ marginBottom: 16 }}>
                Pinehollow Studios
              </div>
              <p className="ph-privacy-side-body">
                A two-person software studio. This policy covers the studio
                brand and this website.
              </p>
              <Link
                href="mailto:support@pinehollow.studio"
                className="ph-link ph-privacy-side-mail"
              >
                support@pinehollow.studio
              </Link>
            </aside>

            <div className="ph-privacy-sections">
              {policySections.map((s, i) => (
                <Reveal key={s.title} variant="up">
                  <div
                    className="ph-privacy-section"
                    style={{
                      borderTop:
                        i === 0 ? "1px solid var(--ph-rule)" : "none",
                    }}
                  >
                    <h2 className="ph-privacy-section-h">{s.title}</h2>
                    <p className="ph-privacy-section-body">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .ph-privacy-body-section { padding: 40px 0 120px; }
          .ph-privacy-grid {
            display: grid;
            grid-template-columns: 0.7fr 1.3fr;
            gap: 64px;
            align-items: start;
          }
          .ph-privacy-side {
            padding: 28px;
            border: 1px solid var(--ph-rule);
            border-radius: 4px;
            position: sticky;
            top: 40px;
            background: rgba(255,255,255,0.015);
          }
          .ph-privacy-side-body {
            margin: 0;
            font-size: 15px;
            line-height: 1.6;
            color: var(--lp-fg-mute);
          }
          .ph-privacy-side-mail {
            display: block;
            margin-top: 20px;
            font-family: var(--lp-font-display);
            font-size: 17px;
            font-weight: 500;
            letter-spacing: -0.02em;
            color: var(--lp-pine-glow);
          }
          .ph-privacy-sections {
            border-bottom: 1px solid var(--ph-rule);
          }
          .ph-privacy-section {
            padding: 32px 0;
            border-top: 1px solid var(--ph-rule);
          }
          .ph-privacy-section-h {
            font-family: var(--lp-font-display);
            font-size: clamp(20px, 1.8vw, 28px);
            font-weight: 500;
            letter-spacing: -0.025em;
            margin: 0;
          }
          .ph-privacy-section-body {
            margin: 10px 0 0;
            font-size: 16px;
            line-height: 1.7;
            color: var(--lp-fg-mute);
          }
          @media (max-width: 880px) {
            .ph-privacy-grid { grid-template-columns: 1fr; gap: 32px; }
            .ph-privacy-side { position: static; }
          }
        `}</style>
      </section>
    </>
  );
}
