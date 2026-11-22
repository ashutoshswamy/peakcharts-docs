import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChartStage } from "@/components/chart-stage";
import { Code } from "@/components/code";
import { charts, bySlug, exampleCode } from "@/lib/charts";

export function generateStaticParams() {
  return charts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/docs/charts/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = bySlug(slug);
  return c ? { title: c.component, description: c.blurb } : {};
}

export default async function Page({ params }: PageProps<"/docs/charts/[slug]">) {
  const { slug } = await params;
  const c = bySlug(slug);
  if (!c) notFound();

  return (
    <>
      <h1>{c.component}</h1>
      <p className="lead">{c.blurb}</p>
      <div className="wide my-6">
        <ChartStage slugs={[c.slug]} height={300} />
      </div>
      <h2>Usage</h2>
      <Code title={`${c.component}.tsx`} code={exampleCode(c)} />
      <h2>Data</h2>
      <p>
        <code>data</code> takes <code>{c.dataType}</code>. Input arrays are never mutated and order is preserved.
      </p>
      <ul>
        {c.notes.map((n) => (
          <li key={n} dangerouslySetInnerHTML={{ __html: n.replace(/`([^`]+)`/g, "<code>$1</code>") }} />
        ))}
      </ul>
      <p>
        Every chart also accepts <Link href="/docs/props">the common props</Link>: <code>description</code>, <code>height</code>, <code>color</code>, <code>variant</code>, <code>animate</code>, <code>formatValue</code> and <code>className</code>.
      </p>
    </>
  );
}
