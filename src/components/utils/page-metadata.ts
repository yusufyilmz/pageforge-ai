import type { Metadata as NextMetadata } from 'next'

import type { PageConfig } from '../../lib/types/page/pageTypes'

export interface PageMetaProps {
  title: string
  description: string
  siteURL: string
  slug?: string
  pageType?: 'website' | 'article' | 'profile'
  image?: string
  keywords?: string[]
  author?: string
  publishedAt?: string
  modifiedAt?: string
  canonical?: string
}

export function generatePageMetadata({
  title,
  description,
  siteURL,
  slug = '',
  pageType = 'website',
  image,
  keywords,
  author,
  publishedAt,
  modifiedAt,
  canonical
}: PageMetaProps): NextMetadata {
  const normalizedSiteURL = siteURL.endsWith('/')
    ? siteURL.slice(0, -1)
    : siteURL
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`

  const isAbsoluteUrl = (url: string) => /^https?:\/\//.test(url)

  const ogImage = image
    ? isAbsoluteUrl(image)
      ? image
      : `${normalizedSiteURL}${image.startsWith('/') ? image : `/${image}`}`
    : `${normalizedSiteURL}/og?title=${encodeURIComponent(title)}`

  const pageUrl = canonical || `${normalizedSiteURL}${normalizedSlug}`

  const metadata: NextMetadata = {
    title,
    description,
    keywords: keywords?.join(', '),
    ...(author && { authors: [{ name: author }] }),
    metadataBase: new URL(normalizedSiteURL),
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title,
      description,
      type: pageType,
      url: pageUrl,
      images: [
        {
          url: ogImage,
          alt: title
        }
      ],
      ...(publishedAt && pageType === 'article'
        ? { publishedTime: publishedAt }
        : {}),
      ...(modifiedAt && pageType === 'article'
        ? { modifiedTime: modifiedAt }
        : {})
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }

  return metadata
}

// Helper function to extract metadata from page configuration using new type structure
export function extractMetadataFromPageConfig(
  pageConfig: PageConfig,
  siteURL: string
): NextMetadata {
  const { metadata } = pageConfig

  return generatePageMetadata({
    title: metadata.basic.title,
    description: metadata.basic.description,
    siteURL,
    slug: pageConfig.slug,
    pageType: metadata.openGraph.type as 'website' | 'article' | 'profile',
    image: metadata.openGraph.image,
    keywords: metadata.basic.keywords,
    author: metadata.basic.author,
    publishedAt: metadata.basic.publishDate,
    modifiedAt: metadata.basic.modifiedDate,
    canonical: metadata.basic.canonical
  })
}

export const PageMeta = {
  generate: generatePageMetadata,
  fromConfig: extractMetadataFromPageConfig
}

export default PageMeta
