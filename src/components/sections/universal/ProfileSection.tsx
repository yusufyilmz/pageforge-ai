'use client'

import React from 'react'
import {
  Column,
  Flex,
  Heading,
  Text,
  SmartImage,
  Button,
  Icon
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  ProfileSectionContent
} from '@pageforge/types/page/pageTypes'

interface ProfileSectionProps {
  block: Extract<ContentBlock, { type: 'profile' }>
  index: number
}

export const ProfileSection = ({ block, index }: ProfileSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    name,
    role,
    bio,
    avatar,
    location,
    email,
    phone,
    social = [],
    skills = [],
    achievements = []
  } = content

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="l"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Profile Header */}
      <Flex fillWidth gap="l" vertical="start" wrap>
        {/* Avatar */}
        {avatar && (
          <Column horizontal="center">
            <SmartImage
              src={avatar.src}
              alt={avatar.alt}
              width={120}
              height={120}
              style={{ borderRadius: '50%' }}
            />
          </Column>
        )}

        {/* Basic Info */}
        <Column flex={1} gap="m">
          <Column gap="s">
            <Heading as="h1" variant="display-strong-l">
              {name}
            </Heading>
            <Text variant="heading-default-m" onBackground="accent-weak">
              {role}
            </Text>
            {location && (
              <Flex gap="xs" vertical="center">
                <Icon name="mapPin" size="s" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {location}
                </Text>
              </Flex>
            )}
          </Column>

          {/* Contact Info */}
          <Flex gap="m" wrap>
            {email && (
              <Button
                href={`mailto:${email}`}
                variant="secondary"
                size="s"
                prefixIcon="email"
              >
                {email}
              </Button>
            )}
            {phone && (
              <Button
                href={`tel:${phone}`}
                variant="secondary"
                size="s"
                prefixIcon="phone"
              >
                {phone}
              </Button>
            )}
          </Flex>

          {/* Social Links */}
          {social.length > 0 && (
            <Flex gap="s" wrap>
              {social.map((link, linkIndex) => (
                <Button
                  key={linkIndex}
                  href={link.url}
                  variant="tertiary"
                  size="s"
                  prefixIcon={link.icon}
                >
                  {link.platform}
                </Button>
              ))}
            </Flex>
          )}
        </Column>
      </Flex>

      {/* Bio */}
      <Column fillWidth gap="m">
        <Text variant="body-default-l">{bio}</Text>
      </Column>

      {/* Skills */}
      {skills.length > 0 && (
        <Column fillWidth gap="m">
          <Heading as="h3" variant="heading-strong-m">
            Skills
          </Heading>
          <Flex gap="s" wrap>
            {skills.map((skill, skillIndex) => (
              <Column
                key={skillIndex}
                background="neutral-alpha-weak"
                padding="xs"
                radius="s"
              >
                <Text variant="label-default-s">{skill}</Text>
              </Column>
            ))}
          </Flex>
        </Column>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <Column fillWidth gap="m">
          <Heading as="h3" variant="heading-strong-m">
            Key Achievements
          </Heading>
          <Column gap="s">
            {achievements.map((achievement, achievementIndex) => (
              <Flex key={achievementIndex} gap="s" vertical="start">
                <Icon name="check" size="s" onBackground="accent-strong" />
                <Text variant="body-default-m">{achievement}</Text>
              </Flex>
            ))}
          </Column>
        </Column>
      )}
    </Column>
  )
}
