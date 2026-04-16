"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpItem, staggerContainer, viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

type ProductCardProps = {
  tone: "pine" | "timber";
  status: string;
  name: string;
  tagline: string;
  descriptor: string;
  platforms: string;
  href: string;
  subdued?: boolean;
};

function ProductCard({ tone, status, name, tagline, descriptor, platforms, href, subdued }: ProductCardProps) {
  const isPine = tone === "pine";
  return (
    <article className="product-surface" style={{ opacity: subdued ? 0.85 : 1 }}>
      <div className="product-surface-bar" data-tone={isPine ? undefined : "timber"} />
      <div className="p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <p className="label-overline">Pinehollow Studios</p>
          <span
            className="flex-none rounded-[var(--radius-pill)] px-3 py-1 text-[0.75rem] font-medium"
            style={{
              background: isPine ? "var(--color-pine)" : "var(--color-grabbit)",
              color: "var(--color-cream)",
            }}
          >
            {status}
          </span>
        </div>

        <h3
          className="mt-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-charcoal)",
          }}
        >
          {name}
        </h3>

        <p
          className="mt-2 font-medium"
          style={{
            fontSize: "0.9375rem",
            color: isPine ? "var(--color-pine)" : "var(--color-grabbit)",
            letterSpacing: "0.01em",
          }}
        >
          {tagline}
        </p>

        <p
          className="mt-5 max-w-[36ch] text-[var(--color-mid-grey)]"
          style={{ fontSize: "1rem", lineHeight: 1.75 }}
        >
          {descriptor}
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <span className="text-[0.8125rem] text-[var(--color-mid-grey)]">{platforms}</span>
          <Link href={href} className={isPine ? "button-primary" : "button-secondary"}>
            View {name}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="apps" className="section-space bg-[var(--color-paper)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[34rem]"
        >
          <p className="label-overline text-[var(--color-pine)]">Applications</p>
          <h2 className="section-title mt-3 text-[var(--color-charcoal)]">
            A small family of useful tools.
          </h2>
          <p className="mt-5 text-[1rem] leading-7 text-[var(--color-mid-grey)]">
            Each one built to solve a real problem, designed to feel considered and stay out of the way.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <motion.div variants={fadeUpItem} transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}>
            <ProductCard tone="pine" {...siteContent.products.roost} />
          </motion.div>
          <motion.div variants={fadeUpItem} transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}>
            <ProductCard tone="timber" subdued {...siteContent.products.grabbit} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
