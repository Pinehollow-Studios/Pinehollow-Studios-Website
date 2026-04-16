"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostPricing() {
  const { free, nest } = roostContent.pricing;

  return (
    <section className="section-space bg-[var(--color-roost-bg)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[40rem]"
        >
          <p className="label-overline text-[var(--color-roost)]">Pricing</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            Free to start. Go Pro when you&apos;re ready.
          </h2>
          <p className="mt-5 text-[1rem] leading-7 text-[var(--color-mid-grey)]">
            Roost Free covers everything most households need. Pro adds AI insights, expense history, and budget tracking.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {/* Free tier */}
          <motion.div variants={fadeUpItem} transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}>
            <div className="pricing-card-free h-full">
              <p className="label-overline text-[var(--color-roost)]">{free.title}</p>
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
              {free.price === null && (
                <p
                  className="mt-2"
                  style={{ fontSize: "0.9rem", color: "var(--color-mid-grey)" }}
                >
                  No credit card required.
                </p>
              )}
              <ul className="mt-8 flex flex-col gap-3">
                {free.features.map((f) => (
                  <li key={f} className="pricing-feature-item">{f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="https://roost-website-five.vercel.app/download" className="button-secondary">Start with Free</a>
              </div>
            </div>
          </motion.div>

          {/* Nest tier */}
          <motion.div variants={fadeUpItem} transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}>
            <div className="pricing-card-premium grain-surface-dark h-full" style={{ background: "var(--color-roost)" }}>
              <p className="label-overline" style={{ color: "rgba(250,248,245,0.55)" }}>
                {nest.title}
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  lineHeight: 1.1,
                  color: "var(--color-cream)",
                }}
              >
                {nest.price ?? nest.subtitle}
              </p>
              <p
                className="mt-2"
                style={{ fontSize: "0.9rem", color: "rgba(250,248,245,0.5)" }}
              >
                {nest.subtitle}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {nest.features.map((f) => (
                  <li key={f} className="pricing-feature-item">{f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="https://roost-website-five.vercel.app/download" className="button-outline-inverse">Join Pro early</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
