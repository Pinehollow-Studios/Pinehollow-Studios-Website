"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";
import { roostContent } from "@/lib/tokens";

export function RoostPrivacy() {
  return (
    <section className="section-space bg-[var(--color-roost-card)] pt-0">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:items-center"
        >
          <div>
            <p className="label-overline text-[var(--color-roost)]">Privacy</p>
            <h2 className="section-title mt-3 text-[var(--color-charcoal)]">Private by design.</h2>
          </div>
          <p className="body-copy text-[var(--color-mid-grey)]">{roostContent.privacy}</p>
        </motion.div>
      </div>
    </section>
  );
}
