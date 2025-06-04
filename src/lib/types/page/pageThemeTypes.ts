import { PageThemeOverride } from '../../../contexts/ThemeContext'

export interface PageThemeConfig extends PageThemeOverride {
  enabled?: boolean
  priority?: 'low' | 'medium' | 'high'
  responsive?: {
    mobile?: Partial<PageThemeOverride>
    tablet?: Partial<PageThemeOverride>
    desktop?: Partial<PageThemeOverride>
  }
}

export interface PageConfigWithTheme {
  theme?: PageThemeConfig
  // ... other page config properties
}

// Helper function to apply page theme
export function applyPageTheme(themeConfig?: PageThemeConfig): PageThemeOverride | null {
  if (!themeConfig?.enabled) return null

  const { enabled, priority, responsive, ...themeProps } = themeConfig
  return themeProps
}

// Helper function for responsive theme application
export function getResponsiveTheme(
  baseTheme: PageThemeConfig,
  breakpoint: 'mobile' | 'tablet' | 'desktop'
): PageThemeOverride | null {
  if (!baseTheme.enabled || !baseTheme.responsive?.[breakpoint]) return null

  return {
    ...baseTheme,
    ...baseTheme.responsive[breakpoint]
  }
}
