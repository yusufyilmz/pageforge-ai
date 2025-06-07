"use client";

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

import type { SiteThemeType } from "../lib/types/site/siteThemes";
import {
  type AccentColor,
  type BorderStyle,
  type BrandColor,
  type NeutralColor,
  type SolidStyle,
  type SolidType,
  type SurfaceStyle,
  type ThemeConfig,
  type ThemeMode,
  type TransitionStyle,
  getAvailableThemes,
  getThemeConfig,
} from "../lib/types/site/themeConfigs";

import { useUserProfile } from "./UserContext";

// ============================================================================
// THEME CONTEXT TYPES
// ============================================================================

export interface PageThemeOverride {
  siteTheme?: SiteThemeType;
  customOverrides?: {
    mode?: ThemeMode;
    neutral?: NeutralColor;
    brand?: BrandColor;
    accent?: AccentColor;
    solid?: SolidType;
    solidStyle?: SolidStyle;
    border?: BorderStyle;
    surface?: SurfaceStyle;
    transition?: TransitionStyle;
    scaling?: "90" | "95" | "100" | "105" | "110";
  };
}

export interface UserThemePreferences {
  siteTheme: SiteThemeType;
  customOverrides?: {
    mode?: ThemeMode;
    neutral?: NeutralColor;
    brand?: BrandColor;
    accent?: AccentColor;
  };
}

interface ThemeContextType {
  // Current active theme (resolved from all sources)
  currentTheme: ThemeConfig;
  currentSiteTheme: SiteThemeType;

  // Theme sources
  userTheme: UserThemePreferences | null;
  pageTheme: PageThemeOverride | null;
  systemTheme: SiteThemeType;

  // Theme management
  setPageTheme: (theme: PageThemeOverride | null) => void;
  updateUserTheme: (theme: Partial<UserThemePreferences>) => void;
  resetToUserTheme: () => void;
  resetToSystemTheme: () => void;

  // Theme application
  applyThemeToBody: (theme: ThemeConfig) => void;
  getThemeClass: () => string;

  // Theme detection
  preferredColorScheme: "light" | "dark";
  isSystemDarkMode: boolean;

  // Available options
  availableThemes: SiteThemeType[];
}

// ============================================================================
// DEFAULT THEMES
// ============================================================================

const defaultSystemTheme: SiteThemeType = "minimal";

// ============================================================================
// THEME UTILITIES
// ============================================================================

function resolveThemeMode(mode: ThemeMode, isSystemDark: boolean): "light" | "dark" {
  if (mode === "light" || mode === "dark") {
    return mode;
  }
  // Default to light if not explicitly set
  return isSystemDark ? "dark" : "light";
}

function mergeThemeConfig(
  baseConfig: ThemeConfig,
  overrides?: PageThemeOverride["customOverrides"]
): ThemeConfig {
  if (!overrides) {
    return baseConfig;
  }

  const mergedStyle = {
    ...baseConfig.style,
    ...overrides,
  };

  return {
    ...baseConfig,
    style: mergedStyle,
  };
}

function getThemeFromUserPreferences(userPreferences: any): UserThemePreferences | null {
  if (!userPreferences?.siteTheme) {
    return null;
  }

  return {
    siteTheme: userPreferences.siteTheme || defaultSystemTheme,
    customOverrides: userPreferences.themeOverrides,
  };
}

// ============================================================================
// THEME CONTEXT
// ============================================================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: SiteThemeType;
}

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
  // System theme detection
  const [isSystemDarkMode, setIsSystemDarkMode] = useState(false);
  const [pageTheme, setPageTheme] = useState<PageThemeOverride | null>(null);

  // Get user theme preferences from user context
  const userProfile = useUserProfile();
  const userTheme = getThemeFromUserPreferences(userProfile.preferences);

  // Create system theme with any defaults
  const systemTheme: SiteThemeType = defaultTheme || defaultSystemTheme;

  // Resolve current theme with priority: Page > User > System
  const resolveCurrentTheme = (): {
    theme: ThemeConfig;
    siteTheme: SiteThemeType;
  } => {
    let activeSiteTheme = systemTheme;

    // Apply user theme if available
    if (userTheme) {
      activeSiteTheme = userTheme.siteTheme;
    }

    // Apply page theme override if available
    if (pageTheme?.siteTheme) {
      activeSiteTheme = pageTheme.siteTheme;
    }

    // Get the base theme configuration
    let baseThemeConfig = getThemeConfig(activeSiteTheme);

    // Apply user custom overrides
    if (userTheme?.customOverrides) {
      baseThemeConfig = mergeThemeConfig(baseThemeConfig, userTheme.customOverrides);
    }

    // Apply page custom overrides
    if (pageTheme?.customOverrides) {
      baseThemeConfig = mergeThemeConfig(baseThemeConfig, pageTheme.customOverrides);
    }

    return {
      theme: baseThemeConfig,
      siteTheme: activeSiteTheme,
    };
  };

  const { theme: currentTheme, siteTheme: currentSiteTheme } = resolveCurrentTheme();
  const preferredColorScheme = resolveThemeMode(currentTheme.style.theme, isSystemDarkMode);

  // Detect system dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsSystemDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Apply theme to document
  const applyThemeToBody = (theme: ThemeConfig) => {
    const resolvedMode = resolveThemeMode(theme.style.theme, isSystemDarkMode);

    // Apply theme classes
    document.body.className = document.body.className
      .replace(/theme-\w+/g, "")
      .replace(/neutral-\w+/g, "")
      .replace(/brand-\w+/g, "")
      .replace(/accent-\w+/g, "")
      .replace(/border-\w+/g, "")
      .replace(/surface-\w+/g, "");

    document.body.classList.add(
      `theme-${resolvedMode}`,
      `neutral-${theme.style.neutral}`,
      `brand-${theme.style.brand}`,
      `accent-${theme.style.accent}`,
      `border-${theme.style.border}`,
      `surface-${theme.style.surface}`
    );

    // Apply font variables
    document.body.className += ` ${theme.font.primary.variable} ${theme.font.code.variable}`;

    // Set data attributes for CSS selectors
    document.documentElement.setAttribute("data-theme", resolvedMode);
    document.documentElement.setAttribute("data-neutral", theme.style.neutral);
    document.documentElement.setAttribute("data-brand", theme.style.brand);
    document.documentElement.setAttribute("data-accent", theme.style.accent);
  };

  // Apply current theme when it changes
  useEffect(() => {
    applyThemeToBody(currentTheme);
  }, [currentTheme, isSystemDarkMode]);

  const getThemeClass = (): string => {
    const resolvedMode = resolveThemeMode(currentTheme.style.theme, isSystemDarkMode);
    return `theme-${resolvedMode} neutral-${currentTheme.style.neutral} brand-${currentTheme.style.brand} accent-${currentTheme.style.accent}`;
  };

  const updateUserTheme = (themeUpdate: Partial<UserThemePreferences>) => {
    // This would typically update the user preferences in the UserContext
    console.log("Update user theme:", themeUpdate);
    // You would call something like:
    // updateProfile({
    //   preferences: {
    //     ...userProfile.preferences,
    //     siteTheme: themeUpdate.siteTheme,
    //     themeOverrides: themeUpdate.customOverrides
    //   }
    // })
  };

  const resetToUserTheme = () => {
    setPageTheme(null);
  };

  const resetToSystemTheme = () => {
    setPageTheme(null);
    // Also would reset user theme preferences
  };

  const contextValue: ThemeContextType = {
    currentTheme,
    currentSiteTheme,
    userTheme,
    pageTheme,
    systemTheme,
    setPageTheme,
    updateUserTheme,
    resetToUserTheme,
    resetToSystemTheme,
    applyThemeToBody,
    getThemeClass,
    preferredColorScheme,
    isSystemDarkMode,
    availableThemes: getAvailableThemes(),
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

// ============================================================================
// HOOKS
// ============================================================================

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Hook for page-level theme management
export function usePageTheme() {
  const { setPageTheme, pageTheme, resetToUserTheme } = useTheme();

  const setTheme = (theme: PageThemeOverride | null) => {
    setPageTheme(theme);
  };

  const resetTheme = () => {
    resetToUserTheme();
  };

  return {
    pageTheme,
    setTheme,
    resetTheme,
  };
}

// Hook for user theme preferences
export function useUserTheme() {
  const { userTheme, updateUserTheme, currentTheme, currentSiteTheme } = useTheme();

  return {
    userTheme,
    updateUserTheme,
    isUsingUserTheme: userTheme !== null,
    effectiveTheme: currentTheme,
    effectiveSiteTheme: currentSiteTheme,
  };
}

// Hook for theme utilities
export function useThemeUtils() {
  const {
    getThemeClass,
    applyThemeToBody,
    preferredColorScheme,
    isSystemDarkMode,
    availableThemes,
    currentTheme,
  } = useTheme();

  return {
    getThemeClass,
    applyThemeToBody,
    preferredColorScheme,
    isSystemDarkMode,
    isDark: preferredColorScheme === "dark",
    isLight: preferredColorScheme === "light",
    availableThemes,
    currentTheme,
  };
}

// Re-export types for convenience
export type {
  ThemeConfig,
  SiteThemeType,
  ThemeMode,
  NeutralColor,
  BrandColor,
  AccentColor,
  SolidType,
  SolidStyle,
  BorderStyle,
  SurfaceStyle,
  TransitionStyle,
};
