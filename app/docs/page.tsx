import type { Metadata } from "next";
import Link from "next/link";
import { Table } from "@/components/doc";

export const metadata: Metadata = { title: "Introduction", description: "Introduction to peakcharts: accessible React charts with keyboard support, data tables and reduced-motion handling." };

export default function Page() {
  return (
    <>
      <h1>Introduction</h1>
      <p className="lead">
        peakcharts is a React chart library for people who need charts that are readable, keyboard friendly and calm. Pass in labels and values, and get an accessible SVG chart with a data table behind it.
      </p>
      <Table
        head={["Feature", "What you get"]}
        rows={[
          [<strong key="a">Seventeen chart types</strong>, "Bar, line, area, pie, donut, histogram, scatter, bubble, radar, radial, waterfall, heatmap, funnel, treemap and more."],
          [<strong key="b">Three styles, one API</strong>, <>Flat, pixel and 3D depth share the same data, axes and tables. Switch with a single <code>variant</code> prop.</>],
          [<strong key="c">Pinnable values</strong>, "Hover, focus or tap a mark to read it. Pin it, and hovering elsewhere will not replace it."],
          [<strong key="d">Data tables included</strong>, "Every chart has a collapsible HTML table with the same values."],
          [<strong key="e">Motion that stops</strong>, <>Geometry draws in once. <code>prefers-reduced-motion</code> turns it off, or pass <code>animate=&#123;false&#125;</code>.</>],
          [<strong key="f">Themeable</strong>, "Light and dark out of the box. Everything else is a CSS variable."],
          [<strong key="g">Typed</strong>, "Written in TypeScript, with declarations for every component and helper."],
          [<strong key="h">Self-hosted fonts</strong>, "DM Sans is bundled, so there is no request to Google Fonts."],
        ]}
      />
      <h2>Where to go next</h2>
      <ul>
        <li><Link href="/docs/installation">Installation</Link> gets a first chart on screen in two minutes.</li>
        <li><Link href="/docs/charts">All charts</Link> lists every component with a live example and its data shape.</li>
        <li><Link href="/docs/props">Props and types</Link> is the full reference.</li>
        <li><Link href="/docs/theming">Theming</Link> covers dark mode and the CSS variables.</li>
      </ul>
    </>
  );
}
