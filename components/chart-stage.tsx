"use client";

import { useState } from "react";
import { Chart, type ChartProps, type ChartVariant } from "peakcharts";
import { bySlug, oneLiner } from "@/lib/charts";
import { PillNav } from "@ashutoshswamy/smoui";
import { CopyButton } from "./copy-button";

const variants = [
  { id: "flat", label: "Flat" },
  { id: "pixel", label: "Pixel" },
  { id: "3d", label: "3D" },
];

/** A live chart with a style switch. With several slugs it also switches the chart type. */
export function ChartStage({
  slugs, initial = "flat", height = 280, bare = false,
}: {
  slugs: string[];
  initial?: ChartVariant;
  height?: number;
  bare?: boolean;
}) {
  const [slug, setSlug] = useState(slugs[0]);
  const [variant, setVariant] = useState<ChartVariant>(initial);
  const entry = bySlug(slug)!;
  const props = { type: entry.kind, variant, height, ...entry.props } as ChartProps;
  const line = oneLiner(entry, variant);

  return (
    <div className={bare ? "" : "panel p-4 sm:p-5"}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        {slugs.length > 1 ? (
          <div className="no-scrollbar max-w-full overflow-x-auto rounded-full">
            <PillNav
              className="text-sm text-ink"
              items={slugs.map((s) => ({ id: s, label: bySlug(s)!.name }))}
              defaultValue={slug}
              onChange={setSlug}
            />
          </div>
        ) : <span />}
        <PillNav className="text-sm text-ink" items={[...variants]} defaultValue={variant} onChange={(v) => setVariant(v as ChartVariant)} />
      </div>
      <Chart key={`${slug}-${variant}`} {...props} />
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-3">
        <code className="min-w-0 truncate font-mono text-[0.8125rem] text-muted">{line}</code>
        <CopyButton text={line} />
      </div>
    </div>
  );
}
