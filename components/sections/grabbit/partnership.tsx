"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { grabbitContent } from "@/lib/tokens";

export function GrabbitPartnership() {
  const { free, pro } = grabbitContent.pricing;

  return (
    <section className="section-space bg-[var(--color-paper)] app-page-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[38rem]"
        >
          <p className="label-overline text-[var(--color-grabbit)]">Pricing</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            Start free. Go unlimited when you&apos;re ready.
          </h2>
          <p className="mt-5 text-[1rem] leading-7 text-[var(--color-mid-grey)]">
            The free tier is genuinely free — full search, full AI, just capped at 50 saves. Upgrade to Pro when your library becomes something worth keeping.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {/* Free */}
          <motion.div variants={fadeUpItem} transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}>
            <div className="pricing-card-free h-full">
              <p className="label-overline text-[var(--color-grabbit)]">{free.title}</p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  lineHeight: 1.1,
                  color: "var(--color-charcoal)",
                }}
              >
                {free.subtitle}
              </p>
              <p className="mt-1 text-[0.9rem] text-[var(--color-mid-grey)]">No credit card required.</p>
              <ul className="mt-8 flex flex-col gap-3">
                {free.features.map((f) => (
                  <li key={f} className="pricing-feature-item">{f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <span className="status-pill-timber px-5 py-3 text-[0.875rem]">Coming Soon</span>
              </div>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div variants={fadeUpItem} transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}>
            <div className="pricing-card-premium grain-surface-dark h-full" style={{ background: "var(--color-grabbit)" }}>
              <p className="label-overline" style={{ color: "rgba(250,248,245,0.5)" }}>
                {pro.title}
              </p>
              <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    lineHeight: 1.1,
                    color: "var(--color-cream)",
                  }}
                >
                  {pro.priceMonthly}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(250,248,245,0.55)" }}>
                  or {pro.priceAnnual} · {pro.saving}
                </p>
              </div>
              <p className="mt-1" style={{ fontSize: "0.875rem", color: "rgba(250,248,245,0.5)" }}>
                {pro.subtitle}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {pro.features.map((f) => (
                  <li key={f} className="pricing-feature-item">{f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <span className="status-pill px-5 py-3 text-[0.875rem]" style={{ background: "rgba(250,248,245,0.15)", color: "var(--color-cream)" }}>
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="mt-8 max-w-[52rem] text-[0.875rem] leading-6 text-[var(--color-mid-grey)]"
        >
          {grabbitContent.privacyNote}
        </motion.p>
      </div>
    </section>
  );
}
