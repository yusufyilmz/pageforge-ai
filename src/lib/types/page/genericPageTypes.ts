import type { CSSProperties } from "react";

import type {
  ColorScheme,
  ColorWeight,
  RadiusNest,
  RadiusSize,
  ShadowSize,
  SpacingToken,
  TextSize,
  TextType,
  TextVariant,
  TextWeight,
  flex,
  gridColumns,
} from "@pageforge/once-ui/types";

// ============================================================================
// GENERIC PAGE TYPES FOR AI-GENERATED CONTENT
// ============================================================================

// Base types for styling using Once UI types
export interface StylingConfig {
  background?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | "surface"
    | "overlay"
    | "page"
    | "transparent";
  onBackground?: `${ColorScheme}-${ColorWeight}`;
  onSolid?: `${ColorScheme}-${ColorWeight}`;
  textVariant?: TextVariant;
  textSize?: TextSize;
  textType?: TextType;
  textWeight?: TextWeight;
  textAlign?: CSSProperties["textAlign"];
  padding?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingX?: SpacingToken;
  paddingY?: SpacingToken;
  margin?: SpacingToken;
  marginLeft?: SpacingToken;
  marginRight?: SpacingToken;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  marginX?: SpacingToken;
  marginY?: SpacingToken;
  gap?: SpacingToken | "-1";
  radius?: RadiusSize | `${RadiusSize}-${RadiusNest}`;
  shadow?: ShadowSize;
  border?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | "surface"
    | "transparent";
  borderStyle?: "solid" | "dashed";
  borderWidth?: 1 | 2;
  minHeight?: number | SpacingToken | string;
  maxHeight?: number | SpacingToken | string;
  width?: number | SpacingToken | string;
  maxWidth?: number | SpacingToken | string;
  columns?: gridColumns;
  layout?: "grid" | "masonry" | "carousel" | "stack" | "two-column" | "three-column";
  flex?: flex;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  horizontal?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  vertical?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  wrap?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  position?: CSSProperties["position"];
  opacity?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  zIndex?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  overflow?: CSSProperties["overflow"];
  transition?:
    | "micro-short"
    | "micro-medium"
    | "micro-long"
    | "macro-short"
    | "macro-medium"
    | "macro-long";
  cursor?: CSSProperties["cursor"] | "interactive";
  hide?: "s" | "m" | "l";
  show?: "s" | "m" | "l";
}

// Button configuration
export interface ButtonConfig {
  text: string;
  link: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "s" | "m" | "l";
  icon?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
  fullWidth?: boolean;
}

// Image configuration
export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
  priority?: boolean;
  radius?: RadiusSize;
  border?:
    | `${ColorScheme}-${ColorWeight}`
    | `${ColorScheme}-alpha-${ColorWeight}`
    | "surface"
    | "transparent";
  enlarge?: boolean;
}

// Social media link
export interface SocialLink {
  platform: string;
  name: string;
  url: string;
  icon: string;
  label?: string;
}

// Statistics/metrics
export interface StatConfig {
  number: string;
  label: string;
  description?: string;
  icon?: string;
  variant?: TextVariant;
  color?: `${ColorScheme}-${ColorWeight}`;
}

// Form field configuration
export interface FormField {
  name: string;
  type: "text" | "email" | "textarea" | "select" | "checkbox" | "radio" | "number" | "tel" | "url";
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select, radio, checkbox
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
  size?: "s" | "m" | "l";
  variant?: "default" | "ghost";
}

// Contact information
export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  address?: string;
  social?: SocialLink[];
}

// ============================================================================
// SECTION CONTENT TYPES
// ============================================================================

// Hero section content
export interface HeroContent {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string | ImageConfig;
  backgroundImage?: string;
  buttons?: ButtonConfig[];
  stats?: StatConfig[];
  avatar?: {
    src: string;
    alt: string;
    size?: "s" | "m" | "l" | "xl";
  };
  video?: {
    src: string;
    poster?: string;
    autoplay?: boolean;
    loop?: boolean;
  };
}

// Text with image content
export interface TextImageContent {
  title: string;
  text: string;
  image?: string | ImageConfig;
  imagePosition?: "left" | "right" | "top" | "bottom";
  stats?: StatConfig[];
  buttons?: ButtonConfig[];
}

// Grid items (skills, services, features)
export interface GridItem {
  title: string;
  description?: string;
  icon?: string;
  image?: string | ImageConfig;
  link?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

export interface GridContent {
  title?: string;
  description?: string;
  items: GridItem[];
}

// Portfolio/project content
export interface ProjectItem {
  title: string;
  description: string;
  image: string | ImageConfig;
  technologies?: string[];
  link?: string;
  github?: string;
  demo?: string;
  category?: string;
  featured?: boolean;
  date?: string;
  slug?: string;
}

export interface PortfolioContent {
  title?: string;
  description?: string;
  projects: ProjectItem[];
  categories?: string[];
  showFilters?: boolean;
}

// Testimonial content
export interface Testimonial {
  text: string;
  author: string;
  position?: string;
  company?: string;
  avatar?: string | ImageConfig;
  rating?: number;
  date?: string;
}

export interface TestimonialsContent {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
}

// Contact form content
export interface ContactFormContent {
  title?: string;
  description?: string;
  form: {
    fields: FormField[];
    submitText?: string;
    action: string;
    method?: "POST" | "GET";
  };
  contactInfo?: ContactInfo;
}

// Newsletter content
export interface NewsletterContent {
  title: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  action: string;
  successMessage?: string;
  errorMessage?: string;
}

// FAQ content
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQContent {
  title?: string;
  description?: string;
  items: FAQItem[];
  categories?: string[];
}

// Team member content
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  avatar?: string | ImageConfig;
  social?: SocialLink[];
  skills?: string[];
}

export interface TeamContent {
  title?: string;
  description?: string;
  members: TeamMember[];
}

// Pricing plan content
export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  featured?: boolean;
  button: ButtonConfig;
}

export interface PricingContent {
  title?: string;
  description?: string;
  plans: PricingPlan[];
}

// Timeline/Experience content
export interface TimelineItem {
  title: string;
  company?: string;
  timeframe: string;
  role?: string;
  description?: string;
  achievements?: string[];
  images?: ImageConfig[];
  technologies?: string[];
}

export interface TimelineContent {
  title?: string;
  description?: string;
  items: TimelineItem[];
}

// ============================================================================
// SECTION TYPES
// ============================================================================

export type SectionContent =
  | HeroContent
  | TextImageContent
  | GridContent
  | PortfolioContent
  | TestimonialsContent
  | ContactFormContent
  | NewsletterContent
  | FAQContent
  | TeamContent
  | PricingContent
  | TimelineContent
  | string; // For simple text content

export interface GenericSection {
  id: string;
  type:
    | "hero"
    | "text-image"
    | "grid"
    | "portfolio"
    | "testimonials"
    | "contact-form"
    | "newsletter"
    | "faq"
    | "team"
    | "pricing"
    | "timeline"
    | "text"
    | "image"
    | "video"
    | "spacer"
    | "custom";
  display: boolean;
  content: SectionContent;
  styling?: StylingConfig;
  animation?: {
    type?: "fade" | "slide" | "scale" | "bounce";
    delay?: number;
    duration?: number;
  };
  responsive?: {
    mobile?: Partial<StylingConfig>;
    tablet?: Partial<StylingConfig>;
    desktop?: Partial<StylingConfig>;
  };
}

// ============================================================================
// PAGE CONFIGURATION TYPES
// ============================================================================

export interface PageMetadata {
  title: string;
  description: string;
  url: string;
  openGraph: {
    type: string;
    image: string;
    alt: string;
    siteName?: string;
  };
  twitter: {
    card: string;
    site?: string;
    creator?: string;
  };
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name?: string;
  description?: string;
  author?: {
    "@type": string;
    name: string;
    image?: string;
  };
  [key: string]: any;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface Navigation {
  enabled: boolean;
  items: NavigationItem[];
  style?: "horizontal" | "vertical" | "sidebar" | "dropdown";
  position?: "top" | "bottom" | "left" | "right" | "sticky" | "fixed";
}

export interface ThemeConfig {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
  font?: string;
  darkMode?: boolean;
  customCSS?: string;
}

export interface SEOConfig {
  keywords?: string[];
  robots?: string;
  canonical?: string;
  alternates?: {
    [locale: string]: string;
  };
}

export interface GenericPageConfig {
  pageType: "generic";
  metadata: PageMetadata;
  structuredData: StructuredData;
  layout: {
    maxWidth?: "xs" | "s" | "m" | "l" | "xl" | "full";
    background?:
      | `${ColorScheme}-${ColorWeight}`
      | `${ColorScheme}-alpha-${ColorWeight}`
      | "surface"
      | "overlay"
      | "page"
      | "transparent";
    sections: GenericSection[];
  };
  navigation?: Navigation;
  theme?: ThemeConfig;
  seo?: SEOConfig;
  customScripts?: {
    head?: string[];
    body?: string[];
  };
  analytics?: {
    googleAnalytics?: string;
    facebookPixel?: string;
    [key: string]: any;
  };
}

// ============================================================================
// EXISTING TYPES (keep for backward compatibility)
// ============================================================================

// ...existing code...
