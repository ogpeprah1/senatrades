import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/content/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Display face: condensed grotesk for headlines.
const barlowCondensed = Barlow_Condensed({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Editorial accent, reserved for quotations.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url ?? site.fallbackUrl),
  title: {
    default: `${site.name} - Forex Education, Analysis & Community`,
    template: `%s - ${site.name}`,
  },
  description:
    "SenaTrades is a forex trading education and community brand founded by Kwashie Senanu Charles Prince - structured education, market analysis, mentorship and a community committed to understanding the market.",
  applicationName: site.name,
  authors: [{ name: site.founder.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: "@senatrades",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${barlowCondensed.variable} ${instrumentSerif.variable}`}
    >
      <body className="theme-dark relative flex min-h-dvh flex-col">
        {/* Scroll sentinels observed by the header and mobile sticky CTA. */}
        <div id="top-sentinel" aria-hidden className="pointer-events-none absolute top-0 h-6 w-px" />
        <div id="fold-sentinel" aria-hidden className="pointer-events-none absolute top-[85svh] h-px w-px" />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <StickyCta />
        </Providers>
      </body>
    </html>
  );
}
