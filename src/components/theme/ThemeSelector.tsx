'use client'

import React from 'react'
import {
  Column,
  Row,
  Text,
  Heading,
  Button,
  Dropdown
} from '@pageforge/once-ui/components'
import {
  useTheme,
  usePageTheme,
  useUserTheme
} from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'

interface ThemeSelectorProps {
  variant?: 'user' | 'page'
  title?: string
  description?: string
  className?: string
}

export function ThemeSelector({
  variant = 'user',
  title = 'Theme Settings',
  description = 'Customize the appearance',
  className
}: ThemeSelectorProps) {
  const { currentTheme, availableThemes, currentSiteTheme } = useTheme()
  const { pageTheme, setTheme: setPageTheme, resetTheme } = usePageTheme()
  const { userTheme, updateUserTheme } = useUserTheme()
  const { updateProfile } = useUser()

  const isPageMode = variant === 'page'

  const handleSiteThemeChange = (themeType: string) => {
    if (isPageMode) {
      setPageTheme({
        ...pageTheme,
        siteTheme: themeType as any
      })
    } else {
      // Update user preferences
      updateProfile({
        preferences: {
          siteTheme: themeType as any
        }
      })
    }
  }

  const handleStyleOverride = (key: string, value: any) => {
    if (isPageMode) {
      setPageTheme({
        ...pageTheme,
        customOverrides: {
          ...pageTheme?.customOverrides,
          [key]: value
        }
      })
    } else {
      // Update user theme overrides
      updateProfile({
        preferences: {
          themeOverrides: {
            ...userTheme?.customOverrides,
            [key]: value
          }
        }
      })
    }
  }

  const themeDisplayNames: Record<string, string> = {
    minimal: 'Minimal',
    bold: 'Bold',
    dark: 'Dark',
    playful: 'Playful',
    elegant: 'Elegant',
    classic: 'Classic',
    futuristic: 'Futuristic',
    natural: 'Natural',
    luxury: 'Luxury',
    vintage: 'Vintage',
    creative: 'Creative'
  }

  const themeModes: { value: string; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
  ]

  const brandColors: { value: string; label: string; color: string }[] = [
    { value: 'blue', label: 'Blue', color: '#3b82f6' },
    { value: 'indigo', label: 'Indigo', color: '#6366f1' },
    { value: 'violet', label: 'Violet', color: '#8b5cf6' },
    { value: 'magenta', label: 'Magenta', color: '#d946ef' },
    { value: 'pink', label: 'Pink', color: '#ec4899' },
    { value: 'red', label: 'Red', color: '#ef4444' },
    { value: 'orange', label: 'Orange', color: '#f97316' },
    { value: 'yellow', label: 'Yellow', color: '#eab308' },
    { value: 'moss', label: 'Moss', color: '#84cc16' },
    { value: 'green', label: 'Green', color: '#22c55e' },
    { value: 'emerald', label: 'Emerald', color: '#10b981' },
    { value: 'aqua', label: 'Aqua', color: '#06b6d4' },
    { value: 'cyan', label: 'Cyan', color: '#06b6d4' }
  ]

  const neutralColors: { value: string; label: string }[] = [
    { value: 'sand', label: 'Sand' },
    { value: 'gray', label: 'Gray' },
    { value: 'slate', label: 'Slate' }
  ]

  const currentOverrides = isPageMode
    ? pageTheme?.customOverrides
    : userTheme?.customOverrides

  return (
    <Column gap="l" className={className}>
      {/* Header */}
      <Column gap="xs">
        <Heading variant="heading-strong-m">{title}</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {description}
        </Text>
        {isPageMode && (
          <Text variant="label-default-xs" onBackground="neutral-weak">
            Page theme overrides user preferences
          </Text>
        )}
      </Column>

      {/* Current Theme Display */}
      <Column gap="s" padding="m" border="neutral-alpha-weak" radius="m">
        <Text variant="heading-strong-s">Current Theme</Text>
        <Row gap="m" wrap>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Site Theme
            </Text>
            <Text variant="body-default-s">
              {themeDisplayNames[currentSiteTheme] || currentSiteTheme}
            </Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Mode
            </Text>
            <Text variant="body-default-s">{currentTheme.style.theme}</Text>
          </Column>
          <Column gap="xs">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Brand Color
            </Text>
            <Text variant="body-default-s">{currentTheme.style.brand}</Text>
          </Column>
        </Row>
      </Column>

      {/* Site Theme Selection */}
      <Column gap="s">
        <Text variant="heading-strong-s">Site Theme</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Choose from predefined theme combinations
        </Text>
        <Row gap="s" wrap>
          {availableThemes.map(theme => (
            <Button
              key={theme}
              variant={currentSiteTheme === theme ? 'primary' : 'secondary'}
              size="s"
              onClick={() => handleSiteThemeChange(theme)}
            >
              {themeDisplayNames[theme] || theme}
            </Button>
          ))}
        </Row>
      </Column>

      {/* Style Overrides */}
      <Column gap="m">
        <Text variant="heading-strong-s">Style Overrides</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Customize specific aspects of the selected theme
        </Text>

        {/* Theme Mode Override */}
        <Column gap="s">
          <Text variant="heading-strong-s">Theme Mode</Text>
          <Row gap="s" wrap>
            {themeModes.map(mode => (
              <Button
                key={mode.value}
                variant={
                  currentOverrides?.mode === mode.value
                    ? 'primary'
                    : 'secondary'
                }
                size="s"
                onClick={() => handleStyleOverride('mode', mode.value)}
              >
                {mode.label}
              </Button>
            ))}
            <Button
              variant="tertiary"
              size="s"
              onClick={() => handleStyleOverride('mode', undefined)}
            >
              Use Theme Default
            </Button>
          </Row>
        </Column>

        {/* Brand Color Override */}
        <Column gap="s">
          <Text variant="heading-strong-s">Brand Color</Text>
          <Row gap="s" wrap>
            {brandColors.map(color => (
              <Button
                key={color.value}
                variant={
                  currentOverrides?.brand === color.value
                    ? 'primary'
                    : 'secondary'
                }
                size="s"
                onClick={() => handleStyleOverride('brand', color.value)}
                style={
                  {
                    '--accent-color': color.color
                  } as React.CSSProperties
                }
              >
                <Row gap="xs" vertical="center">
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: color.color
                    }}
                  />
                  {color.label}
                </Row>
              </Button>
            ))}
            <Button
              variant="tertiary"
              size="s"
              onClick={() => handleStyleOverride('brand', undefined)}
            >
              Use Theme Default
            </Button>
          </Row>
        </Column>

        {/* Neutral Color Override */}
        <Column gap="s">
          <Text variant="heading-strong-s">Neutral Color</Text>
          <Row gap="s" wrap>
            {neutralColors.map(neutral => (
              <Button
                key={neutral.value}
                variant={
                  currentOverrides?.neutral === neutral.value
                    ? 'primary'
                    : 'secondary'
                }
                size="s"
                onClick={() => handleStyleOverride('neutral', neutral.value)}
              >
                {neutral.label}
              </Button>
            ))}
            <Button
              variant="tertiary"
              size="s"
              onClick={() => handleStyleOverride('neutral', undefined)}
            >
              Use Theme Default
            </Button>
          </Row>
        </Column>
      </Column>

      {/* Actions */}
      <Row gap="s">
        {isPageMode && (
          <Button variant="tertiary" size="s" onClick={resetTheme}>
            Reset to User Theme
          </Button>
        )}
        <Text variant="label-default-xs" onBackground="neutral-weak">
          {isPageMode ? 'Page theme active' : 'User preferences saved'}
        </Text>
      </Row>

      {/* Preview */}
      <Column gap="s" padding="m" border="neutral-alpha-weak" radius="m">
        <Text variant="heading-strong-s">Preview</Text>
        <Text variant="body-default-s">
          This is how your content will look with the selected theme.
        </Text>
        <Row gap="s">
          <Button variant="primary" size="s">
            Primary Button
          </Button>
          <Button variant="secondary" size="s">
            Secondary Button
          </Button>
          <Button variant="tertiary" size="s">
            Tertiary Button
          </Button>
        </Row>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Font: {currentTheme.font.primary.style.fontFamily}
        </Text>
      </Column>
    </Column>
  )
}
