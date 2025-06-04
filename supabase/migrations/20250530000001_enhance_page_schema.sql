-- Simplified and flexible schema for PageForge
-- This schema supports any page type through flexible JSONB content storage

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Posts table for blog content
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,

  -- All post data stored as JSONB for maximum flexibility
  metadata JSONB DEFAULT '{}'::JSONB,
  author JSONB DEFAULT '{}'::JSONB,
  featured_image JSONB DEFAULT '{}'::JSONB,
  seo JSONB DEFAULT '{}'::JSONB,

  -- Simple fields for common queries
  is_published BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  publish_date TIMESTAMP NOT NULL DEFAULT NOW(),

  -- Tags and categories as arrays for easy querying
  tags TEXT[],
  categories TEXT[],

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(site_id, slug)
);

-- Enhanced pages table with flexible content storage
ALTER TABLE pages
ADD COLUMN IF NOT EXISTS page_type TEXT,
ADD COLUMN IF NOT EXISTS content JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS layout JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS navigation JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS effects JSONB DEFAULT '{}'::JSONB,
ADD COLUMN IF NOT EXISTS seo JSONB DEFAULT '{}'::JSONB;

-- Update existing sections table to be more flexible
-- Remove the content column if it exists and recreate it as JSONB
ALTER TABLE sections
DROP COLUMN IF EXISTS content;

ALTER TABLE sections
ADD COLUMN content JSONB DEFAULT '{}'::JSONB,
ADD COLUMN layout JSONB DEFAULT '{}'::JSONB,
ADD COLUMN metadata JSONB DEFAULT '{}'::JSONB;

-- Enable RLS on posts table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for posts
CREATE POLICY "Allow post access via site owner"
ON posts FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM sites
    WHERE sites.id = posts.site_id
    AND sites.user_id = auth.uid()
  )
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_posts_site_id ON posts(site_id);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(is_published);
CREATE INDEX IF NOT EXISTS idx_posts_featured ON posts(is_featured);
CREATE INDEX IF NOT EXISTS idx_posts_publish_date ON posts(publish_date);
CREATE INDEX IF NOT EXISTS idx_posts_tags ON posts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_posts_categories ON posts USING GIN(categories);
CREATE INDEX IF NOT EXISTS idx_posts_metadata ON posts USING GIN(metadata);

CREATE INDEX IF NOT EXISTS idx_pages_type ON pages(page_type);
CREATE INDEX IF NOT EXISTS idx_pages_content ON pages USING GIN(content);
CREATE INDEX IF NOT EXISTS idx_pages_metadata ON pages USING GIN(metadata);

CREATE INDEX IF NOT EXISTS idx_sections_content ON sections USING GIN(content);
CREATE INDEX IF NOT EXISTS idx_sections_metadata ON sections USING GIN(metadata);

-- Update triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_posts_updated_at') THEN
        CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_pages_updated_at') THEN
        CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;
