# How to Use Content Configuration

The `createContentConfig` function now intelligently handles example vs. real content. Here's how to use it properly:

## 🚨 Important: Using Real Content

The configuration functions will show example data by default. To use your real content, you need to provide your own data.

## Method 1: Using the Template Helper (Recommended)

```typescript
import { createContentTemplate, createComprehensiveAboutPageConfig } from './pageConfigurations'

// 1. Get the template
const myContent = createContentTemplate()

// 2. Fill in your real data
myContent.person = {
  name: 'John',
  lastName: 'Smith',
  role: 'Full Stack Developer',
  avatar: '/images/my-avatar.jpg',
  location: 'America/New_York',
  languages: ['English', 'Spanish']
}

myContent.about.intro.description = `
  I'm a passionate developer with 5 years of experience building web applications.
  I love creating user-friendly interfaces and solving complex problems.
`

myContent.about.work.experiences = [
  {
    company: 'Tech Corp',
    timeframe: '2022 - Present',
    role: 'Senior Developer',
    achievements: [
      <>Led a team of 4 developers to deliver a customer portal that increased user engagement by 40%</>,
      <>Implemented CI/CD pipelines that reduced deployment time by 70%</>
    ],
    images: []
  }
]

myContent.social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/john-smith'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com/in/john-smith-dev'
  }
]

// 3. Create the page configuration
const aboutPageConfig = createComprehensiveAboutPageConfig(myContent)
```

## Method 2: Direct Configuration

```typescript
import { createComprehensiveAboutPageConfig } from './pageConfigurations'
import { ContentConfig } from './content'

const myContent: Partial<ContentConfig> = {
  person: {
    name: 'Jane',
    lastName: 'Doe',
    role: 'UX Designer',
    avatar: '/images/jane-avatar.jpg',
    location: 'Europe/London',
    languages: ['English', 'French']
  },
  about: {
    label: 'About',
    title: 'About Jane',
    description: 'Learn more about Jane Doe, UX Designer',
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: true, link: 'https://cal.com/jane-doe' },
    intro: {
      display: true,
      title: 'Who I Am',
      description: <>I'm a UX designer passionate about creating intuitive digital experiences.</>
    },
    work: {
      display: true,
      title: 'Professional Experience',
      experiences: [
        {
          company: 'Design Studio',
          timeframe: '2021 - Present',
          role: 'Senior UX Designer',
          achievements: [
            <>Redesigned the main product interface, improving user satisfaction by 35%</>,
            <>Conducted user research with over 200 participants to inform design decisions</>
          ],
          images: []
        }
      ]
    },
    studies: {
      display: true,
      title: 'Education',
      institutions: [
        {
          name: 'Design University',
          description: <>Master's in Human-Computer Interaction</>
        }
      ]
    },
    technical: {
      display: true,
      title: 'Design Skills',
      skills: [
        {
          title: 'Figma',
          description: <>Expert level in creating prototypes and design systems</>
        },
        {
          title: 'User Research',
          description: <>Experienced in conducting interviews, surveys, and usability testing</>
        }
      ]
    }
  }
}

const aboutPageConfig = createComprehensiveAboutPageConfig(myContent)
```

## What Happens Without Real Content

If you call the function without providing content:

```typescript
// ⚠️ This will use example data and show warnings
const exampleConfig = createComprehensiveAboutPageConfig()
```

You'll see:
- Console warnings about using example data
- Names like "[Example] John [Example] Doe"
- Placeholder social links like "https://github.com/[your-username]"
- Empty arrays for experiences, skills, etc.
- Sections hidden by default when using example data

## Benefits of This Approach

1. **Clear when using examples**: Example data is clearly marked
2. **Better defaults**: Empty arrays instead of fake data
3. **Helpful warnings**: Console logs when example data is detected
4. **Template helper**: Easy way to get started with the right structure
5. **Flexible**: Still supports the old API for backward compatibility

## Migration from Old System

If you were previously relying on the hardcoded "Selene Yu" data, you now need to provide your own content configuration to get real data instead of examples.
