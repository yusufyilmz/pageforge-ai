'use client'

import React from 'react'
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  AboutHeroSectionContent
} from '@pageforge/types/page/pageTypes'
import styles from '../../universal-section/UniversalSections.module.css'
import { useUserExperience, useUserProfile } from '../../../contexts'

interface AboutHeroSectionProps {
  block: ContentBlock & {
    content: AboutHeroSectionContent
  }
  index: number
}

export const AboutHeroSection = ({ block, index }: AboutHeroSectionProps) => {
  const content = block.content

  const userInfo = useUserProfile()

  if (block.display === false) return null

  // Mock data - in production this would come from props or context
  const person = {
    firstName: userInfo.name,
    lastName: userInfo.lastName,
    get name() {
      return `${this.firstName} ${this.lastName}`
    },
    role: userInfo.role,
    avatar: userInfo.avatar,
    email: userInfo.email,
    location: userInfo.location,
    languages: userInfo.languages
  }

  const social = [
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/once-ui-system/nextjs-starter'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/company/once-ui/'
    },
    {
      name: 'X',
      icon: 'x',
      link: ''
    },
    {
      name: 'Email',
      icon: 'email',
      link: `mailto:${person.email}`
    }
  ]

  return (
    <Flex key={index} fillWidth mobileDirection="column" horizontal="center">
      {content.avatar?.display && (
        <Column
          className={styles.avatar}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={content.avatar.src || person.avatar} size="xl" />
          <Flex gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            {person.location}
          </Flex>
          {person.languages && person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language: string, langIndex: number) => (
                <Tag key={langIndex} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
        </Column>
      )}
      <Column className={styles.blockAlign} flex={9} maxWidth={40}>
        <Column
          id={content?.intro?.title || 'intro'}
          fillWidth
          minHeight="160"
          vertical="center"
          marginBottom="32"
        >
          {content?.calendar?.display && (
            <Flex
              fitWidth
              border="brand-alpha-medium"
              className={styles.blockAlign}
              style={{
                backdropFilter: 'blur(var(--static-space-1))'
              }}
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
            >
              <Icon
                paddingLeft="12"
                name="calendar"
                onBackground="brand-weak"
              />
              <Flex paddingX="8">
                {content.calendar.text || 'Schedule a call'}
              </Flex>
              <IconButton
                href={content.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Flex>
          )}
          <Heading className={styles.textAlign} variant="display-strong-xl">
            {person.name}
          </Heading>
          <Text
            className={styles.textAlign}
            variant="display-default-xs"
            onBackground="neutral-weak"
          >
            {person.role}
          </Text>
          {social && social.length > 0 && (
            <Flex
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
            >
              {social.map(
                (item: any) =>
                  item.link && (
                    <React.Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="secondary"
                      />
                      <IconButton
                        className="s-flex-show"
                        size="l"
                        key={`${item.name}-icon`}
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </React.Fragment>
                  )
              )}
            </Flex>
          )}
        </Column>
      </Column>
    </Flex>
  )
}
