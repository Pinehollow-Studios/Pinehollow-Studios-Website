"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Resets window scroll to the top whenever the route changes — so revisiting
 * a page lands at the top, alongside the page's own mount animations replaying.
 * Next.js App Router already does this for top-level navigations, but this
 * makes the behavior explicit and covers edge cases like hash-anchor returns.
 */
export function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
