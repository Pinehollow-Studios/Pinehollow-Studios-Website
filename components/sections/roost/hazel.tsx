"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostHazel() {
  return (
    <section className="grain-surface-dark bg-[var(--color-deep-pine)] py-24 text-[var(--color-cream)] sm:py-32">
      <div className="container-shell text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-[46rem]"
        >
          <p className="label-overline text-[color:color-mix(in_srgb,var(--color-cream)_74%,var(--color-mid-grey))]">Roost Nest</p>
          <h2 className="mt-5 font-[var(--font-display)] text-[clamp(3rem,7vw,5rem)] leading-none">Meet Hazel.</h2>
          <p className="mt-6 text-[1.05rem] leading-8 text-[color:color-mix(in_srgb,var(--color-cream)_82%,var(--color-mid-grey))]">
            {roostContent.hazel}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
