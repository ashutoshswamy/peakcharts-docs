import type { Metadata } from "next";
import { BarChart } from "peakcharts";
import { Code } from "@/components/code";
import { Table } from "@/components/doc";
import { bySlug } from "@/lib/charts";

export const metadata: Metadata = { title: "Styles", description: "Switch peakcharts chart styles with one prop. Data, axes and data tables stay identical across styles." };
const d = bySlug("bar")!.props;

export default function Page() {
  return (
    <>
      <h1>Styles</h1>
      <p className="lead">One prop switches how a chart is drawn. Data, axes and tables are identical across styles.</p>
      <Code code={`<BarChart title="Revenue" data={data} variant="flat" />
<BarChart title="Revenue" data={data} variant="pixel" />
<BarChart title="Revenue" data={data} variant="3d" />`} />
      <div className="wide my-6 grid gap-4 md:grid-cols-3">
        {(["flat", "pixel", "3d"] as const).map((v) => (
          <figure key={v} className="panel min-w-0 p-4">
            <BarChart title={d.title} data={d.data as never} variant={v} height={220} />
            <figcaption className="mt-2 font-mono text-[0.8125rem] text-muted">variant=&quot;{v}&quot;</figcaption>
          </figure>
        ))}
      </div>
      <Table
        head={["Variant", "Character"]}
        rows={[
          [<code key="f">flat</code>, "The default and the clearest choice for precise comparisons."],
          [<code key="p">pixel</code>, "Square markers and a pixel-grid mask on marks, with smooth text."],
          [<code key="3">3d</code>, "A shallow SVG extrusion. It is a depth treatment, not a WebGL scene, and the data plane never rotates."],
        ]}
      />
    </>
  );
}
