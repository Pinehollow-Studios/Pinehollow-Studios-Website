"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";
import { grabbitContent } from "@/lib/tokens";

export function GrabbitPartnership() {
  return (
    <section className="section-space bg-[var(--color-cream)] pt-0 app-page-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-[44rem] text-center"
        >
          <p className="label-overline text-[var(--color-grabbit)]">Grabbit Pro</p>
          <p className="body-copy mt-6 text-[var(--color-mid-grey)]">{grabbitContent.partnership}</p>
        </motion.div>
      </div>
    </section>
  );
}
