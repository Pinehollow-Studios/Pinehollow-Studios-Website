"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor — an instant ice dot plus a lagging ring that expands over
 * interactive targets. Elements can opt into a label via
 * `data-cursor-label="View"`. Fine-pointer devices only; the native cursor
 * is hidden via the .ph-has-cursor class so a JS failure never leaves the
 * user cursorless.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.documentElement.classList.add("ph-has-cursor");

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let seen = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!seen) {
        seen = true;
        rx = mx; ry = my;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element | null)?.closest?.(
        "a, button, input, textarea, select, [data-cursor]",
      );
      if (!t) {
        delete ring.dataset.mode;
        label.textContent = "";
        return;
      }
      const tag = t.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        ring.dataset.mode = "text";
        label.textContent = "";
        return;
      }
      ring.dataset.mode = "link";
      label.textContent = t.getAttribute("data-cursor-label") ?? "";
    };

    const onDown = () => { dot.style.scale = "2.2"; };
    const onUp = () => { dot.style.scale = "1"; };
    const onLeave = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; };
    const onEnter = () => {
      if (!seen) return;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("ph-has-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="ph-cursor-dot"
        style={{ opacity: 0, transition: "scale 200ms var(--ph-ease-out), opacity 200ms linear" }}
        aria-hidden="true"
      />
      <div ref={ringRef} className="ph-cursor-ring" style={{ opacity: 0 }} aria-hidden="true">
        <span ref={labelRef} className="ph-cursor-label" />
      </div>
    </>
  );
}
