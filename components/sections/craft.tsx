"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

const accentConfig = {
  pine: {
    blockClass: "craft-block--pine grain-surface-dark",
    markColor: "rgba(250,248,245,0.07)",
  },
  paper: {
    blockClass: "craft-block--paper grain-surface",
    markColor: "rgba(28,31,30,0.055)",
  },
  timber: {
    blockClass: "craft-block--parchment grain-surface",
    markColor: "rgba(107,91,74,0.1)",
  },
} as const;

export function Craft() {
  return (
    <section className="section-space bg-[var(--color-cream)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="mb-14 max-w-[28rem]"
        >
          <p className="label-overline text-[var(--color-mid-grey)]">Our approach</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            Three things we never compromise on.
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-20">
          {siteContent.craft.map((item, index) => {
            const reverse = index % 2 === 1;
            const cfg = accentConfig[item.accent];
            const markChars = ["P", "S", "T"];

            return (
              <div key={item.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  {...(reverse ? fadeRight : fadeLeft)}
                  viewport={viewportOnce}
                  className={reverse ? "lg:order-2" : ""}
                >
                  <p className="label-overline text-[var(--color-mid-grey)]">0{index + 1}</p>
                  <h3 className="section-title mt-4 text-[var(--color-charcoal)]">{item.title}</h3>
                  <p className="body-copy mt-6 max-w-[38rem] text-[var(--color-mid-grey)]">
                    {item.body}
                  </p>
                </motion.div>

                <motion.div
                  {...(reverse ? fadeLeft : fadeRight)}
                  viewport={viewportOnce}
                  className={reverse ? "lg:order-1" : ""}
                >
                  <div className={`craft-block ${cfg.blockClass}`} aria-hidden="true">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(6rem, 16vw, 11rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.06em",
                        color: cfg.markColor,
                        userSelect: "none",
                        fontWeight: 700,
                      }}
                    >
                      {markChars[index]}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
