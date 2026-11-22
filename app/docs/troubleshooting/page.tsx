import type { Metadata } from "next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Troubleshooting", description: "Fix common peakcharts problems: missing styles, empty charts, SSR issues and data errors." };

const items: [string, React.ReactNode][] = [
  ["The chart is unstyled", <>Import <code>peakcharts/styles.css</code> once, for example in your root layout. Without it the SVG renders without its fonts, colors and layout.</>],
  ["Dark mode does nothing", <>Set <code>data-theme=&quot;dark&quot;</code> on a parent element of the chart. The chart does not read <code>prefers-color-scheme</code> by itself, so toggle the attribute from your own theme logic.</>],
  ["I see an error message instead of my chart", "That is intentional. Charts reject non-finite numbers, negative values in pie, donut, funnel, treemap, radar and radial charts, negative bubble size, duplicate heatmap pairs, and waterfall totals that overflow. Fix the data and the chart renders."],
  ["Does it work with SSR?", <>Yes. The chart components do not touch <code>window</code> or <code>document</code>, so they render on the server. In Next.js, import them from any component. The bundle carries <code>&quot;use client&quot;</code>.</>],
  ["The chart is slow with a lot of points", "Charts are SVG and suit modest datasets. Aggregate large data before passing it in."],
  ["Can I stack series, zoom, or use a time axis?", "Not yet. Each chart draws one series on category axes from static, client-provided data. There is no stacking, zooming, time scale, streaming or canvas rendering."],
];

export default function Page() {
  return (
    <>
      <h1>Troubleshooting</h1>
      <p className="lead">The questions that come up most.</p>
      {items.map(([q, a]) => (
        <details key={q} className="faq">
          <summary>{q}<ChevronDownIcon className="chev size-5 shrink-0 text-muted" aria-hidden /></summary>
          <div>{a}</div>
        </details>
      ))}
      <p className="mt-8">Still stuck? <a href={site.links.issues}>Open an issue on GitHub</a>.</p>
    </>
  );
}
