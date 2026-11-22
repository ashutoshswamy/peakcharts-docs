import type { Metadata } from "next";
import { BarChart } from "peakcharts";
import { Panel, Table } from "@/components/doc";
import { bySlug } from "@/lib/charts";

export const metadata: Metadata = { title: "Interaction", description: "How peakcharts handles hover, tap and keyboard interaction to read values and pin them on screen." };
const d = bySlug("bar")!.props;

export default function Page() {
  return (
    <>
      <h1>Interaction</h1>
      <p className="lead">Reading a value and keeping it on screen use the same gestures for mouse, touch and keyboard.</p>
      <Table
        head={["Gesture", "Result"]}
        rows={[
          [<><strong>Hover</strong> or <strong>focus</strong> a mark</>, "Shows its value."],
          [<><strong>Click</strong>, <strong>tap</strong>, <strong>Enter</strong> or <strong>Space</strong></>, "Pins the value. Hovering other marks does not replace it."],
          ["Activate the pinned mark again", "Releases the pin."],
          [<strong key="e">Escape</strong>, "Clears the pin."],
        ]}
      />
      <Panel><BarChart title={d.title} data={d.data as never} height={260} /></Panel>
      <p>Try it above. Funnel and treemap print each value on the chart. Keyboard focus is always visible, and pointer clicks do not draw a focus ring.</p>
    </>
  );
}
