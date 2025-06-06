'use client'

import React, { useState } from 'react'

import {
  Column,
  Flex,
  Heading,
  Text,
  Input,
  Button
} from '@pageforge/once-ui/components'
import type { ContentBlock } from '@pageforge/types/page/pageTypes'

interface NewsletterSectionProps {
  block: Extract<ContentBlock, { type: 'newsletter' }>
  index: number
}

export const NewsletterSection = ({ block, index }: NewsletterSectionProps) => {
  const content = block.content
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  if (block.display === false) {
    return null
  }

  const {
    title,
    description,
    placeholder = 'Enter your email',
    buttonText = 'Subscribe',
    successMessage = 'Thank you for subscribing!',
    errorMessage = 'Something went wrong. Please try again.'
  } = content

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <Column
      key={index}
      fillWidth
      maxWidth='m'
      horizontal='center'
      gap='xl'
      padding='xl'
      className={block.className}
    >
      {/* Header */}
      <Column horizontal='center' align='center' gap='m' maxWidth='s'>
        {title && (
          <Heading as='h2' variant='display-strong-l' align='center'>
            {title}
          </Heading>
        )}
        {description && (
          <Text
            variant='body-default-l'
            onBackground='neutral-weak'
            align='center'
          >
            {description}
          </Text>
        )}
      </Column>

      {/* Newsletter Form */}
      <Flex
        as='form'
        onSubmit={handleSubmit}
        fillWidth
        maxWidth='s'
        gap='m'
        direction='column'
      >
        <Input
          id='newsletter-email'
          type='email'
          placeholder={placeholder}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
        />

        <Button
          type='submit'
          variant='primary'
          size='l'
          fillWidth
          disabled={status === 'loading' || !email}
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </Button>

        {/* Status Messages */}
        {status === 'success' && (
          <Text
            variant='body-default-s'
            onBackground='brand-strong'
            align='center'
          >
            {successMessage}
          </Text>
        )}

        {status === 'error' && (
          <Text
            variant='body-default-s'
            onBackground='danger-strong'
            align='center'
          >
            {errorMessage}
          </Text>
        )}
      </Flex>
    </Column>
  )
}
