'use client'

import React from 'react'
import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Select
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  ContactFormSectionContent
} from '@pageforge/types/page/pageTypes'

interface ContactFormSectionProps {
  block: Extract<ContentBlock, { type: 'contact-form' }>
  index: number
}

export const ContactFormSection = ({
  block,
  index
}: ContactFormSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title = 'Contact Us',
    description,
    fields,
    submitButton = { label: 'Send Message', variant: 'primary' },
    endpoint,
    successMessage = 'Thank you for your message!',
    errorMessage = 'Something went wrong. Please try again.'
  } = content

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted to:', endpoint)
  }

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="m"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Header */}
      <Column horizontal="center" align="center" gap="m">
        <Heading as="h2" variant="display-strong-l">
          {title}
        </Heading>
        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {description}
          </Text>
        )}
      </Column>

      {/* Form */}
      <Flex
        direction="column"
        fillWidth
        gap="l"
        as="form"
        onSubmit={handleSubmit}
      >
        {fields.map((field, fieldIndex) => (
          <Column key={fieldIndex} gap="xs">
            <Text variant="label-default-s">{field.label}</Text>
            {field.type === 'textarea' ? (
              <Textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
              />
            ) : field.type === 'select' ? (
              <Select
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder || 'Select an option'}
                options={field.options || []}
              >
                {field.options?.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </Column>
        ))}

        <Button type="submit" variant={submitButton.variant} size="l" fillWidth>
          {submitButton.label}
        </Button>
      </Flex>
    </Column>
  )
}
