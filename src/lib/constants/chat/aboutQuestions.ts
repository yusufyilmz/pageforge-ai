import type { Question } from '@pageforge/types/chat'

export const aboutQuestions: Question[] = [
  {
    id: 'about_title',
    question: 'What is the title for your about section?',
    type: 'text',
    placeholder: 'e.g., About Us'
  },
  {
    id: 'about_content',
    question: 'Tell us about your business or yourself:',
    type: 'textarea',
    placeholder: 'e.g., Founded in 2010, our company has been dedicated to...',
    contextHint: 'This will be the main content of your about section.'
  },
  {
    id: 'about_layout',
    question: 'What layout would you prefer for your about section?',
    type: 'radio',
    options: [
      { id: 'text-only', label: 'Text Only', value: 'text-only' },
      {
        id: 'text-image-right',
        label: 'Text with Image on Right',
        value: 'text-image-right'
      },
      {
        id: 'text-image-left',
        label: 'Text with Image on Left',
        value: 'text-image-left'
      }
    ]
  }
]
