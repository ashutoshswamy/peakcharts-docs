import { highlight } from "@/lib/highlight";
import { CopyButton } from "./copy-button";

export async function Code({ code, lang = "tsx", title }: { code: string; lang?: string; title?: string }) {
  const html = await highlight(code, lang);
  return (
    <figure className="wide panel my-6 overflow-hidden">
      <figcaption className="flex items-center justify-between gap-3 border-b border-line bg-sunken py-1.5 pl-4 pr-2">
        <span className="min-w-0 truncate font-mono text-[0.8125rem] text-muted">{title ?? lang}</span>
        <CopyButton text={code} />
      </figcaption>
      <div className="no-scrollbar overflow-x-auto px-4 py-4" dangerouslySetInnerHTML={{ __html: html }} />
    </figure>
  );
}
