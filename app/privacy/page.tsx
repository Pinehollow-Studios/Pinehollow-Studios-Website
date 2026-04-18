import type { Metadata } from "next";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

export const metadata: Metadata = {
  title: "Privacy Policy - Pinehollow Studios",
  description: "Privacy policy for Pinehollow Studios, Roost, Grabbit, and connected Pinehollow apps.",
};

const policySections = [
  {
    title: "What this covers",
    body: "This policy applies to Pinehollow Studios, this website, Roost, Grabbit, and any Pinehollow Studios app that links to this page.",
  },
  {
    title: "What we collect",
    body: "We only collect information needed to run the website, provide support, or operate an app feature you choose to use. That may include your email address if you contact us, basic support details you send us, and app data needed for sync, household sharing, saved items, subscriptions, or account features.",
  },
  {
    title: "What stays private",
    body: "We do not sell your personal information. We do not use your app data for advertising. We do not build marketing profiles from your household data, saved photos, screenshots, searches, chores, budgets, or lists.",
  },
  {
    title: "Roost",
    body: "Roost stores household information for the people you invite into your shared home. That can include shopping lists, expenses, chores, budgets, calendar items, notes, and related settings. It is used to keep your home in sync across your devices and is not shared with advertisers.",
  },
  {
    title: "Grabbit",
    body: "Grabbit is designed around private saving and search. Where the app uses on-device processing, your screenshots and saved photos are classified and searched on your device. We do not use that content for advertising or resale.",
  },
  {
    title: "Payments",
    body: "If an app offers paid features through the App Store or another platform, payment and billing are handled by that platform. We do not receive your full card details.",
  },
  {
    title: "Support",
    body: "If you email us, we use the information you provide to reply and resolve the issue. We may keep support messages so we can understand previous conversations and improve the product.",
  },
  {
    title: "Security",
    body: "We use reasonable technical and organisational measures to protect the information we handle. No online service can be guaranteed completely secure, but we keep access limited and collect as little as practical.",
  },
  {
    title: "Your choices",
    body: "You can contact us to ask about your data, request deletion where available, or ask a privacy question. Some app data can also be deleted directly inside the app or by removing the app from your device.",
  },
  {
    title: "Contact",
    body: "For privacy questions, email support@pinehollow.studio.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="grain-surface section-space bg-[var(--color-cream)] pt-[calc(var(--nav-height)+4rem)]">
        <div className="container-shell">
          <div className="max-w-[46rem]">
            <p className="label-overline text-[var(--color-pine)]">Privacy Policy</p>
            <h1 className="display-type mt-5 text-[var(--color-charcoal)]">Simple privacy, plainly stated.</h1>
            <p className="body-copy mt-7 max-w-[38rem] text-[var(--color-mid-grey)]">
              Pinehollow Studios builds private, useful software. We collect as little as practical, use data only
              to provide the product, and do not sell personal information.
            </p>
            <p className="mt-6 text-[0.9rem] leading-6 text-[var(--color-mid-grey)]">Last updated: 18 April 2026</p>
          </div>

          <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="label-overline text-[var(--color-mid-grey)]">Pinehollow Studios</p>
              <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-7 text-[var(--color-mid-grey)]">
                Covers the brand, website, Roost, Grabbit, and connected Pinehollow apps.
              </p>
            </div>

            <div className="divide-y divide-[var(--color-border-light)] border-y border-[var(--color-border-light)]">
              {policySections.map((section) => (
                <section key={section.title} className="py-8">
                  <h2 className="font-[var(--font-display)] text-[1.35rem] font-bold leading-tight text-[var(--color-charcoal)]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-8 text-[var(--color-mid-grey)]">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
