import type { MetadataRoute } from "next";
import { flat } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...flat.map((i) => i.href)].map((p) => ({ url: site.url + (p === "/" ? "" : p) }));
}
