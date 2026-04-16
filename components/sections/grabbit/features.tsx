"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { grabbitContent } from "@/lib/tokens";

export function GrabbitFeatures() {
  return (
    <section className="section-space bg-[var(--color-cream)] app-page-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[34rem]"
        >
          <p className="label-overline text-[var(--color-grabbit)]">Features</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            Designed to stay out of your way.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-12"
        >
          {grabbitContent.features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpItem}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
              className="feature-row"
            >
              <span className="feature-row-glyph">{feature.glyph}</span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    lineHeight: 1.2,
                    color: "var(--color-charcoal)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.72, color: "var(--color-mid-grey)" }}>
                  {feature.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
