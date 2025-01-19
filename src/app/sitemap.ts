import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://balatrools.pages.dev/",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://balatrools.pages.dev/editor",
            lastModified: new Date(),
            priority: 0.9
        },
    ]
}