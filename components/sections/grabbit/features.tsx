"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { grabbitContent } from "@/lib/tokens";

export function GrabbitFeatures() {
  return (
    <section className="section-space bg-[var(--color-cream)] pt-0 app-page-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[34rem]"
        >
          <p className="label-overline text-[var(--color-grabbit)]">Features</p>
          <h2 className="section-title mt-3">Everything saved with less effort</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {grabbitContent.features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="surface-card p-6 sm:p-7"
            >
              <span className="font-[var(--font-display)] text-[1.5rem] text-[var(--color-grabbit)]">{feature.glyph}</span>
              <h3 className="card-title mt-5">{feature.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-mid-grey)]">{feature.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
