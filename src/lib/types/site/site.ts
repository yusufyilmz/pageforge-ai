export type Site = {
  id: string;
  userId: string;
  name: string;
  slug: string;
  domain?: string;
  description?: string;
  themeStyle: string;
  createdAt: string;
  updatedAt: string;
};

export const SITE_TYPES = [
  "portfolio",
  "business",
  "restaurant",
  "freelancer",
  "ecommerce",
  "event",
  "company",
  "real_estate",
  "startup",
  "team",
  "support",
  "careers",
  "shop",
  "resume",
  "reservation",
  "blog",
] as const;

export type SiteType = (typeof SITE_TYPES)[number] | "string";
