import type { Metadata } from "next";
import Link from "next/link";
import { BarChart } from "peakcharts";
import { CopyCommand } from "@ashutoshswamy/smoui";
import { Code } from "@/components/code";
import { Panel } from "@/components/doc";

export const metadata: Metadata = { title: "Installation", description: "Install peakcharts with npm, import the stylesheet once, and render your first accessible React chart." };

export default function Page() {
  return (
    <>
      <h1>Installation</h1>
      <p className="lead">Install the package, import the stylesheet once, then render a chart.</p>

      <h2>Install</h2>
      <div className="my-6"><CopyCommand command="npm install peakcharts" className="text-ink" /></div>
      <p>
        React, React DOM and Motion are peer dependencies. npm 7 and newer installs them when compatible versions are missing. peakcharts requires React 18 or newer.
      </p>

      <h2>Render a chart</h2>
      <p>Import the stylesheet once, for example in your root layout. Then render any chart.</p>
      <Code
        title="Revenue.tsx"
        code={`import { BarChart } from 'peakcharts';
import 'peakcharts/styles.css';

export default function Revenue() {
  return (
    <BarChart
      title="Revenue by month"
      data={[
        { label: 'Jan', value: 32 },
        { label: 'Feb', value: 46 },
        { label: 'Mar', value: 63 },
      ]}
    />
  );
}`}
      />
      <Panel>
        <BarChart
          title="Revenue by month"
          data={[
            { label: "Jan", value: 32 },
            { label: "Feb", value: 46 },
            { label: "Mar", value: 63 },
          ]}
          height={240}
        />
      </Panel>

      <h2>Use it with Next.js</h2>
      <p>
        The App Router works as is. The bundle ships with <code>&quot;use client&quot;</code>, so you can import charts from server components or your root layout. Charts do not touch <code>window</code> or <code>document</code>, so they render on the server too.
      </p>
      <Code
        title="app/layout.tsx"
        code={`import 'peakcharts/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
      />
      <p>
        Charts are plain SVG styled with CSS variables, so any evergreen browser works. If the chart looks unstyled, see <Link href="/docs/troubleshooting">Troubleshooting</Link>.
      </p>
    </>
  );
}
