import type { Metadata } from "next";
import { site, socials, linktree, absoluteUrl, brandAssets } from "@/content/site";
import { founder } from "@/content/founder";

/** Page-level metadata with canonical URLs only when a real domain is configured. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: site.url ? { canonical: path } : undefined,
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: absoluteUrl("/"),
    slogan: site.tagline,
    description: site.description,
    logo: absoluteUrl(brandAssets.mark.src),
    ...(site.contact.email && { email: site.contact.email }),
    founder: { "@id": absoluteUrl("/founder#person") },
    sameAs: [...socials.map((s) => s.href), linktree.href],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: absoluteUrl("/"),
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/founder#person"),
    name: founder.name,
    jobTitle: "Founder & CEO",
    description:
      "Ghanaian professional forex trader, trading educator, mentor, public speaker and founder of SenaTrades.",
    nationality: "Ghanaian",
    worksFor: { "@id": absoluteUrl("/#organization") },
    alumniOf: { "@type": "CollegeOrUniversity", name: founder.academic.institution },
    url: absoluteUrl("/founder"),
    ...(founder.photos.hero && { image: absoluteUrl(founder.photos.hero.src) }),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
