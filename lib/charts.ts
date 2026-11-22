import type { ChartKind } from "peakcharts";

export type ChartEntry = {
  slug: string;
  kind: ChartKind;
  component: string;
  name: string;
  group: "Comparison" | "Trends" | "Parts of a whole" | "Distribution";
  blurb: string;
  dataType: string;
  notes: string[];
  props: { title: string; data: unknown; bins?: number };
};

const monthly = [
  { label: "Jan", value: 32 },
  { label: "Feb", value: 46 },
  { label: "Mar", value: 63 },
  { label: "Apr", value: 58 },
  { label: "May", value: 71 },
  { label: "Jun", value: 84 },
];

export const charts: ChartEntry[] = [
  {
    slug: "bar", kind: "bar", component: "BarChart", name: "Bar", group: "Comparison",
    blurb: "Compare one value across a handful of categories.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Order is preserved. Negative values are allowed.", "Set `color` on a datum to override a single bar."],
    props: { title: "Revenue by month", data: monthly },
  },
  {
    slug: "horizontal-bar", kind: "horizontal-bar", component: "HorizontalBarChart", name: "Horizontal bar", group: "Comparison",
    blurb: "Bars on their side, for long labels and ranked lists.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Prefer this over BarChart when labels would collide on the x axis."],
    props: {
      title: "Signups by channel",
      data: [
        { label: "Search", value: 412 },
        { label: "Referral", value: 268 },
        { label: "Social", value: 191 },
        { label: "Email", value: 143 },
        { label: "Direct", value: 97 },
      ],
    },
  },
  {
    slug: "lollipop", kind: "lollipop", component: "LollipopChart", name: "Lollipop", group: "Comparison",
    blurb: "A lighter bar chart: a stem and a dot per category.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Reads well when many values are close together."],
    props: {
      title: "Tickets closed by agent",
      data: [
        { label: "Mara", value: 48 },
        { label: "Devin", value: 41 },
        { label: "Yuki", value: 37 },
        { label: "Tomas", value: 29 },
        { label: "Priya", value: 22 },
      ],
    },
  },
  {
    slug: "waterfall", kind: "waterfall", component: "WaterfallChart", name: "Waterfall", group: "Comparison",
    blurb: "Show how a starting balance becomes an ending one.",
    dataType: "{ label: string; value: number; total?: boolean; color?: string }[]",
    notes: [
      "Values are signed changes to a running balance.",
      "Set `total: true` to treat a bar as an absolute balance from zero, such as an opening, subtotal or closing bar.",
      "Use `negativeColor` to change the decline color. The data table and pinned caption include running balances.",
    ],
    props: {
      title: "Revenue bridge",
      data: [
        { label: "Opening", value: 240, total: true },
        { label: "Sales", value: 160 },
        { label: "Refunds", value: -48 },
        { label: "Upsell", value: 72 },
        { label: "Churn", value: -35 },
        { label: "Closing", value: 389, total: true },
      ],
    },
  },
  {
    slug: "funnel", kind: "funnel", component: "FunnelChart", name: "Funnel", group: "Comparison",
    blurb: "Track how many people make it through each stage.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Values must be non-negative.", "Each value is printed on the chart.", "Takes `colors`, or a `color` on each datum."],
    props: {
      title: "Checkout funnel",
      data: [
        { label: "Visited", value: 8400 },
        { label: "Added to cart", value: 3150 },
        { label: "Started checkout", value: 1720 },
        { label: "Paid", value: 1086 },
      ],
    },
  },
  {
    slug: "line", kind: "line", component: "LineChart", name: "Line", group: "Trends",
    blurb: "A value moving through an ordered sequence.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Each chart draws one series on a category axis. There is no time scale yet."],
    props: {
      title: "Weekly active users",
      data: [
        { label: "W1", value: 1240 },
        { label: "W2", value: 1385 },
        { label: "W3", value: 1362 },
        { label: "W4", value: 1604 },
        { label: "W5", value: 1718 },
        { label: "W6", value: 1693 },
        { label: "W7", value: 1921 },
      ],
    },
  },
  {
    slug: "step", kind: "step", component: "StepChart", name: "Step", group: "Trends",
    blurb: "For values that hold steady and then jump.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Good for plans, limits and anything that changes at discrete moments."],
    props: {
      title: "Seats provisioned",
      data: [
        { label: "Jan", value: 12 },
        { label: "Feb", value: 12 },
        { label: "Mar", value: 18 },
        { label: "Apr", value: 18 },
        { label: "May", value: 18 },
        { label: "Jun", value: 26 },
        { label: "Jul", value: 26 },
      ],
    },
  },
  {
    slug: "area", kind: "area", component: "AreaChart", name: "Area", group: "Trends",
    blurb: "A line with the volume underneath it filled in.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["There is no stacking. Each chart draws a single series."],
    props: {
      title: "Daily visits",
      data: [
        { label: "Mon", value: 820 },
        { label: "Tue", value: 934 },
        { label: "Wed", value: 1102 },
        { label: "Thu", value: 987 },
        { label: "Fri", value: 1210 },
        { label: "Sat", value: 640 },
        { label: "Sun", value: 575 },
      ],
    },
  },
  {
    slug: "pie", kind: "pie", component: "PieChart", name: "Pie", group: "Parts of a whole",
    blurb: "Share of a whole, best with three to five slices.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Values must be non-negative.", "Takes `colors`, or a `color` on each datum."],
    props: {
      title: "Devices",
      data: [
        { label: "Desktop", value: 54 },
        { label: "Mobile", value: 33 },
        { label: "Tablet", value: 13 },
      ],
    },
  },
  {
    slug: "donut", kind: "donut", component: "DonutChart", name: "Donut", group: "Parts of a whole",
    blurb: "A pie with the middle cut out, so the labels have room.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Values must be non-negative.", "Takes `colors`, or a `color` on each datum."],
    props: {
      title: "Traffic sources",
      data: [
        { label: "Organic", value: 46 },
        { label: "Direct", value: 24 },
        { label: "Referral", value: 18 },
        { label: "Paid", value: 12 },
      ],
    },
  },
  {
    slug: "treemap", kind: "treemap", component: "TreemapChart", name: "Treemap", group: "Parts of a whole",
    blurb: "Nested rectangles sized by value, for many parts of a whole.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Values must be non-negative.", "Each value is printed on the chart. The `treemap` helper returns the tiles if you want to draw your own."],
    props: {
      title: "Storage by folder (GB)",
      data: [
        { label: "Media", value: 412 },
        { label: "Backups", value: 268 },
        { label: "Projects", value: 174 },
        { label: "Logs", value: 91 },
        { label: "Archive", value: 56 },
      ],
    },
  },
  {
    slug: "radial", kind: "radial", component: "RadialChart", name: "Radial", group: "Parts of a whole",
    blurb: "Progress toward a goal, drawn as concentric arcs.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Values must be non-negative."],
    props: {
      title: "Goal progress",
      data: [
        { label: "Sales", value: 72 },
        { label: "Support", value: 88 },
        { label: "Hiring", value: 41 },
        { label: "Launch", value: 63 },
      ],
    },
  },
  {
    slug: "histogram", kind: "histogram", component: "Histogram", name: "Histogram", group: "Distribution",
    blurb: "How a set of raw numbers is spread out.",
    dataType: "number[]",
    notes: [
      "`bins` is an integer from 1 to 100 and defaults to 8.",
      "The largest sample lands in the final bin. Identical samples use a padded domain.",
      "The `histogram` helper returns the bins (`lower`, `upper`, `label`, `value`) if you want to draw your own.",
    ],
    props: {
      title: "Session duration (minutes)",
      data: [12, 18, 18, 24, 31, 33, 47, 9, 15, 22, 26, 28, 35, 41, 52, 14, 19, 23, 29, 30, 38, 44, 16, 21, 25, 27, 32, 36, 49, 21, 24],
      bins: 6,
    },
  },
  {
    slug: "scatter", kind: "scatter", component: "ScatterChart", name: "Scatter", group: "Distribution",
    blurb: "Two measures per item, to spot clusters and outliers.",
    dataType: "{ x: number; y: number; label?: string }[]",
    notes: ["A `label` is optional and shows up in captions and the data table."],
    props: {
      title: "Price against rating",
      data: [
        { x: 12, y: 3.8, label: "Starter" },
        { x: 18, y: 4.1, label: "Basic" },
        { x: 24, y: 3.9, label: "Plus" },
        { x: 29, y: 4.4, label: "Pro" },
        { x: 35, y: 4.2, label: "Team" },
        { x: 41, y: 4.6, label: "Studio" },
        { x: 48, y: 4.5, label: "Scale" },
        { x: 56, y: 4.8, label: "Enterprise" },
        { x: 21, y: 3.4, label: "Legacy" },
      ],
    },
  },
  {
    slug: "bubble", kind: "bubble", component: "BubbleChart", name: "Bubble", group: "Distribution",
    blurb: "A scatter plot where a third measure sets the size.",
    dataType: "{ x: number; y: number; size: number; label?: string }[]",
    notes: ["`size` must not be negative."],
    props: {
      title: "Markets by revenue and growth",
      data: [
        { x: 42, y: 8.5, size: 1200, label: "Nordics" },
        { x: 68, y: 5.1, size: 3100, label: "DACH" },
        { x: 31, y: 12.4, size: 640, label: "Iberia" },
        { x: 84, y: 3.2, size: 4800, label: "UK" },
        { x: 22, y: 15.8, size: 380, label: "Baltics" },
      ],
    },
  },
  {
    slug: "heatmap", kind: "heatmap", component: "HeatmapChart", name: "Heatmap", group: "Distribution",
    blurb: "Intensity across two categories, such as day and time.",
    dataType: "{ x: string; y: string; value: number }[]",
    notes: [
      "Columns (`x`) and rows (`y`) appear in first-occurrence order.",
      "Intensity follows one shared scale with low and high labels.",
      "A missing pair renders blank, while an explicit `0` renders a low-intensity cell. Duplicate pairs and non-finite values are rejected.",
    ],
    props: {
      title: "Activity",
      data: ["Morning", "Afternoon", "Evening"].flatMap((y, r) =>
        ["Mon", "Tue", "Wed", "Thu", "Fri"].map((x, c) => ({
          x,
          y,
          value: [12, 28, 34, 19, 8, 22, 41, 47, 38, 25, 9, 14, 21, 17, 30][r * 5 + c],
        })),
      ),
    },
  },
  {
    slug: "radar", kind: "radar", component: "RadarChart", name: "Radar", group: "Distribution",
    blurb: "Compare one subject across several dimensions at once.",
    dataType: "{ label: string; value: number; color?: string }[]",
    notes: ["Values must be non-negative.", "Needs at least three categories."],
    props: {
      title: "Team skills",
      data: [
        { label: "Design", value: 7 },
        { label: "Frontend", value: 9 },
        { label: "Backend", value: 6 },
        { label: "Testing", value: 5 },
        { label: "Docs", value: 8 },
        { label: "Ops", value: 4 },
      ],
    },
  },
];

export const bySlug = (slug: string) => charts.find((c) => c.slug === slug);

export const groups = ["Comparison", "Trends", "Parts of a whole", "Distribution"] as const;

const lit = (v: unknown): string => {
  if (typeof v === "string") return `'${v.replace(/'/g, "\\'")}'`;
  if (Array.isArray(v)) return `[${v.map(lit).join(", ")}]`;
  if (v && typeof v === "object")
    return `{ ${Object.entries(v).map(([k, x]) => `${k}: ${lit(x)}`).join(", ")} }`;
  return String(v);
};

/** Builds the example source from the same props the live chart renders, so they cannot drift. */
export function exampleCode(c: ChartEntry, variant?: string): string {
  const data = c.props.data as unknown[];
  const rows = Array.isArray(data) && typeof data[0] === "object"
    ? `[\n${data.map((d) => `  ${lit(d)},`).join("\n")}\n]`
    : lit(data);
  const extra = [
    c.props.bins ? ` bins={${c.props.bins}}` : "",
    variant && variant !== "flat" ? ` variant="${variant}"` : "",
  ].join("");
  return `import { ${c.component} } from 'peakcharts';\nimport 'peakcharts/styles.css';\n\nconst data = ${rows};\n\nexport default function Example() {\n  return <${c.component} title="${c.props.title}" data={data}${extra} />;\n}`;
}

export const oneLiner = (c: ChartEntry, variant: string) =>
  `<${c.component} title="${c.props.title}" data={data}${c.props.bins ? ` bins={${c.props.bins}}` : ""}${variant !== "flat" ? ` variant="${variant}"` : ""} />`;
