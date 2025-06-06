// packages/ui/src/components/site-builder/constants/faqQuestions.ts
import type { Question } from '@pageforge/types/chat'

export const faqQuestions: Question[] = [
  {
    id: 'faq_title',
    question: 'What is the title for your FAQ section?',
    type: 'text',
    placeholder: 'e.g., Frequently Asked Questions'
  },
  {
    id: 'faq_description',
    question: 'Add a brief introduction to your FAQs:',
    type: 'textarea',
    placeholder:
      'e.g., Find answers to common questions about our products and services.'
  },
  {
    id: 'faq_layout',
    question: 'How would you like to display your FAQs?',
    type: 'radio',
    options: [
      { id: 'accordion', label: 'Accordion (Expandable)', value: 'accordion' },
      { id: 'tabs', label: 'Tabbed Layout', value: 'tabs' },
      { id: 'grid', label: 'Grid Layout', value: 'grid' }
    ]
  },
  {
    id: 'faq_count',
    question: 'How many FAQs would you like to display?',
    type: 'radio',
    options: [
      { id: '5', label: '5 Questions', value: '5' },
      { id: '8', label: '8 Questions', value: '8' },
      { id: '10', label: '10 Questions', value: '10' }
    ]
  }
]
