'use client'

import React from 'react'
import {
  Column,
  Row,
  Text,
  Heading,
  Avatar,
  Button
} from '@pageforge/once-ui/components'
import { useUserProfile, useUserSocialLinks } from '../../contexts/UserContext'

interface UserHeroSectionProps {
  showSocialLinks?: boolean
  showContactButton?: boolean
  className?: string
}

export function UserHeroSection({
  showSocialLinks = true,
  showContactButton = true,
  className
}: UserHeroSectionProps) {
  const profile = useUserProfile()
  const socialLinks = useUserSocialLinks(true)

  return (
    <Column gap="xl" padding="xl" align="center" className={className}>
      {/* Avatar */}
      <Avatar src={profile.avatar} size="xl" />

      {/* Title and Bio */}
      <Column gap="m" align="center" maxWidth="m">
        <Heading variant="heading-strong-xl" align="center">
          {profile.name} {profile.lastName}
        </Heading>
        <Text
          variant="heading-default-l"
          align="center"
          onBackground="neutral-weak"
        >
          {profile.role}
        </Text>
        <Text
          variant="body-default-l"
          align="center"
          onBackground="neutral-weak"
        >
          Based in {profile.location}
        </Text>
        {profile.bio && (
          <Text
            variant="body-default-m"
            align="center"
            onBackground="neutral-weak"
          >
            {profile.bio}
          </Text>
        )}
      </Column>

      {/* Action Buttons */}
      <Row gap="m">
        {showContactButton && profile.email && (
          <Button
            href={`mailto:${profile.email}`}
            variant="primary"
            size="l"
            prefixIcon="email"
          >
            Get in Touch
          </Button>
        )}
        {profile.website && (
          <Button
            href={profile.website}
            variant="secondary"
            size="l"
            suffixIcon="external"
          >
            Visit Website
          </Button>
        )}
      </Row>

      {/* Social Links */}
      {showSocialLinks && socialLinks.length > 0 && (
        <Row gap="s" wrap horizontal="center">
          {socialLinks.slice(0, 5).map(link => (
            <Button
              key={link.platform}
              href={link.url}
              variant="tertiary"
              size="m"
              prefixIcon={link.icon}
            >
              {link.platform}
            </Button>
          ))}
        </Row>
      )}

      {/* Quick Stats */}
      <Row gap="xl">
        <Column gap="xs" align="center">
          <Text variant="heading-strong-l">{profile.languages.length}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Languages
          </Text>
        </Column>
        <Column gap="xs" align="center">
          <Text variant="heading-strong-l">
            {new Date().getFullYear() - 2018}+
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Years Experience
          </Text>
        </Column>
        <Column gap="xs" align="center">
          <Text variant="heading-strong-l">
            {profile.location.split(',').length}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Locations
          </Text>
        </Column>
      </Row>
    </Column>
  )
}
