import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
return [
    {
      url: "https://ridotsoftwareacademy.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ridotsoftwareacademy.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://ridotsoftwareacademy.com/blogs",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://ridotsoftwareacademy.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://ridotsoftwareacademy.com/courses",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}