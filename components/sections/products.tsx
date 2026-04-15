"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { viewportOnce } from "@/components/shared/motion";
import { siteContent } from "@/lib/tokens";

type ProductCardProps = {
  badgeTone: "pine" | "timber";
  status: string;
  name: string;
  descriptor: string;
  copy: string;
  href: string;
  subdued?: boolean;
};

function ProductCard({ badgeTone, status, name, descriptor, copy, href, subdued }: ProductCardProps) {
  return (
    <article
      className="product-surface"
      style={{ opacity: subdued ? 0.82 : 1 }}
    >
      <div className="product-surface-bar" data-tone={badgeTone === "timber" ? "timber" : undefined} />
      <div className="p-6 sm:p-8">
      <span
        className="inline-flex rounded-[var(--radius-pill)] px-3 py-1 text-[0.8125rem] font-medium"
        style={{
          background: badgeTone === "pine" ? "var(--color-pine)" : "var(--color-grabbit)",
          color: "var(--color-cream)",
        }}
      >
        {status}
      </span>
      <p className="label-overline mt-6">Pinehollow Studios</p>
      <h3 className="card-title mt-3 text-[var(--color-charcoal)]">{name}</h3>
      <p className="mt-2 text-[0.95rem] leading-7 text-[var(--color-mid-grey)]">{descriptor}</p>
      <p className="body-copy mt-6 max-w-[34ch] text-[var(--color-charcoal)]">{copy}</p>
      <Link href={href} className={badgeTone === "pine" ? "button-primary mt-8" : "button-secondary mt-8"}>
        View {name}
      </Link>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="apps" className="section-space bg-[var(--color-cream)]">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[32rem]"
        >
          <p className="label-overline">Applications</p>
          <h2 className="section-title mt-3 max-w-[11ch] text-[var(--color-charcoal)]">A small family of useful tools.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          >
            <ProductCard badgeTone="pine" {...siteContent.products.roost} />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          >
            <ProductCard badgeTone="timber" subdued {...siteContent.products.grabbit} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
