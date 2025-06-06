/**
 * Types for blog posts in the application
 */

/**
 * Metadata for a blog post
 */
export interface PostMetadata {
  /**
   * Post title
   */
  title: string;

  /**
   * Post description or excerpt
   */
  description?: string;

  /**
   * Publication date in ISO format
   */
  publishedAt: string;

  /**
   * URL or path to the post's featured image
   */
  image?: string;

  /**
   * Author of the post
   */
  author?: string;

  /**
   * Primary tag for the post
   */
  tag?: string;

  /**
   * Additional tags for the post
   */
  tags?: string[];

  /**
   * Estimated reading time in minutes
   */
  readingTime?: number;
}

/**
 * Blog post structure
 */
export interface Post {
  /**
   * Unique slug for the post URL
   */
  slug: string;

  /**
   * Post metadata
   */
  metadata: PostMetadata;

  /**
   * Post content (this might be HTML or Markdown)
   */
  content?: string;
}

/**
 * Properties for listing posts
 */
export interface PostsListingOptions {
  /**
   * Range of posts to display [start, end?]
   */
  range?: [number] | [number, number];

  /**
   * Number of columns for the post grid
   */
  columns?: "1" | "2" | "3";

  /**
   * Whether to display post thumbnails
   */
  thumbnail?: boolean;

  /**
   * Layout direction for posts
   */
  direction?: "row" | "column";
}
