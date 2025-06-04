'use client'

import React, { useState } from 'react'
import {
  useSectionGenerator,
  useSectionDetection
} from './hooks/useSectionGenerator'
import {
  Flex,
  Button,
  Text,
  Heading,
  Card
} from '@pageforge/once-ui/components'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

interface AISectionChatDemoProps {
  onSectionGenerated?: (sectionType: string, sectionName: string) => void
}

export const AISectionChatDemo = ({
  onSectionGenerated
}: AISectionChatDemoProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        '👋 Hi! I can help you create custom sections for your webpage. Try asking for things like:\n\n• "I need a team section for my company"\n• "Add a contact form to my page"\n• "Create a gallery for my portfolio"\n• "I want customer reviews on my site"',
      timestamp: Date.now()
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')

  const { generateSection, isGenerating, lastGenerated, error } =
    useSectionGenerator()
  const { detectSectionRequest } = useSectionDetection()

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: currentMessage,
      timestamp: Date.now()
    }
    setMessages(prev => [...prev, userMessage])

    // Check if it's a section request
    const isSectionRequest = detectSectionRequest(currentMessage)

    if (isSectionRequest) {
      // Generate section
      await generateSection(currentMessage)

      // Add response about section generation
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: isGenerating
          ? '🔄 Generating your section...'
          : lastGenerated
            ? lastGenerated.message
            : error || 'Failed to generate section',
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, responseMessage])

      // Notify parent component
      if (lastGenerated && onSectionGenerated) {
        onSectionGenerated(
          lastGenerated.sectionType!,
          lastGenerated.sectionName!
        )
      }
    } else {
      // Regular chat response
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          'I understand you want to chat, but I\'m specifically designed to help you create webpage sections. Try asking me to create a specific section like "Add a team section" or "I need a contact form".',
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, responseMessage])
    }

    setCurrentMessage('')
  }

  const exampleRequests = [
    'I need a team section with photos and bios',
    'Add a contact form to my page',
    'Create an image gallery for my portfolio',
    'I want customer testimonials with ratings',
    'Add a pricing table for my services'
  ]

  return (
    <Card padding="l" fillWidth>
      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="heading-strong-m">AI Section Generator Chat</Heading>

        {/* Chat Messages */}
        <div
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '1rem'
          }}
        >
          <Flex direction="column" gap="m">
            {messages.map(message => (
              <div
                key={message.id}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  backgroundColor:
                    message.role === 'user' ? '#e3f2fd' : '#f5f5f5',
                  alignSelf:
                    message.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}
              >
                <Text variant="body-default-s" style={{ fontWeight: 'bold' }}>
                  {message.role === 'user' ? 'You' : 'AI Assistant'}
                </Text>
                <Text
                  variant="body-default-m"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {message.content}
                </Text>
              </div>
            ))}
          </Flex>
        </div>

        {/* Input Area */}
        <Flex gap="s" align="end">
          <textarea
            value={currentMessage}
            onChange={e => setCurrentMessage(e.target.value)}
            placeholder="Ask me to create a section for your webpage..."
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              resize: 'none',
              minHeight: '60px'
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!currentMessage.trim() || isGenerating}
            variant="primary"
          >
            {isGenerating ? '⏳' : 'Send'}
          </Button>
        </Flex>

        {/* Quick Examples */}
        <div>
          <Text
            variant="body-default-s"
            style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
          >
            💡 Try these examples:
          </Text>
          <Flex direction="column" gap="xs">
            {exampleRequests.map((example, index) => (
              <Button
                key={index}
                variant="tertiary"
                size="s"
                onClick={() => setCurrentMessage(example)}
                style={{ justifyContent: 'flex-start', textAlign: 'left' }}
              >
                &quot;{example}&quot;
              </Button>
            ))}
          </Flex>
        </div>

        {/* Status */}
        {lastGenerated && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#e8f5e8',
              borderRadius: '6px',
              border: '1px solid #4caf50'
            }}
          >
            <Text
              variant="body-default-s"
              style={{ fontWeight: 'bold', color: '#2e7d32' }}
            >
              ✅ Section Generated Successfully!
            </Text>
            <Text variant="body-default-xs">
              Type: {lastGenerated.sectionType} | Name:{' '}
              {lastGenerated.sectionName}
            </Text>
          </div>
        )}

        {error && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#ffebee',
              borderRadius: '6px',
              border: '1px solid #f44336'
            }}
          >
            <Text
              variant="body-default-s"
              style={{ fontWeight: 'bold', color: '#c62828' }}
            >
              ❌ Error: {error}
            </Text>
          </div>
        )}
      </Flex>
    </Card>
  )
}
