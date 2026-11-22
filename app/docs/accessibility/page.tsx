import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accessibility", description: "Accessibility built into peakcharts: keyboard navigation, focus rings, data tables and reduced motion." };

export default function Page() {
  return (
    <>
      <h1>Accessibility</h1>
      <p className="lead">Charts are easy to get wrong for people who cannot see them or cannot use a mouse. These behaviors are built in.</p>
      <ul>
        <li>Each chart is labelled by its <code>title</code>, with an optional <code>description</code>.</li>
        <li>Marks are keyboard targets and expose their value to assistive technology.</li>
        <li>Every chart has a collapsible HTML data table with the same values, including running balances for waterfalls.</li>
        <li>Animation respects <code>prefers-reduced-motion</code>, including SVG drawing.</li>
        <li>Invalid input renders a visible error instead of a misleading chart.</li>
      </ul>
      <h2>Browser support</h2>
      <p>Modern evergreen browsers. Charts are plain SVG styled with CSS variables, so there is no canvas or WebGL requirement.</p>
    </>
  );
}
