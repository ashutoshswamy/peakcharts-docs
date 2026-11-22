"use client";

import { LineChart } from "peakcharts";

export function FormatDemo() {
  return (
    <LineChart
      title="Monthly revenue"
      height={240}
      data={[
        { label: "Jan", value: 21400 },
        { label: "Feb", value: 24800 },
        { label: "Mar", value: 23900 },
        { label: "Apr", value: 29100 },
        { label: "May", value: 33600 },
      ]}
      formatValue={(v) => `$${(v / 1000).toFixed(1)}k`}
    />
  );
}
