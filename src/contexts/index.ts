// Context exports
export {
  UserProvider,
  useUser,
  useUserProfile,
  useUserStats,
  useUserProjects,
  useUserSkills,
  useUserSocialLinks,
  useUserExperience,
  useUserEducation,
} from "./UserContext";

// Theme context exports
export {
  ThemeProvider,
  useTheme,
  usePageTheme,
  useUserTheme,
  useThemeUtils,
} from "./ThemeContext";

// Type exports
export type {
  UserProfile,
  UserPreferences,
  SocialLink,
  UserWorkExperience,
  UserEducation,
  UserSkill,
  UserProject,
  UserStats,
  UserInfo,
} from "./UserContext";

// Theme type exports (from the correct sources)
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
} from "./ThemeContext";

export type { PageThemeOverride, UserThemePreferences } from "./ThemeContext";
