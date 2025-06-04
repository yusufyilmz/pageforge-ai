// import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'
// import { ContentPageConfig } from '@pageforge/types/page/pageTypes'

// const testPageConfig: ContentPageConfig<any> = {
//   slug: 'custom-section-test',
//   structuredData: {
//     '@context': 'https://schema.org',
//     '@type': 'WebPage',
//     name: 'Custom Section Test'
//   },
//   layout: {
//     maxWidth: 'xl'
//   },
//   content: {
//     main: [
//       {
//         id: 'existing-section',
//         title: 'Existing Section (Team)',
//         blocks: [
//           {
//             id: 'team-block',
//             type: 'team',
//             display: true,
//             content: {
//               title: 'Our Team',
//               description: 'Meet the amazing people behind our success',
//               members: [
//                 {
//                   name: 'John Doe',
//                   role: 'CEO',
//                   image: '/images/team/john.jpg',
//                   bio: 'Visionary leader with 10+ years experience'
//                 },
//                 {
//                   name: 'Jane Smith',
//                   role: 'CTO',
//                   image: '/images/team/jane.jpg',
//                   bio: 'Tech innovator and problem solver'
//                 }
//               ]
//             }
//           }
//         ]
//       },
//       {
//         id: 'custom-section-1',
//         title: 'Custom Section (AI Generated)',
//         blocks: [
//           {
//             id: 'pricing-calculator-block',
//             type: 'pricing-calculator', // This doesn't exist in predefined sections
//             display: true,
//             content: {
//               title: 'Interactive Pricing Calculator',
//               description: 'Choose the perfect plan for your needs',
//               style: 'modern',
//               plans: [
//                 { name: 'Starter', price: 9 },
//                 { name: 'Professional', price: 29 },
//                 { name: 'Enterprise', price: 99 }
//               ]
//             }
//           }
//         ]
//       },
//       {
//         id: 'custom-section-2',
//         title: 'Another Custom Section',
//         blocks: [
//           {
//             id: 'product-configurator-block',
//             type: 'product-configurator', // This also doesn't exist
//             display: true,
//             content: {
//               title: '3D Product Configurator',
//               description: 'Customize your product in real-time',
//               style: 'creative',
//               options: ['color', 'size', 'material']
//             }
//           }
//         ]
//       },
//       {
//         id: 'custom-section-3',
//         title: 'Learning Dashboard',
//         blocks: [
//           {
//             id: 'learning-dashboard-block',
//             type: 'learning-dashboard',
//             display: true,
//             content: {
//               title: 'Your Learning Progress',
//               description: 'Track your courses and achievements',
//               style: 'corporate',
//               courses: [
//                 { name: 'React Fundamentals', progress: 85 },
//                 { name: 'TypeScript Mastery', progress: 60 }
//               ]
//             }
//           }
//         ]
//       }
//     ]
//   }
// }

// export default function CustomSectionTestPage() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
//         Custom Section Generation Test
//       </h1>
//       <p style={{ marginBottom: '2rem', textAlign: 'center', color: '#666' }}>
//         This page demonstrates how AI-generated custom sections work within the
//         UniversalPage system.
//         <br />
//         When a section type doesn't exist in predefined sections, AI
//         automatically generates it.
//       </p>

//       <UniversalPage config={testPageConfig} />
//     </div>
//   )
// }
