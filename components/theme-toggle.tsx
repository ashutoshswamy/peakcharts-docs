"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { CheckIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

type Pref = "light" | "dark" | "system";

const options = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: ComputerDesktopIcon },
] as const;

const apply = (p: Pref) => {
  const dark = p === "dark" || (p === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
};

const listeners = new Set<() => void>();
const read = (): Pref => {
  try {
    const s = localStorage.getItem("pc-theme");
    return s === "light" || s === "dark" ? s : "system";
  } catch {
    return "system";
  }
};
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  addEventListener("storage", cb);
  return () => { listeners.delete(cb); removeEventListener("storage", cb); };
};

export function ThemeToggle() {
  const pref = useSyncExternalStore(subscribe, read, () => "system" as Pref);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);

  // "System" follows the OS live.
  useEffect(() => {
    if (pref !== "system") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => apply("system");
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [pref]);

  // Close on outside press; move focus into the menu when it opens.
  useEffect(() => {
    if (!open) return;
    items.current[options.findIndex((o) => o.value === pref)]?.focus();
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open, pref]);

  const choose = (p: Pref) => {
    apply(p);
    try {
      if (p === "system") localStorage.removeItem("pc-theme");
      else localStorage.setItem("pc-theme", p);
    } catch {}
    listeners.forEach((f) => f());
    setOpen(false);
    button.current?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const i = items.current.findIndex((el) => el === document.activeElement);
    const go = (n: number) => { e.preventDefault(); items.current[(n + options.length) % options.length]?.focus(); };
    if (e.key === "ArrowDown") go(i + 1);
    else if (e.key === "ArrowUp") go(i - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(options.length - 1);
    else if (e.key === "Escape") { setOpen(false); button.current?.focus(); }
    else if (e.key === "Tab") setOpen(false);
  };

  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        type="button"
        className="icon-btn"
        aria-label="Theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => { if (e.key === "ArrowDown" && !open) { e.preventDefault(); setOpen(true); } }}
      >
        <SunIcon className="size-5 dark:hidden" aria-hidden />
        <MoonIcon className="hidden size-5 dark:block" aria-hidden />
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Theme"
          onKeyDown={onKeyDown}
          className="panel absolute right-0 top-full z-50 mt-2 w-44 p-1 shadow-[0_12px_32px_-12px_color-mix(in_srgb,var(--ink)_35%,transparent)]"
        >
          {options.map(({ value, label, Icon }, i) => (
            <button
              key={value}
              ref={(el) => { items.current[i] = el; }}
              type="button"
              role="menuitemradio"
              aria-checked={pref === value}
              tabIndex={-1}
              onClick={() => choose(value)}
              className="flex w-full items-center gap-2.5 rounded-[calc(var(--radius-control)-2px)] px-3 py-2 text-left text-[0.9375rem] text-ink transition-colors duration-150 hover:bg-sunken focus-visible:bg-sunken"
            >
              <Icon className="size-5 text-muted" aria-hidden />
              <span className="flex-1">{label}</span>
              {pref === value && <CheckIcon className="size-4 text-accent-ink" aria-hidden />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
