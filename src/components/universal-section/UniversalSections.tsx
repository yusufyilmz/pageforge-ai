'use client'

import type {
  ContentBlock,
  CustomContentBlock
} from '@pageforge/types/page/pageTypes'

import {
  HeadingSection,
  TextSection,
  PostsGridSection,
  AboutHeroSection,
  StudiesSection,
  TechnicalSkillsSection,
  SocialLinksSection,
  GalleryGridSection,
  NewsletterSection,
  CalendarLinkSection,
  ProjectsSection,
  HeroSection,
  FeaturesSection,
  ExperienceSection,
  ContactFormSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  ProfileSection,
  TimelineSection,
  ContactInfoSection,
  AboutSection,
  MapSection,
  BlogPageSection,
  ShopItemsSection,
  PlansSection,
  HowToSection,
  MenuSection,
  PropertySection,
  LegalTextSection,
  CareersSection,
  ShowcaseSection,
  QuickstartSection
} from '../sections'

import CustomSection from './CustomSection'

interface SectionProps {
  block: ContentBlock
  index: number
  posts?: any[]
  data?: any
}

export const UniversalSections = ({ block, index, data }: SectionProps) => {
  // // Check if this is a custom section type first
  // if (block.type === 'custom') {
  //   return <CustomSection block={block} index={index} data={data} />
  // }

  // Check if this is a custom section using the isCustom flag

  // Define all known section types
  const knownSectionTypes = [
    'custom',
    'hero',
    'features',
    'experience',
    'studies',
    'skills',
    'socials',
    'gallery',
    'newsletter',
    'table-of-contents',
    'calendar-link',
    'projects',
    'posts-grid',
    'about-hero',
    'heading',
    'text',
    'contact-form',
    'testimonials',
    'pricing',
    'faq',
    'profile',
    'timeline',
    'contact-info',
    'about',
    'map',
    'blog-page',
    'shop-items',
    'plans',
    'how-to',
    'menu',
    'property',
    'legal-text',
    'careers',
    'showcase',
    'quickstart'
  ]

  // Check if this is a known section type
  const isKnownType = knownSectionTypes.includes(block.type)

  // If unknown type, render as custom AI-generated section
  if (!isKnownType) {
    // Convert to custom block for AI generation
    const customBlock: CustomContentBlock = {
      ...block,
      isCustom: true
    }
    return <CustomSection block={customBlock} index={index} data={data} />
  }

  // Type assertion: we know block is ContentBlock at this point
  const contentBlock = block as ContentBlock

  // Handle known section types (now TypeScript knows block is ContentBlock)
  if (contentBlock.type === 'hero') {
    return <HeroSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'features') {
    return <FeaturesSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'experience') {
    return <ExperienceSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'studies') {
    return <StudiesSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'skills') {
    return <TechnicalSkillsSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'socials') {
    return <SocialLinksSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'gallery') {
    return <GalleryGridSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'newsletter') {
    return <NewsletterSection block={contentBlock} index={index} />
  }

  // if (contentBlock.type === 'table-of-contents') {
  //   return <TableOfContentsSection block={contentBlock} index={index} />
  // }

  if (contentBlock.type === 'calendar-link') {
    return <CalendarLinkSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'projects') {
    return <ProjectsSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'posts-grid') {
    return <PostsGridSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'about-hero') {
    return <AboutHeroSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'heading') {
    return <HeadingSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'text') {
    return <TextSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'contact-form') {
    return <ContactFormSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'testimonials') {
    return <TestimonialsSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'pricing') {
    return <PricingSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'faq') {
    return <FAQSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'profile') {
    return <ProfileSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'timeline') {
    return <TimelineSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'contact-info') {
    return <ContactInfoSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'about') {
    return <AboutSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'map') {
    return <MapSection block={contentBlock} index={index} />
  }

  // TODO: Implement remaining sections
  if (contentBlock.type === 'blog-page') {
    return <BlogPageSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'shop-items') {
    return <ShopItemsSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'plans') {
    return <PlansSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'how-to') {
    return <HowToSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'menu') {
    return <MenuSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'property') {
    return <PropertySection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'legal-text') {
    return <LegalTextSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'careers') {
    return <CareersSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'showcase') {
    return <ShowcaseSection block={contentBlock} index={index} />
  }

  if (contentBlock.type === 'quickstart') {
    return <QuickstartSection block={contentBlock} index={index} />
  }

  // This shouldn't happen due to the check above, but fallback to custom section
  return <CustomSection block={contentBlock} index={index} data={data} />
}

// Backward compatibility export
export const renderSectionComponent = (
  block: ContentBlock,
  index: number,
  data?: any
) => {
  return UniversalSections({ block, index, posts: undefined, data })
}
