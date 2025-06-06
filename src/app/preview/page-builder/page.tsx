'use client'

import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'
import { PageBuilder } from '@pageforge/lib/services/page-builder'
import {
  Flex,
  Column,
  Heading,
  Text,
  Card
} from '@pageforge/once-ui/components'

// ============================================================================
// EXAMPLE: Custom Services Page Using PageBuilder (8 lines!) ⚙️
// ============================================================================

// This is a custom page that doesn't fit standard templates
// Perfect use case for PageBuilder!

const servicesPageConfig = PageBuilder.create('services', '/services')
  .withTitle('Development Services')
  .withDescription('Professional web development and consulting services')
  .withAuthor('Alex Rodriguez')
  .withKeywords([
    'services',
    'web development',
    'consulting',
    'react',
    'nodejs'
  ])
  .withMaxWidth('xl')
  .addHero({
    title: 'Development Services',
    subtitle: 'What I Offer',
    description:
      'Professional web development services tailored to your business needs. From MVP to enterprise applications.'
  })
  .addFeatures([
    {
      title: 'Full-Stack Development',
      description:
        'Complete web applications using React, Node.js, and modern databases',
      icon: 'code'
    },
    {
      title: 'Technical Consulting',
      description:
        'Architecture planning, code reviews, and technical strategy guidance',
      icon: 'chat'
    },
    {
      title: 'MVP Development',
      description: 'Rapid prototyping and minimum viable product development',
      icon: 'lightning'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up existing applications and improve user experience',
      icon: 'speed'
    }
  ])
  .addSection('pricing', {
    plans: [
      {
        name: 'Starter',
        price: { monthly: 2500 },
        features: [
          { text: 'Frontend Development', included: true },
          { text: 'Responsive Design', included: true },
          { text: 'Basic SEO Setup', included: true },
          { text: 'Email Support', included: true },
          { text: 'Backend Development', included: false },
          { text: 'Database Design', included: false }
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: { monthly: 4500 },
        features: [
          { text: 'Full-Stack Development', included: true },
          { text: 'Database Design', included: true },
          { text: 'API Development', included: true },
          { text: 'Advanced SEO', included: true },
          { text: 'Priority Support', included: true },
          { text: 'Deployment Setup', included: true }
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: { monthly: 7500 },
        features: [
          { text: 'Everything in Professional', included: true },
          { text: 'System Architecture', included: true },
          { text: 'Performance Optimization', included: true },
          { text: 'Security Audit', included: true },
          { text: 'Team Training', included: true },
          { text: '24/7 Support', included: true }
        ],
        popular: false
      }
    ]
  })
  .addSection('testimonials', {
    testimonials: [
      {
        content:
          'Alex delivered our e-commerce platform ahead of schedule. The code quality and attention to detail were exceptional.',
        author: {
          name: 'Sarah Johnson',
          role: 'CTO',
          company: 'RetailTech Inc'
        }
      },
      {
        content:
          'Working with Alex was a game-changer. He not only built our MVP but also provided valuable business insights.',
        author: {
          name: 'Mike Chen',
          role: 'Founder',
          company: 'StartupXYZ'
        }
      },
      {
        content:
          'The performance improvements Alex made to our app resulted in 40% faster load times and better user engagement.',
        author: {
          name: 'Lisa Williams',
          role: 'Product Manager',
          company: 'TechCorp'
        }
      }
    ]
  })
  .addSection('contact-form', {
    title: 'Start Your Project',
    description:
      "Ready to discuss your project? Let's schedule a consultation.",
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text', required: false },
      {
        name: 'budget',
        label: 'Project Budget',
        type: 'select',
        options: ['$5k-15k', '$15k-30k', '$30k-50k', '$50k+'],
        required: true
      },
      {
        name: 'timeline',
        label: 'Timeline',
        type: 'select',
        options: ['1-2 months', '2-4 months', '4-6 months', '6+ months'],
        required: true
      },
      {
        name: 'description',
        label: 'Project Description',
        type: 'textarea',
        required: true
      }
    ],
    submitText: 'Send Project Details',
    successMessage: "Thanks! I'll get back to you within 24 hours."
  })
  .withStructuredData('Service', {
    name: 'Web Development Services',
    description: 'Professional web development and consulting services',
    provider: {
      '@type': 'Person',
      name: 'Alex Rodriguez',
      jobTitle: 'Full Stack Developer'
    },
    areaServed: 'Worldwide',
    serviceType: 'Web Development'
  })
  .withSEO({
    sitemap: {
      priority: 0.9,
      changeFreq: 'monthly'
    }
  })
  .build()

export default function ExampleServicesPageBuilder() {
  return (
    <Flex direction='column' fillWidth>
      {/* Header */}
      <div
        style={{
          backgroundColor: '#7c3aed',
          borderBottom: '3px solid #8b5cf6',
          padding: '2rem'
        }}
      >
        <Flex maxWidth='l' style={{ color: 'white', margin: '0 auto' }}>
          <Column gap='s'>
            <Heading variant='display-strong-l' style={{ color: 'white' }}>
              ⚙️ PageBuilder Demo
            </Heading>
            <Text variant='body-default-l' style={{ color: '#e9d5ff' }}>
              Custom pages for <strong>unique requirements</strong> not covered
              by templates
            </Text>
            <Text variant='body-default-m' style={{ color: '#c4b5fd' }}>
              📍 Location: <code>/src/app/preview/page-builder/</code>
            </Text>
          </Column>
        </Flex>
      </div>

      {/* Benefits */}
      <div
        style={{
          backgroundColor: '#faf5ff',
          borderBottom: '1px solid #ddd6fe',
          padding: '1.5rem 2rem'
        }}
      >
        <Flex maxWidth='l' style={{ margin: '0 auto' }}>
          <Column gap='l' fillWidth>
            <Heading variant='heading-strong-m' style={{ color: '#7c2d12' }}>
              🎯 PageBuilder Use Cases:
            </Heading>

            <Card
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #8b5cf6'
              }}
              padding='l'
            >
              <Column gap='m'>
                <Heading
                  variant='heading-strong-s'
                  style={{ color: '#7c2d12' }}
                >
                  💡 Perfect for Custom Pages:
                </Heading>
                <Column gap='s' style={{ paddingLeft: '1.5rem' }}>
                  <Text variant='body-default-s' style={{ color: '#7c2d12' }}>
                    • Services pages with pricing and contact forms
                  </Text>
                  <Text variant='body-default-s' style={{ color: '#7c2d12' }}>
                    • Landing pages with unique section combinations
                  </Text>
                  <Text variant='body-default-s' style={{ color: '#7c2d12' }}>
                    • Business pages that don't fit standard templates
                  </Text>
                  <Text variant='body-default-s' style={{ color: '#7c2d12' }}>
                    • Complex layouts with testimonials, features, pricing
                  </Text>
                </Column>
              </Column>
            </Card>
          </Column>
        </Flex>
      </div>

      {/* Custom services page built with PageBuilder */}
      <UniversalPage config={servicesPageConfig} />

      {/* Debug info */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#7c3aed',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 1000
        }}
      >
        ⚙️ PageBuilder - 8 lines for custom needs!
      </div>
    </Flex>
  )
}
