"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const appLinks = [
  { href: "/apps/roost", label: "Roost", description: "Shared household management" },
  { href: "/apps/grabbit", label: "Grabbit", description: "Save anything. Find it again" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => {
      setIsOpen(false);
      setIsAppsOpen(false);
    };

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
            <div
              className="relative"
              onMouseEnter={() => setIsAppsOpen(true)}
              onMouseLeave={() => setIsAppsOpen(false)}
              onFocus={() => setIsAppsOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsAppsOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={isAppsOpen}
                aria-haspopup="menu"
                onClick={() => setIsAppsOpen(true)}
                className="ghost-link inline-flex items-center gap-1.5"
                data-active={pathname.startsWith("/apps") || undefined}
              >
                Our Apps
                <span aria-hidden="true" className="text-[0.72rem]">
                  v
                </span>
              </button>

              <AnimatePresence>
                {isAppsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                    className="absolute left-1/2 top-[calc(100%+0.85rem)] w-[17rem] -translate-x-1/2 rounded-[var(--radius-card)] border border-[var(--color-border-light)] bg-[color:color-mix(in_srgb,var(--color-cream)_94%,transparent)] p-2 shadow-[var(--shadow-card)] backdrop-blur-md"
                    role="menu"
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setIsAppsOpen(false);
                      }
                    }}
                  >
                    {appLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        onClick={() => setIsAppsOpen(false)}
                        className="block rounded-[var(--radius-control)] px-3 py-3 transition-colors duration-500 hover:bg-[var(--color-paper)] focus-visible:bg-[var(--color-paper)] focus-visible:outline-none"
                      >
                        <span className="block font-[var(--font-display)] text-[1rem] font-bold text-[var(--color-charcoal)]">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-[0.82rem] leading-5 text-[var(--color-mid-grey)]">
                          {link.description}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <Link href="/#contact" className="ghost-link">
              Contact
            </Link>
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
              <div className="container-shell flex flex-col gap-6 py-6">
                <div className="grid gap-3">
                  <p className="label-overline">Our Apps</p>
                  {appLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-[var(--radius-control)] border border-[var(--color-border-light)] p-4 text-[var(--color-charcoal)]"
                    >
                      <span className="block font-[var(--font-display)] text-[1.05rem] font-bold">{link.label}</span>
                      <span className="mt-1 block text-[0.9rem] leading-6 text-[var(--color-mid-grey)]">
                        {link.description}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/#apps"
                  onClick={() => setIsOpen(false)}
                  className="text-base text-[var(--color-charcoal)]"
                >
                  All apps
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-base text-[var(--color-charcoal)]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
