import { useMemo } from 'react'

import {
  developerTemplate,
  designerTemplate,
  freelancerTemplate,
  profileTemplate,
  type PersonData,
  type ProjectData
} from '../services/page-builder'
import type { PageConfig } from '../types/page/pageTypes'

// ============================================================================
// SIMPLIFIED CONTEXTUAL TEMPLATES 🎯
// ============================================================================

/**
 * Hook that provides direct template functions with user context data
 * Much simpler than the previous builder pattern
 */
export const useContextualTemplates = (
  userProfile?: any,
  userProjects: any[] = [],
  userExperiences: any[] = [],
  userSkills: any[] = [],
  socialLinks: any[] = [],
  currentTheme?: string
) => {
  return useMemo(() => {
    // Transform user context data to template format
    const getPersonData = (): Partial<PersonData> | undefined => {
      if (!userProfile) {
        return undefined
      }

      return {
        name: userProfile.name || userProfile.firstName,
        lastName: userProfile.lastName || userProfile.surname,
        role: userProfile.role || userProfile.title || userProfile.position,
        email: userProfile.email,
        avatar: userProfile.avatar || userProfile.image || userProfile.photo,
        location: userProfile.location || userProfile.city,
        bio: userProfile.bio || userProfile.description || userProfile.summary,
        website: userProfile.website || userProfile.url,
        phone: userProfile.phone || userProfile.phoneNumber
      }
    }

    const getProjectData = (): ProjectData[] => {
      return userProjects.map(project => ({
        title: project.title || project.name || '',
        description: project.description || project.summary || '',
        image: project.image || project.thumbnail || project.cover || '',
        url: project.url || project.liveUrl || project.demo || '',
        githubUrl:
          project.githubUrl || project.github || project.repository || '',
        technologies:
          project.technologies || project.tech || project.stack || [],
        featured: project.featured || project.highlight || false
      }))
    }

    const personData = getPersonData()
    const projectData = getProjectData()

    return {
      // Main template functions
      developer: () => developerTemplate(personData, projectData),
      designer: () => designerTemplate(personData, projectData),
      freelancer: () => freelancerTemplate(personData),
      profile: () => profileTemplate(),

      // Direct access to transformed data
      personData,
      projectData,

      // Convenience getters
      hasUserData: !!userProfile,
      hasProjects: projectData.length > 0
    }
  }, [
    userProfile,
    userProjects,
    userExperiences,
    userSkills,
    socialLinks,
    currentTheme
  ])
}

/**
 * Hook for quick developer template with user context
 */
export const useDeveloperTemplate = (
  userProfile?: any,
  userProjects: any[] = []
): PageConfig => {
  const { developer } = useContextualTemplates(userProfile, userProjects)
  return useMemo(() => developer(), [developer])
}

/**
 * Hook for quick designer template with user context
 */
export const useDesignerTemplate = (
  userProfile?: any,
  userProjects: any[] = []
): PageConfig => {
  const { designer } = useContextualTemplates(userProfile, userProjects)
  return useMemo(() => designer(), [designer])
}

/**
 * Hook for quick freelancer template with user context
 */
export const useFreelancerTemplate = (userProfile?: any): PageConfig => {
  const { freelancer } = useContextualTemplates(userProfile)
  return useMemo(() => freelancer(), [freelancer])
}

/**
 * Hook for profile template (works with UserContext)
 */
export const useProfileTemplate = (): PageConfig => {
  return useMemo(() => profileTemplate(), [])
}

// ============================================================================
// EXAMPLE USAGE IN COMPONENTS
// ============================================================================

/*
// Example component using the hooks:

import { useUser } from '@/contexts/UserContext'
import { useTheme } from '@/contexts/ThemeContext'
import { useContextualTemplates } from '@/lib/hooks/useContextualTemplates'
import { UniversalPage } from '@/components/universal-page/UniversalPage'

export default function MyPage() {
  // Get data from contexts
  const { userInfo } = useUser()
  const userProjects = useUserProjects()
  const { currentTheme } = useTheme()

  // Use contextual templates
  const templates = useContextualTemplates(userInfo, userProjects, currentTheme)

  // Generate page config (respects user data + theme automatically!)
  const config = templates.developer()

  return <UniversalPage config={config} />
}

// Or even simpler:
export default function QuickAboutPage() {
  const { userInfo } = useUser()
  const userProjects = useUserProjects()
  const { currentTheme } = useTheme()

  // One-liner with context!
  const config = useDeveloperTemplate(userInfo, userProjects, currentTheme)

  return <UniversalPage config={config} />
}
*/
