import type { Metadata } from "next";
import Link from "next/link";
import { Table } from "@/components/doc";
import { charts, groups } from "@/lib/charts";

export const metadata: Metadata = { title: "All charts", description: "All 17 peakcharts React chart types: bar, line, donut, waterfall, heatmap and more, with live examples and code." };

export default function Page() {
  return (
    <>
      <h1>All charts</h1>
      <p className="lead">
        Seventeen components, grouped by the question they answer. Each page has a live example you can restyle, the source, and the shape of data it takes.
      </p>
      {groups.map((g) => (
        <section key={g}>
          <h2>{g}</h2>
          <Table
            head={["Component", "Use it for", "Data"]}
            rows={charts
              .filter((c) => c.group === g)
              .map((c) => [
                <Link key={c.slug} href={`/docs/charts/${c.slug}`}><code>{c.component}</code></Link>,
                c.blurb,
                <code key="d">{c.dataType}</code>,
              ])}
          />
        </section>
      ))}
      <h2>The generic Chart component</h2>
      <p>
        <code>Chart</code> takes the same props as the others plus a <code>type</code>, which is handy when the kind of chart is decided at runtime.
      </p>
    </>
  );
}
