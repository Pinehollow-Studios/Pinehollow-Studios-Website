export function Footer() {
  return (
    <footer id="contact" className="grain-surface-dark border-t border-[var(--color-border-dark)] bg-[var(--color-charcoal)] py-8 text-[var(--color-cream)]">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[var(--font-display)] text-[1.1rem] font-bold">Pinehollow Studios</p>
          <p className="mt-3 text-[0.95rem] leading-7 text-[color:color-mix(in_srgb,var(--color-cream)_72%,var(--color-mid-grey))]">
            Thoughtfully crafted software for everyday life.
          </p>
        </div>
        <p className="text-[0.9rem] text-[color:color-mix(in_srgb,var(--color-cream)_72%,var(--color-mid-grey))]">
          © 2026 Pinehollow Studios
        </p>
      </div>
    </footer>
  );
}
