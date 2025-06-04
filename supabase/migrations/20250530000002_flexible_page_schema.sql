-- Simplified and flexible schema for PageForge
-- This schema uses JSONB to store flexible content that can accommodate any page type

-- Create enum types for core page functionality
CREATE TYPE page_type_enum AS ENUM ('blog', 'about', 'gallery', 'work', 'post', 'custom');
CREATE TYPE template_enum AS ENUM ('default', 'full-width', 'sidebar-left', 'sidebar-right', 'landing');

-- Posts table for blog content (separate from pages for better performance)
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,

  -- Store all post metadata as JSONB for flexibility
  metadata JSONB DEFAULT '{}'::JSONB, -- author, featured_image, publish_date, etc.
  seo JSONB DEFAULT '{}'::JSONB,      -- title, description, keywords, og_image, etc.
  settings JSONB DEFAULT '{}'::JSONB, -- is_published, is_featured, reading_time, etc.

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(site_id, slug)
);

-- Enhanced pages table to support any page type with flexible content
DROP TABLE IF EXISTS sections CASCADE;
DROP TABLE IF EXISTS content_sections CASCADE;
DROP TABLE IF EXISTS content_blocks CASCADE;

-- Update existing pages table to be more flexible
ALTER TABLE pages
DROP COLUMN IF EXISTS settings,
ADD COLUMN IF NOT EXISTS page_type page_type_enum DEFAULT 'custom',
ADD COLUMN IF NOT EXISTS template template_enum DEFAULT 'default',
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS content JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS layout JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS navigation JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS seo JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS effects JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS settings JSONB DEFAULT '{}'::JSONB;

-- Add indexes for better performance on JSONB queries
CREATE INDEX IF NOT EXISTS idx_posts_site_id ON posts(site_id);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_metadata_published ON posts USING GIN ((metadata->'isPublished'));
CREATE INDEX IF NOT EXISTS idx_posts_metadata_featured ON posts USING GIN ((metadata->'isFeatured'));
CREATE INDEX IF NOT EXISTS idx_posts_content ON posts USING GIN (content);

CREATE INDEX IF NOT EXISTS idx_pages_site_id ON pages(site_id);
CREATE INDEX IF NOT EXISTS idx_pages_type ON pages(page_type);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_content ON pages USING GIN (content);
CREATE INDEX IF NOT EXISTS idx_pages_metadata ON pages USING GIN (metadata);

-- Enable RLS on posts table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- RLS Policy for posts
CREATE POLICY "Allow post access via site owner"
ON posts FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM sites
    WHERE sites.id = posts.site_id
    AND sites.user_id = auth.uid()
  )
);

-- Update triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_posts_updated_at ON posts;
DROP TRIGGER IF EXISTS update_pages_updated_at ON pages;

-- Create new triggers
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Example JSONB structure for different page types:

-- Blog Page content structure:
-- {
--   "hero": {
--     "title": "My Blog",
--     "description": "Welcome to my blog"
--   },
--   "sections": [
--     {
--       "type": "posts-grid",
--       "content": {
--         "featuredPosts": { "range": [0, 3], "columns": "3" },
--         "otherPosts": { "range": [3, 10], "columns": "2" }
--       }
--     },
--     {
--       "type": "newsletter",
--       "content": {
--         "title": "Subscribe",
--         "description": "Get updates"
--       }
--     }
--   ]
-- }

-- About Page content structure:
-- {
--   "hero": {
--     "title": "About Me",
--     "description": "Learn about my journey"
--   },
--   "sections": [
--     {
--       "type": "about-hero",
--       "content": { "biography": "..." }
--     },
--     {
--       "type": "experience",
--       "content": {
--         "experiences": [
--           {
--             "company": "Example Corp",
--             "role": "Developer",
--             "timeframe": "2020-2023",
--             "achievements": ["Built apps", "Led team"]
--           }
--         ]
--       }
--     },
--     {
--       "type": "technical-skills",
--       "content": {
--         "skills": [
--           { "title": "JavaScript", "description": "Expert level" }
--         ]
--       }
--     }
--   ]
-- }

-- Gallery Page content structure:
-- {
--   "hero": {
--     "title": "Gallery",
--     "description": "My photography work"
--   },
--   "sections": [
--     {
--       "type": "gallery-grid",
--       "content": {
--         "images": [
--           {
--             "src": "/images/photo1.jpg",
--             "alt": "Photo 1",
--             "orientation": "horizontal"
--           }
--         ]
--       }
--     }
--   ]
-- }

-- Custom Page content structure (completely flexible):
-- {
--   "hero": {
--     "title": "Custom Page",
--     "subtitle": "Whatever you want"
--   },
--   "sections": [
--     {
--       "type": "custom-section",
--       "content": {
--         "customField1": "any value",
--         "customField2": { "nested": "data" },
--         "customArray": [1, 2, 3]
--       }
--     }
--   ]
-- }

-- Metadata structure:
-- {
--   "title": "Page Title",
--   "description": "Page description",
--   "keywords": ["keyword1", "keyword2"],
--   "author": "Author Name",
--   "openGraph": {
--     "type": "website",
--     "image": "/og-image.jpg",
--     "alt": "OG Image Alt"
--   },
--   "twitter": {
--     "card": "summary_large_image"
--   }
-- }

-- Layout structure:
-- {
--   "template": "default",
--   "maxWidth": "1200px",
--   "sidebar": {
--     "position": "right",
--     "width": "300px",
--     "sticky": true
--   }
-- }

-- Navigation structure:
-- {
--   "label": "Home",
--   "icon": "home",
--   "href": "/",
--   "enabled": true,
--   "order": 1
-- }

-- SEO structure:
-- {
--   "noIndex": false,
--   "noFollow": false,
--   "canonical": "https://example.com/page",
--   "sitemap": {
--     "priority": 0.8,
--     "changeFreq": "monthly"
--   }
-- }

-- Effects structure:
-- {
--   "mask": {
--     "cursor": true,
--     "radius": 100
--   },
--   "gradient": {
--     "display": true,
--     "opacity": 0.5
--   }
-- }

-- Settings structure:
-- {
--   "isPublished": true,
--   "showInNavigation": true,
--   "requireAuth": false,
--   "customSettings": {
--     "anyCustomSetting": "value"
--   }
-- }
