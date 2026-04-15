export function GrabbitNotifyCta() {
  return (
    <section className="grain-surface bg-[var(--color-grabbit)] py-20 text-[var(--color-cream)] sm:py-24">
      <div className="container-shell text-center">
        <h2 className="section-title text-[var(--color-cream)] sm:text-[2.5rem]">Be first to try Grabbit.</h2>
        <p className="mx-auto mt-4 max-w-[34rem] text-[1rem] leading-7 text-[color:color-mix(in_srgb,var(--color-cream)_78%,var(--color-mid-grey))]">
          Join the waitlist for TestFlight access and launch updates.
        </p>
        <div className="mx-auto mt-8 max-w-[34rem]">
          <div className="field-shell">
            <input className="email-input border-[color:color-mix(in_srgb,var(--color-cream)_35%,transparent)] placeholder:text-[var(--color-cream)]" type="email" placeholder="your@email.com" />
            <button className="button-secondary-inverse" type="button">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
