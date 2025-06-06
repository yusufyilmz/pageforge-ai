// import {
//   BlogPageConfig,
//   AboutPageConfig,
//   GalleryPageConfig,
//   WorkPageConfig
// } from '@pageforge/types/page/pageTypes'
// import createContentConfig, { ContentConfig } from './content'

import {
  type AboutPageConfig,
  OpenGraphType,
  PageType,
  SchemaType,
} from "@pageforge/types/page/pageTypes";

import { type ContentConfig, createContentConfig, createContentTemplate } from "./content";

// IMPORTANT: The functions below will use example data if called without parameters.
// To use real content, pass a ContentConfig object with your actual data:
//
// Example usage:
// 1. Use the template helper to get started:
// const myContent = createContentTemplate()
// // Fill in your actual data in myContent...
//
// 2. Or create your own configuration:
// const myContent: Partial<ContentConfig> = {
//   person: {
//     name: 'John',
//     lastName: 'Smith',
//     role: 'Software Developer',
//     avatar: '/my-avatar.jpg',
//     location: 'America/New_York',
//     languages: ['English', 'Spanish']
//   },
//   about: {
//     intro: {
//       display: true,
//       title: 'About Me',
//       description: 'Your actual introduction here...'
//     },
//     work: {
//       display: true,
//       title: 'Experience',
//       experiences: [/* your work experiences */]
//     }
//     // ... add other sections as needed
//   }
// }
//
// 3. Then create the page configuration:
// const aboutPage = createComprehensiveAboutPageConfig(myContent)

// // // Updated factory functions that accept content configuration
// // export const createBlogPageConfig = (
// //   contentConfig?: Partial<ContentConfig>,
// // ): BlogPageConfig => {
// //   const content = createContentConfig(contentConfig);
// //   const { person, newsletter, blog } = content;

// //   return {
// //     pageType: 'blog',
// //     slug: '/blog',
// //     metadata: {
// //       title: blog.title,
// //       description: blog.description,
// //       author: `${person.name} ${person.lastName}`,
// //       keywords: ['blog', 'articles', person.role, 'portfolio'],
// //       openGraph: {
// //         type: 'website',
// //         image: `/og?title=${encodeURIComponent(blog.title)}`,
// //         alt: blog.title,
// //         url: `/blog`,
// //       },
// //       twitter: {
// //         card: 'summary_large_image',
// //         title: blog.title,
// //         description: blog.description,
// //       },
// //     },
// //     structuredData: {
// //       '@context': 'https://schema.org',
// //       '@type': 'Blog',
// //       author: {
// //         '@type': 'Person',
// //         name: `${person.name} ${person.lastName}`,
// //         image: person.avatar,
// //       },
// //     },
// //     content: {
// //       main: [
// //         {
// //           id: 'blog-header',
// //           title: blog.title,
// //           blocks: [
// //             {
// //               type: 'heading',
// //               content: blog.title,
// //               variant: 'display-strong-s',
// //             },
// //           ],
// //         },
// //         {
// //           id: 'blog-posts',
// //           title: 'Posts',
// //           blocks: [
// //             {
// //               type: 'posts-grid',
// //               content: {
// //                 featuredPosts: {
// //                   range: [1, 3],
// //                   thumbnail: true,
// //                   columns: '1',
// //                 },
// //                 otherPosts: {
// //                   range: [4],
// //                   thumbnail: false,
// //                   columns: '2',
// //                 },
// //               },
// //             },
// //           ],
// //         },
// //         {
// //           id: 'newsletter',
// //           title: 'Newsletter',
// //           blocks: [
// //             {
// //               type: 'newsletter',
// //               content: {
// //                 title: newsletter.title,
// //                 description: newsletter.description,
// //               },
// //               display: newsletter.display,
// //             },
// //           ],
// //           display: newsletter.display,
// //         },
// //       ],
// //     },
// //     layout: {
// //       template: 'standard',
// //       maxWidth: 's',
// //     },
// //     navigation: {
// //       label: blog.label,
// //       icon: 'book',
// //       href: '/blog',
// //       enabled: true,
// //     },
// //   };
// // };

// // export const createAboutPageConfig = (
// //   contentConfig?: Partial<ContentConfig>,
// // ): AboutPageConfig => {
// //   const content = createContentConfig(contentConfig);
// //   const { person, about, social } = content;

// //   return {
// //     pageType: 'about',
// //     slug: '/about',
// //     metadata: {
// //       title: about.title,
// //       description: about.description,
// //       author: `${person.name} ${person.lastName}`,
// //       keywords: ['about', person.name, person.role, 'portfolio', 'biography'],
// //       openGraph: {
// //         type: 'profile',
// //         image: `/og?title=${encodeURIComponent(about.title)}`,
// //         alt: about.title,
// //         url: `/about`,
// //       },
// //       twitter: {
// //         card: 'summary_large_image',
// //         title: about.title,
// //         description: about.description,
// //       },
// //     },
// //     structuredData: {
// //       '@context': 'https://schema.org',
// //       '@type': 'Person',
// //       name: `${person.name} ${person.lastName}`,
// //       jobTitle: person.role,
// //       description: about.intro.description,
// //       image: person.avatar,
// //       sameAs: social
// //         .filter((item) => item.link && !item.link.startsWith('mailto:'))
// //         .map((item) => item.link),
// //     },
// //     content: {
// //       sidebar: about.tableOfContent.display
// //         ? [
// //             {
// //               id: 'table-of-contents',
// //               blocks: [
// //                 {
// //                   type: 'table-of-contents',
// //                   content: {
// //                     structure: [
// //                       {
// //                         title: about.intro.title,
// //                         display: about.intro.display,
// //                         items: [],
// //                       },
// //                       {
// //                         title: about.work.title,
// //                         display: about.work.display,
// //                         items: about.work.experiences.map((exp) => exp.company),
// //                       },
// //                       {
// //                         title: about.studies.title,
// //                         display: about.studies.display,
// //                         items: about.studies.institutions.map(
// //                           (inst) => inst.name,
// //                         ),
// //                       },
// //                       {
// //                         title: about.technical.title,
// //                         display: about.technical.display,
// //                         items: about.technical.skills.map(
// //                           (skill) => skill.title,
// //                         ),
// //                       },
// //                     ],
// //                   },
// //                 },
// //               ],
// //             },
// //           ]
// //         : undefined,
// //       main: [
// //         {
// //           id: 'about-hero',
// //           blocks: [
// //             {
// //               type: 'about-hero',
// //               content: {
// //                 avatar: {
// //                   display: about.avatar.display,
// //                 },
// //               },
// //             },
// //           ],
// //         },
// //         {
// //           id: 'calendar-link',
// //           blocks: [
// //             {
// //               type: 'calendar-link',
// //               content: {
// //                 text: 'Schedule a call',
// //                 link: about.calendar.link,
// //               },
// //               display: about.calendar.display,
// //             },
// //           ],
// //           display: about.calendar.display,
// //         },
// //         {
// //           id: 'socials',
// //           blocks: [
// //             {
// //               type: 'socials',
// //               content: {
// //                 links: social,
// //               },
// //               display: social.length > 0,
// //             },
// //           ],
// //           display: social.length > 0,
// //         },
// //         {
// //           id: 'intro',
// //           title: about.intro.title,
// //           blocks: [
// //             {
// //               type: 'text',
// //               content: about.intro.description,
// //               variant: 'body-default-l',
// //             },
// //           ],
// //           display: about.intro.display,
// //         },
// //         {
// //           id: 'experience',
// //           title: about.work.title,
// //           blocks: [
// //             {
// //               type: 'experience',
// //               content: {
// //                 title: about.work.title,
// //                 experiences: about.work.experiences,
// //               },
// //             },
// //           ],
// //           display: about.work.display,
// //         },
// //         {
// //           id: 'studies',
// //           title: about.studies.title,
// //           blocks: [
// //             {
// //               type: 'studies',
// //               content: {
// //                 title: about.studies.title,
// //                 institutions: about.studies.institutions,
// //               },
// //             },
// //           ],
// //           display: about.studies.display,
// //         },
// //         {
// //           id: 'skills',
// //           title: about.technical.title,
// //           blocks: [
// //             {
// //               type: 'skills',
// //               content: {
// //                 title: about.technical.title,
// //                 skills: about.technical.skills,
// //               },
// //             },
// //           ],
// //           display: about.technical.display,
// //         },
// //       ],
// //     },
// //     layout: {
// //       template: 'with-sidebar',
// //       maxWidth: 'm',
// //       sidebar: {
// //         position: 'left',
// //         width: '240px',
// //         sticky: true,
// //       },
// //     },
// //     navigation: {
// //       label: about.label,
// //       icon: 'person',
// //       href: '/about',
// //       enabled: true,
// //     },
// //   };
// // };

// export const createGalleryPageConfig = (
//   contentConfig?: Partial<ContentConfig>
// ): GalleryPageConfig => {
//   const content = createContentConfig(contentConfig)
//   const { person, gallery } = content

//   return {
//     pageType: 'gallery',
//     slug: '/gallery',
//     metadata: {
//       title: gallery.title,
//       description: gallery.description,
//       author: `${person.name} ${person.lastName}`,
//       keywords: ['gallery', 'portfolio', 'photography', 'images', person.name],
//       openGraph: {
//         type: 'website',
//         image: `/og?title=${encodeURIComponent(gallery.title)}`,
//         alt: gallery.title,
//         url: `/gallery`
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: gallery.title,
//         description: gallery.description
//       }
//     },
//     structuredData: {
//       '@context': 'https://schema.org',
//       '@type': 'ImageGallery',
//       name: gallery.title,
//       description: gallery.description,
//       image: gallery.images.map(image => ({
//         '@type': 'ImageObject',
//         url: image.src,
//         description: image.alt
//       })),
//       author: {
//         '@type': 'Person',
//         name: `${person.name} ${person.lastName}`,
//         image: person.avatar
//       }
//     },
//     content: {
//       main: [
//         {
//           id: 'gallery-header',
//           title: gallery.title,
//           blocks: [
//             {
//               type: 'heading',
//               content: gallery.title,
//               variant: 'display-strong-s'
//             }
//           ]
//         },
//         {
//           id: 'gallery-grid',
//           blocks: [
//             {
//               type: 'gallery-grid',
//               content: {
//                 images: gallery.images
//               }
//             }
//           ]
//         }
//       ]
//     },
//     layout: {
//       template: 'standard',
//       maxWidth: 'xl'
//     },
//     navigation: {
//       label: gallery.label,
//       icon: 'gallery',
//       href: '/gallery',
//       enabled: true
//     }
//   }
// }

// export const createWorkPageConfig = (
//   contentConfig?: Partial<ContentConfig>
// ): WorkPageConfig => {
//   const content = createContentConfig(contentConfig)
//   const { person, work } = content

//   return {
//     pageType: 'work',
//     slug: '/work',
//     metadata: {
//       title: work.title,
//       description: work.description,
//       author: `${person.name} ${person.lastName}`,
//       keywords: ['work', 'projects', 'portfolio', person.role, person.name],
//       openGraph: {
//         type: 'website',
//         image: `/og?title=${encodeURIComponent(work.title)}`,
//         alt: work.title,
//         url: `/work`
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: work.title,
//         description: work.description
//       }
//     },
//     structuredData: {
//       '@context': 'https://schema.org',
//       '@type': 'CreativeWork',
//       name: work.title,
//       description: work.description,
//       author: {
//         '@type': 'Person',
//         name: `${person.name} ${person.lastName}`,
//         image: person.avatar
//       }
//     },
//     content: {
//       main: [
//         {
//           id: 'work-header',
//           title: work.title,
//           blocks: [
//             {
//               type: 'heading',
//               content: work.title,
//               variant: 'display-strong-s'
//             }
//           ]
//         },
//         {
//           id: 'work-projects',
//           blocks: [
//             {
//               type: 'posts-grid',
//               content: {
//                 featuredPosts: {
//                   range: [1, 6],
//                   thumbnail: true,
//                   columns: '2',
//                   items: work.projects.map(project => ({
//                     title: project.title,
//                     description: project.description,
//                     image: project.image,
//                     link: project.link,
//                     publishedAt: new Date().toISOString(),
//                     summary: project.description,
//                     images: [project.image],
//                     tag: project.tags?.[0],
//                     team: [],
//                     slug: project.title
//                   }))
//                 }
//               }
//             }
//           ]
//         }
//       ]
//     },
//     layout: {
//       template: 'standard',
//       maxWidth: 'xl'
//     },
//     navigation: {
//       label: work.label,
//       icon: 'grid',
//       href: '/work',
//       enabled: true
//     }
//   }
// }

// // New comprehensive blog page configuration
// export const createComprehensiveBlogPageConfig = (
//   contentConfig?: Partial<ContentConfig>
// ): BlogPageConfig => {
//   const content = createContentConfig(contentConfig)
//   const { person, newsletter, blog } = content

//   return {
//     pageType: 'blog',
//     slug: '/blog',
//     metadata: {
//       title: blog.title,
//       description: blog.description,
//       keywords: [
//         'blog',
//         'articles',
//         'tech',
//         'development',
//         person.role,
//         person.name
//       ],
//       author: `${person.name} ${person.lastName}`,
//       publishDate: new Date().toISOString(),
//       modifiedDate: new Date().toISOString(),
//       openGraph: {
//         type: 'website',
//         title: blog.title,
//         description: blog.description,
//         image: `/og?title=${encodeURIComponent(blog.title)}`,
//         alt: blog.title,
//         url: `/blog`
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: blog.title,
//         description: blog.description,
//         image: `/og?title=${encodeURIComponent(blog.title)}`
//       },
//       canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'}/blog`
//     },
//     structuredData: {
//       '@context': 'https://schema.org',
//       '@type': 'Blog',
//       '@id': '/blog',
//       name: blog.title,
//       description: blog.description,
//       url: `/blog`,
//       author: {
//         '@type': 'Person',
//         '@id': '/about',
//         name: `${person.name} ${person.lastName}`,
//         jobTitle: person.role,
//         image: person.avatar,
//         url: '/about'
//       },
//       publisher: {
//         '@type': 'Person',
//         name: `${person.name} ${person.lastName}`,
//         image: person.avatar
//       },
//       inLanguage: 'en-US',
//       potentialAction: {
//         '@type': 'SearchAction',
//         target: '/blog?search={search_term_string}',
//         'query-input': 'required name=search_term_string'
//       }
//     },
//     content: {
//       header: {
//         id: 'blog-header',
//         title: blog.title,
//         description: blog.description,
//         blocks: [
//           {
//             type: 'hero-section',
//             content: {
//               title: blog.title,
//               subtitle: blog.description,
//               showAvatar: true,
//               showScrollIndicator: true
//             },
//             variant: 'centered'
//           }
//         ],
//         layout: {
//           marginBottom: 'xl',
//           padding: 'xl',
//           background: 'gradient'
//         },
//         display: true
//       },
//       main: [
//         {
//           id: 'featured-posts',
//           title: 'Featured Articles',
//           description:
//             'Handpicked articles covering the latest in web development',
//           blocks: [
//             {
//               type: 'posts-grid',
//               content: {
//                 featuredPosts: {
//                   range: [1, 3],
//                   thumbnail: true,
//                   columns: '3',
//                   items: [
//                     {
//                       slug: 'post-1',
//                       content: 'This is a test post',
//                       metadata: {
//                         title: 'Post 1',
//                         description: 'Description 1',
//                         image: '/images/gallery/img-01.jpg',
//                         publishedAt: new Date().toISOString(),
//                         tag: 'tag1'
//                       }
//                     },
//                     {
//                       slug: 'post-1',
//                       content: 'This is a test post',
//                       metadata: {
//                         title: 'Post 1',
//                         description: 'Description 1',
//                         image: '/images/gallery/img-01.jpg',
//                         publishedAt: new Date().toISOString(),
//                         tag: 'tag1'
//                       }
//                     },
//                     {
//                       slug: 'post-1',
//                       content: 'This is a test post',
//                       metadata: {
//                         title: 'Post 1',
//                         description: 'Description 1',
//                         image: '/images/gallery/img-01.jpg',
//                         publishedAt: new Date().toISOString(),
//                         tag: 'tag1'
//                       }
//                     }
//                   ]
//                 }
//               },
//               variant: 'featured'
//             }
//           ],
//           layout: {
//             marginBottom: 'xxl',
//             gap: 'xl'
//           },
//           display: true
//         },
//         {
//           id: 'recent-posts',
//           title: 'Recent Posts',
//           description: 'Latest thoughts and tutorials',
//           blocks: [
//             {
//               type: 'posts-grid',
//               content: {
//                 recentPosts: {
//                   range: [4, 12],
//                   thumbnail: true,
//                   columns: '2',
//                   items: [
//                     {
//                       slug: 'post-1',
//                       content: 'This is a test post',
//                       metadata: {
//                         title: 'Post 1',
//                         description: 'Description 1',
//                         image: '/images/gallery/img-01.jpg',
//                         publishedAt: new Date().toISOString(),
//                         tag: 'tag1'
//                       }
//                     }
//                   ]
//                 }
//               },
//               variant: 'list'
//             }
//           ],
//           layout: {
//             marginBottom: 'xxl',
//             gap: 'l'
//           },
//           display: true
//         }
//       ],
//       sidebar: {
//         id: 'sidebar',
//         title: 'Table of Contents',
//         blocks: [
//           {
//             type: 'table-of-contents',
//             content: {
//               items: [
//                 {
//                   title: 'Featured Articles',
//                   display: true
//                 }
//               ]
//             }
//           }
//         ],
//         display: true
//       }
//     },
//     layout: {
//       template: 'with-sidebar',
//       maxWidth: 'm',
//       // sidebar: {
//       //   position: 'right',
//       //   width: '320px',
//       //   sticky: true,
//       // },
//       navigation: {
//         display: true,
//         sticky: true
//       }
//     },
//     navigation: {
//       label: blog.label,
//       icon: 'book',
//       href: '/blog',
//       enabled: true,
//       order: 3
//     },
//     effects: {
//       mask: {
//         cursor: false,
//         x: 0,
//         y: 0,
//         radius: 100
//       },
//       gradient: {
//         display: true,
//         x: 0,
//         y: 0,
//         width: 100,
//         height: 50,
//         tilt: 180,
//         colorStart: '#f3f4f6',
//         colorEnd: '#ffffff',
//         opacity: 0.5
//       },
//       dots: {
//         display: false,
//         size: 1,
//         color: '#e5e7eb',
//         opacity: 0.2
//       }
//     },
//     seo: {
//       noIndex: false,
//       noFollow: false,
//       sitemap: {
//         priority: 0.9,
//         changeFreq: 'weekly'
//       }
//     }
//   }
// }

export const createComprehensiveAboutPageConfig = (
  contentConfig?: Partial<ContentConfig>,
): AboutPageConfig => {
  const content = createContentConfig(contentConfig);
  const { person, about, social } = content;

  return {
    pageType: PageType.ABOUT,
    slug: "/about",
    metadata: {
      basic: {
        title: about.title,
        description: about.description,
        keywords: ["about", person.name, person.role, "portfolio", "biography", "developer"],
        author: `${person.name} ${person.lastName}`,
        publishDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"}/about`,
      },
      openGraph: {
        type: OpenGraphType.PROFILE,
        title: about.title,
        description: about.description,
        image: person.avatar,
        alt: `${person.name} ${person.lastName}`,
        url: "/about",
      },
      twitter: {
        card: "summary_large_image",
        title: about.title,
        description: about.description,
        image: person.avatar,
      },
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": SchemaType.PERSON,
      "@id": "/about",
      name: `${person.name} ${person.lastName}`,
      givenName: person.name,
      familyName: person.lastName,
      jobTitle: person.role,
      description: about.intro.description,
      image: person.avatar,
      url: "/about",
      location: {
        "@type": "Place",
        name: person.location,
      },
      knowsLanguage: person.languages,
      sameAs: social
        .filter((item) => item.link && !item.link.startsWith("mailto:"))
        .map((item) => item.link),
      alumniOf:
        about.studies?.institutions?.map((inst: any) => ({
          "@type": "EducationalOrganization",
          name: inst.name,
        })) || [],
      worksFor:
        about.work?.experiences?.map((exp: any) => ({
          "@type": "Organization",
          name: exp.company,
        })) || [],
    },
    content: {
      sidebar: {
        id: "table-of-contents",
        title: "Table of Contents",
        blocks: [
          {
            type: "table-of-contents",
            content: {
              items: [
                {
                  title: about.intro.title,
                  display: about.intro.display,
                },
                {
                  title: about.work?.title || "Work Experience",
                  display: about.work?.display || true,
                },
                {
                  title: about.studies?.title || "Education",
                  display: about.studies?.display || true,
                },
                {
                  title: about.technical?.title || "Technical Skills",
                  display: about.technical?.display || true,
                },
              ],
            },
          },
        ],
        display: true,
      },
      main: [
        {
          id: "about-hero",
          blocks: [
            {
              type: "about-hero",
              content: {
                avatar: {
                  display: about.avatar?.display || true,
                  src: "/images/avatar.jpg",
                },
                intro: {
                  display: about.intro.display,
                  title: about.intro.title,
                  description: about.intro.description,
                },
              },
            },
          ],
          display: true,
        },
        {
          id: "calendar-link",
          blocks: [
            {
              type: "calendar-link",
              content: {
                text: "Schedule a call",
                description: "Let's discuss your project or just have a chat",
                link: about.calendar?.link || "#",
                icon: "calendar",
              },
              display: about.calendar?.display || false,
            },
          ],
          display: about.calendar?.display || false,
        },
        {
          id: "introduction",
          title: about.intro.title,
          description: "Get to know me better",
          blocks: [
            {
              type: "text",
              content: {
                text: about.intro.description,
              },
            },
          ],
          layout: {
            marginBottom: "xxl",
          },
          display: about.intro.display,
        },
        {
          id: "experience",
          title: about.work?.title || "Work Experience",
          description: "My professional journey and achievements",
          blocks: [
            {
              type: "experience",
              content: {
                title: about.work?.title || "Work Experience",
                experiences: about.work?.experiences || [],
              },
            },
          ],
          layout: {
            marginBottom: "xxl",
          },
          display: about.work?.display || true,
        },
        {
          id: "education",
          title: about.studies?.title || "Education",
          description: "My academic background and certifications",
          blocks: [
            {
              type: "studies",
              content: {
                title: about.studies?.title || "Education",
                institutions: about.studies?.institutions || [],
              },
            },
          ],
          layout: {
            marginBottom: "xxl",
          },
          display: about.studies?.display || true,
        },
        {
          id: "skills",
          title: about.technical?.title || "Technical Skills",
          description: "Technologies and tools I work with",
          blocks: [
            {
              type: "skills",
              content: {
                title: about.technical?.title || "Technical Skills",
                skills: about.technical?.skills || [],
                categories: [
                  "Frontend Development",
                  "Backend Development",
                  "DevOps & Cloud",
                  "Design & UX",
                  "Mobile Development",
                ],
              },
            },
          ],
          layout: {
            marginBottom: "xxl",
          },
          display: about.technical?.display || true,
        },
        // {
        //   id: 'personal-interests',
        //   title: 'Beyond Code',
        //   description: "What I do when I'm not coding",
        //   blocks: [
        //     {
        //       type: 'interests',
        //       description: "What I do when I'm not coding",
        //       content: {
        //         interests: [
        //           {
        //             title: 'Photography',
        //             description: 'Capturing moments and landscapes',
        //             icon: 'camera'
        //           },
        //           {
        //             title: 'Travel',
        //             description: 'Exploring new cultures and places',
        //             icon: 'globe'
        //           },
        //           {
        //             title: 'Reading',
        //             description: 'Tech books and science fiction',
        //             icon: 'book'
        //           },
        //           {
        //             title: 'Music',
        //             description: 'Playing guitar and discovering new artists',
        //             icon: 'music'
        //           }
        //         ]
        //       }
        //     }
        //   ],
        //   layout: {
        //     marginBottom: 'xl'
        //   },
        //   display: true
        // }
      ],
    },
    layout: {
      template: "with-sidebar",
      maxWidth: "m",
      // sidebar: {
      //   position: 'left',
      //   width: '240px',
      //   sticky: true,
      // },
      // navigation: {
      //   display: true,
      //   sticky: true,
      // },
    },
    navigation: {
      label: about.label,
      icon: "person",
      href: "/about",
      enabled: true,
      order: 1,
    },
    effects: {
      mask: {
        cursor: true,
        x: 0,
        y: 0,
        radius: 150,
      },
      gradient: {
        display: true,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        tilt: 45,
        colorStart: "#3b82f6",
        colorEnd: "#8b5cf6",
        opacity: 0.1,
      },
      dots: {
        display: true,
        size: 2,
        color: "#6b7280",
        opacity: 0.3,
      },
    },
    seo: {
      noIndex: false,
      noFollow: false,
      sitemap: {
        priority: 0.8,
        changeFreq: "monthly",
      },
    },
  };
};

// New comprehensive configurations
// export const createComprehensivePageConfigurations = (
//   contentConfig?: Partial<ContentConfig>
// ) => ({
//   blog: createComprehensiveBlogPageConfig(contentConfig),
//   about: createComprehensiveAboutPageConfig(contentConfig),
//   gallery: createGalleryPageConfig(contentConfig), // Keep existing for now
//   work: createWorkPageConfig(contentConfig) // Keep existing for now
// })

// Comprehensive configurations (new approach)

// Export configurations with custom content support
// export const createPageConfigurations = (
//   contentConfig?: Partial<ContentConfig>
// ) => ({
//   blog: createComprehensiveBlogPageConfig(contentConfig),
//   about: createComprehensiveAboutPageConfig(contentConfig),
//   gallery: createGalleryPageConfig(contentConfig),
//   work: createWorkPageConfig(contentConfig)
// })

// // Default configurations (backward compatibility)
// export const pageConfigurations = createPageConfigurations()

export const pageConfigurations = {
  gallery: null,
  blog: null,
  about: createComprehensiveAboutPageConfig,
};

// Export helper function for creating content templates
export { createContentTemplate };
