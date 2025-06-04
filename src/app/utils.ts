/**
 * Utility function to fetch and parse blog posts
 */
export function getPosts() {
  // This is a mock implementation
  // In a real app, this would fetch posts from the filesystem or an API
  return [
    {
      slug: 'getting-started-with-once-ui',
      metadata: {
        title: 'Getting Started with Once UI',
        description: 'Learn how to use Once UI components in your projects',
        publishedAt: '2025-05-20T12:00:00Z',
        image: '/blog/blog-post-1.jpg',
        author: 'Jane Developer',
        tag: 'Tutorial',
        readingTime: 5
      },
      content: '# Getting Started with Once UI\n\nLorem ipsum dolor sit amet...'
    },
    {
      slug: 'building-responsive-layouts',
      metadata: {
        title: 'Building Responsive Layouts with Once UI',
        description:
          'Tips and tricks for creating beautiful responsive layouts',
        publishedAt: '2025-05-15T10:30:00Z',
        image: '/blog/blog-post-2.jpg',
        author: 'John Designer',
        tag: 'Design',
        readingTime: 7
      },
      content: '# Building Responsive Layouts\n\nLorem ipsum dolor sit amet...'
    },
    {
      slug: 'advanced-component-customization',
      metadata: {
        title: 'Advanced Component Customization',
        description:
          'Take your Once UI components to the next level with advanced customization techniques',
        publishedAt: '2025-05-10T09:15:00Z',
        image: '/blog/blog-post-3.jpg',
        author: 'Alex Engineer',
        tag: 'Advanced',
        readingTime: 10
      },
      content:
        '# Advanced Component Customization\n\nLorem ipsum dolor sit amet...'
    }
  ]
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, includeTime = false): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  if (includeTime) {
    options.hour = '2-digit'
    options.minute = '2-digit'
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}
