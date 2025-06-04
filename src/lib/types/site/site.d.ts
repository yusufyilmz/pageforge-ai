import { PageWithSections } from '@pageforge/page'
export type Site = {
  id: string
  userId: string
  name: string
  slug: string
  domain?: string
  description?: string
  themeStyle: string
  createdAt: string
  updatedAt: string
}
export type SiteWithPages = Site & {
  pages: PageWithSections[]
}
export type SiteTemplate = {
  id: string
  name: string
  description: string
  themeStyle: string
  type: SiteType
  pages: PageWithSections[]
}
export declare const SITE_TYPES: readonly [
  'portfolio',
  'business',
  'restaurant',
  'freelancer',
  'ecommerce',
  'event',
  'company',
  'real_estate',
  'startup',
  'team',
  'support',
  'careers',
  'shop',
  'resume',
  'reservation',
  'blog'
]
export type SiteType = (typeof SITE_TYPES)[number] | 'string'
//# sourceMappingURL=site.d.ts.map
