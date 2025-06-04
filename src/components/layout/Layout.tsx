import { type ReactNode } from 'react'
import {
  Flex,
  Column,
  Background,
  ToastProvider,
  ThemeProvider
} from '@pageforge/once-ui/components'
// import { Header } from '@pageforge/ui/components/ui/header';
import classNames from 'classnames'
import { type SiteThemeType } from '@pageforge/types/site/siteThemes'
import { getThemeConfig } from '@pageforge/types/site/themeConfigs'
import { type opacity, type SpacingToken } from '@pageforge/once-ui/types'
import Head from 'next/head'

export interface LayoutProps {
  children: ReactNode
  theme: SiteThemeType
}

export const GenericLayout = ({ children, theme }: LayoutProps) => {
  const config = getThemeConfig(theme)
  const { style, effects, font } = config

  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillHeight
      background="page"
      data-theme={style.theme}
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable
      )}
    >
      <Head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <It's not dynamic nor a security issue.>
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `
          }}
        />
      </Head>
      <ThemeProvider initial={style.theme}>
        <ToastProvider>
          <Column
            as="body"
            fillWidth
            margin="0"
            padding="0"
            style={{ minHeight: '100vh' }}
          >
            <Background
              position="absolute"
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color
              }}
            />
            <Flex fillWidth minHeight="16" />
            {/* <Header /> */}
            <Flex
              position="relative"
              zIndex={0}
              fillWidth
              paddingY="l"
              paddingX="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                {children}
              </Flex>
            </Flex>
            {/* <Footer /> */}
          </Column>
        </ToastProvider>
      </ThemeProvider>
    </Flex>
  )
}
