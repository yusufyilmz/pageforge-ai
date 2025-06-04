// export async function generateMetadata() {
//   const title = gallery.title;
//   const description = gallery.description;
//   const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'
import { pageConfigurations } from '@pageforge/lib/services/new-page/pageConfigurations'

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "website",
//       url: `https://${baseURL}/gallery`,
//       images: [
//         {
//           url: ogImage,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default function Gallery() {
  console.log(pageConfigurations.gallery)

  return <UniversalPage config={pageConfigurations.gallery as any} />
}

// return (
// <Flex fillWidth>
//   <script
//     type="application/ld+json"
//     suppressHydrationWarning
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "ImageGallery",
//         name: gallery.title,
//         description: gallery.description,
//         url: `https://${baseURL}/gallery`,
//         image: gallery.images.map((image) => ({
//           "@type": "ImageObject",
//           url: `${baseURL}${image.src}`,
//           description: image.alt,
//         })),
//         author: {
//           "@type": "Person",
//           name: person.name,
//           image: {
//             "@type": "ImageObject",
//             url: `${baseURL}${person.avatar}`,
//           },
//         },
//       }),
//     }}
//   />
//   <MasonryGrid />
// </Flex>
