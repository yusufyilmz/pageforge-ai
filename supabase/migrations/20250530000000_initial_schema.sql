-- Initial PageForge Database Schema
-- Fresh start migration based on ContentPageConfig types

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USERS table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  name TEXT,
  profile_picture TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  plan TEXT DEFAULT 'free'
);

-- SITES table
CREATE TABLE sites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  domain TEXT,
  description TEXT,
  theme_style TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- PAGES table - Flexible schema to support all ContentPageConfig types
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  page_type TEXT NOT NULL DEFAULT 'custom',
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,

  -- ContentPageConfig fields stored as JSONB for flexibility
  metadata JSONB DEFAULT '{}'::JSONB,
  structured_data JSONB DEFAULT '{}'::JSONB,
  content JSONB DEFAULT '{}'::JSONB,
  layout_config JSONB DEFAULT '{}'::JSONB,
  navigation_config JSONB DEFAULT '{}'::JSONB,
  effects JSONB DEFAULT '{}'::JSONB,
  seo_config JSONB DEFAULT '{}'::JSONB,

  -- Legacy settings field for backward compatibility
  settings JSONB DEFAULT '{}'::JSONB,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  -- Ensure unique slugs per site
  UNIQUE(site_id, slug)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- USERS policy - Users can only access their own data
CREATE POLICY "Allow individual access to users"
ON users FOR ALL
USING (auth.uid() = id);

-- SITES policy - Users can only access their own sites
CREATE POLICY "Allow site owner access"
ON sites FOR ALL
USING (auth.uid() = user_id);

-- PAGES policy - Users can only access pages from their sites
CREATE POLICY "Allow page access via site owner"
ON pages FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM sites
    WHERE sites.id = pages.site_id
    AND sites.user_id = auth.uid()
  )
);

-- Indexes for performance

-- User indexes
CREATE INDEX idx_users_email ON users(email);

-- Site indexes
CREATE INDEX idx_sites_user_id ON sites(user_id);
CREATE INDEX idx_sites_slug ON sites(slug);

-- Page indexes
CREATE INDEX idx_pages_site_id ON pages(site_id);
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_type ON pages(page_type);
CREATE INDEX idx_pages_order ON pages(order_index);

-- JSONB indexes for fast queries on page content
CREATE INDEX idx_pages_metadata ON pages USING GIN(metadata);
CREATE INDEX idx_pages_content ON pages USING GIN(content);
CREATE INDEX idx_pages_navigation ON pages USING GIN(navigation_config);

-- Update triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_sites_updated_at
    BEFORE UPDATE ON sites
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pages_updated_at
    BEFORE UPDATE ON pages
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Useful views for easier querying

-- Page summary view with site information
CREATE VIEW page_summary AS
SELECT
    p.id,
    p.site_id,
    p.page_type,
    p.title,
    p.slug,
    p.metadata->>'title' as metadata_title,
    p.metadata->>'description' as metadata_description,
    p.navigation_config->>'label' as nav_label,
    (p.navigation_config->>'enabled')::boolean as nav_enabled,
    (p.navigation_config->>'order')::integer as nav_order,
    p.order_index,
    p.created_at,
    p.updated_at,
    s.name as site_name,
    s.slug as site_slug,
    s.user_id
FROM pages p
JOIN sites s ON p.site_id = s.id;

-- Site with pages view
CREATE VIEW site_with_pages AS
SELECT
    s.id,
    s.user_id,
    s.name,
    s.slug,
    s.domain,
    s.description,
    s.theme_style,
    s.created_at,
    s.updated_at,
    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'id', p.id,
                'page_type', p.page_type,
                'title', p.title,
                'slug', p.slug,
                'nav_label', p.navigation_config->>'label',
                'nav_enabled', (p.navigation_config->>'enabled')::boolean,
                'nav_order', (p.navigation_config->>'order')::integer,
                'order_index', p.order_index
            ) ORDER BY
                COALESCE((p.navigation_config->>'order')::integer, p.order_index),
                p.order_index
        ) FILTER (WHERE p.id IS NOT NULL),
        '[]'::json
    ) as pages
FROM sites s
LEFT JOIN pages p ON s.id = p.site_id
GROUP BY s.id, s.user_id, s.name, s.slug, s.domain, s.description, s.theme_style, s.created_at, s.updated_at;

-- Comments explaining the schema structure
COMMENT ON TABLE pages IS 'Flexible pages table that stores all ContentPageConfig data as JSONB';
COMMENT ON COLUMN pages.metadata IS 'Stores metadata object: title, description, keywords, author, openGraph, twitter, etc.';
COMMENT ON COLUMN pages.content IS 'Stores content object: header, hero, main sections, sidebar, footer with ContentBlocks';
COMMENT ON COLUMN pages.layout_config IS 'Stores layout object: template, maxWidth, sidebar configuration, navigation settings';
COMMENT ON COLUMN pages.navigation_config IS 'Stores navigation object: label, icon, href, enabled, order, parent';
COMMENT ON COLUMN pages.effects IS 'Stores VisualEffects object: mask, gradient, dots settings';
COMMENT ON COLUMN pages.seo_config IS 'Stores SEO configuration: noIndex, noFollow, sitemap settings';
COMMENT ON COLUMN pages.structured_data IS 'Stores structured data for SEO (JSON-LD)';

-- Example JSONB structure comments
COMMENT ON COLUMN pages.content IS 'Example structure: {"header": {"id": "header", "blocks": []}, "hero": {"id": "hero", "blocks": []}, "main": [{"id": "main-1", "blocks": []}], "sidebar": {"id": "sidebar", "blocks": []}, "footer": {"id": "footer", "blocks": []}}';
COMMENT ON COLUMN pages.metadata IS 'Example structure: {"title": "Page Title", "description": "Page description", "openGraph": {"type": "website", "image": "/og-image.jpg", "alt": "Image alt"}, "twitter": {"card": "summary"}}';
