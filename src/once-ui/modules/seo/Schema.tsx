import { social } from "@pageforge/types/site/onceUIConfig";
import Script from "next/script";

export interface SchemaProps {
  as: "website" | "article" | "blogPosting" | "techArticle" | "webPage" | "organization";
  title: string;
  description: string;
  baseURL: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: {
    name: string;
    url?: string;
    image?: string;
  };
}

const schemaTypeMap = {
  website: "WebSite",
  article: "Article",
  blogPosting: "BlogPosting",
  techArticle: "TechArticle",
  webPage: "WebPage",
  organization: "Organization",
};

export function Schema({
  as,
  title,
  description,
  baseURL,
  path,
  datePublished,
  dateModified,
  image,
  author,
}: SchemaProps) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const imageUrl = image
    ? `${normalizedBaseURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedBaseURL}/og?title=${encodeURIComponent(title)}`;

  const url = `${normalizedBaseURL}${normalizedPath}`;

  const schemaType = schemaTypeMap[as];

  // biome-ignore lint/suspicious/noExplicitAny: <cause why not, we love any in typescript..>
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    url,
  };

  schema.sameAs = Object.values(social).filter(Boolean);

  if (as === "website") {
    schema.name = title;
    schema.description = description;
    schema.image = imageUrl;
  } else if (as === "organization") {
    schema.name = title;
    schema.description = description;
    schema.image = imageUrl;
  } else {
    schema.headline = title;
    schema.description = description;
    schema.image = imageUrl;

    if (datePublished) {
      schema.datePublished = datePublished;
      schema.dateModified = dateModified || datePublished;
    }
  }

  if (author) {
    schema.author = {
      "@type": "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
      ...(author.image && {
        image: {
          "@type": "ImageObject",
          url: author.image,
        },
      }),
    };
  }

  return (
    <Script
      id={`schema-${as}-${path}`}
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <It's not dynamic nor a security issue.>
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default Schema;
