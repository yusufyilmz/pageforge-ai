import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  JetBrains_Mono,
  Poppins,
  Crimson_Text,
  Orbitron,
  Merriweather,
  Cinzel,
  Creepster
} from 'next/font/google'

import type { SiteThemeType } from './siteThemes'

// Font definitions
const geistFont = Geist({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
})

const geistMono = Geist_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap'
})

const interFont = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
})

const playfairFont = Playfair_Display({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
})

const jetbrainsFont = JetBrains_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap'
})

const poppinsFont = Poppins({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
})

const crimsonFont = Crimson_Text({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap'
})

const orbitronFont = Orbitron({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
})

const merriweatherFont = Merriweather({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap'
})

const cinzelFont = Cinzel({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap'
})

const creepsterFont = Creepster({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
})

export interface ThemeConfig {
  font: {
    primary: any
    secondary: any
    tertiary: any
    code: any
  }
  style: {
    theme: 'dark' | 'light'
    neutral: 'sand' | 'gray' | 'slate'
    brand:
      | 'blue'
      | 'indigo'
      | 'violet'
      | 'magenta'
      | 'pink'
      | 'red'
      | 'orange'
      | 'yellow'
      | 'moss'
      | 'green'
      | 'emerald'
      | 'aqua'
      | 'cyan'
    accent:
      | 'blue'
      | 'indigo'
      | 'violet'
      | 'magenta'
      | 'pink'
      | 'red'
      | 'orange'
      | 'yellow'
      | 'moss'
      | 'green'
      | 'emerald'
      | 'aqua'
      | 'cyan'
    solid: 'color' | 'contrast' | 'inverse'
    solidStyle: 'flat' | 'plastic'
    border: 'rounded' | 'playful' | 'conservative'
    surface: 'filled' | 'translucent'
    transition: 'all' | 'micro' | 'macro'
    scaling: '90' | '95' | '100' | '105' | '110'
  }
  effects: {
    mask: {
      cursor: boolean
      x: number
      y: number
      radius: number
    }
    gradient: {
      display: boolean
      x: number
      y: number
      width: number
      height: number
      tilt: number
      colorStart: string
      colorEnd: string
      opacity: number
    }
    dots: {
      display: boolean
      size: string
      color: string
      opacity: number
    }
    lines: {
      display: boolean
      color: string
      opacity: number
      thickness: number
      angle: number
      size: string
    }
    grid: {
      display: boolean
      color: string
      opacity: number
      width: string
      height: string
    }
  }
}

// Theme configuration types
export type ThemeMode = 'dark' | 'light'
export type NeutralColor = 'sand' | 'gray' | 'slate'
export type BrandColor =
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'magenta'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'moss'
  | 'green'
  | 'emerald'
  | 'aqua'
  | 'cyan'
export type AccentColor =
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'magenta'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'moss'
  | 'green'
  | 'emerald'
  | 'aqua'
  | 'cyan'
export type SolidType = 'color' | 'contrast'
export type SolidStyle = 'flat' | 'plastic'
export type BorderStyle = 'rounded' | 'playful' | 'conservative'
export type SurfaceStyle = 'filled' | 'translucent'
export type TransitionStyle = 'all' | 'micro' | 'macro'

export interface StyleConfig {
  theme: ThemeMode
  neutral: NeutralColor
  brand: BrandColor
  accent: AccentColor
  solid: SolidType
  solidStyle: SolidStyle
  border: BorderStyle
  surface: SurfaceStyle
  transition: TransitionStyle
}

export interface MaskEffect {
  cursor: boolean
  x: number
  y: number
  radius: number
}

export interface GradientEffect {
  display: boolean
  x: number
  y: number
  width: number
  height: number
  tilt: number
  colorStart: string
  colorEnd: string
  opacity: number
}

export interface DotsEffect {
  display: boolean
  size: number
  color: string
  opacity: number
}

export interface LinesEffect {
  display: boolean
  color: string
  opacity: number
}

export interface GridEffect {
  display: boolean
  color: string
  opacity: number
}

export interface EffectsConfig {
  mask: MaskEffect
  gradient: GradientEffect
  dots: DotsEffect
  lines: LinesEffect
  grid: GridEffect
}

export interface DisplayConfig {
  location: boolean
  time: boolean
}

export interface MailchimpConfig {
  action: string
  effects: EffectsConfig
}

export interface CompleteThemeConfig {
  style: StyleConfig
  effects: EffectsConfig
  display: DisplayConfig
  mailchimp: MailchimpConfig
}

export const THEME_CONFIGS: Record<SiteThemeType, ThemeConfig> = {
  minimal: {
    font: {
      primary: geistFont,
      secondary: geistFont,
      tertiary: geistFont,
      code: geistMono
    },
    style: {
      theme: 'light',
      neutral: 'gray',
      brand: 'violet',
      accent: 'blue',
      solid: 'contrast',
      solidStyle: 'flat',
      border: 'conservative',
      surface: 'translucent',
      transition: 'micro',
      scaling: '100'
    },
    effects: {
      mask: {
        cursor: true,
        x: 85,
        y: 15,
        radius: 120
      },
      gradient: {
        display: true,
        x: 90,
        y: 10,
        width: 80,
        height: 80,
        tilt: -15,
        colorStart: 'brand-background-strong',
        colorEnd: 'accent-background-weak',
        opacity: 25
      },
      dots: {
        display: true,
        size: '2',
        color: 'brand-on-background-weak',
        opacity: 15
      },
      lines: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 10,
        thickness: 1,
        angle: 0,
        size: '16'
      },
      grid: {
        display: true,
        color: 'neutral-alpha-weak',
        opacity: 8,
        width: '1',
        height: '1'
      }
    }
  },

  bold: {
    font: {
      primary: poppinsFont,
      secondary: poppinsFont,
      tertiary: poppinsFont,
      code: jetbrainsFont
    },
    style: {
      theme: 'light',
      neutral: 'slate',
      brand: 'red',
      accent: 'orange',
      solid: 'color',
      solidStyle: 'plastic',
      border: 'playful',
      surface: 'filled',
      transition: 'all',
      scaling: '105'
    },
    effects: {
      mask: {
        cursor: true,
        x: 25,
        y: 75,
        radius: 180
      },
      gradient: {
        display: true,
        x: 20,
        y: 80,
        width: 140,
        height: 140,
        tilt: 135,
        colorStart: 'brand-background-strong',
        colorEnd: 'accent-background-medium',
        opacity: 70
      },
      dots: {
        display: true,
        size: '6',
        color: 'accent-on-background-medium',
        opacity: 40
      },
      lines: {
        display: true,
        color: 'brand-alpha-strong',
        opacity: 60,
        thickness: 3,
        angle: 45,
        size: '12'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 15,
        width: '2',
        height: '2'
      }
    }
  },

  dark: {
    font: {
      primary: geistFont,
      secondary: geistFont,
      tertiary: geistFont,
      code: jetbrainsFont
    },
    style: {
      theme: 'dark',
      neutral: 'slate',
      brand: 'cyan',
      accent: 'blue',
      solid: 'contrast',
      solidStyle: 'flat',
      border: 'rounded',
      surface: 'translucent',
      transition: 'all',
      scaling: '100'
    },
    effects: {
      mask: {
        cursor: false,
        x: 50,
        y: 0,
        radius: 100
      },
      gradient: {
        display: true,
        x: 20,
        y: 80,
        width: 100,
        height: 100,
        tilt: 135,
        colorStart: 'brand-background-strong',
        colorEnd: 'accent-background-strong',
        opacity: 30
      },
      dots: {
        display: true,
        size: '2',
        color: 'brand-on-background-weak',
        opacity: 40
      },
      lines: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 50,
        thickness: 1,
        angle: 90,
        size: '12'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 20,
        width: '1',
        height: '1'
      }
    }
  },

  playful: {
    font: {
      primary: poppinsFont,
      secondary: poppinsFont,
      tertiary: poppinsFont,
      code: geistMono
    },
    style: {
      theme: 'light',
      neutral: 'sand',
      brand: 'pink',
      accent: 'yellow',
      solid: 'color',
      solidStyle: 'plastic',
      border: 'playful',
      surface: 'filled',
      transition: 'all',
      scaling: '105'
    },
    effects: {
      mask: {
        cursor: true,
        x: 60,
        y: 40,
        radius: 120
      },
      gradient: {
        display: true,
        x: 70,
        y: 30,
        width: 150,
        height: 150,
        tilt: 25,
        colorStart: 'brand-background-medium',
        colorEnd: 'accent-background-medium',
        opacity: 40
      },
      dots: {
        display: true,
        size: '3',
        color: 'accent-on-background-medium',
        opacity: 60
      },
      lines: {
        display: true,
        color: 'brand-alpha-medium',
        opacity: 70,
        thickness: 3,
        angle: 15,
        size: '6'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 30,
        width: '3',
        height: '3'
      }
    }
  },

  elegant: {
    font: {
      primary: playfairFont,
      secondary: interFont,
      tertiary: interFont,
      code: geistMono
    },
    style: {
      theme: 'light',
      neutral: 'gray',
      brand: 'violet',
      accent: 'indigo',
      solid: 'contrast',
      solidStyle: 'flat',
      border: 'conservative',
      surface: 'translucent',
      transition: 'macro',
      scaling: '100'
    },
    effects: {
      mask: {
        cursor: false,
        x: 50,
        y: 0,
        radius: 80
      },
      gradient: {
        display: true,
        x: 50,
        y: 100,
        width: 80,
        height: 80,
        tilt: 0,
        colorStart: 'brand-background-weak',
        colorEnd: 'static-transparent',
        opacity: 25
      },
      dots: {
        display: false,
        size: '1',
        color: 'neutral-alpha-weak',
        opacity: 30
      },
      lines: {
        display: true,
        color: 'brand-alpha-weak',
        opacity: 40,
        thickness: 1,
        angle: 0,
        size: '24'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 15,
        width: '1',
        height: '1'
      }
    }
  },

  classic: {
    font: {
      primary: merriweatherFont,
      secondary: interFont,
      tertiary: interFont,
      code: geistMono
    },
    style: {
      theme: 'light',
      neutral: 'gray',
      brand: 'blue',
      accent: 'emerald',
      solid: 'contrast',
      solidStyle: 'flat',
      border: 'conservative',
      surface: 'filled',
      transition: 'micro',
      scaling: '100'
    },
    effects: {
      mask: {
        cursor: false,
        x: 50,
        y: 0,
        radius: 100
      },
      gradient: {
        display: false,
        x: 50,
        y: 0,
        width: 100,
        height: 100,
        tilt: 0,
        colorStart: 'brand-background-weak',
        colorEnd: 'static-transparent',
        opacity: 20
      },
      dots: {
        display: false,
        size: '2',
        color: 'neutral-alpha-weak',
        opacity: 20
      },
      lines: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 30,
        thickness: 1,
        angle: 0,
        size: '16'
      },
      grid: {
        display: true,
        color: 'neutral-alpha-weak',
        opacity: 15,
        width: '1',
        height: '1'
      }
    }
  },

  futuristic: {
    font: {
      primary: orbitronFont,
      secondary: geistFont,
      tertiary: geistFont,
      code: jetbrainsFont
    },
    style: {
      theme: 'dark',
      neutral: 'slate',
      brand: 'cyan',
      accent: 'magenta',
      solid: 'color',
      solidStyle: 'plastic',
      border: 'rounded',
      surface: 'translucent',
      transition: 'all',
      scaling: '105'
    },
    effects: {
      mask: {
        cursor: true,
        x: 25,
        y: 75,
        radius: 200
      },
      gradient: {
        display: true,
        x: 0,
        y: 100,
        width: 150,
        height: 150,
        tilt: 90,
        colorStart: 'brand-background-strong',
        colorEnd: 'accent-background-strong',
        opacity: 50
      },
      dots: {
        display: false,
        size: '2',
        color: 'brand-on-background-weak',
        opacity: 40
      },
      lines: {
        display: true,
        color: 'cyan-alpha-medium',
        opacity: 80,
        thickness: 2,
        angle: 45,
        size: '4'
      },
      grid: {
        display: true,
        color: 'brand-alpha-weak',
        opacity: 30,
        width: '2',
        height: '2'
      }
    }
  },

  natural: {
    font: {
      primary: merriweatherFont,
      secondary: interFont,
      tertiary: interFont,
      code: geistMono
    },
    style: {
      theme: 'light',
      neutral: 'sand',
      brand: 'moss',
      accent: 'green',
      solid: 'contrast',
      solidStyle: 'flat',
      border: 'rounded',
      surface: 'filled',
      transition: 'macro',
      scaling: '100'
    },
    effects: {
      mask: {
        cursor: false,
        x: 50,
        y: 0,
        radius: 100
      },
      gradient: {
        display: true,
        x: 80,
        y: 20,
        width: 100,
        height: 100,
        tilt: 15,
        colorStart: 'brand-background-weak',
        colorEnd: 'accent-background-weak',
        opacity: 30
      },
      dots: {
        display: true,
        size: '2',
        color: 'moss-on-background-weak',
        opacity: 40
      },
      lines: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 30,
        thickness: 1,
        angle: 30,
        size: '12'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 20,
        width: '1',
        height: '1'
      }
    }
  },

  luxury: {
    font: {
      primary: cinzelFont,
      secondary: playfairFont,
      tertiary: interFont,
      code: geistMono
    },
    style: {
      theme: 'dark',
      neutral: 'slate',
      brand: 'yellow',
      accent: 'orange',
      solid: 'color',
      solidStyle: 'plastic',
      border: 'conservative',
      surface: 'translucent',
      transition: 'macro',
      scaling: '105'
    },
    effects: {
      mask: {
        cursor: false,
        x: 50,
        y: 50,
        radius: 150
      },
      gradient: {
        display: true,
        x: 50,
        y: 0,
        width: 120,
        height: 120,
        tilt: 0,
        colorStart: 'brand-background-medium',
        colorEnd: 'accent-background-medium',
        opacity: 40
      },
      dots: {
        display: false,
        size: '3',
        color: 'yellow-on-background-medium',
        opacity: 50
      },
      lines: {
        display: true,
        color: 'brand-alpha-weak',
        opacity: 60,
        thickness: 1,
        angle: 0,
        size: '32'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 20,
        width: '2',
        height: '2'
      }
    }
  },

  vintage: {
    font: {
      primary: crimsonFont,
      secondary: merriweatherFont,
      tertiary: interFont,
      code: geistMono
    },
    style: {
      theme: 'light',
      neutral: 'sand',
      brand: 'red',
      accent: 'orange',
      solid: 'contrast',
      solidStyle: 'flat',
      border: 'conservative',
      surface: 'filled',
      transition: 'micro',
      scaling: '95'
    },
    effects: {
      mask: {
        cursor: false,
        x: 50,
        y: 0,
        radius: 100
      },
      gradient: {
        display: true,
        x: 100,
        y: 100,
        width: 80,
        height: 80,
        tilt: 45,
        colorStart: 'brand-background-weak',
        colorEnd: 'accent-background-weak',
        opacity: 25
      },
      dots: {
        display: true,
        size: '1',
        color: 'red-on-background-weak',
        opacity: 30
      },
      lines: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 40,
        thickness: 1,
        angle: 0,
        size: '16'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 20,
        width: '1',
        height: '1'
      }
    }
  },

  creative: {
    font: {
      primary: creepsterFont,
      secondary: poppinsFont,
      tertiary: geistFont,
      code: jetbrainsFont
    },
    style: {
      theme: 'light',
      neutral: 'gray',
      brand: 'magenta',
      accent: 'violet',
      solid: 'color',
      solidStyle: 'plastic',
      border: 'playful',
      surface: 'translucent',
      transition: 'all',
      scaling: '110'
    },
    effects: {
      mask: {
        cursor: true,
        x: 30,
        y: 70,
        radius: 180
      },
      gradient: {
        display: true,
        x: 40,
        y: 60,
        width: 140,
        height: 140,
        tilt: 120,
        colorStart: 'brand-background-strong',
        colorEnd: 'accent-background-strong',
        opacity: 70
      },
      dots: {
        display: true,
        size: '4',
        color: 'magenta-on-background-medium',
        opacity: 70
      },
      lines: {
        display: true,
        color: 'accent-alpha-strong',
        opacity: 90,
        thickness: 3,
        angle: 30,
        size: '6'
      },
      grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 40,
        width: '3',
        height: '3'
      }
    }
  }
}

// Helper function to get theme config by theme type
export const getThemeConfig = (themeType: SiteThemeType): ThemeConfig => {
  return THEME_CONFIGS[themeType]
}

// Helper function to get all available theme types
export const getAvailableThemes = (): SiteThemeType[] => {
  return Object.keys(THEME_CONFIGS) as SiteThemeType[]
}
