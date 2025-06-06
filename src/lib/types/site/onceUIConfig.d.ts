import type { SiteThemeType, ThemeConfig } from "@pageforge/types/site";
export declare const baseURL = "https://demo.once-ui.com";
export declare const meta: {
  home: {
    path: string;
    title: string;
    description: string;
    image: string;
    canonical: string;
    robots: string;
    alternates: {
      href: string;
      hrefLang: string;
    }[];
  };
};
export declare const schema: {
  logo: string;
  type: string;
  name: string;
  description: string;
  email: string;
};
export declare const social: {
  twitter: string;
  linkedin: string;
  discord: string;
};
/**
 * Get Once UI configuration for a specific theme
 * @param themeType - The site theme type
 * @returns Theme configuration object with font, style, and effects
 */
export declare const getOnceUIConfig: (themeType?: SiteThemeType) => ThemeConfig;
/**
 * Get theme configuration for layout
 * @param themeType - The site theme type
 * @returns Configuration object ready for layout usage
 */
export declare const getLayoutConfig: (themeType?: SiteThemeType) => {
  baseURL: string;
  font: {
    primary: any;
    secondary: any;
    tertiary: any;
    code: any;
  };
  style: {
    theme: "dark" | "light";
    neutral: "sand" | "gray" | "slate";
    brand:
      | "blue"
      | "indigo"
      | "violet"
      | "magenta"
      | "pink"
      | "red"
      | "orange"
      | "yellow"
      | "moss"
      | "green"
      | "emerald"
      | "aqua"
      | "cyan";
    accent:
      | "blue"
      | "indigo"
      | "violet"
      | "magenta"
      | "pink"
      | "red"
      | "orange"
      | "yellow"
      | "moss"
      | "green"
      | "emerald"
      | "aqua"
      | "cyan";
    solid: "color" | "contrast" | "inverse";
    solidStyle: "flat" | "plastic";
    border: "rounded" | "playful" | "conservative";
    surface: "filled" | "translucent";
    transition: "all" | "micro" | "macro";
    scaling: "90" | "95" | "100" | "105" | "110";
  };
  effects: {
    mask: {
      cursor: boolean;
      x: number;
      y: number;
      radius: number;
    };
    gradient: {
      display: boolean;
      x: number;
      y: number;
      width: number;
      height: number;
      tilt: number;
      colorStart: string;
      colorEnd: string;
      opacity: number;
    };
    dots: {
      display: boolean;
      size: string;
      color: string;
      opacity: number;
    };
    lines: {
      display: boolean;
      color: string;
      opacity: number;
      thickness: number;
      angle: number;
      size: string;
    };
    grid: {
      display: boolean;
      color: string;
      opacity: number;
      width: string;
      height: string;
    };
  };
  meta: {
    home: {
      path: string;
      title: string;
      description: string;
      image: string;
      canonical: string;
      robots: string;
      alternates: {
        href: string;
        hrefLang: string;
      }[];
    };
  };
  schema: {
    logo: string;
    type: string;
    name: string;
    description: string;
    email: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    discord: string;
  };
};
export declare const themes: {
  minimal: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  bold: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  dark: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  playful: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  elegant: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  classic: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  futuristic: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  natural: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  luxury: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  vintage: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
  creative: {
    baseURL: string;
    font: {
      primary: any;
      secondary: any;
      tertiary: any;
      code: any;
    };
    style: {
      theme: "dark" | "light";
      neutral: "sand" | "gray" | "slate";
      brand:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      accent:
        | "blue"
        | "indigo"
        | "violet"
        | "magenta"
        | "pink"
        | "red"
        | "orange"
        | "yellow"
        | "moss"
        | "green"
        | "emerald"
        | "aqua"
        | "cyan";
      solid: "color" | "contrast" | "inverse";
      solidStyle: "flat" | "plastic";
      border: "rounded" | "playful" | "conservative";
      surface: "filled" | "translucent";
      transition: "all" | "micro" | "macro";
      scaling: "90" | "95" | "100" | "105" | "110";
    };
    effects: {
      mask: {
        cursor: boolean;
        x: number;
        y: number;
        radius: number;
      };
      gradient: {
        display: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        tilt: number;
        colorStart: string;
        colorEnd: string;
        opacity: number;
      };
      dots: {
        display: boolean;
        size: string;
        color: string;
        opacity: number;
      };
      lines: {
        display: boolean;
        color: string;
        opacity: number;
        thickness: number;
        angle: number;
        size: string;
      };
      grid: {
        display: boolean;
        color: string;
        opacity: number;
        width: string;
        height: string;
      };
    };
    meta: {
      home: {
        path: string;
        title: string;
        description: string;
        image: string;
        canonical: string;
        robots: string;
        alternates: {
          href: string;
          hrefLang: string;
        }[];
      };
    };
    schema: {
      logo: string;
      type: string;
      name: string;
      description: string;
      email: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      discord: string;
    };
  };
};
export declare const font: {
    primary: any;
    secondary: any;
    tertiary: any;
    code: any;
  },
  style: {
    theme: "dark" | "light";
    neutral: "sand" | "gray" | "slate";
    brand:
      | "blue"
      | "indigo"
      | "violet"
      | "magenta"
      | "pink"
      | "red"
      | "orange"
      | "yellow"
      | "moss"
      | "green"
      | "emerald"
      | "aqua"
      | "cyan";
    accent:
      | "blue"
      | "indigo"
      | "violet"
      | "magenta"
      | "pink"
      | "red"
      | "orange"
      | "yellow"
      | "moss"
      | "green"
      | "emerald"
      | "aqua"
      | "cyan";
    solid: "color" | "contrast" | "inverse";
    solidStyle: "flat" | "plastic";
    border: "rounded" | "playful" | "conservative";
    surface: "filled" | "translucent";
    transition: "all" | "micro" | "macro";
    scaling: "90" | "95" | "100" | "105" | "110";
  },
  effects: {
    mask: {
      cursor: boolean;
      x: number;
      y: number;
      radius: number;
    };
    gradient: {
      display: boolean;
      x: number;
      y: number;
      width: number;
      height: number;
      tilt: number;
      colorStart: string;
      colorEnd: string;
      opacity: number;
    };
    dots: {
      display: boolean;
      size: string;
      color: string;
      opacity: number;
    };
    lines: {
      display: boolean;
      color: string;
      opacity: number;
      thickness: number;
      angle: number;
      size: string;
    };
    grid: {
      display: boolean;
      color: string;
      opacity: number;
      width: string;
      height: string;
    };
  };
//# sourceMappingURL=onceUIConfig.d.ts.map
