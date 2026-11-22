import type { Metadata } from "next";
import { BarChart } from "peakcharts";
import { Code } from "@/components/code";
import { bySlug } from "@/lib/charts";

export const metadata: Metadata = { title: "Theming", description: "Theme peakcharts React charts: built-in light and dark modes and CSS variables for everything else." };
const d = bySlug("bar")!.props;

export default function Page() {
  return (
    <>
      <h1>Theming</h1>
      <p className="lead">Light and dark ship in the box. Everything else is a CSS variable you can override.</p>

      <h2>Dark mode</h2>
      <p>Add <code>data-theme=&quot;dark&quot;</code> to a parent element. The chart does not read <code>prefers-color-scheme</code> by itself, so toggle the attribute from your own theme logic.</p>
      <Code code={`<div data-theme="dark">
  <BarChart title="Revenue" data={data} />
</div>`} />
      <div data-theme="dark" className="wide my-6 rounded-[var(--radius-panel)] bg-bg p-4">
        <BarChart title={d.title} data={d.data as never} height={240} />
      </div>
      <p>The site toggle in the header does exactly this: it sets the attribute on the root element, and every chart on the page follows.</p>

      <h2>Match your app</h2>
      <p>To match your app, override these variables on <code>.pc-chart</code>:</p>
      <Code lang="css" code={`.pc-chart {
  --pc-surface: #ffffff;
  --pc-ink: #0b1a20;
  --pc-muted: #52646c;
  --pc-grid: #dce4e8;
}`} />

      <h2>Font</h2>
      <p><code>peakcharts/styles.css</code> bundles DM Sans through <code>@fontsource</code>, so nothing is requested from Google Fonts. Set <code>font-family</code> on <code>.pc-chart</code> to use your own.</p>
    </>
  );
}
