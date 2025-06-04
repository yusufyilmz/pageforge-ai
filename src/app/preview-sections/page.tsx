import { UniversalPage } from '../../components/universal-page/UniversalPage'
import { AboutPageConfig } from '../../lib/types/page/pageTypes'

const config: AboutPageConfig = {
  pageType: 'about',
  slug: '/about',
  metadata: {
    title: 'About me',
    description: 'Meet222 Selene Yu, Design Engineer from Asia/Jakarta',
    keywords: [
      'about',
      'Selene',
      'Design Engineer',
      'portfolio',
      'biography',
      'developer'
    ],
    author: 'Selene Yu',
    publishDate: '2025-05-30T01:58:05.941Z',
    modifiedDate: '2025-05-30T01:58:05.941Z',
    openGraph: {
      type: 'profile',
      title: 'About me',
      description: 'Meet222 Selene Yu, Design Engineer from Asia/Jakarta',
      image: '/images/avatar.jpg',
      alt: 'Selene Yu',
      url: '/about'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About me',
      description: 'Meet222 Selene Yu, Design Engineer from Asia/Jakarta',
      image: '/images/avatar.jpg'
    },
    canonical: 'http://localhost:3000/about'
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': '/about',
    name: 'Selene Yu',
    givenName: 'Selene',
    familyName: 'Yu',
    jobTitle: 'Design Engineer',
    description:
      'Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.',
    image: '/images/avatar.jpg',
    url: '/about',
    location: {
      '@type': 'Place',
      name: 'Asia/Jakarta'
    },
    knowsLanguage: ['English', 'Bahasa'],
    sameAs: [
      'https://github.com/once-ui-system/nextjs-starter',
      'https://www.linkedin.com/company/once-ui/'
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'University of Jakarta'
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Build the Future'
      }
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'FLY'
      },
      {
        '@type': 'Organization',
        name: 'Creativ3'
      }
    ]
  },
  content: {
    sidebar: {
      id: 'table-of-contents',
      title: 'Table of Contents',
      blocks: [
        {
          type: 'table-of-contents',
          content: {
            items: [
              {
                title: 'Introduction',
                display: true
              },
              {
                title: 'Work Experience',
                display: true
              },
              {
                title: 'Studies',
                display: true
              },
              {
                title: 'Technical skills',
                display: true
              },
              {
                title: 'Professional Profile',
                display: true
              },
              {
                title: 'Career Journey',
                display: true
              },
              {
                title: 'Get in Touch',
                display: true
              },
              {
                title: 'About My Work',
                display: true
              },
              {
                title: 'Find Me',
                display: true
              },
              {
                title: 'Connect With Me',
                display: true
              },
              {
                title: 'Work Gallery',
                display: true
              },
              {
                title: 'Latest Blog Posts',
                display: true
              },
              {
                title: 'Stay Updated',
                display: true
              },
              {
                title: 'Featured Projects',
                display: true
              },
              {
                title: 'What Clients Say',
                display: true
              },
              {
                title: 'Services & Pricing',
                display: true
              },
              {
                title: 'Frequently Asked Questions',
                display: true
              }
            ]
          }
        }
      ],
      display: true
    },
    main: [
      {
        id: 'heronew',
        blocks: [
          {
            type: 'hero',
            display: true,
            content: {
              title: 'Build Amazing Websites',
              subtitle: 'With PageForge',
              description: 'Create stunning websites from JSON configurations',
              alignment: 'center',
              height: 'large',
              badge: {
                label: 'New',
                icon: 'sparkle'
              },
              buttons: [
                {
                  label: 'Get Started',
                  href: '/signup',
                  variant: 'primary',
                  icon: 'arrowRight',
                  showArrow: true
                },
                {
                  label: 'Learn More',
                  href: '/docs',
                  variant: 'secondary'
                }
              ],
              features: [
                {
                  icon: 'check',
                  text: 'No coding required'
                },
                {
                  icon: 'check',
                  text: 'Fully customizable'
                }
              ]
            }
          }
        ],
        display: true
      },

      {
        id: 'about-hero',
        blocks: [
          {
            type: 'about-hero',
            content: {
              avatar: {
                display: true
              },
              intro: {
                display: true,
                title: 'Selene Yu',
                description:
                  'Design Engineer based in Asia/Jakarta. Passionate about transforming complex challenges into simple, elegant design solutions.'
              }
            }
          }
        ],
        display: true
      },
      {
        id: 'calendar-link',
        blocks: [
          {
            type: 'calendar-link',
            content: {
              text: 'Schedule a call',
              description: "Let's discuss your project or just have a chat",
              link: 'https://cal.com',
              icon: 'calendar'
            },
            display: true
          }
        ],
        display: true
      },
      {
        id: 'introduction',
        title: 'Introduction',
        description: 'Get to know me better',
        blocks: [
          {
            type: 'text',
            content: {
              text: 'Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.'
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      {
        id: 'experience',
        title: 'Work Experience',
        description: 'My professional journey and achievements',
        blocks: [
          {
            type: 'experience',
            content: {
              title: 'Work Experience',
              experiences: [
                {
                  company: 'FLY',
                  timeframe: '2022 - Present',
                  role: 'Senior Design Engineer',
                  achievements: [
                    'Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.',
                    'Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.'
                  ],
                  images: [
                    {
                      src: '/images/projects/project-01/cover-01.jpg',
                      alt: 'Once UI Project',
                      width: 16,
                      height: 9
                    }
                  ]
                },
                {
                  company: 'Creativ3',
                  timeframe: '2018 - 2022',
                  role: 'Lead Designer',
                  achievements: [
                    'Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.',
                    'Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.'
                  ],
                  images: []
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      {
        id: 'education',
        title: 'Studies',
        description: 'My academic background and certifications',
        blocks: [
          {
            type: 'studies',
            content: {
              title: 'Studies',
              institutions: [
                {
                  name: 'University of Jakarta',
                  description: 'Studied software engineering.'
                },
                {
                  name: 'Build the Future',
                  description: 'Studied online marketing and personal branding.'
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      {
        id: 'skills',
        title: 'Technical skills',
        description: 'Technologies and tools I work with',
        blocks: [
          {
            type: 'skills',
            content: {
              title: 'Technical skills',
              skills: [
                {
                  title: 'Figma',
                  description:
                    'Able to prototype in Figma with Once UI with unnatural speed.',
                  images: [
                    {
                      src: '/images/projects/project-01/cover-02.jpg',
                      alt: 'Project image',
                      width: 16,
                      height: 9
                    },
                    {
                      src: '/images/projects/project-01/cover-03.jpg',
                      alt: 'Project image',
                      width: 16,
                      height: 9
                    }
                  ]
                },
                {
                  title: 'Next.js',
                  description:
                    'Building next gen apps with Next.js + Once UI + Supabase.',
                  images: [
                    {
                      src: '/images/projects/project-01/cover-04.jpg',
                      alt: 'Project image',
                      width: 16,
                      height: 9
                    }
                  ]
                }
              ],
              categories: [
                'Frontend Development',
                'Backend Development',
                'DevOps & Cloud',
                'Design & UX',
                'Mobile Development'
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Profile Section Example
      {
        id: 'profile',
        title: 'Professional Profile',
        description: 'Comprehensive professional overview',
        blocks: [
          {
            type: 'profile',
            content: {
              name: 'Selene Yu',
              role: 'Senior Design Engineer',
              bio: 'A passionate design engineer with over 5 years of experience creating beautiful, functional digital experiences. I specialize in bridging the gap between design and development, ensuring that every project not only looks great but performs exceptionally.',
              avatar: {
                src: '/images/avatar.jpg',
                alt: 'Selene Yu - Design Engineer'
              },
              location: 'Jakarta, Indonesia',
              email: 'selene@example.com',
              phone: '+62 812 3456 7890',
              social: [
                {
                  platform: 'LinkedIn',
                  url: 'https://linkedin.com/in/seleneyuuu',
                  icon: 'linkedin'
                },
                {
                  platform: 'GitHub',
                  url: 'https://github.com/seleneyuuu',
                  icon: 'github'
                },
                {
                  platform: 'Dribbble',
                  url: 'https://dribbble.com/seleneyuuu',
                  icon: 'dribbble'
                }
              ],
              skills: [
                'Figma',
                'Next.js',
                'TypeScript',
                'Design Systems',
                'User Research',
                'Prototyping',
                'React',
                'UI/UX Design'
              ],
              achievements: [
                'Led the redesign of a major SaaS platform serving 100K+ users',
                'Built and maintained design systems used by 50+ team members',
                'Increased user engagement by 40% through data-driven design decisions',
                'Mentored 10+ junior designers and developers',
                'Speaker at 3 major design conferences'
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Timeline Section Example
      {
        id: 'timeline',
        title: 'Career Journey',
        description: 'My professional timeline and key milestones',
        blocks: [
          {
            type: 'timeline',
            content: {
              title: 'Professional Timeline',
              subtitle: 'Key milestones in my career',
              items: [
                {
                  date: 'Mar 2024',
                  title: 'Design System Launch',
                  description:
                    'Successfully launched a comprehensive design system that unified the visual language across 15+ products.',
                  category: 'Achievement',
                  status: 'completed',
                  icon: 'check'
                },
                {
                  date: 'Jan 2024',
                  title: 'Team Lead Promotion',
                  description:
                    'Promoted to Lead Design Engineer, now managing a team of 8 designers and engineers.',
                  category: 'Career',
                  status: 'completed',
                  icon: 'star'
                },
                {
                  date: 'Sep 2023',
                  title: 'Conference Speaker',
                  description:
                    'Spoke at Design Systems Conference about building scalable design workflows.',
                  category: 'Speaking',
                  status: 'completed',
                  icon: 'microphone'
                },
                {
                  date: 'Jun 2023',
                  title: 'Product Redesign',
                  description:
                    'Led the complete redesign of the main product dashboard, improving user satisfaction by 35%.',
                  category: 'Project',
                  status: 'completed',
                  icon: 'palette'
                },
                {
                  date: 'Jan 2022',
                  title: 'Joined FLY',
                  description:
                    'Started as Senior Design Engineer at FLY, focusing on product design and engineering.',
                  category: 'Career',
                  status: 'completed',
                  icon: 'briefcase'
                },
                {
                  date: 'Aug 2025',
                  title: 'Design Conference',
                  description:
                    'Keynote speaker at upcoming International Design Summit.',
                  category: 'Speaking',
                  status: 'upcoming',
                  icon: 'calendar'
                }
              ],
              layout: 'vertical',
              showDates: true
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Contact Info Section Example
      {
        id: 'contact-info',
        title: 'Get in Touch',
        description: 'Multiple ways to reach me',
        blocks: [
          {
            type: 'contact-info',
            content: {
              title: 'Contact Information',
              subtitle: "Let's connect and discuss your project",
              contacts: [
                {
                  type: 'email',
                  label: 'Email',
                  value: 'selene@example.com',
                  link: 'mailto:selene@example.com',
                  icon: 'email'
                },
                {
                  type: 'phone',
                  label: 'Phone',
                  value: '+62 812 3456 7890',
                  link: 'tel:+6281234567890',
                  icon: 'phone'
                },
                {
                  type: 'address',
                  label: 'Location',
                  value: 'Jakarta, Indonesia',
                  icon: 'mapPin'
                },
                {
                  type: 'hours',
                  label: 'Working Hours',
                  value: 'Mon - Fri, 9AM - 6PM (GMT+7)',
                  icon: 'clock'
                },
                {
                  type: 'social',
                  label: 'LinkedIn',
                  value: 'Connect on LinkedIn',
                  link: 'https://linkedin.com/in/seleneyuuu',
                  icon: 'linkedin'
                },
                {
                  type: 'social',
                  label: 'Calendar',
                  value: 'Schedule a call',
                  link: 'https://cal.com/seleneyuuu',
                  icon: 'calendar'
                }
              ],
              layout: 'grid'
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Social Links Section Example
      {
        id: 'socials',
        title: 'Connect With Me',
        description: 'Find me on social platforms',
        blocks: [
          {
            type: 'socials',
            content: {
              title: 'Social Links',
              links: [
                {
                  name: 'LinkedIn',
                  icon: 'linkedin',
                  link: 'https://linkedin.com/in/seleneyuuu',
                  description: 'Professional network and career updates'
                },
                {
                  name: 'GitHub',
                  icon: 'github',
                  link: 'https://github.com/seleneyuuu',
                  description: 'Open source projects and code repositories'
                },
                {
                  name: 'Dribbble',
                  icon: 'dribbble',
                  link: 'https://dribbble.com/seleneyuuu',
                  description: 'Design portfolio and creative work'
                },
                {
                  name: 'Twitter',
                  icon: 'twitter',
                  link: 'https://twitter.com/seleneyuuu',
                  description: 'Design insights and industry thoughts'
                },
                {
                  name: 'Figma',
                  icon: 'figma',
                  link: 'https://figma.com/@seleneyuuu',
                  description: 'Design resources and community files'
                }
              ],
              layout: 'grid'
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Gallery Section Example
      {
        id: 'gallery',
        title: 'Work Gallery',
        description: 'Visual showcase of my design work',
        blocks: [
          {
            type: 'gallery',
            content: {
              title: 'Design Portfolio',
              subtitle: 'A collection of my recent work',
              layout: 'masonry',
              columns: 3,
              showFilter: true,
              categories: ['Web Design', 'Mobile Apps', 'Branding', 'UI/UX'],
              images: [
                {
                  src: '/images/projects/project-01/cover-01.jpg',
                  alt: 'Modern dashboard design',
                  caption: 'SaaS Dashboard Redesign',
                  orientation: 'horizontal',
                  category: 'Web Design'
                },
                {
                  src: '/images/projects/project-01/cover-02.jpg',
                  alt: 'Mobile app interface',
                  caption: 'E-commerce Mobile App',
                  orientation: 'vertical',
                  category: 'Mobile Apps'
                },
                {
                  src: '/images/projects/project-01/cover-03.jpg',
                  alt: 'Brand identity design',
                  caption: 'Tech Startup Branding',
                  orientation: 'square',
                  category: 'Branding'
                },
                {
                  src: '/images/projects/project-01/cover-04.jpg',
                  alt: 'User interface design',
                  caption: 'Banking App UI',
                  orientation: 'vertical',
                  category: 'Mobile Apps'
                },
                {
                  src: '/images/avatar.jpg',
                  alt: 'Website redesign',
                  caption: 'Corporate Website',
                  orientation: 'horizontal',
                  category: 'Web Design'
                },
                {
                  src: '/images/avatar.jpg',
                  alt: 'UX research presentation',
                  caption: 'User Research Study',
                  orientation: 'horizontal',
                  category: 'UI/UX'
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Posts Grid Section Example
      {
        id: 'posts-grid',
        title: 'Latest Blog Posts',
        description: 'Insights and thoughts on design and development',
        blocks: [
          {
            type: 'posts-grid',
            content: {
              title: 'Recent Articles',
              subtitle: 'Sharing knowledge and experiences',
              layout: 'grid',
              columns: 2,
              showExcerpt: true,
              showDate: true,
              showAuthor: true,
              featuredPosts: {
                range: [0, 2],
                thumbnail: true,
                columns: '2',
                items: [
                  {
                    slug: 'building-scalable-design-systems',
                    metadata: {
                      title: 'Building Scalable Design Systems',
                      description:
                        'Learn how to create design systems that grow with your product and team. This comprehensive guide covers everything from tokens to component libraries.',
                      publishedAt: '2024-03-15T00:00:00.000Z',
                      author: 'Selene Yu',
                      tag: 'Design Systems',
                      tags: ['design', 'systems', 'scalability'],
                      readingTime: 8,
                      image: '/images/projects/project-01/cover-01.jpg'
                    },
                    content: '<p>Design systems are...</p>'
                  },
                  {
                    slug: 'future-of-design-engineering',
                    metadata: {
                      title: 'The Future of Design Engineering',
                      description:
                        'Exploring the evolving role of design engineers and how they bridge the gap between design and development in modern product teams.',
                      publishedAt: '2024-03-10T00:00:00.000Z',
                      author: 'Selene Yu',
                      tag: 'Career',
                      tags: ['design engineering', 'future', 'career'],
                      readingTime: 6,
                      image: '/images/projects/project-01/cover-02.jpg'
                    },
                    content: '<p>Design engineering is...</p>'
                  }
                ]
              },
              recentPosts: {
                range: [0, 4],
                thumbnail: true,
                columns: '2',
                items: [
                  {
                    slug: 'mastering-figma-auto-layout',
                    metadata: {
                      title: 'Mastering Figma Auto Layout',
                      description:
                        "A deep dive into Figma's Auto Layout feature and how to use it effectively for responsive design.",
                      publishedAt: '2024-03-05T00:00:00.000Z',
                      author: 'Selene Yu',
                      tag: 'Tools',
                      tags: ['figma', 'auto-layout', 'tutorial'],
                      readingTime: 12,
                      image: '/images/projects/project-01/cover-03.jpg'
                    },
                    content: '<p>Figma Auto Layout...</p>'
                  },
                  {
                    slug: 'user-research-that-works',
                    metadata: {
                      title: 'User Research That Actually Works',
                      description:
                        'Practical tips for conducting user research that leads to actionable insights and better design decisions.',
                      publishedAt: '2024-02-28T00:00:00.000Z',
                      author: 'Selene Yu',
                      tag: 'Research',
                      tags: ['user research', 'ux', 'methodology'],
                      readingTime: 10,
                      image: '/images/projects/project-01/cover-04.jpg'
                    },
                    content: '<p>User research...</p>'
                  }
                ]
              }
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Newsletter Section Example
      {
        id: 'newsletter',
        title: 'Stay Updated',
        description: 'Get design insights delivered to your inbox',
        blocks: [
          {
            type: 'newsletter',
            content: {
              display: true,
              title: 'Design Engineering Newsletter',
              description:
                'Weekly insights on design systems, frontend development, and the latest in design engineering. Join 2,000+ designers and developers.',
              placeholder: 'Enter your email address',
              buttonText: 'Subscribe',
              successMessage:
                'Thanks for subscribing! Check your email for confirmation.',
              errorMessage: 'Something went wrong. Please try again.'
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Projects Section Example
      {
        id: 'projects-showcase',
        title: 'Featured Projects',
        description: 'Showcase of my recent design and development work',
        blocks: [
          {
            type: 'projects',
            content: {
              title: 'Recent Projects',
              subtitle: 'A selection of my latest work',
              layout: 'grid',
              columns: 2,
              showDescription: true,
              showTechnology: true,
              projects: [
                {
                  title: 'PageForge Platform',
                  description:
                    'A JSON-driven website generator built with Next.js, enabling rapid website creation through configuration.',
                  image: '/images/projects/project-01/cover-01.jpg',
                  technologies: [
                    'Next.js',
                    'TypeScript',
                    'Supabase',
                    'Once UI'
                  ],
                  link: 'https://pageforge.dev',
                  github: 'https://github.com/pageforge/platform',
                  featured: true
                },
                {
                  title: 'Design System Pro',
                  description:
                    'Comprehensive design system for enterprise applications with 100+ components and design tokens.',
                  image: '/images/projects/project-01/cover-02.jpg',
                  technologies: [
                    'React',
                    'Storybook',
                    'Design Tokens',
                    'Figma'
                  ],
                  link: 'https://designsystem.pro',
                  featured: true
                },
                {
                  title: 'Mobile Banking App',
                  description:
                    'Complete mobile banking experience with modern UI and seamless user flows.',
                  image: '/images/projects/project-01/cover-03.jpg',
                  technologies: [
                    'React Native',
                    'TypeScript',
                    'Redux',
                    'Figma'
                  ],
                  link: 'https://bankingapp.demo'
                },
                {
                  title: 'E-commerce Dashboard',
                  description:
                    'Analytics dashboard for e-commerce platforms with real-time data visualization.',
                  image: '/images/projects/project-01/cover-04.jpg',
                  technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
                  link: 'https://ecommerce.dashboard'
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // About Section Example (general about section - different from about-hero)
      {
        id: 'about-general',
        title: 'About My Work',
        description: 'Learn more about my approach and philosophy',
        blocks: [
          {
            type: 'about',
            content: {
              title: 'My Design Philosophy',
              description:
                'Creating meaningful digital experiences through thoughtful design',
              content:
                "I believe that great design is more than just aesthetics—it's about solving real problems and creating meaningful connections between people and technology. My approach combines user-centered design principles with technical feasibility to deliver solutions that are both beautiful and functional.\n\nEvery project starts with understanding the user's needs and business goals. From there, I craft experiences that feel intuitive, engaging, and purposeful. Whether it's a complex enterprise application or a simple landing page, the focus remains on creating value through design.",
              layout: 'text-image',
              alignment: 'left',
              image: {
                src: '/images/avatar.jpg',
                alt: 'Design process and philosophy',
                width: 500,
                height: 400
              }
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Map Section Example
      {
        id: 'location-map',
        title: 'Find Me',
        description: 'My location and where we can meet',
        blocks: [
          {
            type: 'map',
            content: {
              title: 'Jakarta Office',
              description:
                "Located in the heart of Jakarta's business district",
              address: 'Jakarta, Indonesia',
              coordinates: {
                lat: -6.2088,
                lng: 106.8456
              },
              zoom: 12,
              height: 400,
              showControls: true,
              markers: [
                {
                  lat: -6.2088,
                  lng: 106.8456,
                  title: 'Main Office',
                  description: 'Primary workspace and meeting location'
                },
                {
                  lat: -6.2,
                  lng: 106.83,
                  title: 'Coffee Meeting Spot',
                  description:
                    'Great place for casual meetings and coffee chats'
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Testimonials Section Example
      {
        id: 'testimonials',
        title: 'What Clients Say',
        description: "Feedback from amazing people I've worked with",
        blocks: [
          {
            type: 'testimonials',
            content: {
              title: 'Client Testimonials',
              subtitle: "Don't just take my word for it",
              layout: 'grid',
              columns: 2,
              testimonials: [
                {
                  content:
                    'Working with Selene was an absolute pleasure. Her attention to detail and creative vision transformed our brand completely. The results exceeded our expectations!',
                  author: {
                    name: 'Sarah Johnson',
                    role: 'CEO',
                    company: 'TechStart Inc.',
                    avatar: '/images/projects/project-01/avatar-01.png'
                  },
                  rating: 5,
                  featured: true
                },
                {
                  content:
                    'Selene delivered an outstanding mobile app design that our users love. Her user-centric approach and technical expertise made all the difference.',
                  author: {
                    name: 'Michael Chen',
                    role: 'Product Manager',
                    company: 'InnovateLab',
                    avatar: '/images/projects/project-01/avatar-02.png'
                  },
                  rating: 5
                },
                {
                  content:
                    'Professional, creative, and reliable. Selene helped us redesign our entire digital presence and the impact on our business has been phenomenal.',
                  author: {
                    name: 'Emily Rodriguez',
                    role: 'Marketing Director',
                    company: 'GrowthCo',
                    avatar: '/images/projects/project-01/avatar-03.png'
                  },
                  rating: 5
                },
                {
                  content:
                    'The design system Selene created for us has streamlined our entire development process. Highly recommend her expertise!',
                  author: {
                    name: 'David Kim',
                    role: 'CTO',
                    company: 'BuildFast',
                    avatar: '/images/projects/project-01/avatar-04.png'
                  },
                  rating: 5
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },

      {
        id: 'custom-section-1',
        title: 'Custom Section (AI Generated)',
        blocks: [
          {
            type: 'custom',
            description: 'Pricing Calculator',
            content: {
              title: 'Choose Your Plan',
              plans: [{ name: 'Pro', price: 29 }]
            }
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // Plans Section Example
      {
        id: 'service-plans',
        title: 'Services & Pricing',
        description: 'Choose the plan that fits your project needs',
        blocks: [
          {
            type: 'plans',
            content: {
              title: 'Service Plans',
              subtitle: 'Flexible pricing options for every project size',
              plans: [
                {
                  name: 'Starter',
                  description:
                    'Perfect for small projects and personal websites',
                  price: {
                    amount: 1500,
                    currency: 'USD',
                    period: 'project'
                  },
                  features: [
                    {
                      text: 'Custom website design',
                      included: true
                    },
                    {
                      text: 'Responsive mobile design',
                      included: true
                    },
                    {
                      text: 'Basic SEO optimization',
                      included: true
                    },
                    {
                      text: 'Contact form integration',
                      included: true
                    },
                    {
                      text: 'Social media integration',
                      included: true
                    },
                    {
                      text: 'Advanced animations',
                      included: false
                    },
                    {
                      text: 'E-commerce functionality',
                      included: false
                    },
                    {
                      text: 'Custom CMS',
                      included: false
                    }
                  ],
                  cta: {
                    label: 'Get Started',
                    href: '/contact?plan=starter',
                    variant: 'secondary'
                  },
                  popular: false
                },
                {
                  name: 'Professional',
                  description: 'Ideal for businesses and growing companies',
                  price: {
                    amount: 3500,
                    currency: 'USD',
                    period: 'project'
                  },
                  features: [
                    {
                      text: 'Custom website design',
                      included: true
                    },
                    {
                      text: 'Responsive mobile design',
                      included: true
                    },
                    {
                      text: 'Advanced SEO optimization',
                      included: true,
                      highlight: true
                    },
                    {
                      text: 'Contact form integration',
                      included: true
                    },
                    {
                      text: 'Social media integration',
                      included: true
                    },
                    {
                      text: 'Advanced animations',
                      included: true
                    },
                    {
                      text: 'Blog/CMS integration',
                      included: true
                    },
                    {
                      text: 'Analytics setup',
                      included: true
                    },
                    {
                      text: 'E-commerce functionality',
                      included: false
                    },
                    {
                      text: 'Custom API development',
                      included: false
                    }
                  ],
                  cta: {
                    label: 'Choose Professional',
                    href: '/contact?plan=professional',
                    variant: 'primary'
                  },
                  popular: true
                },
                {
                  name: 'Enterprise',
                  description: 'Complete solution for large-scale projects',
                  price: {
                    amount: 7500,
                    currency: 'USD',
                    period: 'project'
                  },
                  features: [
                    {
                      text: 'Custom website design',
                      included: true
                    },
                    {
                      text: 'Responsive mobile design',
                      included: true
                    },
                    {
                      text: 'Enterprise SEO optimization',
                      included: true,
                      highlight: true
                    },
                    {
                      text: 'Advanced form integrations',
                      included: true
                    },
                    {
                      text: 'Social media integration',
                      included: true
                    },
                    {
                      text: 'Advanced animations',
                      included: true
                    },
                    {
                      text: 'Custom CMS development',
                      included: true,
                      highlight: true
                    },
                    {
                      text: 'E-commerce functionality',
                      included: true
                    },
                    {
                      text: 'Custom API development',
                      included: true
                    },
                    {
                      text: 'Performance optimization',
                      included: true
                    },
                    {
                      text: '6 months support included',
                      included: true,
                      highlight: true
                    }
                  ],
                  cta: {
                    label: 'Contact for Enterprise',
                    href: '/contact?plan=enterprise',
                    variant: 'secondary'
                  },
                  popular: false
                },
                {
                  name: 'Custom',
                  description: 'Tailored solution for unique requirements',
                  custom: true,
                  features: [
                    {
                      text: 'Custom scoped requirements',
                      included: true,
                      highlight: true
                    },
                    {
                      text: 'Dedicated project manager',
                      included: true
                    },
                    {
                      text: 'Priority support',
                      included: true
                    },
                    {
                      text: 'Flexible timeline',
                      included: true
                    },
                    {
                      text: 'All features available',
                      included: true,
                      highlight: true
                    }
                  ],
                  cta: {
                    label: 'Contact Us',
                    href: '/contact?plan=custom',
                    variant: 'secondary'
                  },
                  popular: false
                }
              ]
            },
            display: true
          }
        ],
        layout: {
          marginBottom: 'xxl'
        },
        display: true
      },
      // FAQ Section Example
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        description: 'Common questions about working together',
        blocks: [
          {
            type: 'faq',
            content: {
              title: 'FAQ',
              subtitle: 'Everything you need to know',
              layout: 'accordion',
              categories: [
                {
                  name: 'General',
                  questions: [
                    {
                      question: 'What is your design process?',
                      answer:
                        'My design process consists of 5 phases: Discovery & Research, Strategy & Planning, Design & Prototyping, Development Handoff, and Launch & Support. Each phase is collaborative and includes regular check-ins.'
                    },
                    {
                      question: 'How long does a typical project take?',
                      answer:
                        "Project timelines vary based on scope and complexity. A simple website redesign might take 4-6 weeks, while a complete brand identity and website project could take 8-12 weeks. I'll provide a detailed timeline during our initial consultation."
                    },
                    {
                      question: 'Do you work with international clients?',
                      answer:
                        "Absolutely! I work with clients worldwide. I'm experienced in remote collaboration and use tools like Figma, Slack, and Zoom to ensure smooth communication across time zones."
                    }
                  ]
                },
                {
                  name: 'Pricing & Payment',
                  questions: [
                    {
                      question: 'What payment methods do you accept?',
                      answer:
                        'I accept bank transfers, PayPal, and Stripe payments. For larger projects, I typically work with a 50% upfront payment and 50% upon completion.'
                    },
                    {
                      question: 'Do you offer payment plans?',
                      answer:
                        'Yes, for projects over $10,000, I can arrange a payment plan that works for both parties. This typically involves milestone-based payments throughout the project.'
                    },
                    {
                      question: 'Are there any additional costs?',
                      answer:
                        'My quotes are comprehensive and include all design work. Additional costs might include stock photos, premium fonts, or third-party tools if specifically requested.'
                    }
                  ]
                },
                {
                  name: 'Project Details',
                  questions: [
                    {
                      question: 'Do you provide the source files?',
                      answer:
                        "Yes! Upon project completion, you'll receive all design files including Figma files, exported assets, style guides, and any other deliverables outlined in our agreement."
                    },
                    {
                      question: 'Can you help with development/coding?',
                      answer:
                        'While I specialize in design, I work closely with trusted developers and can provide detailed handoff documentation. I can also recommend development partners if needed.'
                    },
                    {
                      question:
                        'What if I need changes after the project is complete?',
                      answer:
                        'I provide a 30-day warranty period for minor adjustments. For significant changes or ongoing work, we can discuss a maintenance retainer or separate project scope.'
                    }
                  ]
                }
              ]
            }
          }
        ],
        layout: {
          marginBottom: 'xl'
        },
        display: true
      },
      // How-To Section Example
      {
        id: 'how-to-guide',
        title: 'Getting Started',
        description: 'Step-by-step guide to working together',
        blocks: [
          {
            type: 'how-to',
            content: {
              title: 'How to Start a Project with Me',
              steps: [
                {
                  step: 1,
                  title: 'Initial Consultation',
                  description:
                    'We discuss your project goals, requirements, and timeline to ensure alignment.'
                },
                {
                  step: 2,
                  title: 'Proposal & Agreement',
                  description:
                    'I provide a detailed proposal with scope, timeline, and pricing for your approval.'
                },
                {
                  step: 3,
                  title: 'Design & Development',
                  description:
                    'I begin creating your project with regular check-ins and progress updates.'
                },
                {
                  step: 4,
                  title: 'Review & Feedback',
                  description:
                    'You review the work and provide feedback for any necessary refinements.'
                },
                {
                  step: 5,
                  title: 'Launch & Support',
                  description:
                    'We launch your project and I provide ongoing support as needed.'
                }
              ]
            },
            display: true
          }
        ],
        display: true
      },
      // Blog Page Section Example
      {
        id: 'blog-showcase',
        title: 'Blog Content',
        description: 'Latest articles and insights',
        blocks: [
          {
            type: 'blog-page',
            content: {
              title: 'Latest Articles',
              posts: [
                {
                  id: '1',
                  title: 'Building Scalable Design Systems',
                  excerpt:
                    'Learn how to create design systems that grow with your product and team.',
                  slug: 'building-scalable-design-systems',
                  publishDate: '2024-01-15',
                  author: 'Selene Torres',
                  category: 'Design',
                  tags: ['Design Systems', 'UI/UX', 'Scalability'],
                  featuredImage: '/images/gallery/img-01.jpg',
                  readTime: 8
                },
                {
                  id: '2',
                  title: 'Modern Web Development Trends',
                  excerpt:
                    'Exploring the latest trends and technologies shaping web development.',
                  slug: 'modern-web-development-trends',
                  publishDate: '2024-01-10',
                  author: 'Selene Torres',
                  category: 'Development',
                  tags: ['Web Development', 'React', 'Next.js'],
                  featuredImage: '/images/gallery/img-02.jpg',
                  readTime: 12
                }
              ],
              layout: 'grid',
              showExcerpt: true,
              showDate: true,
              showAuthor: true
            },
            display: true
          }
        ],
        display: true
      },
      // Shop Items Section Example
      {
        id: 'services-shop',
        title: 'Services & Products',
        description: 'Professional services and digital products',
        blocks: [
          {
            type: 'shop-items',
            content: {
              title: 'Available Services',
              subtitle: 'Professional design and development services',
              items: [
                {
                  id: '1',
                  name: 'Website Design',
                  description:
                    'Custom website design tailored to your brand and goals.',
                  price: 2500,
                  currency: 'USD',
                  image: '/images/gallery/img-03.jpg',
                  category: 'Design',
                  inStock: true,
                  rating: 5
                },
                {
                  id: '2',
                  name: 'React Development',
                  description:
                    'Modern React applications with best practices and performance optimization.',
                  price: 4000,
                  currency: 'USD',
                  image: '/images/gallery/img-05.jpg',
                  category: 'Development',
                  inStock: true,
                  rating: 5
                },
                {
                  id: '3',
                  name: 'Design System Creation',
                  description:
                    'Comprehensive design systems for consistent user experiences.',
                  price: 3500,
                  currency: 'USD',
                  image: '/images/gallery/img-06.jpg',
                  category: 'Design',
                  inStock: true,
                  rating: 5
                }
              ],
              layout: 'grid',
              columns: 3,
              showPricing: true,
              showRating: true
            },
            display: true
          }
        ],
        display: true
      },
      // Menu Section Example (for restaurant/food business)
      {
        id: 'menu-example',
        title: 'Service Menu',
        description: 'Our service offerings organized by category',
        blocks: [
          {
            type: 'menu',
            content: {
              title: 'Service Categories',
              categories: [
                {
                  name: 'Design Services',
                  items: [
                    {
                      name: 'Brand Identity',
                      description:
                        'Complete brand identity package including logo, colors, and guidelines.',
                      price: '$1500'
                    },
                    {
                      name: 'UI/UX Design',
                      description:
                        'User interface and experience design for web and mobile applications.',
                      price: '$2000'
                    }
                  ]
                },
                {
                  name: 'Development Services',
                  items: [
                    {
                      name: 'Frontend Development',
                      description:
                        'Modern frontend development with React, Next.js, and TypeScript.',
                      price: '$3000'
                    },
                    {
                      name: 'Full-Stack Applications',
                      description:
                        'Complete web applications with backend and database integration.',
                      price: '$5000'
                    }
                  ]
                }
              ]
            },
            display: true
          }
        ],
        display: true
      },
      // Legal Text Section Example
      {
        id: 'terms-privacy',
        title: 'Legal Information',
        description: 'Terms of service and privacy information',
        blocks: [
          {
            type: 'legal-text',
            content: {
              title: 'Terms of Service',
              content:
                'By engaging our services, you agree to these terms and conditions. All work is performed according to industry standards and best practices.',
              sections: [
                {
                  title: 'Service Agreement',
                  content:
                    'By engaging our services, you agree to these terms and conditions. All work is performed according to industry standards and best practices.'
                },
                {
                  title: 'Payment Terms',
                  content:
                    'Payment is due within 30 days of invoice date. Late payments may incur additional fees as outlined in the service agreement.'
                },
                {
                  title: 'Intellectual Property',
                  content:
                    'Upon full payment, all custom work becomes the property of the client. Pre-existing materials and frameworks remain under their respective licenses.'
                }
              ]
            },
            display: true
          }
        ],
        display: true
      },
      // Careers Section Example
      {
        id: 'career-opportunities',
        title: 'Join Our Team',
        description: 'Current job openings and opportunities',
        blocks: [
          {
            type: 'careers',
            content: {
              title: 'Open Positions',
              subtitle: 'Join our growing team of creative professionals',
              jobs: [
                {
                  id: '1',
                  title: 'Senior Frontend Developer',
                  department: 'Engineering',
                  location: 'Remote',
                  type: 'full-time',
                  description:
                    'We are looking for an experienced frontend developer to join our team and help build amazing user experiences.',
                  requirements: [
                    '5+ years of experience with React and TypeScript',
                    'Experience with Next.js and modern build tools',
                    'Strong understanding of responsive design principles',
                    'Experience with testing frameworks (Jest, Cypress)'
                  ],
                  applicationLink: '/careers/apply/frontend-developer'
                },
                {
                  id: '2',
                  title: 'UX/UI Designer',
                  department: 'Design',
                  location: 'Remote',
                  type: 'full-time',
                  description:
                    'Join our design team to create intuitive and beautiful user interfaces for web and mobile applications.',
                  requirements: [
                    '3+ years of experience in UX/UI design',
                    'Proficiency in Figma and design systems',
                    'Experience with user research and testing',
                    'Strong portfolio showcasing web and mobile designs'
                  ],
                  applicationLink: '/careers/apply/ux-ui-designer'
                }
              ]
            },
            display: true
          }
        ],
        display: true
      },
      {
        id: 'recipe-calculator-section',
        title: '🍳 Smart Recipe Calculator',
        blocks: [
          {
            id: 'recipe-calculator-block',
            description: 'Recipe calculator block',
            type: 'custom',
            display: true,
            content: {
              title: 'Dynamic Recipe Scaler',
              description:
                'Adjust serving sizes and automatically recalculate ingredients, cooking times, and nutritional information.',
              style: 'playful',
              recipe: {
                name: 'Perfect Chocolate Chip Cookies',
                baseServings: 24,
                prepTime: 15,
                cookTime: 12,
                difficulty: 'Easy',
                ingredients: [
                  { name: 'All-purpose flour', amount: 2.25, unit: 'cups' },
                  { name: 'Baking soda', amount: 1, unit: 'tsp' },
                  { name: 'Salt', amount: 1, unit: 'tsp' },
                  { name: 'Butter', amount: 1, unit: 'cup' },
                  { name: 'Brown sugar', amount: 0.75, unit: 'cup' },
                  { name: 'Chocolate chips', amount: 2, unit: 'cups' }
                ],
                nutrition: {
                  calories: 180,
                  fat: 8,
                  carbs: 26,
                  protein: 2,
                  sugar: 18
                }
              },
              features: {
                servingSlider: true,
                unitConversion: true,
                nutritionFacts: true,
                shoppingList: true,
                timerIntegration: true
              }
            }
          }
        ]
      }
    ]
  },
  layout: {
    template: 'with-sidebar',
    maxWidth: 'm'
  },
  navigation: {
    label: 'About',
    icon: 'person',
    href: '/about',
    enabled: true,
    order: 1
  },
  effects: {
    mask: {
      cursor: true,
      x: 0,
      y: 0,
      radius: 150
    },
    gradient: {
      display: true,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      tilt: 45,
      colorStart: '#3b82f6',
      colorEnd: '#8b5cf6',
      opacity: 0.1
    },
    dots: {
      display: true,
      size: 2,
      color: '#6b7280',
      opacity: 0.3
    }
  },
  seo: {
    noIndex: false,
    noFollow: false,
    sitemap: {
      priority: 0.8,
      changeFreq: 'monthly'
    }
  }
}
export default function AboutPage() {
  // console.log(pageConfigurations.about);
  return <UniversalPage config={config} />
}
