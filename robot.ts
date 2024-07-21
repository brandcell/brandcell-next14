import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog", "contact"],
      disallow: "/private/",
    },
    sitemap: "https:brandcell.studio/sitemap.xml",
  };
}
