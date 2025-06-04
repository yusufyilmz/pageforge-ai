// packages/ui/src/components/site-builder/constants/ctaQuestions.ts
import { Question } from '@pageforge/types/chat'

export const ctaQuestions: Question[] = [
  {
    id: 'cta_title',
    question: 'What is the headline for your call-to-action section?',
    type: 'text',
    placeholder: 'e.g., Ready to Get Started?'
  },
  {
    id: 'cta_description',
    question: 'Add a brief message for your call-to-action:',
    type: 'textarea',
    placeholder:
      'e.g., Join thousands of satisfied customers. Sign up today and transform your business.'
  },
  {
    id: 'cta_button_text',
    question: 'What should your call-to-action button say?',
    type: 'text',
    placeholder: 'e.g., Get Started Now'
  },
  {
    id: 'cta_button_url',
    question: 'Where should your CTA button link to?',
    type: 'text',
    placeholder: 'e.g., /contact or #pricing-section'
  },
  {
    id: 'cta_style',
    question: 'What style would you prefer for your CTA section?',
    type: 'radio',
    options: [
      { id: 'simple', label: 'Simple (Text and Button)', value: 'simple' },
      { id: 'banner', label: 'Banner with Background', value: 'banner' },
      { id: 'split', label: 'Split (Text + Image)', value: 'split' }
    ]
  }
]
