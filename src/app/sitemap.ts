import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    "",
    "#why",
    "#programs",
    "#results",
    "#transformations",
    "#process",
    "#features",
    "#about",
    "#faq",
    "#contact",
  ];

  return sections.map((section, i) => ({
    url: `${siteConfig.url}/${section}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.7,
  }));
}
