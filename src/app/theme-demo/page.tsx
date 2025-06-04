'use client'

import React, { useEffect } from 'react'
import {
  Column,
  Row,
  Text,
  Heading,
  Button
} from '@pageforge/once-ui/components'
import { ThemeSelector } from '../../components/theme/ThemeSelector'
import { UserProfileCard } from '../../components/user/UserProfileCard'
import {
  usePageTheme,
  useTheme,
  useThemeUtils
} from '../../contexts/ThemeContext'

export default function ThemeDemoPage() {
  const { setTheme } = usePageTheme()
  const { currentTheme, currentSiteTheme, availableThemes } = useTheme()
  const { isDark, isLight, preferredColorScheme } = useThemeUtils()

  // Example: Set a page-specific theme override
  useEffect(() => {
    // Uncomment to set a page-specific theme
    // setTheme({
    //   siteTheme: 'dark',
    //   customOverrides: {
    //     brand: 'purple'
    //   }
    // })

    // Cleanup: reset theme when leaving page
    return () => {
      setTheme(null)
    }
  }, [setTheme])

  const demoThemes = [
    {
      name: 'Dark Violet',
      theme: {
        siteTheme: 'dark' as const,
        customOverrides: { brand: 'violet' as const }
      }
    },
    {
      name: 'Playful Green',
      theme: {
        siteTheme: 'playful' as const,
        customOverrides: { brand: 'green' as const }
      }
    },
    {
      name: 'Elegant Blue',
      theme: {
        siteTheme: 'elegant' as const,
        customOverrides: { brand: 'blue' as const }
      }
    },
    {
      name: 'Futuristic Cyan',
      theme: {
        siteTheme: 'futuristic' as const,
        customOverrides: { brand: 'cyan' as const }
      }
    },
    {
      name: 'User Default',
      theme: null
    }
  ]

  return (
    <Column fill padding="l" gap="xl" maxWidth="l" horizontal="center">
      {/* Page Header */}
      <Column gap="m" align="center">
        <Heading variant="heading-strong-xl">Theme Demo</Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
        >
          Explore the comprehensive theme system with 11 predefined themes and
          custom overrides
        </Text>
      </Column>

      {/* Current Theme Info */}
      <Column
        gap="m"
        padding="l"
        border="neutral-alpha-weak"
        radius="m"
        fillWidth
      >
        <Heading variant="heading-strong-m">Current Theme Status</Heading>
        <Row gap="l" wrap>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Site Theme
            </Text>
            <Text variant="body-default-s">{currentSiteTheme}</Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Theme Mode
            </Text>
            <Text variant="body-default-s">{currentTheme.style.theme}</Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Brand Color
            </Text>
            <Text variant="body-default-s">{currentTheme.style.brand}</Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Neutral Color
            </Text>
            <Text variant="body-default-s">{currentTheme.style.neutral}</Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Border Style
            </Text>
            <Text variant="body-default-s">{currentTheme.style.border}</Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Resolved Mode
            </Text>
            <Text variant="body-default-s">{preferredColorScheme}</Text>
          </Column>
        </Row>
      </Column>

      {/* Quick Theme Tests */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Quick Theme Tests</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Click these buttons to test page-level theme overrides:
        </Text>
        <Row gap="s" wrap>
          {demoThemes.map((demo, index) => (
            <Button
              key={index}
              variant="secondary"
              size="s"
              onClick={() => setTheme(demo.theme)}
            >
              {demo.name}
            </Button>
          ))}
        </Row>
      </Column>

      {/* Available Themes Showcase */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Available Themes</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Explore all {availableThemes.length} predefined themes:
        </Text>
        <Row gap="s" wrap>
          {availableThemes.map(theme => (
            <Button
              key={theme}
              variant={currentSiteTheme === theme ? 'primary' : 'tertiary'}
              size="s"
              onClick={() => setTheme({ siteTheme: theme })}
            >
              {theme}
            </Button>
          ))}
        </Row>
      </Column>

      {/* Theme Hierarchy Explanation */}
      <Column
        gap="m"
        padding="l"
        border="neutral-alpha-weak"
        radius="m"
        fillWidth
      >
        <Heading variant="heading-strong-m">Theme System Features</Heading>
        <Column gap="s">
          <Text variant="body-default-s">
            <strong>1. Predefined Themes:</strong> 11 complete theme
            configurations with fonts, colors, and effects
          </Text>
          <Text variant="body-default-s">
            <strong>2. Style Overrides:</strong> Customize mode, brand colors,
            and neutral colors
          </Text>
          <Text variant="body-default-s">
            <strong>3. Priority System:</strong> Page themes override user
            preferences which override system defaults
          </Text>
          <Text variant="body-default-s">
            <strong>4. Font Integration:</strong> Each theme includes optimized
            font combinations
          </Text>
          <Text variant="body-default-s">
            <strong>5. Effects System:</strong> Gradients, masks, dots, lines,
            and grid patterns
          </Text>
        </Column>
      </Column>

      {/* User Theme Settings */}
      <Column gap="m" fillWidth>
        <ThemeSelector
          variant="user"
          title="User Theme Preferences"
          description="Set your default theme and customize style overrides"
        />
      </Column>

      {/* Page Theme Override */}
      <Column gap="m" fillWidth>
        <ThemeSelector
          variant="page"
          title="Page Theme Override"
          description="Override your user preferences for this specific page"
        />
      </Column>

      {/* Theme in Action */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Theme in Action</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          See how the current theme affects your components:
        </Text>

        {/* Sample Components */}
        <Column gap="l">
          {/* Profile Card Example */}
          <UserProfileCard variant="compact" />

          {/* Buttons Example */}
          <Row gap="s" wrap>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="tertiary">Tertiary Action</Button>
          </Row>

          {/* Text Example */}
          <Column gap="s">
            <Heading variant="heading-strong-l">Sample Heading</Heading>
            <Text variant="body-default-m">
              This is sample body text that shows how the current theme affects
              typography and colors. The font family is{' '}
              {currentTheme.font.primary.style.fontFamily}.
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              This is a label with neutral weak background color.
            </Text>
          </Column>

          {/* Card Example */}
          <Column gap="s" padding="m" border="neutral-alpha-weak" radius="m">
            <Text variant="heading-strong-s">Sample Card</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              This card demonstrates border radius and color scheme theming.
              Current border style: {currentTheme.style.border}.
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Integration Guide */}
      <Column
        gap="m"
        padding="l"
        border="neutral-alpha-weak"
        radius="m"
        fillWidth
      >
        <Heading variant="heading-strong-m">How to Use in Your Pages</Heading>
        <Column gap="s">
          <Text variant="body-default-s">
            <strong>1. User Themes:</strong> Set siteTheme in user preferences
            (e.g., &apos;minimal&apos;, &apos;dark&apos;, &apos;elegant&apos;)
          </Text>
          <Text variant="body-default-s">
            <strong>2. Style Overrides:</strong> Add themeOverrides to fine-tune
            colors and mode
          </Text>
          <Text variant="body-default-s">
            <strong>3. Page Overrides:</strong> Use <code>usePageTheme()</code>{' '}
            hook to set page-specific themes
          </Text>
          <Text variant="body-default-s">
            <strong>4. Component Integration:</strong> Use{' '}
            <code>useThemeUtils()</code> for theme-aware styling
          </Text>
          <Text variant="body-default-s">
            <strong>5. JSON Configuration:</strong> Add PageThemeOverride to
            your page JSON files
          </Text>
        </Column>
      </Column>
    </Column>
  )
}
