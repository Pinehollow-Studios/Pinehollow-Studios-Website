/**
 * App Router template — remounts on every navigation, so the .ph-page
 * entrance animation replays per route visit.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="ph-page">{children}</div>;
}
