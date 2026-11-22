import Link from "next/link";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaNpm } from "react-icons/fa6";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5 font-display text-xl font-[650] tracking-[-0.03em]">
      <span className="grid size-8 place-items-center rounded-[10px] bg-brand text-brand-ink">
        <ChartBarIcon className="size-5" aria-hidden />
      </span>
      peakcharts
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="peakcharts home"><Wordmark /></Link>
          <div className="hidden md:block"><MainNav /></div>
        </div>
        <div className="flex items-center gap-1">
          <a href={site.links.github} className="icon-btn" aria-label="peakcharts on GitHub"><FaGithub className="size-5" aria-hidden /></a>
          <a href={site.links.npm} className="icon-btn" aria-label="peakcharts on npm"><FaNpm className="size-6" aria-hidden /></a>
          <ThemeToggle />
        </div>
      </div>
      <div className="no-scrollbar flex justify-center overflow-x-auto border-t border-line px-5 py-2 md:hidden">
        <MainNav />
      </div>
    </header>
  );
}
