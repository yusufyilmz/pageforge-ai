export type SectionType =
  | 'hero'
  | 'profile'
  | 'features'
  | 'gallery'
  | 'blog_page'
  | 'contact_info'
  | 'contact_form'
  | 'timeline'
  | 'skills'
  | 'testimonials'
  | 'pricing'
  | 'shop_items'
  | 'map'
  | 'faq'
  | 'about'
  | 'plans'
  | 'experiences'
  | 'projects'
  | 'socials'
  | 'newsletter'
  | 'how_to'
  | 'menu'
  | 'property'
  | 'legal_text'
  | 'careers'

export const sectionTypes: { id: SectionType; name: string }[] = [
  { id: 'hero', name: 'Hero Section' },
  { id: 'features', name: 'Features Section' },
  { id: 'gallery', name: 'Gallery Section' },
  { id: 'contact_info', name: 'Contact Info Section' },
  { id: 'contact_form', name: 'Contact Form Section' },
  { id: 'timeline', name: 'Timeline Section' },
  { id: 'skills', name: 'Skills Section' },
  { id: 'faq', name: 'FAQ Section' },
  { id: 'pricing', name: 'Pricing Section' },
  { id: 'shop_items', name: 'Shop Items Section' },
  { id: 'map', name: 'Map Section' },
  { id: 'legal_text', name: 'Legal Text Section' },
  { id: 'about', name: 'About Section' },
  { id: 'plans', name: 'Plans Section' },
  { id: 'experiences', name: 'Experiences Section' },
  { id: 'socials', name: 'Socials Section' },
  { id: 'newsletter', name: 'Newsletter Section' },
  { id: 'how_to', name: 'How To Section' },
  { id: 'menu', name: 'Menu Section' },
  { id: 'property', name: 'Property Listing Section' },
  { id: 'blog_page', name: 'Blog Page Section' },
  { id: 'projects', name: 'Projects Section' },
  { id: 'careers', name: 'Careers Section' }
]
export const SECTION_TYPES: SectionType[] = sectionTypes.map(
  section => section.id
)
