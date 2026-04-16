"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/components/shared/motion";

export function RoostDownloadCta() {
  return (
    <section id="download" className="grain-surface-dark bg-[var(--color-deep-pine)] py-24 text-[var(--color-cream)] sm:py-28">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="max-w-[44rem]"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-cream)",
            }}
          >
            Your home, finally in sync.
          </h2>
          <p
            className="mt-6"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(250,248,245,0.65)",
              maxWidth: "38rem",
            }}
          >
            Download Roost on Mac and iPhone. Free to start, no account required to try.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#" className="button-outline-inverse">
              Download for Mac
            </a>
            <a href="#" className="button-outline-inverse">
              Download for iPhone
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
