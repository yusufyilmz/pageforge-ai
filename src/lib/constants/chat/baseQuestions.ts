import type { Question } from '@pageforge/types/chat'

export const BASE_QUESTIONS: Question[] = [
  {
    id: 'site_name',
    question: 'What is the name of your website?',
    type: 'text',
    placeholder: 'e.g., My Awesome Business',
    contextHint:
      'This will be displayed in the browser tab and various places on your site.'
  },
  {
    id: 'site_description',
    question: 'Provide a brief description of your website:',
    type: 'textarea',
    placeholder: 'e.g., We provide high-quality products and services for...',
    contextHint: 'This helps search engines understand what your site is about.'
  },
  {
    id: 'website_type',
    question: 'What type of website are you creating?',
    type: 'radio',
    options: [
      { id: 'business', label: 'Business / Company', value: 'business' },
      { id: 'portfolio', label: 'Portfolio / Personal', value: 'portfolio' },
      { id: 'blog', label: 'Blog', value: 'blog' },
      { id: 'ecommerce', label: 'E-commerce', value: 'ecommerce' },
      { id: 'landing', label: 'Landing Page', value: 'landing' }
    ],
    contextHint:
      'This helps us tailor the design and functionality to your needs.'
  },
  {
    id: 'theme_style',
    question: 'What visual style would you prefer?',
    type: 'radio',
    options: [
      { id: 'modern', label: 'Modern & Minimal', value: 'modern' },
      { id: 'classic', label: 'Classic & Professional', value: 'classic' },
      { id: 'bold', label: 'Bold & Vibrant', value: 'bold' },
      { id: 'elegant', label: 'Elegant & Sophisticated', value: 'elegant' },
      { id: 'playful', label: 'Playful & Creative', value: 'playful' }
    ]
  },
  {
    id: 'sections',
    question: 'Which sections would you like to include on your website?',
    type: 'checkbox',
    options: [
      { id: 'hero', label: 'Hero Section (Main Banner)', value: 'hero' },
      { id: 'about', label: 'About Section', value: 'about' },
      { id: 'features', label: 'Features / Services', value: 'features' },
      { id: 'testimonials', label: 'Testimonials', value: 'testimonials' },
      { id: 'pricing', label: 'Pricing Tables', value: 'pricing' },
      { id: 'gallery', label: 'Image Gallery', value: 'gallery' },
      { id: 'team', label: 'Team Members', value: 'team' },
      { id: 'contact', label: 'Contact Form', value: 'contact' },
      { id: 'blog', label: 'Blog Posts', value: 'blog' },
      { id: 'faq', label: 'FAQ Section', value: 'faq' },
      { id: 'cta', label: 'Call to Action', value: 'cta' }
    ],
    contextHint:
      'Select all sections you want to include. You can reorganize them later.'
  }
]
