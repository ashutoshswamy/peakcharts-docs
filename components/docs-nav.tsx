"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchInput } from "@ashutoshswamy/smoui";
import {
  ArrowLeftIcon, ArrowRightIcon, Bars3BottomLeftIcon, ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { flat, nav } from "@/lib/nav";

export function DocsNav() {
  const path = usePathname();
  const [query, setQuery] = useState("");
  const [closed, setClosed] = useState<Record<string, boolean>>({});
  const q = query.trim().toLowerCase();

  const sections = nav
    .map((s) => ({
      ...s,
      groups: s.groups
        .map((g) => ({ ...g, items: q ? g.items.filter((i) => i.label.toLowerCase().includes(q)) : g.items }))
        .filter((g) => g.items.length),
    }))
    .filter((s) => s.groups.length);

  return (
    <nav aria-label="Documentation">
      <SearchInput
        collapsible={false}
        width="100%"
        label="Find a page"
        placeholder="Find a page"
        onChange={setQuery}
        className="mb-5 text-ink"
      />

      {sections.length === 0 && <p className="px-1 text-[0.9375rem] text-muted">No pages match &ldquo;{query}&rdquo;.</p>}

      <div className="space-y-1">
        {sections.map((s) => {
          const open = q ? true : !closed[s.title];
          return (
            <section key={s.title}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setClosed((c) => ({ ...c, [s.title]: open }))}
                className="flex w-full items-center justify-between rounded-[var(--radius-control)] px-2 py-1.5 font-display text-[0.9375rem] font-semibold text-ink transition-colors duration-150 hover:bg-sunken"
              >
                {s.title}
                <ChevronDownIcon className={`size-4 text-muted transition-transform duration-150 ${open ? "" : "-rotate-90"}`} aria-hidden />
              </button>
              {open && (
                <div className="mb-3 ml-3 mt-0.5 space-y-2 border-l border-line pl-2">
                  {s.groups.map((g, gi) => (
                    <div key={gi}>
                      {g.label && <h3 className="px-2.5 pb-0.5 pt-1.5 text-[0.8125rem] font-medium text-muted">{g.label}</h3>}
                      <ul>
                        {g.items.map((i) => {
                          const active = path === i.href;
                          return (
                            <li key={i.href}>
                              <Link
                                href={i.href}
                                aria-current={active ? "page" : undefined}
                                className={`block rounded-[var(--radius-control)] px-2.5 py-1.5 text-[0.9375rem] transition-colors duration-150 ${
                                  active ? "bg-wash font-semibold text-accent-ink" : "text-muted hover:bg-sunken hover:text-ink"
                                }`}
                              >
                                {i.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </nav>
  );
}

/** Mobile: a bar under the header that names the current page and opens the full menu. */
export function DocsMenuBar() {
  const path = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === path; // closes by itself when the route changes
  const current = flat.find((i) => i.href === path)?.label ?? "Documentation";
  return (
    <div className="sticky top-[var(--header-h)] z-30 -mx-5 border-b border-line bg-bg/90 px-5 backdrop-blur md:-mx-8 md:px-8 lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpenFor(open ? null : path)}
        className="flex h-12 w-full items-center gap-3 text-left"
      >
        <Bars3BottomLeftIcon className="size-5 text-muted" aria-hidden />
        <span className="flex-1 truncate font-display font-semibold">{current}</span>
        <ChevronDownIcon className={`size-4 text-muted transition-transform duration-150 ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full no-scrollbar max-h-[calc(100dvh-var(--header-h)-3rem)] overflow-y-auto border-b border-line bg-bg px-5 py-4 md:px-8">
          <DocsNav />
        </div>
      )}
    </div>
  );
}

export function DocPager() {
  const path = usePathname();
  const i = flat.findIndex((x) => x.href === path);
  if (i < 0) return null;
  const prev = flat[i - 1];
  const next = flat[i + 1];
  return (
    <div className="mt-16 grid max-w-[70ch] gap-3 sm:grid-cols-2">
      {prev ? (
        <Link href={prev.href} className="pager group">
          <ArrowLeftIcon className="size-5 text-muted" aria-hidden />
          <span><span className="block text-sm text-muted">Previous</span><span className="font-display font-semibold">{prev.label}</span></span>
        </Link>
      ) : <span />}
      {next && (
        <Link href={next.href} className="pager group justify-end text-right sm:col-start-2">
          <span><span className="block text-sm text-muted">Next</span><span className="font-display font-semibold">{next.label}</span></span>
          <ArrowRightIcon className="size-5 text-muted" aria-hidden />
        </Link>
      )}
    </div>
  );
}
