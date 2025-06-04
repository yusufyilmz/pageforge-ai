import '@pageforge/once-ui/styles/index.scss'
import '@pageforge/once-ui/tokens/index.scss'

import { GenericLayout } from '@pageforge/components/layout/Layout'

import classNames from 'classnames'

import {
  Background,
  Column,
  Flex,
  ToastProvider,
  ThemeProvider
} from '@pageforge/once-ui/components'

import { opacity, SpacingToken } from '@pageforge/once-ui/types'
import { Meta, Schema } from '@pageforge/once-ui/modules'
import { chart } from '../resources/data.config'
import { font, baseURL, meta, effects, style } from '@pageforge/types/site'
import { type ReactNode } from 'react'

// export async function generateMetadata() {
//   return Meta.generate({
//     title: meta.home.title,
//     description: meta.home.description,
//     baseURL: baseURL,
//     path: meta.home.path,
//     canonical: meta.home.canonical,
//     image: meta.home.image,
//     robots: meta.home.robots,
//     alternates: meta.home.alternates,
//   });
// }

// export const Layout = ({
//   children,
//   style,
//   chart,
//   font,
//   effects,
//   meta,
//   baseURL,
// }) => {
//   return (
//     <Flex
//       suppressHydrationWarning
//       as="html"
//       lang="en"
//       fillHeight
//       background="page"
//       data-neutral={style.neutral}
//       data-brand={style.brand}
//       data-accent={style.accent}
//       data-border={style.border}
//       data-solid={style.solid}
//       data-solid-style={style.solidStyle}
//       data-surface={style.surface}
//       data-transition={style.transition}
//       data-scaling={style.scaling}
//       data-viz={chart.mode}
//       data-mode={chart.variant}
//       className={classNames(
//         font.primary.variable,
//         font.secondary.variable,
//         font.tertiary.variable,
//         font.code.variable,
//       )}
//     >
//       <Schema
//         as="webPage"
//         baseURL={baseURL}
//         title={meta.home.title}
//         description={meta.home.description}
//         path={meta.home.path}
//       />
//       <head>
//         <script
//           // biome-ignore lint/security/noDangerouslySetInnerHtml: <It's not dynamic nor a security issue.>
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function() {
//                 try {
//                   const theme = localStorage.getItem('theme') || 'system';
//                   const root = document.documentElement;
//                   if (theme === 'system') {
//                     const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//                     root.setAttribute('data-theme', isDark ? 'dark' : 'light');
//                   } else {
//                     root.setAttribute('data-theme', theme);
//                   }
//                 } catch (e) {
//                   document.documentElement.setAttribute('data-theme', 'dark');
//                 }
//               })();
//             `,
//           }}
//         />
//       </head>
//       <ThemeProvider>
//         <ToastProvider>
//           <Column as="body" fillWidth margin="0" padding="0">
//             <Background
//               position="absolute"
//               mask={{
//                 x: effects.mask.x,
//                 y: effects.mask.y,
//                 radius: effects.mask.radius,
//                 cursor: effects.mask.cursor,
//               }}
//               gradient={{
//                 display: effects.gradient.display,
//                 opacity: effects.gradient.opacity,
//                 x: effects.gradient.x,
//                 y: effects.gradient.y,
//                 width: effects.gradient.width,
//                 height: effects.gradient.height,
//                 tilt: effects.gradient.tilt,
//                 colorStart: effects.gradient.colorStart,
//                 colorEnd: effects.gradient.colorEnd,
//               }}
//               dots={{
//                 display: effects.dots.display,
//                 opacity: effects.dots.opacity,
//                 size: effects.dots.size,
//                 color: effects.dots.color,
//               }}
//               grid={{
//                 display: effects.grid.display,
//                 opacity: effects.grid.opacity,
//                 color: effects.grid.color,
//                 width: effects.grid.width,
//                 height: effects.grid.height,
//               }}
//               lines={{
//                 display: effects.lines.display,
//                 opacity: effects.lines.opacity,
//                 size: effects.lines.size,
//                 thickness: effects.lines.thickness,
//                 angle: effects.lines.angle,
//                 color: effects.lines.color,
//               }}
//             />
//             {children}
//           </Column>
//         </ToastProvider>
//       </ThemeProvider>
//     </Flex>
//   );
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <GenericLayout theme="bold">{children}</GenericLayout>
}
