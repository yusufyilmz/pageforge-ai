"use client";

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

import type { SiteThemeType } from "../lib/types/site/siteThemes";
import type {
  AccentColor,
  BrandColor,
  NeutralColor,
  ThemeMode,
} from "../lib/types/site/themeConfigs";

// ============================================================================
// USER CONTEXT TYPES
// ============================================================================

export interface UserProfile {
  id?: string;
  name: string;
  lastName: string;
  email?: string;
  role: string;
  avatar: string;
  location: string;
  languages: string[];
  bio?: string;
  phone?: string;
  website?: string;
  timezone?: string;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  siteTheme?: SiteThemeType;
  themeOverrides?: {
    mode?: ThemeMode;
    neutral?: NeutralColor;
    brand?: BrandColor;
    accent?: AccentColor;
  };
  language?: string;
  notifications?: boolean;
  emailUpdates?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  icon: string;
  display: boolean;
}

export interface UserWorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  location?: string;
  skills?: string[];
}

export interface UserEducation {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  grade?: string;
}

export interface UserSkill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
  years?: number;
}

export interface UserProject {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
  githubUrl?: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planning";
  featured: boolean;
  startDate?: string;
  endDate?: string;
}

export interface UserStats {
  projectsCompleted: number;
  yearsExperience: number;
  clientsWorkedWith: number;
  technologiesUsed: number;
  lastUpdated: string;
}

export interface UserInfo {
  profile: UserProfile;
  socialLinks: SocialLink[];
  workExperience: UserWorkExperience[];
  education: UserEducation[];
  skills: UserSkill[];
  projects: UserProject[];
  stats: UserStats;
  isLoading: boolean;
  lastUpdated: string;
}

interface UserContextType {
  userInfo: UserInfo;
  updateProfile: (profile: Partial<UserProfile>) => void;
  updateSocialLinks: (links: SocialLink[]) => void;
  addWorkExperience: (experience: Omit<UserWorkExperience, "id">) => void;
  updateWorkExperience: (id: string, experience: Partial<UserWorkExperience>) => void;
  removeWorkExperience: (id: string) => void;
  addEducation: (education: Omit<UserEducation, "id">) => void;
  updateEducation: (id: string, education: Partial<UserEducation>) => void;
  removeEducation: (id: string) => void;
  updateSkills: (skills: UserSkill[]) => void;
  addProject: (project: Omit<UserProject, "id">) => void;
  updateProject: (id: string, project: Partial<UserProject>) => void;
  removeProject: (id: string) => void;
  refreshUserData: () => Promise<void>;
  isInitialized: boolean;
}

// ============================================================================
// CONTEXT CREATION
// ============================================================================

const UserContext = createContext<UserContextType | undefined>(undefined);

// ============================================================================
// DEFAULT DATA
// ============================================================================

const defaultUserInfo: UserInfo = {
  profile: {
    name: "Selene",
    lastName: "Yu",
    email: "selene.yu@example.com",
    role: "Design Engineer",
    avatar: "/images/avatar.jpg",
    location: "Jakarta, Indonesia",
    languages: ["English", "Bahasa Indonesia"],
    bio: "Passionate design engineer with a focus on creating beautiful, functional digital experiences. I bridge the gap between design and development to deliver exceptional user experiences.",
    phone: "+62 812 3456 7890",
    website: "https://seleneyuu.dev",
    timezone: "Asia/Jakarta",
    preferences: {
      siteTheme: "minimal",
      themeOverrides: {
        mode: "light",
        brand: "blue",
      },
      language: "en",
      notifications: true,
      emailUpdates: true,
    },
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/seleneyuuu",
      username: "seleneyuuu",
      icon: "github",
      display: true,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/seleneyuuu",
      username: "seleneyuuu",
      icon: "linkedin",
      display: true,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/seleneyuuu",
      username: "seleneyuuu",
      icon: "twitter",
      display: true,
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/seleneyuuu",
      username: "seleneyuuu",
      icon: "dribbble",
      display: true,
    },
    {
      platform: "Email",
      url: "mailto:selene.yu@example.com",
      icon: "email",
      display: true,
    },
  ],
  workExperience: [
    {
      id: "1",
      company: "FLY",
      position: "Senior Design Engineer",
      startDate: "2022-01-01",
      current: true,
      description:
        "Leading design system development and user experience optimization for a growing SaaS platform. Collaborated with cross-functional teams to deliver pixel-perfect, user-centered designs.",
      location: "Jakarta, Indonesia",
      skills: ["React", "TypeScript", "Figma", "Design Systems", "Next.js"],
    },
    {
      id: "2",
      company: "Creativ3",
      position: "Lead Designer",
      startDate: "2018-06-01",
      endDate: "2021-12-31",
      current: false,
      description:
        "Managed design projects from concept to delivery. Built and maintained design systems used across multiple products and platforms.",
      location: "Jakarta, Indonesia",
      skills: ["UI/UX Design", "Adobe Creative Suite", "Sketch", "Prototyping"],
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of Jakarta",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      startDate: "2014-09-01",
      endDate: "2018-06-01",
      current: false,
      description:
        "Focused on software development, user interface design, and human-computer interaction.",
      grade: "3.8 GPA",
    },
    {
      id: "2",
      institution: "Build the Future",
      degree: "Certificate",
      field: "Digital Marketing & Personal Branding",
      startDate: "2020-01-01",
      endDate: "2020-06-01",
      current: false,
      description:
        "Comprehensive program covering online marketing strategies, content creation, and personal brand development.",
    },
  ],
  skills: [
    {
      name: "React",
      level: "expert",
      category: "Frontend Development",
      years: 5,
    },
    {
      name: "TypeScript",
      level: "expert",
      category: "Frontend Development",
      years: 4,
    },
    {
      name: "Next.js",
      level: "expert",
      category: "Frontend Development",
      years: 3,
    },
    { name: "Figma", level: "expert", category: "Design", years: 6 },
    { name: "Design Systems", level: "expert", category: "Design", years: 4 },
    { name: "UI/UX Design", level: "expert", category: "Design", years: 6 },
    {
      name: "Node.js",
      level: "advanced",
      category: "Backend Development",
      years: 3,
    },
    {
      name: "PostgreSQL",
      level: "intermediate",
      category: "Database",
      years: 2,
    },
    { name: "AWS", level: "intermediate", category: "Cloud", years: 2 },
  ],
  projects: [
    {
      id: "1",
      title: "PageForge Platform",
      description:
        "A comprehensive JSON-driven website generation platform built with Next.js, TypeScript, and Supabase. Enables rapid creation of professional websites through configuration.",
      image: "/images/projects/pageforge.jpg",
      url: "https://pageforge.dev",
      githubUrl: "https://github.com/pageforge/platform",
      technologies: ["Next.js", "TypeScript", "Supabase", "Once UI", "PostgreSQL"],
      status: "completed",
      featured: true,
      startDate: "2024-01-01",
      endDate: "2024-12-01",
    },
    {
      id: "2",
      title: "Design System Pro",
      description:
        "A comprehensive design system for enterprise applications featuring 100+ components, design tokens, and documentation. Used by multiple teams across the organization.",
      image: "/images/projects/design-system.jpg",
      url: "https://designsystem.company.com",
      technologies: ["React", "Storybook", "Design Tokens", "Figma", "CSS-in-JS"],
      status: "completed",
      featured: true,
      startDate: "2023-03-01",
      endDate: "2023-11-01",
    },
    {
      id: "3",
      title: "Mobile Banking App",
      description:
        "Modern mobile banking application with intuitive user flows, biometric authentication, and real-time transaction processing.",
      image: "/images/projects/banking-app.jpg",
      technologies: ["React Native", "TypeScript", "Redux", "Biometrics API"],
      status: "completed",
      featured: false,
      startDate: "2023-01-01",
      endDate: "2023-06-01",
    },
  ],
  stats: {
    projectsCompleted: 25,
    yearsExperience: 6,
    clientsWorkedWith: 15,
    technologiesUsed: 20,
    lastUpdated: new Date().toISOString(),
  },
  isLoading: false,
  lastUpdated: new Date().toISOString(),
};

// ============================================================================
// PROVIDER COMPONENT
// ============================================================================

interface UserProviderProps {
  children: ReactNode;
  initialData?: Partial<UserInfo>;
}

export function UserProvider({ children, initialData }: UserProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    ...defaultUserInfo,
    ...initialData,
  });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Simulate loading user data (replace with actual API call)
    const loadUserData = async () => {
      try {
        setUserInfo((prev) => ({ ...prev, isLoading: true }));

        // Here you would typically fetch data from your API
        // const response = await fetch('/api/user/profile')
        // const userData = await response.json()

        // For now, we'll use the default data
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading

        setUserInfo((prev) => ({
          ...prev,
          isLoading: false,
          lastUpdated: new Date().toISOString(),
        }));
        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to load user data:", error);
        setUserInfo((prev) => ({ ...prev, isLoading: false }));
        setIsInitialized(true);
      }
    };

    loadUserData();
  }, []);

  const updateProfile = (profileUpdate: Partial<UserProfile>) => {
    setUserInfo((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profileUpdate },
      lastUpdated: new Date().toISOString(),
    }));
  };

  const updateSocialLinks = (links: SocialLink[]) => {
    setUserInfo((prev) => ({
      ...prev,
      socialLinks: links,
      lastUpdated: new Date().toISOString(),
    }));
  };

  const addWorkExperience = (experience: Omit<UserWorkExperience, "id">) => {
    const newExperience: UserWorkExperience = {
      ...experience,
      id: Date.now().toString(),
    };
    setUserInfo((prev) => ({
      ...prev,
      workExperience: [newExperience, ...prev.workExperience],
      lastUpdated: new Date().toISOString(),
    }));
  };

  const updateWorkExperience = (id: string, experienceUpdate: Partial<UserWorkExperience>) => {
    setUserInfo((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((exp) =>
        exp.id === id ? { ...exp, ...experienceUpdate } : exp,
      ),
      lastUpdated: new Date().toISOString(),
    }));
  };

  const removeWorkExperience = (id: string) => {
    setUserInfo((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((exp) => exp.id !== id),
      lastUpdated: new Date().toISOString(),
    }));
  };

  const addEducation = (education: Omit<UserEducation, "id">) => {
    const newEducation: UserEducation = {
      ...education,
      id: Date.now().toString(),
    };
    setUserInfo((prev) => ({
      ...prev,
      education: [newEducation, ...prev.education],
      lastUpdated: new Date().toISOString(),
    }));
  };

  const updateEducation = (id: string, educationUpdate: Partial<UserEducation>) => {
    setUserInfo((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, ...educationUpdate } : edu,
      ),
      lastUpdated: new Date().toISOString(),
    }));
  };

  const removeEducation = (id: string) => {
    setUserInfo((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
      lastUpdated: new Date().toISOString(),
    }));
  };

  const updateSkills = (skills: UserSkill[]) => {
    setUserInfo((prev) => ({
      ...prev,
      skills,
      lastUpdated: new Date().toISOString(),
    }));
  };

  const addProject = (project: Omit<UserProject, "id">) => {
    const newProject: UserProject = {
      ...project,
      id: Date.now().toString(),
    };
    setUserInfo((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects],
      stats: {
        ...prev.stats,
        projectsCompleted: prev.stats.projectsCompleted + (project.status === "completed" ? 1 : 0),
      },
      lastUpdated: new Date().toISOString(),
    }));
  };

  const updateProject = (id: string, projectUpdate: Partial<UserProject>) => {
    setUserInfo((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, ...projectUpdate } : project,
      ),
      lastUpdated: new Date().toISOString(),
    }));
  };

  const removeProject = (id: string) => {
    setUserInfo((prev) => {
      const projectToRemove = prev.projects.find((p) => p.id === id);
      const wasCompleted = projectToRemove?.status === "completed";

      return {
        ...prev,
        projects: prev.projects.filter((project) => project.id !== id),
        stats: {
          ...prev.stats,
          projectsCompleted: prev.stats.projectsCompleted - (wasCompleted ? 1 : 0),
        },
        lastUpdated: new Date().toISOString(),
      };
    });
  };

  const refreshUserData = async () => {
    setUserInfo((prev) => ({ ...prev, isLoading: true }));

    try {
      // Here you would typically refetch data from your API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setUserInfo((prev) => ({
        ...prev,
        isLoading: false,
        lastUpdated: new Date().toISOString(),
      }));
    } catch (error) {
      console.error("Failed to refresh user data:", error);
      setUserInfo((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const contextValue: UserContextType = {
    userInfo,
    updateProfile,
    updateSocialLinks,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills,
    addProject,
    updateProject,
    removeProject,
    refreshUserData,
    isInitialized,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

// ============================================================================
// CUSTOM HOOK
// ============================================================================

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// ============================================================================
// UTILITY HOOKS
// ============================================================================

export function useUserProfile() {
  const { userInfo } = useUser();
  return userInfo.profile;
}

export function useUserStats() {
  const { userInfo } = useUser();
  return userInfo.stats;
}

export function useUserProjects(filterFeatured = false) {
  const { userInfo } = useUser();
  return filterFeatured
    ? userInfo.projects.filter((project) => project.featured)
    : userInfo.projects;
}

export function useUserSkills(category?: string) {
  const { userInfo } = useUser();
  return category
    ? userInfo.skills.filter((skill) => skill.category === category)
    : userInfo.skills;
}

export function useUserSocialLinks(onlyVisible = true) {
  const { userInfo } = useUser();
  return onlyVisible ? userInfo.socialLinks.filter((link) => link.display) : userInfo.socialLinks;
}

export function useUserExperience() {
  const { userInfo } = useUser();
  return userInfo.workExperience.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );
}

export function useUserEducation() {
  const { userInfo } = useUser();
  return userInfo.education.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );
}
