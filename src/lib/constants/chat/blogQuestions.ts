// packages/ui/src/components/site-builder/constants/blogQuestions.ts
import { Question } from '@pageforge/types/chat'

export const blogQuestions: Question[] = [
  {
    id: 'blog_title',
    question: 'What is the title for your blog section?',
    type: 'text',
    placeholder: 'e.g., Latest News'
  },
  {
    id: 'blog_description',
    question: 'Add a brief introduction to your blog:',
    type: 'textarea',
    placeholder:
      'e.g., Stay up to date with our latest articles and industry insights.'
  },
  {
    id: 'blog_layout',
    question: 'How would you like to display your blog posts?',
    type: 'radio',
    options: [
      { id: 'grid', label: 'Grid Layout', value: 'grid' },
      { id: 'list', label: 'List Layout', value: 'list' },
      { id: 'magazine', label: 'Magazine Layout', value: 'magazine' }
    ]
  },
  {
    id: 'blog_posts_per_page',
    question: 'How many blog posts would you like to display per page?',
    type: 'radio',
    options: [
      { id: '3', label: '3 Posts', value: '3' },
      { id: '6', label: '6 Posts', value: '6' },
      { id: '9', label: '9 Posts', value: '9' }
    ]
  }
]
