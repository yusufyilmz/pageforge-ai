export {
  PageBuilder,
  createAboutPage,
  createBlogPage,
  createWorkPage,
  createGalleryPage
} from './PageBuilder'

export {
  // Template creation functions
  createAboutPageFromTemplate,
  createBlogPageFromTemplate,
  createPortfolioPageFromTemplate,
  createLandingPageFromTemplate,

  // Main template functions (enhanced versions)
  developerTemplate,
  designerTemplate,
  freelancerTemplate,
  profileTemplate,

  // Types
  type PersonData,
  type ExperienceData,
  type ProjectData,
  type SkillData,
  type SocialLinkData,
  type AboutPageTemplate,
  type BlogPageTemplate,
  type PortfolioPageTemplate,
  type LandingPageTemplate
} from './templates'
