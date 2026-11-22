import type { Metadata } from "next";
import { AreaChart, DonutChart, Histogram, HeatmapChart, WaterfallChart } from "peakcharts";
import { Code } from "@/components/code";
import { Panel } from "@/components/doc";
import { FormatDemo } from "@/components/format-demo";
import { bySlug } from "@/lib/charts";

export const metadata: Metadata = { title: "Recipes", description: "Short recipes for common peakcharts tasks: formatting values, colors, sizes and the first things people change." };
const area = bySlug("area")!.props;
const hist = bySlug("histogram")!.props;
const wf = bySlug("waterfall")!.props;
const hm = bySlug("heatmap")!.props;

export default function Page() {
  return (
    <>
      <h1>Recipes</h1>
      <p className="lead">Short answers to the things people change first.</p>

      <h2>Format values</h2>
      <Code code={`<LineChart
  title="Monthly revenue"
  data={data}
  formatValue={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`} />
      <Panel><FormatDemo /></Panel>
      <p><code>formatValue</code> applies to axis labels, on-chart values, pinned captions and the data table.</p>

      <h2>Custom colors</h2>
      <Code code={`<BarChart title="Revenue" data={data} color="#397766" />

<DonutChart
  title="Traffic sources"
  data={data}
  colors={['#087f8c', '#4f77c8', '#d28b41']}
/>

// or per datum
<PieChart title="Devices" data={[{ label: 'Desktop', value: 54, color: '#087f8c' }]} />`} />
      <Panel>
        <DonutChart
          title="Traffic sources"
          height={240}
          colors={["#087f8c", "#4f77c8", "#d28b41"]}
          data={[
            { label: "Organic", value: 46 },
            { label: "Direct", value: 31 },
            { label: "Referral", value: 23 },
          ]}
        />
      </Panel>
      <p><code>color</code> sets the primary series. Pie, donut, funnel and treemap take <code>colors</code>, or a <code>color</code> on each datum.</p>

      <h2>Histograms</h2>
      <Code code={`<Histogram title="Session duration" data={[12, 18, 18, 24, 31, 33, 47]} bins={6} />`} />
      <Panel><Histogram title={hist.title} data={hist.data as never} bins={hist.bins} height={240} /></Panel>
      <p>The largest sample lands in the final bin. Identical samples use a padded domain. The <code>histogram</code> helper returns the bins (<code>lower</code>, <code>upper</code>, <code>label</code>, <code>value</code>) if you want to draw your own.</p>

      <h2>Waterfall</h2>
      <p>Values are signed changes to a running balance. Set <code>total: true</code> on a bar to treat it as an absolute balance measured from zero, such as an opening, subtotal or closing bar.</p>
      <Code code={`<WaterfallChart
  title="Revenue bridge"
  data={[
    { label: 'Opening', value: 240, total: true },
    { label: 'Sales', value: 160 },
    { label: 'Refunds', value: -48 },
    { label: 'Closing', value: 352, total: true },
  ]}
  negativeColor="#c2410c"
/>`} />
      <Panel><WaterfallChart title={wf.title} data={wf.data as never} height={240} /></Panel>
      <p><code>negativeColor</code> overrides the decline color. The data table and pinned caption include running balances. The <code>waterfall</code> helper returns steps with <code>start</code> and <code>end</code> balances.</p>

      <h2>Heatmap</h2>
      <Code code={`<HeatmapChart
  title="Activity"
  data={[
    { x: 'Mon', y: 'Morning', value: 12 },
    { x: 'Tue', y: 'Morning', value: 28 },
  ]}
/>`} />
      <Panel><HeatmapChart title={hm.title} data={hm.data as never} height={240} /></Panel>
      <p>A missing pair renders blank, while an explicit <code>0</code> renders a low-intensity cell. Duplicate pairs and non-finite values are rejected.</p>

      <h2>Turn animation off</h2>
      <Code code={`<AreaChart title="Visits" data={data} animate={false} />`} />
      <Panel><AreaChart title={area.title} data={area.data as never} animate={false} height={220} /></Panel>
      <p>Reduced-motion preferences always win, even when <code>animate</code> is true.</p>

      <h2>Dark mode</h2>
      <Code code={`<div data-theme="dark">
  <BarChart title="Revenue" data={data} />
</div>`} />
      <p>See <a href="/docs/theming">Theming</a> for toggling it from your own theme logic.</p>
    </>
  );
}
