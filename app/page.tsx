import type { Metadata } from "next";
import Link from "next/link";
import { BarChart, DonutChart, HeatmapChart, LineChart, WaterfallChart } from "peakcharts";
import {
  CodeBracketSquareIcon, CursorArrowRaysIcon, ExclamationTriangleIcon, LanguageIcon,
  PauseCircleIcon, ServerStackIcon, SwatchIcon, TableCellsIcon,
} from "@heroicons/react/24/outline";
import { ChartStage } from "@/components/chart-stage";
import { Code } from "@/components/code";
import { CopyCommand } from "@ashutoshswamy/smoui";
import { bySlug } from "@/lib/charts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "peakcharts: accessible React chart library" },
  description: "peakcharts is an accessible React chart library: 17 chart types, keyboard navigation, data tables and reduced-motion support. Install with npm.",
};

const heroKinds = ["bar", "line", "donut", "waterfall", "heatmap"];
const wf = bySlug("waterfall")!.props;
const dn = bySlug("donut")!.props;
const hm = bySlug("heatmap")!.props;
const ln = bySlug("line")!.props;
const br = bySlug("bar")!.props;

const features = [
  { Icon: CursorArrowRaysIcon, title: "Keyboard ready", text: "Every mark is a keyboard target with a visible focus ring." },
  { Icon: TableCellsIcon, title: "Data tables", text: "A collapsible HTML table carries the same values as the chart." },
  { Icon: PauseCircleIcon, title: "Motion that stops", text: "Geometry draws in once. Reduced-motion preferences always win." },
  { Icon: ExclamationTriangleIcon, title: "Honest errors", text: "Bad data shows a visible error, never a misleading chart." },
  { Icon: SwatchIcon, title: "Themeable", text: "Light and dark are built in. Everything else is a CSS variable." },
  { Icon: CodeBracketSquareIcon, title: "Typed", text: "Written in TypeScript with declarations for every component." },
  { Icon: LanguageIcon, title: "Self-hosted font", text: "DM Sans ships in the bundle, so nothing calls Google Fonts." },
  { Icon: ServerStackIcon, title: "Server rendering", text: "Charts render on the server and work in the App Router." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 pt-12 md:px-8 lg:grid-cols-12 lg:gap-12 lg:pt-16">
        <div className="lg:col-span-5">
          <h1 className="font-display text-[clamp(2.5rem,5.2vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Accessible React charts with purposeful motion.
          </h1>
          <p className="mt-5 max-w-[34ch] text-lg text-muted">
            Seventeen chart types, three styles, and a data table behind every chart. A React chart library built for keyboards, screen readers and reduced motion.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/docs/installation" className="btn btn-primary">Get started</Link>
            <CopyCommand command={site.install} className="text-ink" />
          </div>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <ChartStage slugs={heroKinds} initial="pixel" height={260} />
        </div>
      </section>

      {/* Showcase */}
      <section className="mx-auto mt-28 max-w-[1280px] px-5 md:px-8">
        <h2 className="max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.025em]">
          Seventeen charts, one shape of data
        </h2>
        <p className="mt-3 max-w-[60ch] text-lg text-muted">
          Most charts take a list of labels and values. Pass it in, pick a style, and every chart draws itself once.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <figure className="panel p-5 md:col-span-7">
            <WaterfallChart title={wf.title} data={wf.data as never} height={230} />
            <figcaption className="mt-3 text-sm text-muted"><Link href="/docs/charts/waterfall" className="link-quiet">WaterfallChart</Link> shows running balances from an opening to a closing total.</figcaption>
          </figure>
          <figure className="panel bg-wash p-5 md:col-span-5">
            <DonutChart title={dn.title} data={dn.data as never} variant="3d" height={230} />
            <figcaption className="mt-3 text-sm text-muted"><Link href="/docs/charts/donut" className="link-quiet">DonutChart</Link> in the 3D style, with the same table behind it.</figcaption>
          </figure>
          <figure className="panel bg-sunken p-5 md:col-span-5">
            <HeatmapChart title={hm.title} data={hm.data as never} variant="pixel" height={230} />
            <figcaption className="mt-3 text-sm text-muted"><Link href="/docs/charts/heatmap" className="link-quiet">HeatmapChart</Link> in the pixel style.</figcaption>
          </figure>
          <figure className="panel p-5 md:col-span-4">
            <LineChart title={ln.title} data={ln.data as never} height={230} />
            <figcaption className="mt-3 text-sm text-muted"><Link href="/docs/charts/line" className="link-quiet">LineChart</Link> for trends.</figcaption>
          </figure>
          <Link
            href="/docs/charts"
            className="group flex flex-col justify-between gap-6 rounded-[var(--radius-panel)] bg-accent p-6 text-on-accent transition-colors duration-150 hover:bg-accent-ink md:col-span-3"
          >
            <span className="font-display text-3xl font-bold leading-tight tracking-tight">Browse all 17 charts</span>
            <span className="text-sm opacity-90">Live examples, data shapes and notes for each one.</span>
          </Link>
        </div>
      </section>

      {/* Pin and table */}
      <section className="mx-auto mt-28 grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-7">
          <div className="panel p-5">
            <BarChart title={br.title} data={br.data as never} height={300} />
          </div>
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.025em]">
            Read any value, then keep it
          </h2>
          <p className="mt-3 max-w-[48ch] text-lg text-muted">
            Hover or focus a mark to read it. Click to pin it while you look elsewhere. Every chart has a table with the same numbers.
          </p>
          <dl className="mt-6 space-y-3">
            {[
              ["Hover or focus", "Shows the value."],
              ["Click, tap, Enter or Space", "Pins it. Hovering other marks will not replace it."],
              ["Escape", "Clears the pin."],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-4">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto mt-28 grid max-w-[1280px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.025em]">
            Accessible by default
          </h2>
          <p className="mt-3 max-w-[40ch] text-lg text-muted">Not a layer you add later. It is how the charts are drawn.</p>
        </div>
        <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:col-span-8">
          {features.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <Icon className="mt-0.5 size-6 shrink-0 text-accent-ink" aria-hidden />
              <div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick start */}
      <section className="mx-auto mt-28 grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 lg:col-span-6">
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.025em]">
            Install, import, render
          </h2>
          <div className="my-6"><CopyCommand command={site.install} className="text-ink" /></div>
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
          <p className="text-muted">React, React DOM and Motion are peer dependencies. Requires React 18 or newer.</p>
        </div>
        <div className="min-w-0 lg:col-span-6">
          <div className="panel p-5">
            <BarChart
              title="Revenue by month"
              data={[
                { label: "Jan", value: 32 },
                { label: "Feb", value: 46 },
                { label: "Mar", value: 63 },
              ]}
              height={260}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
