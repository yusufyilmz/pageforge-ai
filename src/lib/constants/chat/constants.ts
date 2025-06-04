// packages/ui/src/components/site-builder/constants/galleryQuestions.ts
import { Question } from '@pageforge/types/chat'

export const galleryQuestions: Question[] = [
  {
    id: 'gallery_title',
    question: 'What is the title for your gallery section?',
    type: 'text',
    placeholder: 'e.g., Our Portfolio'
  },
  {
    id: 'gallery_description',
    question: 'Add a brief introduction to your gallery:',
    type: 'textarea',
    placeholder: 'e.g., Explore our latest projects and creative work.'
  },
  {
    id: 'gallery_layout',
    question: 'How would you like to layout your gallery?',
    type: 'radio',
    options: [
      { id: 'grid', label: 'Grid Layout', value: 'grid' },
      { id: 'masonry', label: 'Masonry Layout', value: 'masonry' },
      { id: 'carousel', label: 'Carousel/Slider', value: 'carousel' }
    ]
  },
  {
    id: 'gallery_filter',
    question: 'Would you like to add category filters to your gallery?',
    type: 'radio',
    options: [
      { id: 'yes', label: 'Yes, add category filters', value: 'yes' },
      { id: 'no', label: 'No filters needed', value: 'no' }
    ]
  }
]
