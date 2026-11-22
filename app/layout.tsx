import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "peakcharts/styles.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const description = site.tagline + " Seventeen chart types, three styles, and a data table behind every chart.";

const ogImage = { url: "/og-image.png", width: 1731, height: 908, alt: "peakcharts: accessible React charts" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "peakcharts: accessible React charts", template: "%s | peakcharts" },
  description,
  alternates: { canonical: "./" },
  keywords: ["React charts", "accessible charts", "data visualization", "React chart library", "peakcharts"],
  authors: [{ name: "Ashutosh Swamy", url: site.links.portfolio }],
  openGraph: { type: "website", siteName: site.name, title: "peakcharts: accessible React charts", description, url: "./", images: [ogImage] },
  twitter: { card: "summary_large_image", creator: "@ashutoshswamy_", title: "peakcharts: accessible React charts", description, images: [ogImage.url] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: site.name,
  description,
  url: site.url,
  codeRepository: site.links.github,
  programmingLanguage: "TypeScript",
  runtimePlatform: "React",
  author: { "@type": "Person", name: "Ashutosh Swamy", url: site.links.portfolio },
};

// Sets data-theme before first paint so charts and code never flash the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('pc-theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light')}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-[100dvh] flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main" className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
