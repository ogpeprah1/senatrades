import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

const routes = ["/", "/about", "/founder", "/team", "/education", "/community", "/risk-disclosure"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/community" ? 0.9 : 0.7,
  }));
}
