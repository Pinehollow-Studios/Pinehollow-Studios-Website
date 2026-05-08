import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

export const metadata: Metadata = {
  title: "Privacy Policy — Pinehollow Studios",
  description: "Privacy policy for Pinehollow Studios.",
};

const policySections = [
  {
    title: "Scope",
    body: "This policy covers the Pinehollow Studios website and any direct contact with the studio.",
  },
  {
    title: "Data we collect",
    body: "Basic web request data needed to serve the site. If you email us, the address and message you send.",
  },
  {
    title: "What we don't do",
    body: "We don't sell personal information. We don't run advertising. We don't build marketing profiles.",
  },
  {
    title: "Cookies and analytics",
    body: "Minimal cookies, only what's needed for the page to function. Any analytics are aggregate, not used to identify individuals.",
  },
  {
    title: "Support",
    body: "If you email us, we keep the message so we can reply and follow up. We don't share it.",
  },
  {
    title: "Security",
    body: "Standard security practices. We collect as little data as we can.",
  },
  {
    title: "Your data",
    body: "Email us to request a copy of any data we hold or to have it deleted.",
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
            <h1 className="display-type mt-5 text-[var(--color-charcoal)]">Privacy Policy</h1>
            <p className="body-copy mt-7 max-w-[38rem] text-[var(--color-mid-grey)]">
              We collect what we need to run the site and reply to messages. Nothing else.
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
