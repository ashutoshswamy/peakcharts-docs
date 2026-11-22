import { charts, groups } from "./charts";

export type NavItem = { href: string; label: string };
export type NavGroup = { label?: string; items: NavItem[] };
export type NavSection = { title: string; groups: NavGroup[] };

export const nav: NavSection[] = [
  {
    title: "Getting started",
    groups: [{
      items: [
        { href: "/docs", label: "Introduction" },
        { href: "/docs/installation", label: "Installation" },
        { href: "/docs/recipes", label: "Recipes" },
      ],
    }],
  },
  {
    title: "Charts",
    groups: [
      { items: [{ href: "/docs/charts", label: "All charts" }] },
      ...groups.map((g) => ({
        label: g,
        items: charts.filter((c) => c.group === g).map((c) => ({ href: `/docs/charts/${c.slug}`, label: c.name })),
      })),
    ],
  },
  {
    title: "Guides",
    groups: [{
      items: [
        { href: "/docs/styles", label: "Styles" },
        { href: "/docs/interaction", label: "Interaction" },
        { href: "/docs/theming", label: "Theming" },
        { href: "/docs/accessibility", label: "Accessibility" },
      ],
    }],
  },
  {
    title: "Reference",
    groups: [{
      items: [
        { href: "/docs/props", label: "Props and types" },
        { href: "/docs/troubleshooting", label: "Troubleshooting" },
      ],
    }],
  },
];

export const flat: NavItem[] = nav.flatMap((s) => s.groups.flatMap((g) => g.items));
