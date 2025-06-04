'use client'

import React from 'react'
import {
  Column,
  Row,
  Text,
  Heading,
  Button
} from '@pageforge/once-ui/components'
import { UserProfileCard } from '../../components/user/UserProfileCard'
import { UserProjectsList } from '../../components/user/UserProjectsList'
import {
  useUser,
  useUserSocialLinks,
  useUserSkills
} from '../../contexts/UserContext'

export default function ProfilePage() {
  const { userInfo, refreshUserData } = useUser()
  const socialLinks = useUserSocialLinks(true) // only visible links
  const skills = useUserSkills()

  return (
    <Column fill padding="l" gap="xl" maxWidth="l" horizontal="center">
      {/* Page Header */}
      <Row gap="m" vertical="center" horizontal="space-between" fillWidth>
        <Column gap="xs">
          <Heading variant="heading-strong-l">User Profile</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Comprehensive view of user information from context
          </Text>
        </Column>
        <Button
          variant="secondary"
          size="m"
          onClick={refreshUserData}
          loading={userInfo.isLoading}
        >
          Refresh Data
        </Button>
      </Row>

      {/* Main Profile Card */}
      <UserProfileCard variant="full" showStats={true} showContact={true} />

      {/* Quick Stats */}
      <Row gap="l" fillWidth>
        <Column
          gap="xs"
          align="center"
          padding="m"
          border="neutral-alpha-weak"
          radius="m"
          fillWidth
        >
          <Text variant="heading-strong-m">
            {userInfo.workExperience.length}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Work Experience
          </Text>
        </Column>
        <Column
          gap="xs"
          align="center"
          padding="m"
          border="neutral-alpha-weak"
          radius="m"
          fillWidth
        >
          <Text variant="heading-strong-m">{userInfo.education.length}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Education
          </Text>
        </Column>
        <Column
          gap="xs"
          align="center"
          padding="m"
          border="neutral-alpha-weak"
          radius="m"
          fillWidth
        >
          <Text variant="heading-strong-m">{skills.length}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Skills
          </Text>
        </Column>
        <Column
          gap="xs"
          align="center"
          padding="m"
          border="neutral-alpha-weak"
          radius="m"
          fillWidth
        >
          <Text variant="heading-strong-m">{socialLinks.length}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Social Links
          </Text>
        </Column>
      </Row>

      {/* Featured Projects */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Featured Projects</Heading>
        <UserProjectsList
          showFeaturedOnly={true}
          maxItems={3}
          showStatus={true}
        />
      </Column>

      {/* Skills Overview */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Skills by Category</Heading>
        <Column gap="l">
          {Array.from(new Set(skills.map(skill => skill.category))).map(
            category => (
              <Column key={category} gap="s">
                <Text variant="heading-strong-s">{category}</Text>
                <Row gap="s" wrap>
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <Column
                        key={skill.name}
                        gap="xs"
                        padding="s"
                        border="neutral-alpha-weak"
                        radius="s"
                      >
                        <Text variant="body-default-s">{skill.name}</Text>
                        <Text
                          variant="label-default-xs"
                          onBackground="neutral-weak"
                        >
                          {skill.level} • {skill.years}y
                        </Text>
                      </Column>
                    ))}
                </Row>
              </Column>
            )
          )}
        </Column>
      </Column>

      {/* Work Experience Timeline */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Work Experience</Heading>
        <Column gap="l">
          {userInfo.workExperience.map(exp => (
            <Column
              key={exp.id}
              gap="s"
              padding="l"
              border="neutral-alpha-weak"
              radius="m"
            >
              <Row gap="m" vertical="center" horizontal="space-between">
                <Column gap="xs">
                  <Text variant="heading-strong-s">{exp.position}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {exp.company} • {exp.location}
                  </Text>
                </Column>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </Text>
              </Row>
              {exp.description && (
                <Text variant="body-default-s">{exp.description}</Text>
              )}
              {exp.skills && exp.skills.length > 0 && (
                <Row gap="xs" wrap>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    Skills:
                  </Text>
                  {exp.skills.map(skill => (
                    <Text key={skill} variant="label-default-xs">
                      {skill}
                    </Text>
                  ))}
                </Row>
              )}
            </Column>
          ))}
        </Column>
      </Column>

      {/* Social Links */}
      <Column gap="m" fillWidth>
        <Heading variant="heading-strong-m">Social Links</Heading>
        <Row gap="m" wrap>
          {socialLinks.map(link => (
            <Button
              key={link.platform}
              href={link.url}
              variant="secondary"
              prefixIcon={link.icon}
              suffixIcon="external"
            >
              {link.platform}
            </Button>
          ))}
        </Row>
      </Column>

      {/* Debug Info */}
      <Column gap="s" fillWidth>
        <Text variant="label-default-xs" onBackground="neutral-weak">
          Last updated: {new Date(userInfo.lastUpdated).toLocaleString()}
        </Text>
        <Text variant="label-default-xs" onBackground="neutral-weak">
          Loading state: {userInfo.isLoading ? 'Loading...' : 'Ready'}
        </Text>
      </Column>
    </Column>
  )
}
