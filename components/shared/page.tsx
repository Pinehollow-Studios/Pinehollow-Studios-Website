import type { ReactNode } from "react";
import { AtmosphereBg } from "@/components/shared/atmosphere";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

type NavKey = "manifesto" | "studio" | "contact" | null;
type Atmosphere = "default" | "deep" | "sky" | "ember" | "quiet";

export function Page({
  children,
  active = null,
  atmosphere = "default",
}: {
  children: ReactNode;
  active?: NavKey;
  atmosphere?: Atmosphere;
}) {
  return (
    <>
      <AtmosphereBg variant={atmosphere} />
      <Nav active={active} />
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      <Footer />
    </>
  );
}
