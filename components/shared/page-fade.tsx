"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Wraps page content in a brief fade-in. The wrapper is keyed on pathname,
 * so navigating to a different route remounts the wrapper and the CSS
 * keyframe animation replays — making every visit feel fresh.
 */
export function PageFade({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div
      key={pathname}
      style={{
        animation: "lpPageFade 500ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
      }}
    >
      {children}
    </div>
  );
}
