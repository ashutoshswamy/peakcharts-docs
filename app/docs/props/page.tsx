import type { Metadata } from "next";
import { Code } from "@/components/code";
import { Table } from "@/components/doc";

export const metadata: Metadata = { title: "Props and types", description: "Props and TypeScript types for every peakcharts chart: required title and data, plus all optional settings." };

export default function Page() {
  return (
    <>
      <h1>Props and types</h1>
      <p className="lead">Every chart requires <code>title</code> and <code>data</code>. Everything else is optional.</p>
      <Table
        head={["Prop", "Type", "Default", "Notes"]}
        rows={[
          [<code key="1">title</code>, <code key="1t">string</code>, "required", "The chart's accessible name."],
          [<code key="2">data</code>, "see Charts", "required", "Input arrays are never mutated. Order is preserved."],
          [<code key="3">description</code>, <code key="3t">string</code>, "none", "Extra context for screen readers."],
          [<code key="4">height</code>, <code key="4t">number</code>, <code key="4d">280</code>, "Minimum 100."],
          [<code key="5">color</code>, <code key="5t">string</code>, "Lagoon teal", "Primary series color."],
          [<code key="6">colors</code>, <code key="6t">string[]</code>, "built-in palette", "Palette for pie, donut, funnel and treemap."],
          [<code key="7">variant</code>, <code key="7t">&apos;flat&apos; | &apos;pixel&apos; | &apos;3d&apos;</code>, <code key="7d">&apos;flat&apos;</code>, "See Styles."],
          [<code key="8">animate</code>, <code key="8t">boolean</code>, <code key="8d">true</code>, "Reduced-motion preferences always win."],
          [<code key="9">formatValue</code>, <code key="9t">(value: number) =&gt; string</code>, <code key="9d">Intl.NumberFormat</code>, "Applies to labels, captions and tables."],
          [<code key="10">className</code>, <code key="10t">string</code>, "none", "Added to the chart root."],
        ]}
      />
      <p><code>Histogram</code> also takes <code>bins</code>. <code>WaterfallChart</code> also takes <code>negativeColor</code>.</p>

      <h2>TypeScript</h2>
      <p>
        Prop types are exported: <code>ChartProps</code>, <code>CategoryChartProps</code>, <code>HistogramProps</code>, <code>ScatterChartProps</code>, <code>BubbleChartProps</code>, <code>HeatmapProps</code>, <code>WaterfallChartProps</code>, plus <code>ChartKind</code>, <code>ChartVariant</code> and the datum types <code>Datum</code>, <code>Point</code>, <code>Bubble</code>, <code>HeatmapCell</code>, <code>WaterfallDatum</code>.
      </p>
      <Code code={`import type { Datum, ChartVariant } from 'peakcharts';

const data: Datum[] = [{ label: 'Jan', value: 32 }];
const style: ChartVariant = 'pixel';`} />

      <h2>Helpers</h2>
      <p>Three pure functions are exported for drawing your own marks: <code>histogram</code>, <code>treemap</code> and <code>waterfall</code>.</p>
    </>
  );
}
