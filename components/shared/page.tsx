import type { ReactNode } from "react";
import { AtmosphereBg } from "@/components/shared/atmosphere";

type Atmosphere = "default" | "deep" | "sky" | "ember" | "quiet";

/**
 * Page wrapper for route content. Nav + Footer live in the root layout so
 * they persist across navigation (and the active-nav indicator can animate
 * smoothly between routes), while the per-route atmosphere variant lives here.
 */
export function Page({
  children,
  atmosphere = "default",
}: {
  children: ReactNode;
  atmosphere?: Atmosphere;
}) {
  return (
    <>
      <AtmosphereBg variant={atmosphere} />
      {children}
    </>
  );
}
