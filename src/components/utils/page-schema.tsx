import Script from "next/script";

import type { PageConfig } from "../../lib/types/page/pageTypes";

export interface StructuredDataProps {
  schemaType:
    | "Website"
    | "WebPage"
    | "Article"
    | "BlogPosting"
    | "Person"
    | "Organization"
    | "Blog";
  title: string;
  description: string;
  siteURL: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: {
    name: string;
    url?: string;
    image?: string;
    jobTitle?: string;
  };
  publisher?: {
    name: string;
    image?: string;
  };
  socialLinks?: string[];
  additionalProperties?: Record<string, any>;
}

export function StructuredData({
  schemaType,
  title,
  description,
  siteURL,
  slug,
  datePublished,
  dateModified,
  image,
  author,
  publisher,
  socialLinks,
  additionalProperties,
}: StructuredDataProps) {
  const normalizedSiteURL = siteURL.endsWith("/") ? siteURL.slice(0, -1) : siteURL;
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  const pageUrl = `${normalizedSiteURL}${normalizedSlug}`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${normalizedSiteURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedSiteURL}/og?title=${encodeURIComponent(title)}`;

  const baseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    url: pageUrl,
    ...additionalProperties,
  };

  // Add social links if provided
  if (socialLinks && socialLinks.length > 0) {
    baseSchema.sameAs = socialLinks.filter(Boolean);
  }

  // Schema-specific properties
  switch (schemaType) {
    case "Website":
    case "Organization":
      baseSchema.name = title;
      baseSchema.description = description;
      baseSchema.image = imageUrl;
      break;

    case "Person":
      baseSchema.name = title;
      baseSchema.description = description;
      baseSchema.image = imageUrl;
      if (author?.jobTitle) {
        baseSchema.jobTitle = author.jobTitle;
      }
      break;

    case "Blog":
      baseSchema.name = title;
      baseSchema.description = description;
      baseSchema.image = imageUrl;
      if (author) {
        baseSchema.author = {
          "@type": "Person",
          name: author.name,
          ...(author.url && { url: author.url }),
          ...(author.image && { image: author.image }),
        };
      }
      break;

    case "WebPage":
    case "Article":
    case "BlogPosting":
    default:
      baseSchema.headline = title;
      baseSchema.description = description;
      baseSchema.image = imageUrl;

      if (datePublished) {
        baseSchema.datePublished = datePublished;
        baseSchema.dateModified = dateModified || datePublished;
      }

      if (author) {
        baseSchema.author = {
          "@type": "Person",
          name: author.name,
          ...(author.url && { url: author.url }),
          ...(author.image && { image: author.image }),
          ...(author.jobTitle && { jobTitle: author.jobTitle }),
        };
      }

      if (publisher) {
        baseSchema.publisher = {
          "@type": "Organization",
          name: publisher.name,
          ...(publisher.image && {
            logo: {
              "@type": "ImageObject",
              url: publisher.image,
            },
          }),
        };
      }
      break;
  }

  return (
    <Script
      id={`structured-data-${schemaType.toLowerCase()}-${slug.replace(/\//g, "-")}`}
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseSchema, null, 2),
      }}
    />
  );
}

// Helper function to extract structured data from page configuration using new type structure
export function extractStructuredDataFromPageConfig(
  pageConfig: PageConfig,
  siteURL: string,
  socialLinks?: string[],
): React.ReactElement | null {
  if (!pageConfig.structuredData) {
    return null;
  }

  const { structuredData, metadata, slug } = pageConfig;

  // Determine schema type from the structured data
  const schemaType = structuredData["@type"] as StructuredDataProps["schemaType"];

  if (!schemaType) {
    return null;
  }

  return (
    <StructuredData
      schemaType={schemaType}
      title={metadata.basic.title}
      description={metadata.basic.description}
      siteURL={siteURL}
      slug={slug}
      datePublished={metadata.basic.publishDate}
      dateModified={metadata.basic.modifiedDate}
      image={metadata.openGraph.image}
      author={
        structuredData.author
          ? {
              name: structuredData.author.name || metadata.basic.author || "",
              url: structuredData.author.url,
              image: structuredData.author.image,
              jobTitle: structuredData.author.jobTitle,
            }
          : undefined
      }
      publisher={
        structuredData.publisher
          ? {
              name: structuredData.publisher.name,
              image: structuredData.publisher.image || structuredData.publisher.logo?.url,
            }
          : undefined
      }
      socialLinks={socialLinks || structuredData.sameAs}
      additionalProperties={{
        ...structuredData,
        // Remove props we're handling explicitly
        "@context": undefined,
        "@type": undefined,
        author: undefined,
        publisher: undefined,
        sameAs: undefined,
        url: undefined,
      }}
    />
  );
}

export const PageSchema = {
  generate: StructuredData,
  fromConfig: extractStructuredDataFromPageConfig,
};

export default PageSchema;
