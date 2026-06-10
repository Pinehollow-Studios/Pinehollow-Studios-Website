/**
 * Tiny coordination point between the Preloader and above-the-fold entrance
 * animations: hero reveals wait on `loaderGate` so they don't play hidden
 * behind the loading wipe. The Preloader opens the gate (immediately when
 * it decides to skip itself).
 */
let resolveGate: (() => void) | undefined;

export let gateOpen = false;

export const loaderGate: Promise<void> =
  typeof window === "undefined"
    ? Promise.resolve()
    : new Promise<void>((r) => {
        resolveGate = r;
      });

export function openGate() {
  gateOpen = true;
  resolveGate?.();
}
