"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

export function Materials() {
  const { eyebrow, title, intro, type, palette, detail } = siteContent.materials;

  return (
    <section id="materials" className="section-space bg-[var(--color-paper)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="mb-14 max-w-[40rem]"
        >
          <p className="label-overline text-[var(--color-mid-grey)]">{eyebrow}</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">{title}</h2>
          <p className="body-copy mt-6 text-[var(--color-mid-grey)]">{intro}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {/* Type */}
          <motion.div
            variants={fadeUpItem}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="material-card"
          >
            <p className="label-overline text-[var(--color-mid-grey)]">Type</p>
            <div
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(5rem, 9vw, 7rem)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "var(--color-charcoal)",
                marginTop: "1.25rem",
              }}
            >
              {type.sample}
            </div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-baseline justify-between gap-4 border-t border-[var(--color-border-light)] pt-4">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {type.display.name}
                </span>
                <span className="text-[0.8rem] text-[var(--color-mid-grey)]">
                  {type.display.role}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-[var(--color-border-light)] pt-4">
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.0625rem",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {type.body.name}
                </span>
                <span className="text-[0.8rem] text-[var(--color-mid-grey)]">
                  {type.body.role}
                </span>
              </div>
            </div>
            <p className="mt-6 text-[0.9375rem] leading-7 text-[var(--color-mid-grey)]">
              {type.note}
            </p>
          </motion.div>

          {/* Palette */}
          <motion.div
            variants={fadeUpItem}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="material-card"
          >
            <p className="label-overline text-[var(--color-mid-grey)]">Palette</p>
            <ul className="mt-7 grid gap-4">
              {palette.map((swatch) => (
                <li key={swatch.name} className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="swatch-chip"
                    style={{
                      background: swatch.hex,
                      borderColor:
                        swatch.name === "Cream" || swatch.name === "Parchment"
                          ? "var(--color-border-light)"
                          : "transparent",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {swatch.name}
                  </span>
                  <span className="ml-auto text-[0.8125rem] text-[var(--color-mid-grey)]">
                    {swatch.hex}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Detail */}
          <motion.div
            variants={fadeUpItem}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="material-card"
          >
            <p className="label-overline text-[var(--color-mid-grey)]">Detail</p>
            <ul className="mt-7 divide-y divide-[var(--color-border-light)]">
              {detail.map((item) => (
                <li key={item.title} className="py-5 first:pt-0 last:pb-0">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-7 text-[var(--color-mid-grey)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
