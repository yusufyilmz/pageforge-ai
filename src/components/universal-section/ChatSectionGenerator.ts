import { autoSectionRegistry } from './AutoSectionRegistry'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

interface SectionGenerationRequest {
  userMessage: string
  context?: string[]
  pageType?: string
}

interface SectionGenerationResult {
  success: boolean
  sectionType?: string
  sectionName?: string
  generatedContent?: any
  message: string
}

class ChatSectionGenerator {
  // Analyze user message to detect section requests
  detectSectionRequest(message: string): boolean {
    const sectionKeywords = [
      'section',
      'add',
      'create',
      'need',
      'want',
      'show',
      'display',
      'include',
      'page',
      'component'
    ]

    const contentKeywords = [
      'team',
      'members',
      'staff',
      'about',
      'gallery',
      'images',
      'contact',
      'form',
      'reviews',
      'testimonials',
      'services',
      'products',
      'pricing',
      'features',
      'hero',
      'banner',
      'portfolio',
      'projects',
      'blog',
      'news',
      'events',
      'careers',
      'jobs',
      'faq',
      'help',
      'support'
    ]

    const hasSection = sectionKeywords.some(keyword =>
      message.toLowerCase().includes(keyword)
    )

    const hasContent = contentKeywords.some(keyword =>
      message.toLowerCase().includes(keyword)
    )

    return hasSection && hasContent
  }

  // Extract section requirements from user message
  extractSectionRequirements(message: string): {
    type: string
    name: string
    description: string
    content: any
  } {
    const messageLower = message.toLowerCase()

    // Detect section type based on keywords
    let type = 'custom'
    let name = 'Custom'
    let suggestedContent: any = {}

    // Team/Staff section
    if (
      messageLower.includes('team') ||
      messageLower.includes('members') ||
      messageLower.includes('staff')
    ) {
      type = 'team-members'
      name = 'TeamMembers'
      suggestedContent = {
        title: 'Our Team',
        description: 'Meet the amazing people behind our success',
        items: [
          {
            name: 'John Doe',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 10+ years of experience',
            image: '/images/team/john.jpg',
            social: {
              linkedin: 'https://linkedin.com/in/johndoe',
              twitter: 'https://twitter.com/johndoe'
            }
          }
        ]
      }
    }

    // Gallery section
    else if (
      messageLower.includes('gallery') ||
      messageLower.includes('images') ||
      messageLower.includes('photos')
    ) {
      type = 'image-gallery'
      name = 'ImageGallery'
      suggestedContent = {
        title: 'Gallery',
        description: 'Browse our collection',
        images: [
          { src: '/images/gallery/img-01.jpg', alt: 'Gallery image 1' },
          { src: '/images/gallery/img-02.jpg', alt: 'Gallery image 2' },
          { src: '/images/gallery/img-03.jpg', alt: 'Gallery image 3' }
        ]
      }
    }

    // Contact section
    else if (
      messageLower.includes('contact') ||
      messageLower.includes('form')
    ) {
      type = 'contact-form'
      name = 'ContactForm'
      suggestedContent = {
        title: 'Get In Touch',
        description: "We'd love to hear from you. Send us a message!",
        fields: ['name', 'email', 'message'],
        submitText: 'Send Message'
      }
    }

    // Reviews/Testimonials
    else if (
      messageLower.includes('review') ||
      messageLower.includes('testimonial')
    ) {
      type = 'customer-reviews'
      name = 'CustomerReviews'
      suggestedContent = {
        title: 'What Our Customers Say',
        description: "Don't just take our word for it",
        reviews: [
          {
            name: 'Sarah Johnson',
            rating: 5,
            text: 'Amazing service! Highly recommended.',
            avatar: '/images/avatars/sarah.jpg'
          }
        ]
      }
    }

    // Services section
    else if (
      messageLower.includes('service') ||
      messageLower.includes('offering')
    ) {
      type = 'services-grid'
      name = 'ServicesGrid'
      suggestedContent = {
        title: 'Our Services',
        description: 'What we offer',
        services: [
          {
            title: 'Consulting',
            description: 'Expert advice for your business',
            icon: 'consulting'
          }
        ]
      }
    }

    // Pricing section
    else if (
      messageLower.includes('pricing') ||
      messageLower.includes('price') ||
      messageLower.includes('plan')
    ) {
      type = 'pricing-table'
      name = 'PricingTable'
      suggestedContent = {
        title: 'Choose Your Plan',
        description: 'Select the perfect plan for your needs',
        plans: [
          {
            name: 'Basic',
            price: '$9.99',
            features: ['Feature 1', 'Feature 2'],
            popular: false
          }
        ]
      }
    }

    return {
      type,
      name,
      description: message,
      content: suggestedContent
    }
  }

  // Main method to generate section from chat
  async generateSectionFromChat(
    request: SectionGenerationRequest
  ): Promise<SectionGenerationResult> {
    try {
      // Check if this is actually a section request
      if (!this.detectSectionRequest(request.userMessage)) {
        return {
          success: false,
          message:
            "I don't detect a section creation request in your message. Try asking for something like 'I need a team section' or 'Add a contact form'."
        }
      }

      // Extract requirements
      const requirements = this.extractSectionRequirements(request.userMessage)

      // Generate the section using AI factory
      const sectionType = await autoSectionRegistry.generateSectionFromAI(
        request.userMessage,
        requirements.name
      )

      if (!sectionType) {
        return {
          success: false,
          message:
            'Failed to generate the section. Please try again with more specific requirements.'
        }
      }

      return {
        success: true,
        sectionType,
        sectionName: requirements.name,
        generatedContent: requirements.content,
        message: `✅ Successfully created a "${requirements.name}" section! You can now add it to your page with type "${sectionType}".`
      }
    } catch (error) {
      console.error('Error generating section from chat:', error)
      return {
        success: false,
        message:
          'Sorry, there was an error generating your section. Please try again.'
      }
    }
  }

  // Get suggestions for section improvements
  getSectionSuggestions(sectionType: string): string[] {
    const suggestions: Record<string, string[]> = {
      'team-members': [
        'Add hover effects on team member cards',
        'Include social media links',
        'Add team member bio modals',
        'Show years of experience'
      ],
      'contact-form': [
        'Add form validation',
        'Include a map showing your location',
        'Add contact information sidebar',
        'Include office hours'
      ],
      'image-gallery': [
        'Add lightbox functionality',
        'Include image categories/filters',
        'Add lazy loading for performance',
        'Include image captions'
      ],
      'customer-reviews': [
        'Add review filtering by rating',
        'Include verified purchase badges',
        'Add review submission form',
        'Show average rating summary'
      ]
    }

    return (
      suggestions[sectionType] || [
        'Add custom styling',
        'Include animations',
        'Make it responsive',
        'Add interactive elements'
      ]
    )
  }

  // Chat response for successful section creation
  generateSuccessResponse(result: SectionGenerationResult): string {
    if (!result.success) return result.message

    let response = result.message + '\n\n'

    response += '📝 **What you can do next:**\n'
    response += `• Add content to your ${result.sectionName} section\n`
    response += '• Customize the styling and layout\n'
    response += '• Preview your page to see the changes\n\n'

    const suggestions = this.getSectionSuggestions(result.sectionType!)
    if (suggestions.length > 0) {
      response += '💡 **Suggestions for improvement:**\n'
      suggestions.slice(0, 3).forEach(suggestion => {
        response += `• ${suggestion}\n`
      })
    }

    return response
  }
}

export const chatSectionGenerator = new ChatSectionGenerator()

// Example usage in your chat system:
export const handleChatMessage = async (message: string): Promise<string> => {
  const result = await chatSectionGenerator.generateSectionFromChat({
    userMessage: message
  })

  return chatSectionGenerator.generateSuccessResponse(result)
}

// Integration with existing chat system
export const integrateSectionGeneration = (chatMessages: ChatMessage[]) => {
  const lastUserMessage = chatMessages.filter(msg => msg.role === 'user').pop()

  if (!lastUserMessage) return null

  return chatSectionGenerator.detectSectionRequest(lastUserMessage.content)
}
