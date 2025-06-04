import {
  SiteThemeType,
  getThemeConfig,
  ThemeConfig
} from '@pageforge/types/site'

// Base URL configuration
export const baseURL = 'https://demo.once-ui.com' // Replace with your domain

// Metadata configuration
export const meta = {
  home: {
    path: '/',
    title: 'PageForge - Website Builder',
    description:
      'Create beautiful websites with our powerful drag-and-drop builder powered by Once UI components.',
    image: '/og/home.jpg',
    canonical: 'https://pageforge.com',
    robots: 'index,follow',
    alternates: [{ href: 'https://pageforge.com', hrefLang: 'en' }]
  }
}

// Default schema data
export const schema = {
  logo: '',
  type: 'Organization',
  name: 'PageForge',
  description: meta.home.description,
  email: 'hello@pageforge.com'
}

// Social links
export const social = {
  twitter: 'https://www.twitter.com/pageforge',
  linkedin: 'https://www.linkedin.com/company/pageforge/',
  discord: 'https://discord.com/invite/pageforge'
}

/**
 * Get Once UI configuration for a specific theme
 * @param themeType - The site theme type
 * @returns Theme configuration object with font, style, and effects
 */
export const getOnceUIConfig = (
  themeType: SiteThemeType = 'minimal'
): ThemeConfig => {
  return getThemeConfig(themeType)
}

/**
 * Get theme configuration for layout
 * @param themeType - The site theme type
 * @returns Configuration object ready for layout usage
 */
export const getLayoutConfig = (themeType: SiteThemeType = 'minimal') => {
  const config = getOnceUIConfig(themeType)

  return {
    baseURL,
    font: config.font,
    style: config.style,
    effects: config.effects,
    meta,
    schema,
    social
  }
}

// Export theme-specific configurations
export const themes = {
  minimal: getLayoutConfig('minimal'),
  bold: getLayoutConfig('bold'),
  dark: getLayoutConfig('dark'),
  playful: getLayoutConfig('playful'),
  elegant: getLayoutConfig('elegant'),
  classic: getLayoutConfig('classic'),
  futuristic: getLayoutConfig('futuristic'),
  natural: getLayoutConfig('natural'),
  luxury: getLayoutConfig('luxury'),
  vintage: getLayoutConfig('vintage'),
  creative: getLayoutConfig('creative')
}

// Default export for backward compatibility
export const { font, style, effects } = getLayoutConfig('minimal')

// export { baseURL, meta, schema, social };
