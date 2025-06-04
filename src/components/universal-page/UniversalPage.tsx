'use client'

// import { renderSectionComponent } from "@pageforge/components/sections/UniversalSections";
import { Column, Flex, Text } from '@pageforge/once-ui/components'
import {
  PageConfig,
  ContentBlock,
  ContentSection
} from '@pageforge/types/page/pageTypes'
import { UniversalSections } from '../universal-section/UniversalSections'
import { JSX } from 'react'

interface UniversalPageProps {
  config: PageConfig<any>
}

export function UniversalPage({ config }: UniversalPageProps) {
  const { content, layout } = config
  const data = (config as any).data // Type assertion for data property

  // Render a single content block
  const renderBlock = (block: ContentBlock, index: number) => {
    if (block.display === false) return null
    return renderSectionComponent(block, index, data)
  }

  // Render a content section
  const renderSection = (section: ContentSection, index: number) => {
    if (section.display === false) return null

    // Generate section ID from title
    const sectionId = section.title
      ? section.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      : section.id

    console.log({ section })
    return (
      <Column
        key={section.id}
        id={sectionId}
        fillWidth
        gap="l"
        as="section"
        horizontal="center"
      >
        {/* {section?.title && (
          <Heading as="h2" variant="display-strong-s">
            {section.title}
          </Heading>
        )} */}
        {section?.description && (
          <Text variant="body-default-m" onBackground="neutral-weak">
            {section.description}
          </Text>
        )}
        {section?.blocks.map((block, blockIndex) =>
          renderBlock(block, blockIndex)
        )}
      </Column>
    )
  }

  // Generate structured data
  const generateStructuredData = () => (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(config.structuredData)
      }}
    />
  )

  // Handle table of contents
  const tableOfContentsBlock = content.sidebar?.blocks.find(
    block => block.type === 'table-of-contents'
  )

  return (
    <Column maxWidth={layout.maxWidth as any} horizontal="center">
      {generateStructuredData()}

      {/* Render sidebar if present */}
      {content.sidebar && tableOfContentsBlock && (
        <Column>{renderBlock(tableOfContentsBlock, 0)}</Column>
      )}

      {/* Render main content sections */}
      <Flex
        horizontal="center"
        direction="column"
        width={layout.maxWidth as any}
      >
        {content?.main.map((section, index) => renderSection(section, index))}
      </Flex>

      {/* Render footer if present */}
      {content?.footer && renderSection(content.footer, 0)}
    </Column>
  )
}

// Update the renderSectionComponent function to use AnyContentBlock
const renderSectionComponent = (
  block: ContentBlock,
  index: number,
  data?: any
): JSX.Element => {
  return <UniversalSections block={block} index={index} data={data} />
}
