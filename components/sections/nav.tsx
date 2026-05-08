"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#approach", label: "Approach" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setIsOpen(false);

    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="transition-all duration-700"
        style={{
          borderBottom: `1px solid ${isScrolled ? "var(--color-border-light)" : "transparent"}`,
          background: isScrolled ? "color-mix(in srgb, var(--color-cream) 88%, transparent)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
      >
        <nav className="container-shell nav-shell flex items-center justify-between">
          <Link
            href="/"
            aria-label="Pinehollow Studios home"
            className="flex items-center gap-2.5 font-[var(--font-display)] text-[1.1rem] font-bold text-[var(--color-charcoal)]"
          >
            <Image
              src="/pinehollow-icon.png"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-[6px]"
            />
            <span>Pinehollow Studios</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="ghost-link">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border-light)] text-[var(--color-charcoal)] md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </div>
          </button>
        </nav>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
              className="border-t border-[var(--color-border-light)] bg-[color:var(--color-cream)] md:hidden"
            >
              <div className="container-shell flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base text-[var(--color-charcoal)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
