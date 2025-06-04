// packages/ui/src/components/site-builder/constants/teamQuestions.ts
import { Question } from '@pageforge/types/chat'

export const teamQuestions: Question[] = [
  {
    id: 'team_title',
    question: 'What is the title for your team section?',
    type: 'text',
    placeholder: 'e.g., Meet Our Team'
  },
  {
    id: 'team_description',
    question: 'Add a brief introduction to your team:',
    type: 'textarea',
    placeholder:
      'e.g., Get to know the talented professionals behind our success.'
  },
  {
    id: 'team_layout',
    question: 'How would you like to display your team members?',
    type: 'radio',
    options: [
      { id: 'grid', label: 'Grid Layout', value: 'grid' },
      { id: 'cards', label: 'Card Layout', value: 'cards' },
      { id: 'list', label: 'List Layout', value: 'list' }
    ]
  },
  {
    id: 'team_count',
    question: 'How many team members would you like to feature?',
    type: 'radio',
    options: [
      { id: '3', label: '3 Team Members', value: '3' },
      { id: '4', label: '4 Team Members', value: '4' },
      { id: '6', label: '6 Team Members', value: '6' },
      { id: '8', label: '8 Team Members', value: '8' }
    ]
  }
]
