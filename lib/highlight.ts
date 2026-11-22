import { cacheLife } from "next/cache";
import { codeToHtml } from "shiki";

/** Cached so shiki's internal timers don't run during prerender. */
export async function highlight(code: string, lang: string) {
  "use cache";
  cacheLife("max");
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
}
