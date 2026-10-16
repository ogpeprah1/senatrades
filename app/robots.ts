import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Only advertise the sitemap once a real production domain is configured.
    ...(site.url && { sitemap: absoluteUrl("/sitemap.xml") }),
  };
}
