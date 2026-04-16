"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostFeatures() {
  return (
    <section className="section-space bg-[var(--color-roost-card)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[38rem]"
        >
          <p className="label-overline text-[var(--color-roost)]">Features</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            Everything your home needs, nothing it doesn&apos;t.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {roostContent.features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="surface-card p-6 sm:p-7"
              style={{ borderLeft: "2px solid var(--color-roost)" }}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    color: "var(--color-roost)",
                    lineHeight: 1,
                  }}
                >
                  {feature.glyph}
                </span>
                {"badge" in feature ? (
                  <span className="status-pill-timber text-[0.7rem]">{feature.badge}</span>
                ) : null}
              </div>
              <h3 className="card-title mt-5 text-[var(--color-charcoal)]">{feature.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-7 text-[var(--color-mid-grey)]">
                {feature.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
