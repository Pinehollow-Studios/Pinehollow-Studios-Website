export function RoostDownloadCta() {
  return (
    <section id="download" className="grain-surface-dark bg-[var(--color-deep-pine)] py-20 text-[var(--color-cream)] sm:py-24">
      <div className="container-shell text-center">
        <h2 className="section-title text-[var(--color-cream)] sm:text-[2.5rem]">Your home, finally in sync.</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#download" className="button-outline-inverse">
            Download for Mac
          </a>
          <a href="#download" className="button-outline-inverse">
            Download for iPhone
          </a>
        </div>
      </div>
    </section>
  );
}
