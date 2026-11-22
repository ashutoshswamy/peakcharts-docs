import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { BugAntIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn, FaNpm, FaXTwitter } from "react-icons/fa6";
import { Wordmark } from "./site-header";
import { site } from "@/lib/site";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const linkClass = "inline-flex items-center gap-2.5 text-muted transition-colors duration-150 hover:text-ink";

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-base font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </nav>
  );
}

const Internal = ({ href, children }: { href: string; children: ReactNode }) => (
  <li><Link href={href} className={linkClass}>{children}</Link></li>
);

const External = ({ href, Icon, children }: { href: string; Icon: Icon; children: ReactNode }) => (
  <li>
    <a href={href} className={linkClass}>
      <Icon className="size-[1.125rem] shrink-0" aria-hidden />
      {children}
    </a>
  </li>
);

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-14 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" aria-label="peakcharts home"><Wordmark /></Link>
          <p className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">Less noise. More meaning.</p>
          <p className="mt-3 max-w-[38ch] text-muted">
            Accessible React charts with purposeful motion. Typed, responsive SVG with keyboard access.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-7">
          <Column title="Docs">
            <Internal href="/docs">Introduction</Internal>
            <Internal href="/docs/installation">Installation</Internal>
            <Internal href="/docs/charts">Charts</Internal>
            <Internal href="/docs/props">Props and types</Internal>
          </Column>
          <Column title="Guides">
            <Internal href="/docs/recipes">Recipes</Internal>
            <Internal href="/docs/styles">Styles</Internal>
            <Internal href="/docs/theming">Theming</Internal>
            <Internal href="/docs/accessibility">Accessibility</Internal>
          </Column>
          <Column title="Project">
            <External href={site.links.npm} Icon={FaNpm}>npm</External>
            <External href={site.links.github} Icon={FaGithub}>Repository</External>
            <External href={site.links.issues} Icon={BugAntIcon}>Issues</External>
          </Column>
          <Column title="Author">
            <External href={site.links.portfolio} Icon={GlobeAltIcon}>Portfolio</External>
            <External href="https://github.com/ashutoshswamy" Icon={FaGithub}>GitHub</External>
            <External href={site.links.linkedin} Icon={FaLinkedinIn}>LinkedIn</External>
            <External href={site.links.x} Icon={FaXTwitter}>X</External>
          </Column>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1280px] px-5 py-5 text-sm text-muted md:px-8">MIT License. Built by Ashutosh Swamy.</p>
      </div>
    </footer>
  );
}
