"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostSteps() {
  return (
    <section className="section-space bg-[var(--color-roost-bg)] pt-0">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[32rem]"
        >
          <p className="label-overline text-[var(--color-roost)]">How it works</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">Up and running in minutes.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.18)}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {roostContent.steps.map((step) => (
            <motion.article
              key={step.number}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="surface-card p-7 sm:p-8"
            >
              <p className="step-number step-number-roost">{step.number}</p>
              <h3 className="card-title mt-5 text-[var(--color-charcoal)]">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-7 text-[var(--color-mid-grey)]">{step.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
