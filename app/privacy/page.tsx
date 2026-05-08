import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

export const metadata: Metadata = {
  title: "Privacy Policy - Pinehollow Studios",
  description: "Privacy policy for Pinehollow Studios and connected studio properties.",
};

const policySections = [
  {
    title: "What this covers",
    body: "This policy applies to Pinehollow Studios, this website, and any Pinehollow Studios property that links to this page.",
  },
  {
    title: "What we collect",
    body: "We only collect information needed to run the website or reply when you contact us. That means basic web request data and, if you email us, the email address and message you choose to send.",
  },
  {
    title: "What stays private",
    body: "We do not sell your personal information. We do not run advertising on this site. We do not build marketing profiles.",
  },
  {
    title: "Cookies and analytics",
    body: "This site keeps cookie use to the minimum needed to function. Where we use lightweight analytics, it is to understand which pages are read — never to identify individuals or follow you across the web.",
  },
  {
    title: "Support",
    body: "If you email us, we use the information you provide to reply and resolve the question. We may keep support messages so we can understand previous conversations.",
  },
  {
    title: "Security",
    body: "We use reasonable technical and organisational measures to protect the information we handle. No online service can be guaranteed completely secure, but we keep access limited and collect as little as practical.",
  },
  {
    title: "Your choices",
    body: "You can contact us to ask about your data or request deletion where available. We will respond honestly and as quickly as a small team can.",
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
              Pinehollow Studios is a small studio. We collect as little as practical, use data only
              to run the site or reply when you contact us, and we do not sell personal information.
            </p>
            <p className="mt-6 text-[0.9rem] leading-6 text-[var(--color-mid-grey)]">Last updated: 8 May 2026</p>
          </div>

          <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Image
                src="/pinehollow-icon.png"
                alt="Pinehollow Studios"
                width={48}
                height={48}
                className="mb-5 h-12 w-12 rounded-[10px]"
              />
              <p className="label-overline text-[var(--color-mid-grey)]">Pinehollow Studios</p>
              <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-7 text-[var(--color-mid-grey)]">
                Covers the studio brand and this website.
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
