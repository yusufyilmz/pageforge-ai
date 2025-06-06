import type { ContentBlock, ContentSection } from "@pageforge/types/page/pageTypes";

export const ContentRenderer = {
  blockRenderers: new Map<string, (content: any, variant?: string) => any>(),

  // Register a renderer for a specific content block type
  registerBlockRenderer(type: string, renderer: (content: any, variant?: string) => any) {
    this.blockRenderers.set(type, renderer);
  },

  // Render a single content block
  renderBlock(block: ContentBlock): any {
    if (!block.display && block.display !== undefined) {
      return null;
    }

    const renderer = this.blockRenderers.get(block.type);
    if (!renderer) {
      console.warn(`No renderer found for block type: ${block.type}`);
      return null;
    }

    return renderer(block.content, block.variant);
  },

  // Render a content section with all its blocks
  renderSection(section: ContentSection): any {
    if (!section.display && section.display !== undefined) {
      return null;
    }

    const renderedBlocks = section.blocks.map((block) => this.renderBlock(block)).filter(Boolean);

    return {
      id: section.id,
      title: section.title,
      description: section.description,
      blocks: renderedBlocks,
      layout: section.layout,
    };
  },

  // Get available block types
  getAvailableBlockTypes(): string[] {
    return Array.from(this.blockRenderers.keys());
  },
};

// Default block renderers
ContentRenderer.registerBlockRenderer("text", (content, variant) => ({
  type: "text",
  content,
  variant: variant || "body",
}));

ContentRenderer.registerBlockRenderer("heading", (content, variant) => ({
  type: "heading",
  content,
  variant: variant || "h2",
}));

ContentRenderer.registerBlockRenderer("image", (content, variant) => ({
  type: "image",
  src: content.src,
  alt: content.alt,
  width: content.width,
  height: content.height,
  variant: variant || "default",
}));

ContentRenderer.registerBlockRenderer("button", (content, variant) => ({
  type: "button",
  text: content.text,
  href: content.href,
  variant: variant || "primary",
}));

ContentRenderer.registerBlockRenderer("gallery", (content, variant) => ({
  type: "gallery",
  images: content.images,
  variant: variant || "grid",
}));

ContentRenderer.registerBlockRenderer("list", (content, variant) => ({
  type: "list",
  items: content.items,
  variant: variant || "unordered",
}));

ContentRenderer.registerBlockRenderer("card", (content, variant) => ({
  type: "card",
  title: content.title,
  description: content.description,
  image: content.image,
  link: content.link,
  variant: variant || "default",
}));

ContentRenderer.registerBlockRenderer("spacer", (content, variant) => ({
  type: "spacer",
  height: content.height || "2rem",
  variant: variant || "default",
}));

ContentRenderer.registerBlockRenderer("divider", (content, variant) => ({
  type: "divider",
  variant: variant || "line",
}));

ContentRenderer.registerBlockRenderer("embed", (content, variant) => ({
  type: "embed",
  url: content.url,
  title: content.title,
  variant: variant || "iframe",
}));
