import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/designs",
    "/bespoke",
    "/client-looks",
    "/about",
    "/contact",
    "/request",
    "/measurement-guide",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
