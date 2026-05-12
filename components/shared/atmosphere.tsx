type Variant = "default" | "deep" | "sky" | "ember" | "quiet";

const variants: Record<Variant, string> = {
  default: `
    radial-gradient(800px 700px at 12% 18%, rgba(63,229,160,0.18), transparent 60%),
    radial-gradient(900px 800px at 92% 8%, rgba(45,79,63,0.45), transparent 65%),
    radial-gradient(700px 600px at 80% 92%, rgba(255,149,96,0.08), transparent 60%)
  `,
  deep: `
    radial-gradient(900px 800px at 50% 50%, rgba(45,79,63,0.40), transparent 65%),
    radial-gradient(600px 500px at 18% 8%, rgba(63,229,160,0.10), transparent 60%)
  `,
  sky: `
    radial-gradient(800px 700px at 88% 16%, rgba(159,224,255,0.16), transparent 60%),
    radial-gradient(900px 800px at 8% 84%, rgba(63,229,160,0.16), transparent 65%)
  `,
  ember: `
    radial-gradient(700px 600px at 84% 12%, rgba(255,149,96,0.18), transparent 60%),
    radial-gradient(900px 800px at 16% 80%, rgba(63,229,160,0.14), transparent 65%)
  `,
  quiet: `
    radial-gradient(1200px 900px at 50% 0%, rgba(63,229,160,0.06), transparent 60%)
  `,
};

export function AtmosphereBg({ variant = "default" }: { variant?: Variant }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: variants[variant],
      }}
    />
  );
}
