import { DocPager, DocsMenuBar, DocsNav } from "@/components/docs-nav";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="mx-auto grid max-w-[1280px] gap-x-12 px-5 md:px-8 grid-cols-[minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside className="hidden lg:sticky lg:top-16 lg:block lg:max-h-[calc(100dvh-4rem)] lg:self-start no-scrollbar lg:overflow-y-auto lg:py-10 lg:pr-1">
        <DocsNav />
      </aside>
      <div className="min-w-0">
        <DocsMenuBar />
        <main className="doc pb-8 pt-8 lg:pt-12">
          {children}
          <DocPager />
        </main>
      </div>
    </div>
  );
}
