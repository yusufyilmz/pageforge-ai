// 'use client'

// import { Column, Flex, Heading } from '@pageforge/once-ui/components'
// import { Mailchimp } from '@pageforge/components'
// import { Posts } from '@pageforge/components/blog/Posts'
// import { baseURL } from '@pageforge/app/resources'

// interface BlogPageConfig {
//   pageType: string
//   metadata: {
//     title: string
//     description: string
//     url: string
//     openGraph: {
//       type: string
//       image: string
//       alt: string
//     }
//     twitter: {
//       card: string
//     }
//   }
//   structuredData: {
//     '@context': string
//     '@type': string
//     author: {
//       '@type': string
//       name: string
//       image: string
//     }
//   }
//   layout: {
//     maxWidth: string
//     sections: Array<{
//       type: string
//       content: any
//       variant?: string
//       marginBottom?: string
//       display?: boolean
//     }>
//   }
//   posts: {
//     source: string
//     path: string[]
//     sorting: {
//       field: string
//       order: string
//     }
//   }
//   components: {
//     postCard: any
//     grid: any
//   }
//   navigation: {
//     label: string
//     icon: string
//     href: string
//     enabled: boolean
//   }
//   effects: any
// }

// interface JsonBlogPageProps {
//   config: BlogPageConfig
// }

// export function JsonBlogPage({ config }: JsonBlogPageProps) {
//   const { metadata, structuredData, layout } = config

//   // Generate metadata for SEO
//   const generateMetadata = () => {
//     const ogImage = `https://${baseURL}${metadata.openGraph.image}`

//     return {
//       title: metadata.title,
//       description: metadata.description,
//       openGraph: {
//         title: metadata.title,
//         description: metadata.description,
//         type: metadata.openGraph.type,
//         url: `https://${baseURL}${metadata.url}`,
//         images: [
//           {
//             url: ogImage,
//             alt: metadata.openGraph.alt
//           }
//         ]
//       },
//       twitter: {
//         card: metadata.twitter.card,
//         title: metadata.title,
//         description: metadata.description,
//         images: [ogImage]
//       }
//     }
//   }

//   // Render sections based on JSON configuration
//   const renderSection = (section: any, index: number) => {
//     switch (section.type) {
//       case 'heading':
//         return (
//           <Heading
//             key={index}
//             marginBottom={section.marginBottom || 'l'}
//             variant={section.variant || 'display-strong-s'}
//           >
//             {section.content}
//           </Heading>
//         )

//       case 'posts-grid':
//         return (
//           <Column key={index} fillWidth flex={1}>
//             {section.content.featuredPosts && (
//               <Posts
//                 range={section.content.featuredPosts.range}
//                 thumbnail={section.content.featuredPosts.thumbnail}
//                 columns={section.content.featuredPosts.columns}
//               />
//             )}
//             {section.content.otherPosts && (
//               <Posts
//                 range={section.content.otherPosts.range}
//                 thumbnail={section.content.otherPosts.thumbnail}
//                 columns={section.content.otherPosts.columns}
//               />
//             )}
//           </Column>
//         )

//       case 'newsletter':
//         if (!section.display) return null

//         const newsletterData = {
//           display: section.display,
//           title: section.content.title,
//           description: section.content.description
//         }

//         return <Mailchimp key={index} newsletter={newsletterData} />

//       default:
//         return null
//     }
//   }

//   return (
//     <Column maxWidth={layout.maxWidth}>
//       {/* Structured Data */}
//       <script
//         type="application/ld+json"
//         suppressHydrationWarning
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             ...structuredData,
//             headline: metadata.title,
//             description: metadata.description,
//             url: `https://${baseURL}${metadata.url}`,
//             image: `https://${baseURL}${metadata.openGraph.image}`
//           })
//         }}
//       />

//       {/* Render sections dynamically */}
//       {layout.sections.map((section, index) => renderSection(section, index))}
//     </Column>
//   )
// }

// // Usage example with the JSON config
// export function BlogPageWithConfig() {
//   const blogConfig: BlogPageConfig = {
//     pageType: 'blog',
//     metadata: {
//       title: 'Writing about design and tech...',
//       description: 'Read what Selene Yu has been up to recently',
//       url: '/blog',
//       openGraph: {
//         type: 'website',
//         image: '/og?title=Writing%20about%20design%20and%20tech...',
//         alt: 'Writing about design and tech...'
//       },
//       twitter: {
//         card: 'summary_large_image'
//       }
//     },
//     structuredData: {
//       '@context': 'https://schema.org',
//       '@type': 'Blog',
//       author: {
//         '@type': 'Person',
//         name: 'Selene Yu',
//         image: '/images/avatar.jpg'
//       }
//     },
//     layout: {
//       maxWidth: 's',
//       sections: [
//         {
//           type: 'heading',
//           content: 'Writing about design and tech...',
//           variant: 'display-strong-s',
//           marginBottom: 'l'
//         },
//         {
//           type: 'posts-grid',
//           content: {
//             featuredPosts: {
//               range: [1, 3],
//               thumbnail: true,
//               columns: '1'
//             },
//             otherPosts: {
//               range: [4],
//               thumbnail: false,
//               columns: '2'
//             }
//           }
//         },
//         {
//           type: 'newsletter',
//           display: true,
//           content: {
//             title: "Subscribe to Selene's Newsletter",
//             description:
//               'I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.',
//             action: 'https://url/subscribe/post?parameters'
//           }
//         }
//       ]
//     },
//     posts: {
//       source: 'dynamic',
//       path: ['src', 'app', 'blog', 'posts'],
//       sorting: {
//         field: 'publishedAt',
//         order: 'desc'
//       }
//     },
//     components: {
//       postCard: {
//         thumbnail: {
//           aspectRatio: '16 / 9',
//           maxWidth: 20,
//           border: 'neutral-alpha-weak',
//           radius: 'm'
//         },
//         title: {
//           variant: 'heading-strong-l',
//           wrap: 'balance'
//         },
//         date: {
//           variant: 'label-default-s',
//           color: 'neutral-weak',
//           format: 'readable'
//         },
//         tags: {
//           display: 3,
//           variant: 'neutral',
//           separator: ','
//         }
//       },
//       grid: {
//         mobileColumns: '1',
//         fillWidth: true,
//         marginBottom: '40',
//         gap: 'm'
//       }
//     },
//     navigation: {
//       label: 'Blog',
//       icon: 'book',
//       href: '/blog',
//       enabled: true
//     },
//     effects: {
//       mask: {
//         cursor: true,
//         x: 0,
//         y: 0,
//         radius: 75
//       },
//       gradient: {
//         display: true,
//         x: 50,
//         y: 0,
//         width: 100,
//         height: 100,
//         tilt: 0,
//         colorStart: 'brand-background-strong',
//         colorEnd: 'static-transparent',
//         opacity: 50
//       }
//     }
//   }

//   return <JsonBlogPage config={blogConfig} />
// }
