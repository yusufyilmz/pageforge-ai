# PageForge Database Schema Documentation

This document outlines the enhanced database schema for PageForge, designed to support the rich page
type system defined in your TypeScript interfaces.

## Overview

The database schema has been designed to support a flexible, content-driven architecture that can
handle various page types including blogs, portfolios, galleries, and more. The schema maintains
backward compatibility with your existing structure while adding powerful new capabilities.

## Database Schema

### Core Tables

#### 1. Enhanced `pages` Table

The existing `pages` table has been extended with additional columns to support rich page
configurations:

```sql
ALTER TABLE pages
ADD COLUMN page_type page_type_enum,
ADD COLUMN metadata JSONB DEFAULT '{}'::JSONB,
ADD COLUMN structured_data JSONB DEFAULT '{}'::JSONB,
ADD COLUMN layout_config JSONB DEFAULT '{}'::JSONB,
ADD COLUMN navigation_config JSONB DEFAULT '{}'::JSONB,
ADD COLUMN effects JSONB DEFAULT '{}'::JSONB,
ADD COLUMN seo_config JSONB DEFAULT '{}'::JSONB;
```

#### 2. New `posts` Table

Dedicated table for blog posts with comprehensive metadata:

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,

  -- Featured image
  featured_image_src TEXT,
  featured_image_alt TEXT,
  featured_image_width INTEGER,
  featured_image_height INTEGER,

  -- Author information
  author_name TEXT NOT NULL,
  author_avatar TEXT,
  author_bio TEXT,

  -- Categorization
  category TEXT[],
  tags TEXT[],

  -- Metadata
  publish_date TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_date TIMESTAMP,
  reading_time INTEGER,
  is_published BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,

  -- SEO
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT[],
  og_image TEXT,
  no_index BOOLEAN DEFAULT FALSE,

  -- Related posts
  related_posts UUID[],

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(site_id, slug)
);
```

#### 3. Content Structure Tables

**`content_sections`** - Replaces the generic sections table with structured content:

```sql
CREATE TABLE content_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  section_key TEXT NOT NULL, -- 'header', 'hero', 'main', 'sidebar', 'footer'
  title TEXT,
  description TEXT,
  layout_config JSONB DEFAULT '{}'::JSONB,
  display_order INTEGER DEFAULT 0,
  is_displayed BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**`content_blocks`** - Individual content components within sections:

```sql
CREATE TABLE content_blocks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID REFERENCES content_sections(id) ON DELETE CASCADE,
  block_type content_block_type_enum NOT NULL,
  content JSONB DEFAULT '{}'::JSONB,
  variant TEXT,
  is_displayed BOOLEAN DEFAULT TRUE,
  class_name TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. Specialized Content Tables

**Work Experiences:**

```sql
CREATE TABLE work_experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  company TEXT NOT NULL,
  timeframe TEXT NOT NULL,
  role TEXT NOT NULL,
  achievements JSONB DEFAULT '[]'::JSONB,
  images JSONB DEFAULT '[]'::JSONB,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Skills:**

```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description JSONB,
  images JSONB DEFAULT '[]'::JSONB,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Social Links:**

```sql
CREATE TABLE social_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT NOT NULL,
  link TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Gallery Images:**

```sql
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  src TEXT NOT NULL,
  alt TEXT NOT NULL,
  orientation orientation_enum DEFAULT 'horizontal',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 5. SEO and Metadata

**`page_metadata`** - Comprehensive SEO and metadata management:

```sql
CREATE TABLE page_metadata (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE UNIQUE,

  -- Basic metadata
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT[],
  author TEXT,
  publish_date TIMESTAMP,
  modified_date TIMESTAMP,
  canonical_url TEXT,

  -- Open Graph
  og_type TEXT DEFAULT 'website',
  og_title TEXT,
  og_description TEXT,
  og_image TEXT NOT NULL,
  og_image_alt TEXT NOT NULL,
  og_url TEXT,

  -- Twitter Card
  twitter_card twitter_card_enum DEFAULT 'summary',
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image TEXT,

  -- SEO settings
  no_index BOOLEAN DEFAULT FALSE,
  no_follow BOOLEAN DEFAULT FALSE,
  sitemap_priority DECIMAL(2,1) DEFAULT 0.5,
  sitemap_change_freq change_freq_enum DEFAULT 'monthly',

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Enums

The schema uses several PostgreSQL enums for type safety:

```sql
CREATE TYPE page_type_enum AS ENUM ('blog', 'about', 'gallery', 'work', 'post');
CREATE TYPE content_block_type_enum AS ENUM (
  'posts-grid', 'about-hero', 'experience', 'studies',
  'skills', 'socials', 'gallery-grid', 'newsletter',
  'table-of-contents', 'calendar-link', 'text', 'heading', 'projects', 'posts'
);
CREATE TYPE orientation_enum AS ENUM ('vertical', 'horizontal');
CREATE TYPE sidebar_position_enum AS ENUM ('left', 'right');
CREATE TYPE twitter_card_enum AS ENUM ('summary', 'summary_large_image', 'app', 'player');
CREATE TYPE change_freq_enum AS ENUM ('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never');
```

## TypeScript Integration

### Database Types

The schema includes comprehensive TypeScript types that mirror the database structure:

```typescript
// Example database types
interface PostDB {
  id: string
  site_id: string
  title: string
  slug: string
  content?: string
  excerpt?: string
  // ... other fields
}

interface PageWithSections extends PageDB {
  content_sections?: ContentSectionWithBlocks[]
  metadata?: PageMetadataDB
}
```

### Type Converters

Utility functions convert between frontend types and database types:

```typescript
// Convert frontend types to database format
export function toDBPost(post: PostType, siteId: string): InsertPost
export function toDBPageMetadata(
  metadata: ContentPageConfig['metadata'],
  pageId: string
): InsertPageMetadata

// Convert database types to frontend format
export function fromDBPost(post: PostDB): PostType
export function fromDBPageMetadata(metadata: PageMetadataDB): ContentPageConfig['metadata']
```

### Database Services

Comprehensive service functions handle all database operations:

```typescript
// Post operations
const post = await postService.create(postData)
const posts = await postService.getBySiteId(siteId, { published: true })

// Page operations
const pageWithContent = await pageService.getWithContent(pageId)

// Content operations
const { section, blocks } = await contentService.createSectionWithBlocks(sectionData, blocksData)

// Site content operations
const siteContent = await siteContentService.getSiteContent(siteId)
```

## Usage Examples

### Creating a Blog Post

```typescript
import { postService } from '@pageforge/lib/services/page/pageService'
import { toDBPost } from '@pageforge/lib/types/db/typeConverters'

const newPost: PostType = {
  id: '', // Will be generated
  title: 'My New Blog Post',
  slug: 'my-new-blog-post',
  content: 'This is the content...',
  author: { name: 'John Doe' },
  metadata: {
    publishDate: new Date().toISOString(),
    isPublished: true,
    isFeatured: false
  }
  // ... other fields
}

const dbPost = toDBPost(newPost, siteId)
const createdPost = await postService.create(dbPost)
```

### Creating a Page with Content Sections

```typescript
import { contentService } from '@pageforge/lib/services/page/pageService'

// Create a section with blocks
const sectionData = {
  page_id: pageId,
  section_key: 'hero',
  title: 'Hero Section',
  display_order: 0,
  is_displayed: true
}

const blocksData = [
  {
    block_type: 'about-hero',
    content: { heading: 'Welcome', description: 'About me...' },
    display_order: 0,
    is_displayed: true
  }
]

const result = await contentService.createSectionWithBlocks(sectionData, blocksData)
```

### Querying Site Content

```typescript
import { siteContentService } from '@pageforge/lib/services/page/pageService'

// Get all content for a site
const siteWithContent = await siteContentService.getSiteContent(siteId)
console.log(siteWithContent.posts) // All posts
console.log(siteWithContent.work_experiences) // Work experiences
console.log(siteWithContent.skills) // Skills
console.log(siteWithContent.gallery_images) // Gallery images
```

## Migration

To apply this schema to your existing database:

1. Run the migration file:

   ```bash
   supabase db reset
   # or if you want to keep existing data:
   supabase migration up
   ```

2. Update your application code to use the new types and services.

3. Migrate existing data if necessary (write custom migration scripts based on your current data
   structure).

## Security (Row Level Security)

All tables include comprehensive RLS policies that ensure users can only access content for sites
they own:

```sql
-- Example RLS policy for posts
CREATE POLICY "Allow post access via site owner"
ON posts FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM sites
    WHERE sites.id = posts.site_id
    AND sites.user_id = auth.uid()
  )
);
```

## Performance

The schema includes optimized indexes for common query patterns:

```sql
-- Indexes for better performance
CREATE INDEX idx_posts_site_id ON posts(site_id);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_published ON posts(is_published);
CREATE INDEX idx_posts_featured ON posts(is_featured);
CREATE INDEX idx_posts_publish_date ON posts(publish_date);
```

## Next Steps

1. **Apply the migration** to your Supabase database
2. **Update your application** to use the new types and services
3. **Migrate existing data** if you have any
4. **Test the implementation** with your existing page configurations
5. **Extend as needed** for your specific use cases

This schema provides a solid foundation for your PageForge application while maintaining flexibility
for future enhancements.
