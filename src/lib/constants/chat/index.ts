// export * from './baseQuestions'
// import { Question } from '@pageforge/types/chat'
// import { aboutQuestions } from './aboutQuestions'
// import { contactQuestions } from './contactQuestions'
// import { SectionType } from '@pageforge/types/index'
// export { heroQuestions } from './heroQuestions'

// export * from './pricingQuestions'

// export * from './blogQuestions'
// export * from './faqQuestions'
// export * from './featuresQuestions'

// // Section-specific questions
// export const sectionQuestions: Record<SectionType, Question[]> = {
//   about: aboutQuestions,
//     contact_form: contactQuestions,
//   // hero: heroQuestions,
//   // features: featuresQuestions,
//   // about: aboutQuestions,
//   // contact: contactQuestions,
//   hero: [
//     {
//       id: 'hero_headline',
//       question: "What's your main headline?",
//       type: 'text',
//       placeholder: 'e.g., "Transform Your Business with AI"',
//       contextHint: 'This will be the main attention-grabber for your website'
//     },
//     {
//       id: 'hero_subtext',
//       question: 'Add a compelling subheading',
//       type: 'textarea',
//       placeholder: 'Brief explanation of your value proposition',
//       contextHint:
//         'Expand on your headline with 1-2 sentences that explain your value'
//     },
//     {
//       id: 'hero_cta',
//       question: 'Primary call-to-action button text',
//       type: 'text',
//       placeholder: 'e.g., "Get Started"',
//       contextHint: 'What action do you want visitors to take?'
//     },
//     {
//       id: 'hero_image',
//       question: 'Do you want to include a background image?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'A background image can make your hero section more engaging'
//     }
//   ],

//   features: [
//     {
//       id: 'features_count',
//       question: 'How many features do you want to showcase?',
//       type: 'radio',
//       options: [
//         { id: 'f3', label: '3 Features', value: '3' },
//         { id: 'f4', label: '4 Features', value: '4' },
//         { id: 'f6', label: '6 Features', value: '6' }
//       ],
//       contextHint: 'This will determine the layout of your features section'
//     },
//     {
//       id: 'features_style',
//       question: 'Which style of features section do you prefer?',
//       type: 'radio',
//       options: [
//         { id: 'icon', label: 'Icon + Text', value: 'icon' },
//         { id: 'image', label: 'Image + Text', value: 'image' },
//         { id: 'card', label: 'Card-based', value: 'card' }
//       ],
//       contextHint: 'Visual presentation style for your features'
//     },
//     {
//       id: 'features_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Everything you need"',
//       contextHint: 'Main heading for your features section'
//     },
//     {
//       id: 'features_description',
//       question: 'Section description',
//       type: 'textarea',
//       placeholder: 'e.g., "All the tools you need to build your website"',
//       contextHint: 'Brief explanation of your features section'
//     }
//   ],

//   testimonials: [
//     {
//       id: 'testimonials_count',
//       question: 'How many testimonials would you like to display?',
//       type: 'radio',
//       options: [
//         { id: 't1', label: '1 Featured Testimonial', value: '1' },
//         { id: 't3', label: '3 Testimonials', value: '3' },
//         { id: 't5', label: '5+ Testimonial Carousel', value: '5' }
//       ],
//       contextHint: 'Number of customer testimonials to feature'
//     },
//     {
//       id: 'testimonials_style',
//       question: 'Which testimonial layout do you prefer?',
//       type: 'radio',
//       options: [
//         { id: 'cards', label: 'Card Style', value: 'cards' },
//         { id: 'quotes', label: 'Quote Style', value: 'quotes' },
//         { id: 'avatars', label: 'Avatar Focus', value: 'avatars' }
//       ],
//       contextHint: 'Visual style for displaying testimonials'
//     },
//     {
//       id: 'testimonial_example',
//       question: 'Provide a sample testimonial',
//       type: 'textarea',
//       placeholder: 'Quote, name, title and company',
//       contextHint: 'We`ll use this as a template to generate other testimonials'
//     },
//     {
//       id: 'testimonials_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "What Our Clients Say"',
//       contextHint: 'Heading for your testimonials section'
//     }
//   ],

//   pricing: [
//     {
//       id: 'pricing_tiers',
//       question: 'How many pricing tiers do you offer?',
//       type: 'radio',
//       options: [
//         { id: 'p2', label: '2 Tiers', value: '2' },
//         { id: 'p3', label: '3 Tiers', value: '3' },
//         { id: 'p4', label: '4 Tiers', value: '4' }
//       ],
//       contextHint: 'Number of pricing options available'
//     },
//     {
//       id: 'pricing_frequency',
//       question: 'Billing frequency options',
//       type: 'checkbox',
//       options: [
//         { id: 'monthly', label: 'Monthly', value: 'monthly' },
//         { id: 'annual', label: 'Annual', value: 'annual' },
//         { id: 'onetime', label: 'One-time payment', value: 'onetime' }
//       ],
//       contextHint: 'Payment schedule options for customers'
//     },
//     {
//       id: 'pricing_popular',
//       question: 'Do you want to highlight a recommended plan?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'Highlight one plan as the most popular choice'
//     },
//     {
//       id: 'pricing_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Simple, transparent pricing"',
//       contextHint: 'Main heading for your pricing section'
//     }
//   ],

//   contact_info: [
//     {
//       id: 'contact_fields',
//       question: 'Which fields should your contact form include?',
//       type: 'checkbox',
//       options: [
//         { id: 'name', label: 'Name', value: 'name' },
//         { id: 'email', label: 'Email', value: 'email' },
//         { id: 'phone', label: 'Phone Number', value: 'phone' },
//         { id: 'company', label: 'Company', value: 'company' },
//         { id: 'message', label: 'Message', value: 'message' }
//       ],
//       contextHint: 'Information you want to collect from leads'
//     },
//     {
//       id: 'contact_cta',
//       question: 'Submit button text',
//       type: 'text',
//       placeholder: 'e.g., "Send Message"',
//       contextHint: 'Call to action for your form'
//     },
//     {
//       id: 'contact_email',
//       question: 'What email should submissions be sent to?',
//       type: 'text',
//       placeholder: 'e.g., contact@yourbusiness.com',
//       contextHint: 'Email address to receive form submissions'
//     },
//     {
//       id: 'contact_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Get in Touch"',
//       contextHint: 'Main heading for your contact section'
//     }
//   ],
//   faq: [
//     {
//       id: 'faq_count',
//       question: 'How many FAQ items do you want to include?',
//       type: 'radio',
//       options: [
//         { id: 'faq4', label: '4 Questions', value: '4' },
//         { id: 'faq6', label: '6 Questions', value: '6' },
//         { id: 'faq8', label: '8 Questions', value: '8' }
//       ],
//       contextHint: 'Number of frequently asked questions'
//     },
//     {
//       id: 'faq_style',
//       question: 'Which FAQ style would you prefer?',
//       type: 'radio',
//       options: [
//         {
//           id: 'accordion',
//           label: 'Accordion (Expandable)',
//           value: 'accordion'
//         },
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'simple', label: 'Simple List', value: 'simple' }
//       ],
//       contextHint: 'Visual style for displaying your FAQs'
//     },
//     {
//       id: 'faq_example',
//       question: 'Provide a sample question and answer',
//       type: 'textarea',
//       placeholder: 'Q: How does your service work?\nA: Our service works by...',
//       contextHint:
//         'We`ll use this to generate additional FAQs in a similar style'
//     },
//     {
//       id: 'faq_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Frequently Asked Questions"',
//       contextHint: 'Main heading for your FAQ section'
//     }
//   ],

//   projects: [
//     {
//       id: 'portfolio_projects',
//       question: 'List 2-3 projects you want to showcase',
//       type: 'textarea',
//       placeholder: 'Project name, description, key results (one per line)',
//       contextHint: 'Brief descriptions of your best work'
//     },
//     {
//       id: 'portfolio_style',
//       question: 'Choose a portfolio style',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'carousel', label: 'Carousel', value: 'carousel' },
//         { id: 'masonry', label: 'Masonry Grid', value: 'masonry' }
//       ],
//       contextHint: 'How your projects will be displayed'
//     },
//     {
//       id: 'portfolio_filters',
//       question: 'Would you like category filters for your projects?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'Allow visitors to filter projects by category'
//     },
//     {
//       id: 'portfolio_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "My Work"',
//       contextHint: 'Main heading for your portfolio section'
//     }
//   ],

//   blog_page: [
//     {
//       id: 'blog_layout',
//       question: 'How would you like to display your blog posts?',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'list', label: 'List Layout', value: 'list' },
//         { id: 'featured', label: 'Featured + List', value: 'featured' }
//       ],
//       contextHint: 'Visual arrangement of your blog posts'
//     },
//     {
//       id: 'blog_posts_count',
//       question: 'How many posts would you like to display?',
//       type: 'radio',
//       options: [
//         { id: 'b3', label: '3 Posts', value: '3' },
//         { id: 'b4', label: '4 Posts', value: '4' },
//         { id: 'b6', label: '6 Posts', value: '6' }
//       ],
//       contextHint: 'Number of recent blog posts to show'
//     },
//     {
//       id: 'blog_elements',
//       question: 'Which elements would you like to include for each post?',
//       type: 'checkbox',
//       options: [
//         {
//           id: 'featured_image',
//           label: 'Featured Image',
//           value: 'featured_image'
//         },
//         { id: 'author', label: 'Author Name', value: 'author' },
//         { id: 'date', label: 'Publication Date', value: 'date' },
//         { id: 'excerpt', label: 'Excerpt Text', value: 'excerpt' },
//         { id: 'read_time', label: 'Reading Time', value: 'read_time' }
//       ],
//       contextHint: 'Information to display for each blog post'
//     },
//     {
//       id: 'blog_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Latest Articles"',
//       contextHint: 'Main heading for your blog section'
//     }
//   ],

//   profile: [
//     {
//       id: 'profile_layout',
//       question: 'How would you like to display your profile?',
//       type: 'radio',
//       options: [
//         { id: 'centered', label: 'Centered Layout', value: 'centered' },
//         { id: 'aside', label: 'Sidebar Layout', value: 'aside' },
//         { id: 'full', label: 'Full-width Layout', value: 'full' }
//       ],
//       contextHint: 'Overall layout style for your profile section'
//     },
//     {
//       id: 'profile_image',
//       question: 'Would you like to include a profile picture?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'Including a photo adds a personal touch'
//     },
//     {
//       id: 'profile_bio',
//       question: 'Write a brief bio about yourself',
//       type: 'textarea',
//       placeholder: 'A short description of who you are and what you do',
//       contextHint: 'Your introduction to visitors'
//     },
//     {
//       id: 'profile_name',
//       question: 'Your name',
//       type: 'text',
//       placeholder: 'e.g., "John Doe"',
//       contextHint: 'Your full name or preferred display name'
//     }
//   ],

//   gallery: [
//     {
//       id: 'gallery_layout',
//       question: 'How would you like to display your gallery?',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'masonry', label: 'Masonry Grid', value: 'masonry' },
//         { id: 'carousel', label: 'Carousel', value: 'carousel' }
//       ],
//       contextHint: 'Visual arrangement of your gallery images'
//     },
//     {
//       id: 'gallery_count',
//       question: 'Approximately how many images will your gallery contain?',
//       type: 'radio',
//       options: [
//         { id: 'g4', label: '4-6 Images', value: '4-6' },
//         { id: 'g8', label: '7-9 Images', value: '7-9' },
//         { id: 'g12', label: '10+ Images', value: '10+' }
//       ],
//       contextHint: 'Helps determine the optimal layout for your gallery'
//     },
//     {
//       id: 'gallery_captions',
//       question: 'Would you like to include captions with your images?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'Captions can provide context for your images'
//     },
//     {
//       id: 'gallery_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Our Work"',
//       contextHint: 'Main heading for your gallery section'
//     }
//   ],

//   blog_page: [
//     {
//       id: 'blog_page_layout',
//       question: 'How would you like to structure your blog page?',
//       type: 'radio',
//       options: [
//         { id: 'sidebar', label: 'Content + Sidebar', value: 'sidebar' },
//         { id: 'full', label: 'Full Width Content', value: 'full' },
//         { id: 'centered', label: 'Centered Content', value: 'centered' }
//       ],
//       contextHint: 'Overall layout structure for your blog page'
//     },
//     {
//       id: 'blog_page_elements',
//       question: 'Which elements would you like to include?',
//       type: 'checkbox',
//       options: [
//         {
//           id: 'featured_image',
//           label: 'Featured Image',
//           value: 'featured_image'
//         },
//         { id: 'author_box', label: 'Author Box', value: 'author_box' },
//         {
//           id: 'table_of_contents',
//           label: 'Table of Contents',
//           value: 'table_of_contents'
//         },
//         { id: 'related_posts', label: 'Related Posts', value: 'related_posts' },
//         { id: 'comments', label: 'Comments Section', value: 'comments' },
//         {
//           id: 'social_sharing',
//           label: 'Social Sharing',
//           value: 'social_sharing'
//         }
//       ],
//       contextHint: 'Components to include in your blog page'
//     },
//     {
//       id: 'blog_page_sample',
//       question: 'Provide a sample blog post title and intro paragraph',
//       type: 'textarea',
//       placeholder:
//         'Title: How to Build a Website\nIntro: In this guide, we will walk through...',
//       contextHint: "We'll use this as a reference for styling your blog page"
//     }
//   ],

//   contact_info: [
//     {
//       id: 'contact_info_elements',
//       question: 'Which contact information would you like to display?',
//       type: 'checkbox',
//       options: [
//         { id: 'address', label: 'Physical Address', value: 'address' },
//         { id: 'phone', label: 'Phone Number', value: 'phone' },
//         { id: 'email', label: 'Email Address', value: 'email' },
//         { id: 'hours', label: 'Business Hours', value: 'hours' },
//         { id: 'socials', label: 'Social Media Links', value: 'socials' }
//       ],
//       contextHint: 'Contact details to display to visitors'
//     },
//     {
//       id: 'contact_info_layout',
//       question: 'How would you like to display your contact information?',
//       type: 'radio',
//       options: [
//         { id: 'cards', label: 'Card Layout', value: 'cards' },
//         { id: 'inline', label: 'Inline Layout', value: 'inline' },
//         { id: 'icons', label: 'Icon-focused Layout', value: 'icons' }
//       ],
//       contextHint: 'Visual presentation of your contact information'
//     },
//     {
//       id: 'contact_info_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Contact Us"',
//       contextHint: 'Main heading for your contact information section'
//     },
//     {
//       id: 'contact_info_address',
//       question: 'Your business address',
//       type: 'textarea',
//       placeholder: 'e.g., "123 Main Street, City, State, ZIP"',
//       contextHint: 'Physical location of your business'
//     }
//   ],

//   contact_form: [
//     {
//       id: 'contact_form_layout',
//       question: 'How would you like to display your contact form?',
//       type: 'radio',
//       options: [
//         { id: 'split', label: 'Split with Info', value: 'split' },
//         { id: 'centered', label: 'Centered Form', value: 'centered' },
//         { id: 'full', label: 'Full-width Form', value: 'full' }
//       ],
//       contextHint: 'Overall layout for your contact form section'
//     },
//     {
//       id: 'contact_form_fields',
//       question: 'Which fields should your contact form include?',
//       type: 'checkbox',
//       options: [
//         { id: 'name', label: 'Name', value: 'name' },
//         { id: 'email', label: 'Email', value: 'email' },
//         { id: 'phone', label: 'Phone', value: 'phone' },
//         { id: 'subject', label: 'Subject', value: 'subject' },
//         { id: 'message', label: 'Message', value: 'message' },
//         { id: 'company', label: 'Company', value: 'company' },
//         { id: 'file', label: 'File Upload', value: 'file' }
//       ],
//       contextHint: 'Information you want to collect from visitors'
//     },
//     {
//       id: 'contact_form_cta',
//       question: 'Submit button text',
//       type: 'text',
//       placeholder: 'e.g., "Send Message"',
//       contextHint: 'Text for your form submission button'
//     },
//     {
//       id: 'contact_form_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Get in Touch"',
//       contextHint: 'Main heading for your contact form'
//     }
//   ],

//   timeline: [
//     {
//       id: 'timeline_layout',
//       question: 'How would you like to display your timeline?',
//       type: 'radio',
//       options: [
//         { id: 'vertical', label: 'Vertical Timeline', value: 'vertical' },
//         { id: 'horizontal', label: 'Horizontal Timeline', value: 'horizontal' },
//         {
//           id: 'alternating',
//           label: 'Alternating (Zig-zag)',
//           value: 'alternating'
//         }
//       ],
//       contextHint: 'Visual arrangement of your timeline events'
//     },
//     {
//       id: 'timeline_items',
//       question: 'List some key events for your timeline',
//       type: 'textarea',
//       placeholder: 'Year: Event title\nDescription of what happened',
//       contextHint: 'Include at least 3-5 significant events'
//     },
//     {
//       id: 'timeline_elements',
//       question: 'Which elements would you like to include for each event?',
//       type: 'checkbox',
//       options: [
//         { id: 'dates', label: 'Dates', value: 'dates' },
//         { id: 'titles', label: 'Titles', value: 'titles' },
//         { id: 'descriptions', label: 'Descriptions', value: 'descriptions' },
//         { id: 'icons', label: 'Icons', value: 'icons' },
//         { id: 'images', label: 'Images', value: 'images' }
//       ],
//       contextHint: 'Information to display for each timeline event'
//     },
//     {
//       id: 'timeline_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Our Journey"',
//       contextHint: 'Main heading for your timeline section'
//     }
//   ],

//   skills: [
//     {
//       id: 'skills_layout',
//       question: 'How would you like to display your skills?',
//       type: 'radio',
//       options: [
//         { id: 'bars', label: 'Progress Bars', value: 'progress-bars' },
//         { id: 'circles', label: 'Circle Charts', value: 'circles' },
//         { id: 'tags', label: 'Skill Tags', value: 'tags' },
//         { id: 'icons', label: 'Icon Grid', value: 'icons' }
//       ],
//       contextHint: 'Visual representation of your skill levels'
//     },
//     {
//       id: 'skills_list',
//       question: 'List your key skills and proficiency levels',
//       type: 'textarea',
//       placeholder:
//         'Skill: Proficiency Level (%) or (Beginner/Intermediate/Advanced)',
//       contextHint: 'Include at least 3-5 skills that you want to highlight'
//     },
//     {
//       id: 'skills_categories',
//       question: 'Would you like to group skills by category?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint:
//         'Organizing skills by category can be helpful with many skills'
//     },
//     {
//       id: 'skills_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "My Skills"',
//       contextHint: 'Main heading for your skills section'
//     }
//   ],

//   testimonial: [
//     {
//       id: 'testimonial_style',
//       question: 'How would you like to display your testimonial?',
//       type: 'radio',
//       options: [
//         { id: 'card', label: 'Card Style', value: 'card' },
//         { id: 'quote', label: 'Quote Style', value: 'quote' },
//         { id: 'avatar', label: 'Avatar Focus', value: 'avatar' }
//       ],
//       contextHint: 'Visual style for your testimonial'
//     },
//     {
//       id: 'testimonial_quote',
//       question: 'Enter the testimonial quote',
//       type: 'textarea',
//       placeholder:
//         'e.g., "This product has completely transformed our business..."',
//       contextHint: 'The main testimonial text from your client'
//     },
//     {
//       id: 'testimonial_author',
//       question: "Client's name and position",
//       type: 'text',
//       placeholder: 'e.g., "John Smith, CEO at Example Corp"',
//       contextHint: 'Name and role of the person giving the testimonial'
//     },
//     {
//       id: 'testimonial_avatar',
//       question: 'Would you like to include a client photo?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'A photo adds credibility to the testimonial'
//     }
//   ],

//   shop_items: [
//     {
//       id: 'shop_layout',
//       question: 'How would you like to display your products?',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'list', label: 'List Layout', value: 'list' },
//         { id: 'carousel', label: 'Carousel', value: 'carousel' }
//       ],
//       contextHint: 'Visual arrangement of your shop items'
//     },
//     {
//       id: 'shop_items_count',
//       question: 'How many products would you like to display?',
//       type: 'radio',
//       options: [
//         { id: 'p4', label: '4 Products', value: '4' },
//         { id: 'p6', label: '6 Products', value: '6' },
//         { id: 'p8', label: '8 Products', value: '8' }
//       ],
//       contextHint: 'Number of products to show in this section'
//     },
//     {
//       id: 'shop_elements',
//       question: 'Which elements would you like to display for each product?',
//       type: 'checkbox',
//       options: [
//         { id: 'image', label: 'Product Image', value: 'image' },
//         { id: 'title', label: 'Product Title', value: 'title' },
//         { id: 'price', label: 'Price', value: 'price' },
//         { id: 'description', label: 'Description', value: 'description' },
//         { id: 'rating', label: 'Rating', value: 'rating' },
//         { id: 'buy_button', label: 'Buy Button', value: 'buy_button' }
//       ],
//       contextHint: 'Information to display for each product'
//     },
//     {
//       id: 'shop_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Our Products"',
//       contextHint: 'Main heading for your shop section'
//     }
//   ],

//   map: [
//     {
//       id: 'map_type',
//       question: 'Which type of map would you like to display?',
//       type: 'radio',
//       options: [
//         { id: 'google', label: 'Google Maps', value: 'google' },
//         { id: 'openstreet', label: 'OpenStreetMap', value: 'openstreet' },
//         { id: 'static', label: 'Static Map Image', value: 'static' }
//       ],
//       contextHint: 'Platform to use for your location map'
//     },
//     {
//       id: 'map_layout',
//       question: 'How would you like to display your map?',
//       type: 'radio',
//       options: [
//         { id: 'split', label: 'Split with Info', value: 'split' },
//         { id: 'full', label: 'Full Width', value: 'full' },
//         { id: 'embedded', label: 'Embedded in Card', value: 'embedded' }
//       ],
//       contextHint: 'Layout style for your map section'
//     },
//     {
//       id: 'map_address',
//       question: 'Enter the address to display on the map',
//       type: 'textarea',
//       placeholder: 'e.g., "123 Main Street, City, State, ZIP"',
//       contextHint: 'The physical location you want to show on the map'
//     },
//     {
//       id: 'map_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Find Us"',
//       contextHint: 'Main heading for your map section'
//     }
//   ],

//   about: [
//     {
//       id: 'about_layout',
//       question: 'How would you like to structure your about section?',
//       type: 'radio',
//       options: [
//         { id: 'split', label: 'Split Image + Text', value: 'split' },
//         { id: 'text_first', label: 'Text Above Image', value: 'text_first' },
//         { id: 'image_first', label: 'Image Above Text', value: 'image_first' },
//         { id: 'text_only', label: 'Text Only', value: 'text_only' }
//       ],
//       contextHint: 'Visual arrangement of your about section'
//     },
//     {
//       id: 'about_content',
//       question: 'Write a brief description about yourself or your business',
//       type: 'textarea',
//       placeholder: 'We are a team of passionate designers and developers...',
//       contextHint: 'Share your story, mission, values, or background'
//     },
//     {
//       id: 'about_elements',
//       question: 'Which additional elements would you like to include?',
//       type: 'checkbox',
//       options: [
//         { id: 'mission', label: 'Mission Statement', value: 'mission' },
//         { id: 'values', label: 'Core Values', value: 'values' },
//         { id: 'team', label: 'Team Members', value: 'team' },
//         { id: 'history', label: 'Company History', value: 'history' },
//         { id: 'stats', label: 'Key Statistics', value: 'stats' }
//       ],
//       contextHint: 'Additional components to include in your about section'
//     },
//     {
//       id: 'about_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "About Us"',
//       contextHint: 'Main heading for your about section'
//     }
//   ],

//   plans: [
//     {
//       id: 'plans_layout',
//       question: 'How would you like to display your plans?',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'tabs', label: 'Tabbed Layout', value: 'tabs' },
//         { id: 'slider', label: 'Slider', value: 'slider' }
//       ],
//       contextHint: 'Visual arrangement of your plan options'
//     },
//     {
//       id: 'plans_count',
//       question: 'How many plan options do you want to offer?',
//       type: 'radio',
//       options: [
//         { id: 'p2', label: '2 Plans', value: '2' },
//         { id: 'p3', label: '3 Plans', value: '3' },
//         { id: 'p4', label: '4 Plans', value: '4' }
//       ],
//       contextHint: 'Number of plan options to show'
//     },
//     {
//       id: 'plans_highlight',
//       question: 'Would you like to highlight a recommended plan?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint:
//         'Drawing attention to a specific plan can increase conversions'
//     },
//     {
//       id: 'plans_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Our Plans"',
//       contextHint: 'Main heading for your plans section'
//     }
//   ],

//   experiences: [
//     {
//       id: 'experiences_layout',
//       question: 'How would you like to display your experiences?',
//       type: 'radio',
//       options: [
//         { id: 'timeline', label: 'Timeline Style', value: 'timeline' },
//         { id: 'cards', label: 'Card Layout', value: 'cards' },
//         { id: 'list', label: 'List Layout', value: 'list' }
//       ],
//       contextHint: 'Visual arrangement of your experience items'
//     },
//     {
//       id: 'experiences_items',
//       question: 'List your key experiences',
//       type: 'textarea',
//       placeholder:
//         'Position: Company\nDuration: Date range\nDescription of responsibilities',
//       contextHint: 'Include at least 2-3 significant professional experiences'
//     },
//     {
//       id: 'experiences_elements',
//       question: 'Which elements would you like to include for each experience?',
//       type: 'checkbox',
//       options: [
//         { id: 'company', label: 'Company Name', value: 'company' },
//         { id: 'position', label: 'Job Title', value: 'position' },
//         { id: 'duration', label: 'Employment Dates', value: 'duration' },
//         { id: 'description', label: 'Description', value: 'description' },
//         { id: 'logo', label: 'Company Logo', value: 'logo' }
//       ],
//       contextHint: 'Information to display for each experience'
//     },
//     {
//       id: 'experiences_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Professional Experience"',
//       contextHint: 'Main heading for your experiences section'
//     }
//   ],

//   socials: [
//     {
//       id: 'socials_layout',
//       question: 'How would you like to display your social links?',
//       type: 'radio',
//       options: [
//         { id: 'icons', label: 'Icon Only', value: 'icons' },
//         { id: 'buttons', label: 'Button Style', value: 'buttons' },
//         { id: 'text', label: 'Text Links', value: 'text' }
//       ],
//       contextHint: 'Visual style for your social media links'
//     },
//     {
//       id: 'socials_platforms',
//       question: 'Which social media platforms would you like to include?',
//       type: 'checkbox',
//       options: [
//         { id: 'twitter', label: 'Twitter (X)', value: 'twitter' },
//         { id: 'facebook', label: 'Facebook', value: 'facebook' },
//         { id: 'instagram', label: 'Instagram', value: 'instagram' },
//         { id: 'linkedin', label: 'LinkedIn', value: 'linkedin' },
//         { id: 'youtube', label: 'YouTube', value: 'youtube' },
//         { id: 'tiktok', label: 'TikTok', value: 'tiktok' },
//         { id: 'github', label: 'GitHub', value: 'github' },
//         { id: 'dribbble', label: 'Dribbble', value: 'dribbble' },
//         { id: 'pinterest', label: 'Pinterest', value: 'pinterest' },
//         { id: 'behance', label: 'Behance', value: 'behance' }
//       ],
//       contextHint: 'Select the platforms where you have an active presence'
//     },
//     {
//       id: 'socials_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Connect With Us"',
//       contextHint: 'Main heading for your social links section'
//     }
//   ],

//   newsletter: [
//     {
//       id: 'newsletter_layout',
//       question: 'How would you like to display your newsletter signup?',
//       type: 'radio',
//       options: [
//         { id: 'inline', label: 'Inline Form', value: 'inline' },
//         { id: 'centered', label: 'Centered Form', value: 'centered' },
//         { id: 'split', label: 'Split with Image', value: 'split' }
//       ],
//       contextHint: 'Visual arrangement of your newsletter section'
//     },
//     {
//       id: 'newsletter_fields',
//       question: 'Which fields would you like to include in your form?',
//       type: 'checkbox',
//       options: [
//         { id: 'email', label: 'Email (Required)', value: 'email' },
//         { id: 'name', label: 'Name', value: 'name' },
//         {
//           id: 'preferences',
//           label: 'Content Preferences',
//           value: 'preferences'
//         }
//       ],
//       contextHint: 'Information you want to collect from subscribers'
//     },
//     {
//       id: 'newsletter_cta',
//       question: 'Submit button text',
//       type: 'text',
//       placeholder: 'e.g., "Subscribe"',
//       contextHint: 'Text for your newsletter signup button'
//     },
//     {
//       id: 'newsletter_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Join Our Newsletter"',
//       contextHint: 'Main heading for your newsletter section'
//     }
//   ],

//   how_to: [
//     {
//       id: 'how_to_layout',
//       question: 'How would you like to display your steps?',
//       type: 'radio',
//       options: [
//         { id: 'horizontal', label: 'Horizontal Steps', value: 'horizontal' },
//         { id: 'vertical', label: 'Vertical Steps', value: 'vertical' },
//         { id: 'cards', label: 'Step Cards', value: 'cards' }
//       ],
//       contextHint: 'Visual arrangement of your process steps'
//     },
//     {
//       id: 'how_to_steps',
//       question: 'List the steps in your process',
//       type: 'textarea',
//       placeholder: 'Step 1: Title\nDescription\nStep 2: Title\nDescription',
//       contextHint: 'Include 3-5 clear steps in your process'
//     },
//     {
//       id: 'how_to_elements',
//       question: 'Which elements would you like to include for each step?',
//       type: 'checkbox',
//       options: [
//         { id: 'numbers', label: 'Step Numbers', value: 'numbers' },
//         { id: 'icons', label: 'Step Icons', value: 'icons' },
//         { id: 'titles', label: 'Step Titles', value: 'titles' },
//         {
//           id: 'descriptions',
//           label: 'Step Descriptions',
//           value: 'descriptions'
//         },
//         { id: 'images', label: 'Step Images', value: 'images' }
//       ],
//       contextHint: 'Information to display for each step'
//     },
//     {
//       id: 'how_to_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "How It Works"',
//       contextHint: 'Main heading for your process section'
//     }
//   ],

//   header: [
//     {
//       id: 'header_layout',
//       question: 'Which header layout would you prefer?',
//       type: 'radio',
//       options: [
//         { id: 'simple', label: 'Simple (Logo + Nav)', value: 'simple' },
//         { id: 'center', label: 'Centered Logo', value: 'center' },
//         { id: 'split', label: 'Split (Logo between Nav)', value: 'split' }
//       ],
//       contextHint: 'Arrangement of your header elements'
//     },
//     {
//       id: 'header_elements',
//       question: 'Which elements would you like to include in your header?',
//       type: 'checkbox',
//       options: [
//         { id: 'logo', label: 'Logo', value: 'logo' },
//         { id: 'nav', label: 'Navigation Menu', value: 'nav' },
//         { id: 'search', label: 'Search Box', value: 'search' },
//         { id: 'cta', label: 'Call-to-Action Button', value: 'cta' },
//         { id: 'social', label: 'Social Icons', value: 'social' },
//         { id: 'contact', label: 'Contact Info', value: 'contact' }
//       ],
//       contextHint: 'Components to include in your website header'
//     },
//     {
//       id: 'header_sticky',
//       question:
//         'Would you like a sticky header that stays visible when scrolling?',
//       type: 'radio',
//       options: [
//         { id: 'yes', label: 'Yes', value: 'yes' },
//         { id: 'no', label: 'No', value: 'no' }
//       ],
//       contextHint: 'A sticky header keeps navigation accessible as users scroll'
//     },
//     {
//       id: 'header_sitename',
//       question: 'Your website name',
//       type: 'text',
//       placeholder: 'e.g., "PageForge"',
//       contextHint: 'Name to display in your header'
//     }
//   ],

//   footer: [
//     {
//       id: 'footer_layout',
//       question: 'Which footer layout would you prefer?',
//       type: 'radio',
//       options: [
//         { id: 'simple', label: 'Simple Footer', value: 'simple' },
//         { id: 'columns', label: 'Multi-column', value: 'columns' },
//         { id: 'big', label: 'Big Footer with Sitemap', value: 'big' }
//       ],
//       contextHint: 'Overall structure of your website footer'
//     },
//     {
//       id: 'footer_elements',
//       question: 'Which elements would you like to include in your footer?',
//       type: 'checkbox',
//       options: [
//         { id: 'sitemap', label: 'Sitemap Links', value: 'sitemap' },
//         { id: 'contact', label: 'Contact Information', value: 'contact' },
//         { id: 'social', label: 'Social Media Icons', value: 'social' },
//         { id: 'newsletter', label: 'Newsletter Signup', value: 'newsletter' },
//         { id: 'logo', label: 'Logo', value: 'logo' },
//         { id: 'copyright', label: 'Copyright Notice', value: 'copyright' },
//         { id: 'legal', label: 'Legal Links', value: 'legal' }
//       ],
//       contextHint: 'Components to include in your website footer'
//     },
//     {
//       id: 'footer_copyright',
//       question: 'Your copyright text',
//       type: 'text',
//       placeholder: 'e.g., "© 2025 Your Company Name. All rights reserved."',
//       contextHint: 'Copyright notice to display in your footer'
//     },
//     {
//       id: 'footer_title',
//       question: 'Footer tagline or title',
//       type: 'text',
//       placeholder: 'e.g., "Building the future, today"',
//       contextHint: 'Brief tagline to display in your footer'
//     }
//   ],

//   menu: [
//     {
//       id: 'menu_layout',
//       question: 'How would you like to display your menu?',
//       type: 'radio',
//       options: [
//         { id: 'simple', label: 'Simple List', value: 'simple' },
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'grouped', label: 'Grouped by Category', value: 'grouped' }
//       ],
//       contextHint: 'Visual arrangement of your menu items'
//     },
//     {
//       id: 'menu_categories',
//       question: 'List your menu categories',
//       type: 'text',
//       placeholder: 'e.g., "Appetizers, Main Courses, Desserts"',
//       contextHint: 'Categories to organize your menu items'
//     },
//     {
//       id: 'menu_items',
//       question: 'Provide several sample menu items',
//       type: 'textarea',
//       placeholder:
//         'Item: Item name\nDescription: Brief description\nPrice: $0.00\nCategory: Category name',
//       contextHint: 'Include at least 3-5 menu items with details'
//     },
//     {
//       id: 'menu_elements',
//       question: 'Which elements would you like to include for each menu item?',
//       type: 'checkbox',
//       options: [
//         { id: 'name', label: 'Item Name', value: 'name' },
//         { id: 'description', label: 'Description', value: 'description' },
//         { id: 'price', label: 'Price', value: 'price' },
//         { id: 'image', label: 'Images', value: 'image' },
//         { id: 'dietary', label: 'Dietary Icons', value: 'dietary' },
//         { id: 'spice', label: 'Spice Level', value: 'spice' }
//       ],
//       contextHint: 'Information to display for each menu item'
//     }
//   ],

//   property: [
//     {
//       id: 'property_layout',
//       question: 'How would you like to display your properties?',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'list', label: 'List Layout', value: 'list' },
//         { id: 'cards', label: 'Property Cards', value: 'cards' }
//       ],
//       contextHint: 'Visual arrangement of your property listings'
//     },
//     {
//       id: 'property_count',
//       question: 'How many properties would you like to display?',
//       type: 'radio',
//       options: [
//         { id: 'p3', label: '3 Properties', value: '3' },
//         { id: 'p4', label: '4 Properties', value: '4' },
//         { id: 'p6', label: '6 Properties', value: '6' }
//       ],
//       contextHint: 'Number of property listings to show'
//     },
//     {
//       id: 'property_elements',
//       question: 'Which elements would you like to include for each property?',
//       type: 'checkbox',
//       options: [
//         { id: 'image', label: 'Property Image', value: 'image' },
//         { id: 'price', label: 'Price', value: 'price' },
//         { id: 'location', label: 'Location', value: 'location' },
//         { id: 'specs', label: 'Specifications (beds/baths)', value: 'specs' },
//         { id: 'sqft', label: 'Square Footage', value: 'sqft' },
//         { id: 'description', label: 'Description', value: 'description' },
//         { id: 'agent', label: 'Agent Info', value: 'agent' }
//       ],
//       contextHint: 'Information to display for each property'
//     },
//     {
//       id: 'property_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Featured Properties"',
//       contextHint: 'Main heading for your property listings section'
//     }
//   ],

//   projects: [
//     {
//       id: 'projects_layout',
//       question: 'How would you like to display your projects?',
//       type: 'radio',
//       options: [
//         { id: 'grid', label: 'Grid Layout', value: 'grid' },
//         { id: 'masonry', label: 'Masonry Grid', value: 'masonry' },
//         { id: 'carousel', label: 'Carousel', value: 'carousel' }
//       ],
//       contextHint: 'Visual arrangement of your project items'
//     },
//     {
//       id: 'projects_count',
//       question: 'How many projects would you like to display?',
//       type: 'radio',
//       options: [
//         { id: 'p3', label: '3 Projects', value: '3' },
//         { id: 'p4', label: '4 Projects', value: '4' },
//         { id: 'p6', label: '6 Projects', value: '6' }
//       ],
//       contextHint: 'Number of projects to show in this section'
//     },
//     {
//       id: 'projects_elements',
//       question: 'Which elements would you like to include for each project?',
//       type: 'checkbox',
//       options: [
//         { id: 'image', label: 'Project Image', value: 'image' },
//         { id: 'title', label: 'Project Title', value: 'title' },
//         { id: 'description', label: 'Description', value: 'description' },
//         { id: 'tech', label: 'Technologies Used', value: 'tech' },
//         { id: 'link', label: 'Live Demo Link', value: 'link' },
//         { id: 'repo', label: 'Repository Link', value: 'repo' },
//         { id: 'date', label: 'Completion Date', value: 'date' }
//       ],
//       contextHint: 'Information to display for each project'
//     },
//     {
//       id: 'projects_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "My Projects"',
//       contextHint: 'Main heading for your projects section'
//     }
//   ],

//   careers: [
//     {
//       id: 'careers_layout',
//       question: 'How would you like to display your job listings?',
//       type: 'radio',
//       options: [
//         { id: 'cards', label: 'Job Cards', value: 'cards' },
//         { id: 'list', label: 'List Layout', value: 'list' },
//         { id: 'accordion', label: 'Expandable Accordion', value: 'accordion' }
//       ],
//       contextHint: 'Visual arrangement of your career opportunities'
//     },
//     {
//       id: 'careers_filters',
//       question: 'Would you like to include job filters?',
//       type: 'checkbox',
//       options: [
//         { id: 'department', label: 'Department Filter', value: 'department' },
//         { id: 'location', label: 'Location Filter', value: 'location' },
//         { id: 'type', label: 'Job Type Filter', value: 'type' }
//       ],
//       contextHint: 'Filters to help users find relevant job listings'
//     },
//     {
//       id: 'careers_elements',
//       question:
//         'Which elements would you like to include for each job listing?',
//       type: 'checkbox',
//       options: [
//         { id: 'title', label: 'Job Title', value: 'title' },
//         { id: 'location', label: 'Location', value: 'location' },
//         { id: 'type', label: 'Job Type', value: 'type' },
//         { id: 'description', label: 'Description', value: 'description' },
//         { id: 'requirements', label: 'Requirements', value: 'requirements' },
//         { id: 'benefits', label: 'Benefits', value: 'benefits' },
//         { id: 'apply_button', label: 'Apply Button', value: 'apply_button' }
//       ],
//       contextHint: 'Information to display for each job listing'
//     },
//     {
//       id: 'careers_title',
//       question: 'Section title',
//       type: 'text',
//       placeholder: 'e.g., "Join Our Team"',
//       contextHint: 'Main heading for your careers section'
//     }
//   ],

//   legal_text: [
//     {
//       id: 'legal_text_type',
//       question: 'What type of legal content are you adding?',
//       type: 'radio',
//       options: [
//         { id: 'privacy', label: 'Privacy Policy', value: 'privacy' },
//         { id: 'terms', label: 'Terms of Service', value: 'terms' },
//         { id: 'disclaimer', label: 'Disclaimer', value: 'disclaimer' },
//         { id: 'cookies', label: 'Cookie Policy', value: 'cookies' },
//         { id: 'custom', label: 'Custom Legal Text', value: 'custom' }
//       ],
//       contextHint: 'Type of legal document to display'
//     },
//     {
//       id: 'legal_text_layout',
//       question: 'How would you like to structure your legal content?',
//       type: 'radio',
//       options: [
//         { id: 'simple', label: 'Simple Text', value: 'simple' },
//         { id: 'sections', label: 'With Section Headers', value: 'sections' },
//         { id: 'accordion', label: 'Expandable Sections', value: 'accordion' }
//       ],
//       contextHint: 'Visual structure for your legal document'
//     },
//     {
//       id: 'legal_text_elements',
//       question: 'Which elements would you like to include?',
//       type: 'checkbox',
//       options: [
//         { id: 'toc', label: 'Table of Contents', value: 'toc' },
//         { id: 'date', label: 'Effective Date', value: 'date' },
//         { id: 'headings', label: 'Section Headings', value: 'headings' },
//         { id: 'contact', label: 'Contact Information', value: 'contact' }
//       ],
//       contextHint: 'Elements to include in your legal document'
//     },
//     {
//       id: 'legal_text_title',
//       question: 'Document title',
//       type: 'text',
//       placeholder: 'e.g., "Privacy Policy"',
//       contextHint: 'Main heading for your legal document'
//     }
//   ]
// }
