import type { Question } from '@pageforge/types/chat'

export const pricingQuestions: Question[] = [
  {
    id: 'pricing_title',
    question: 'What is the title for your pricing section?',
    type: 'text',
    placeholder: 'e.g., Our Pricing Plans'
  },
  {
    id: 'pricing_description',
    question: 'Add a brief introduction to your pricing:',
    type: 'textarea',
    placeholder: 'e.g., Choose the plan that fits your needs and budget.'
  },
  {
    id: 'pricing_period',
    question: 'What pricing period would you like to display?',
    type: 'radio',
    options: [
      { id: 'monthly', label: 'Monthly Pricing', value: 'monthly' },
      { id: 'annual', label: 'Annual Pricing', value: 'annual' },
      { id: 'both', label: 'Both (with toggle)', value: 'both' }
    ]
  },
  {
    id: 'pricing_plans',
    question: 'How many pricing plans would you like to offer?',
    type: 'radio',
    options: [
      { id: '3', label: '3 Plans (Basic, Pro, Enterprise)', value: '3' },
      { id: '4', label: '4 Plans', value: '4' },
      { id: '2', label: '2 Plans (Basic, Pro)', value: '2' }
    ]
  }
]
