"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostPricing() {
  const tiers = [roostContent.pricing.free, roostContent.pricing.nest];

  return (
    <section className="section-space bg-[var(--color-cream)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[40rem]"
        >
          <p className="label-overline text-[var(--color-pine)]">Pricing</p>
          <h2 className="section-title mt-3">Free to start. Nest when you&apos;re ready.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {tiers.map((tier, index) => (
            <motion.article
              key={tier.title}
              variants={fadeUpItem}
              transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className="surface-card flex h-full flex-col p-6 sm:p-8"
            >
              <p className="label-overline text-[var(--color-pine)]">{tier.title}</p>
              <h3 className="card-title mt-4">{tier.subtitle}</h3>
              <ul className="mt-6 space-y-3 text-[0.98rem] leading-7 text-[var(--color-mid-grey)]">
                {tier.features.map((feature) => (
                  <li key={feature}>— {feature}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#download" className={index === 1 ? "button-primary" : "button-secondary"}>
                  {index === 1 ? "Join Nest early" : "Start with Free"}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}