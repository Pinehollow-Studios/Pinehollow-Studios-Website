"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostPrivacy() {
  return (
    <section className="section-space bg-[var(--color-cream)] pt-0">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-[52rem] text-center"
        >
          <p className="label-overline text-[var(--color-pine)]">Privacy</p>
          <h2 className="section-title mt-3">Private by design</h2>
          <div className="underline-accent" />
          <p className="body-copy mt-6 text-[var(--color-mid-grey)]">{roostContent.privacy}</p>
        </motion.div>
      </div>
    </section>
  );
}