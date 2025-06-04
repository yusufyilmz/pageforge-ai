export type SiteThemeType =
  | 'minimal'
  | 'bold'
  | 'dark'
  | 'playful'
  | 'elegant'
  | 'classic'
  | 'futuristic'
  | 'natural'
  | 'luxury'
  | 'vintage'
  | 'creative'

export const SITE_THEMES = [
  'minimal',
  'bold',
  'dark',
  'playful',
  'elegant',
  'classic',
  'futuristic',
  'natural',
  'luxury',
  'vintage',
  'creative'
] as const

export type SiteTheme = (typeof SITE_THEMES)[number]
