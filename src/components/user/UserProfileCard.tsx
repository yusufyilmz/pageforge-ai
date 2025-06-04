'use client'

import React from 'react'
import {
  Column,
  Row,
  Text,
  Heading,
  Avatar,
  Badge,
  Flex
} from '@pageforge/once-ui/components'
import { useUserProfile, useUserStats } from '../../contexts/UserContext'

interface UserProfileCardProps {
  variant?: 'compact' | 'full'
  showStats?: boolean
  showContact?: boolean
  className?: string
}

export function UserProfileCard({
  variant = 'full',
  showStats = true,
  showContact = true,
  className
}: UserProfileCardProps) {
  const profile = useUserProfile()
  const stats = useUserStats()

  if (variant === 'compact') {
    return (
      <Row gap="m" vertical="center" className={className}>
        <Avatar src={profile.avatar} size="m" />
        <Column gap="xs">
          <Text variant="heading-strong-xs">
            {profile.name} {profile.lastName}
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {profile.role}
          </Text>
        </Column>
      </Row>
    )
  }

  return (
    <Column
      gap="l"
      padding="l"
      border="neutral-alpha-weak"
      radius="m"
      className={className}
    >
      {/* Header */}
      <Row gap="m" vertical="center">
        <Avatar src={profile.avatar} size="l" />
        <Column gap="xs">
          <Heading variant="heading-strong-m">
            {profile.name} {profile.lastName}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {profile.role}
          </Text>
          <Row gap="xs" vertical="center">
            <Text variant="label-default-xs" onBackground="neutral-weak">
              {profile.location}
            </Text>
            {profile.timezone && (
              <>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  •
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {profile.timezone}
                </Text>
              </>
            )}
          </Row>
        </Column>
      </Row>

      {/* Bio */}
      {profile.bio && (
        <Text variant="body-default-s" onBackground="neutral-weak">
          {profile.bio}
        </Text>
      )}

      {/* Languages */}
      {profile.languages && profile.languages.length > 0 && (
        <Row gap="xs" wrap>
          <Text variant="label-default-xs" onBackground="neutral-weak">
            Languages:
          </Text>
          {profile.languages.map((language, index) => (
            <Badge key={language}>{language}</Badge>
          ))}
        </Row>
      )}

      {/* Contact Info */}
      {showContact && (
        <Column gap="xs">
          {profile.email && (
            <Row gap="xs" vertical="center">
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Email:
              </Text>
              <Text variant="body-default-xs">{profile.email}</Text>
            </Row>
          )}
          {profile.phone && (
            <Row gap="xs" vertical="center">
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Phone:
              </Text>
              <Text variant="body-default-xs">{profile.phone}</Text>
            </Row>
          )}
          {profile.website && (
            <Row gap="xs" vertical="center">
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Website:
              </Text>
              <Text variant="body-default-xs">{profile.website}</Text>
            </Row>
          )}
        </Column>
      )}

      {/* Stats */}
      {showStats && (
        <Row gap="l">
          <Column gap="xs" align="center">
            <Text variant="heading-strong-s">{stats.projectsCompleted}</Text>
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Projects
            </Text>
          </Column>
          <Column gap="xs" align="center">
            <Text variant="heading-strong-s">{stats.yearsExperience}</Text>
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Years Exp.
            </Text>
          </Column>
          <Column gap="xs" align="center">
            <Text variant="heading-strong-s">{stats.clientsWorkedWith}</Text>
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Clients
            </Text>
          </Column>
          <Column gap="xs" align="center">
            <Text variant="heading-strong-s">{stats.technologiesUsed}</Text>
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Technologies
            </Text>
          </Column>
        </Row>
      )}
    </Column>
  )
}
