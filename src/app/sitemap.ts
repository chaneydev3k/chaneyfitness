import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

// Real, indexable routes. (Hash anchors aren't distinct URLs, so they don't
// belong here.) Add new pages — service pages, city pages — as they ship.
const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "personal-trainer-palmetto-fl", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path ? `/${r.path}` : ""}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
