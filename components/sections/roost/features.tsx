"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostFeatures() {
  return (
    <section className="section-space bg-[var(--color-cream)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[38rem]"
        >
          <p className="label-overline text-[var(--color-pine)]">Roost</p>
          <h2 className="section-title mt-3">Everything your home needs</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {roostContent.features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="surface-card p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-[var(--font-display)] text-[1.5rem] text-[var(--color-pine)]">{feature.glyph}</span>
                {"badge" in feature ? <span className="status-pill-timber">{feature.badge}</span> : null}
              </div>
              <h3 className="card-title mt-5">{feature.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-mid-grey)]">{feature.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}