// Types for AI-driven section generation
export interface UserRequirement {
  description: string;
  context: string;
  industry?: string;
  pageType:
    | "landing"
    | "about"
    | "product"
    | "service"
    | "portfolio"
    | "blog"
    | "contact"
    | "custom";
  targetAudience?: string;
  businessGoals?: string[];
}

export interface SectionIntent {
  type: string;
  purpose: string;
  content: Record<string, any>;
  layout: "full-width" | "contained" | "split" | "grid" | "list";
  priority: number;
  dependencies?: string[];
}

export interface GeneratedSectionSpec {
  id: string;
  name: string;
  type: string;
  componentCode: string;
  contentSchema: Record<string, any>;
  defaultContent: Record<string, any>;
  styling: {
    variants: string[];
    defaultVariant: string;
    customCSS?: string;
  };
}

// AI Section Intelligence System
export class AISectionGenerator {
  private sectionTemplates: Map<string, any> = new Map();
  private industryPatterns: Map<string, string[]> = new Map();
  private contentPatterns: Map<string, any> = new Map();

  constructor() {
    this.initializeTemplates();
    this.initializeIndustryPatterns();
    this.initializeContentPatterns();
  }

  // Initialize common section templates
  private initializeTemplates() {
    this.sectionTemplates.set("hero-with-cta", {
      purpose: "main introduction with call to action",
      fields: ["title", "subtitle", "description", "primaryCTA", "secondaryCTA", "backgroundImage"],
      layouts: ["centered", "left-aligned", "right-aligned"],
      variations: ["minimal", "bold", "video-background", "image-background"],
    });

    this.sectionTemplates.set("features-showcase", {
      purpose: "highlight key features or benefits",
      fields: ["title", "subtitle", "features"],
      layouts: ["grid", "list", "carousel"],
      variations: ["icons", "images", "minimal", "detailed"],
    });

    this.sectionTemplates.set("testimonials-social-proof", {
      purpose: "build trust through customer testimonials",
      fields: ["title", "testimonials", "displayFormat"],
      layouts: ["carousel", "grid", "single-featured"],
      variations: ["quotes", "cards", "video-testimonials"],
    });

    this.sectionTemplates.set("contact-form", {
      purpose: "capture leads or enable communication",
      fields: ["title", "fields", "submitText", "privacyText"],
      layouts: ["simple", "detailed", "multi-step"],
      variations: ["minimal", "detailed", "with-contact-info"],
    });

    this.sectionTemplates.set("team-members", {
      purpose: "showcase team or key personnel",
      fields: ["title", "members", "displayStyle"],
      layouts: ["grid", "list", "featured"],
      variations: ["photos", "minimal", "detailed-bios"],
    });

    this.sectionTemplates.set("portfolio-gallery", {
      purpose: "display work, projects, or products",
      fields: ["title", "items", "filterOptions"],
      layouts: ["masonry", "grid", "carousel"],
      variations: ["lightbox", "overlay-info", "minimal"],
    });

    this.sectionTemplates.set("pricing-plans", {
      purpose: "present pricing options and packages",
      fields: ["title", "plans", "billing", "features"],
      layouts: ["cards", "table", "comparison"],
      variations: ["simple", "featured-plan", "enterprise"],
    });
  }

  // Initialize industry-specific patterns
  private initializeIndustryPatterns() {
    this.industryPatterns.set("restaurant", [
      "hero-with-ambiance",
      "menu-showcase",
      "location-hours",
      "reservation-system",
      "testimonials-reviews",
    ]);

    this.industryPatterns.set("agency", [
      "hero-with-cta",
      "services-overview",
      "portfolio-showcase",
      "team-members",
      "client-testimonials",
      "contact-form",
    ]);

    this.industryPatterns.set("ecommerce", [
      "product-hero",
      "featured-products",
      "categories-grid",
      "testimonials-social-proof",
      "shipping-returns",
      "newsletter-signup",
    ]);

    this.industryPatterns.set("saas", [
      "hero-with-demo",
      "features-benefits",
      "pricing-plans",
      "integration-showcase",
      "customer-testimonials",
      "free-trial-cta",
    ]);

    this.industryPatterns.set("portfolio", [
      "personal-hero",
      "work-showcase",
      "about-story",
      "skills-expertise",
      "contact-availability",
    ]);

    this.industryPatterns.set("healthcare", [
      "trust-building-hero",
      "services-overview",
      "team-credentials",
      "patient-testimonials",
      "appointment-booking",
      "location-contact",
    ]);
  }

  // Initialize content pattern recognition
  private initializeContentPatterns() {
    this.contentPatterns.set("menu", {
      sectionType: "menu-showcase",
      fields: ["categories", "items", "pricing", "descriptions", "dietary-info"],
      layout: "categorized-list",
    });

    this.contentPatterns.set("products", {
      sectionType: "product-grid",
      fields: ["products", "categories", "filters", "pricing"],
      layout: "grid-with-filters",
    });

    this.contentPatterns.set("services", {
      sectionType: "services-showcase",
      fields: ["services", "descriptions", "pricing", "duration"],
      layout: "cards-or-list",
    });

    this.contentPatterns.set("location", {
      sectionType: "location-info",
      fields: ["address", "hours", "contact", "map"],
      layout: "map-with-details",
    });
  }

  // Main method: Analyze user requirements and generate sections
  async analyzeAndGenerateSections(userRequirement: UserRequirement): Promise<SectionIntent[]> {
    const sections: SectionIntent[] = [];

    // Step 1: Extract intents from description
    const intents = this.extractIntents(userRequirement.description);

    // Step 2: Apply industry patterns
    const industryIntents = this.getIndustryIntents(userRequirement.industry);

    // Step 3: Combine and prioritize
    const combinedIntents = this.combineIntents(intents, industryIntents);

    // Step 4: Generate section specifications
    for (const intent of combinedIntents) {
      const sectionSpec = await this.generateSectionFromIntent(intent, userRequirement);
      sections.push(sectionSpec);
    }

    return sections;
  }

  // Extract intents from natural language description
  private extractIntents(description: string): SectionIntent[] {
    const intents: SectionIntent[] = [];
    const lowerDesc = description.toLowerCase();

    // Hero section detection
    if (
      lowerDesc.includes("landing") ||
      lowerDesc.includes("homepage") ||
      lowerDesc.includes("main page")
    ) {
      intents.push({
        type: "hero-with-cta",
        purpose: "main introduction",
        content: {},
        layout: "full-width",
        priority: 1,
      });
    }

    // Menu/Products detection
    if (lowerDesc.includes("menu") || lowerDesc.includes("food") || lowerDesc.includes("dishes")) {
      intents.push({
        type: "menu-showcase",
        purpose: "display menu items",
        content: {},
        layout: "contained",
        priority: 2,
      });
    }

    if (
      lowerDesc.includes("products") ||
      lowerDesc.includes("catalog") ||
      lowerDesc.includes("shop")
    ) {
      intents.push({
        type: "product-grid",
        purpose: "showcase products",
        content: {},
        layout: "grid",
        priority: 2,
      });
    }

    // Services detection
    if (
      lowerDesc.includes("services") ||
      lowerDesc.includes("what we do") ||
      lowerDesc.includes("offerings")
    ) {
      intents.push({
        type: "services-showcase",
        purpose: "highlight services",
        content: {},
        layout: "grid",
        priority: 2,
      });
    }

    // Contact detection
    if (
      lowerDesc.includes("contact") ||
      lowerDesc.includes("get in touch") ||
      lowerDesc.includes("reach out")
    ) {
      intents.push({
        type: "contact-form",
        purpose: "enable contact",
        content: {},
        layout: "contained",
        priority: 8,
      });
    }

    // Team detection
    if (
      lowerDesc.includes("team") ||
      lowerDesc.includes("staff") ||
      lowerDesc.includes("about us")
    ) {
      intents.push({
        type: "team-members",
        purpose: "introduce team",
        content: {},
        layout: "grid",
        priority: 5,
      });
    }

    // Location detection
    if (
      lowerDesc.includes("location") ||
      lowerDesc.includes("address") ||
      lowerDesc.includes("find us")
    ) {
      intents.push({
        type: "location-info",
        purpose: "show location",
        content: {},
        layout: "split",
        priority: 7,
      });
    }

    // Portfolio/Gallery detection
    if (
      lowerDesc.includes("portfolio") ||
      lowerDesc.includes("gallery") ||
      lowerDesc.includes("work") ||
      lowerDesc.includes("projects")
    ) {
      intents.push({
        type: "portfolio-gallery",
        purpose: "showcase work",
        content: {},
        layout: "grid",
        priority: 3,
      });
    }

    // Testimonials detection
    if (
      lowerDesc.includes("testimonials") ||
      lowerDesc.includes("reviews") ||
      lowerDesc.includes("feedback")
    ) {
      intents.push({
        type: "testimonials-social-proof",
        purpose: "build trust",
        content: {},
        layout: "contained",
        priority: 6,
      });
    }

    // Pricing detection
    if (
      lowerDesc.includes("pricing") ||
      lowerDesc.includes("plans") ||
      lowerDesc.includes("packages")
    ) {
      intents.push({
        type: "pricing-plans",
        purpose: "show pricing",
        content: {},
        layout: "contained",
        priority: 4,
      });
    }

    return intents;
  }

  // Get industry-specific section intents
  private getIndustryIntents(industry?: string): SectionIntent[] {
    if (!industry) {
      return [];
    }

    const patterns = this.industryPatterns.get(industry.toLowerCase()) || [];
    return patterns.map((pattern, index) => ({
      type: pattern,
      purpose: `industry-specific: ${pattern}`,
      content: {},
      layout: "contained" as const,
      priority: index + 10, // Lower priority than explicit user requests
    }));
  }

  // Combine and deduplicate intents
  private combineIntents(
    userIntents: SectionIntent[],
    industryIntents: SectionIntent[],
  ): SectionIntent[] {
    const combined = [...userIntents];
    const existingTypes = new Set(userIntents.map((intent) => intent.type));

    // Add industry intents that don't conflict
    for (const industryIntent of industryIntents) {
      if (!existingTypes.has(industryIntent.type)) {
        combined.push(industryIntent);
      }
    }

    // Sort by priority
    return combined.sort((a, b) => a.priority - b.priority);
  }

  // Generate actual section from intent
  private async generateSectionFromIntent(
    intent: SectionIntent,
    userReq: UserRequirement,
  ): Promise<SectionIntent> {
    const template = this.sectionTemplates.get(intent.type);

    if (template) {
      // Enrich intent with template data
      intent.content = {
        ...intent.content,
        fields: template.fields,
        variations: template.variations,
        layouts: template.layouts,
      };
    }

    // Add context-specific content
    intent.content = {
      ...intent.content,
      industry: userReq.industry,
      pageType: userReq.pageType,
      targetAudience: userReq.targetAudience,
    };

    return intent;
  }

  // Generate complete section specification
  async generateSectionSpecification(
    intent: SectionIntent,
    userReq: UserRequirement,
  ): Promise<GeneratedSectionSpec> {
    const sectionId = `${intent.type}-${Date.now()}`;
    const sectionName = this.generateSectionName(intent.type);

    // Generate component code
    const componentCode = await this.generateReactComponent(intent, userReq);

    // Generate content schema
    const contentSchema = this.generateContentSchema(intent);

    // Generate default content
    const defaultContent = this.generateDefaultContent(intent, userReq);

    return {
      id: sectionId,
      name: sectionName,
      type: intent.type,
      componentCode,
      contentSchema,
      defaultContent,
      styling: {
        variants: ["default", "minimal", "bold"],
        defaultVariant: "default",
      },
    };
  }

  private generateSectionName(type: string): string {
    return `${type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")}Section`;
  }

  private async generateReactComponent(
    intent: SectionIntent,
    userReq: UserRequirement,
  ): Promise<string> {
    const sectionName = this.generateSectionName(intent.type);
    const template = this.sectionTemplates.get(intent.type);

    return `'use client'


import {
  Flex,
  Heading,
  Text,
  Column,
  Button,
  Grid
} from '@pageforge/once-ui/components'
import {
  ContentBlock
} from '@pageforge/types/page/pageTypes'

interface ${sectionName}Props {
  block: ContentBlock
  index: number
}

export const ${sectionName} = ({ block, index }: ${sectionName}Props) => {
  const content = block.content

  if (block.display === false) return null

  return (
    <Flex
      fillWidth
      direction="column"
      alignItems="center"
      padding="xl"
      gap="l"
    >
      <Column maxWidth="m" fillWidth>
        <Flex direction="column" gap="m">
          <Heading variant="display-strong-s">
            {content?.title || '${this.generateDefaultTitle(intent, userReq)}'}
          </Heading>
          {content?.description && (
            <Text variant="body-default-l">
              {content.description}
            </Text>
          )}
          ${this.generateSectionContent(intent, template)}
        </Flex>
      </Column>
    </Flex>
  )
}
`;
  }

  private generateSectionContent(intent: SectionIntent, template: any): string {
    console.log(template);
    switch (intent.type) {
      case "menu-showcase":
        return `
          {content?.categories && (
            <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="l">
              {content.categories.map((category: any, idx: number) => (
                <Flex key={idx} direction="column" gap="s">
                  <Heading variant="heading-strong-m">{category.name}</Heading>
                  {category.items?.map((item: any, itemIdx: number) => (
                    <Flex key={itemIdx} justifyContent="space-between">
                      <Text>{item.name}</Text>
                      <Text variant="label-default-s">{item.price}</Text>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Grid>
          )}`;

      case "contact-form":
        return `
          <form style={{ width: '100%' }}>
            <Flex direction="column" gap="m">
              <input placeholder="Your Name" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <textarea placeholder="Your Message" rows={4} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <Button variant="primary" size="m">Send Message</Button>
            </Flex>
          </form>`;

      case "team-members":
        return `
          {content?.members && (
            <Grid columns="repeat(auto-fit, minmax(250px, 1fr))" gap="l">
              {content.members.map((member: any, idx: number) => (
                <Flex key={idx} direction="column" alignItems="center" gap="s">
                  {member.photo && (
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#f0f0f0' }}>
                      <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>
                  )}
                  <Heading variant="heading-strong-s">{member.name}</Heading>
                  <Text variant="label-default-s">{member.role}</Text>
                  {member.bio && <Text variant="body-default-s">{member.bio}</Text>}
                </Flex>
              ))}
            </Grid>
          )}`;

      default:
        return `
          {/* Custom content for ${intent.type} */}
          <Text>This is a dynamically generated ${intent.type} section.</Text>`;
    }
  }

  private generateDefaultTitle(intent: SectionIntent, userReq: UserRequirement): string {
    const industry = userReq.industry || "business";

    switch (intent.type) {
      case "hero-with-cta":
        return `Welcome to Our ${industry.charAt(0).toUpperCase() + industry.slice(1)}`;
      case "menu-showcase":
        return "Our Menu";
      case "contact-form":
        return "Get In Touch";
      case "team-members":
        return "Meet Our Team";
      case "services-showcase":
        return "Our Services";
      case "portfolio-gallery":
        return "Our Work";
      case "location-info":
        return "Find Us";
      case "testimonials-social-proof":
        return "What Our Customers Say";
      case "pricing-plans":
        return "Our Pricing";
      default:
        return intent.purpose;
    }
  }

  private generateContentSchema(intent: SectionIntent): Record<string, any> {
    const template = this.sectionTemplates.get(intent.type);
    if (!template) {
      return {};
    }

    const schema: Record<string, any> = {};

    for (const field of template.fields) {
      switch (field) {
        case "title":
        case "subtitle":
        case "description":
          schema[field] = { type: "string", required: field === "title" };
          break;
        case "features":
        case "testimonials":
        case "members":
        case "categories":
        case "items":
          schema[field] = { type: "array", required: true };
          break;
        case "primaryCTA":
        case "secondaryCTA":
          schema[field] = {
            type: "object",
            properties: {
              text: { type: "string" },
              href: { type: "string" },
              variant: {
                type: "string",
                enum: ["primary", "secondary", "tertiary"],
              },
            },
          };
          break;
        default:
          schema[field] = { type: "string" };
      }
    }

    return schema;
  }

  private generateDefaultContent(
    intent: SectionIntent,
    userReq: UserRequirement,
  ): Record<string, any> {
    const content: Record<string, any> = {
      title: this.generateDefaultTitle(intent, userReq),
    };

    switch (intent.type) {
      case "menu-showcase":
        content.categories = [
          {
            name: "Appetizers",
            items: [
              {
                name: "Sample Appetizer",
                price: "$8.99",
                description: "Delicious starter",
              },
            ],
          },
          {
            name: "Main Courses",
            items: [
              {
                name: "Sample Main Course",
                price: "$16.99",
                description: "Our signature dish",
              },
            ],
          },
        ];
        break;

      case "team-members":
        content.members = [
          {
            name: "John Doe",
            role: "Founder & CEO",
            bio: "Passionate about delivering exceptional service",
            photo: "/images/team/placeholder.jpg",
          },
        ];
        break;

      case "contact-form":
        content.fields = ["name", "email", "message"];
        content.submitText = "Send Message";
        break;
    }

    return content;
  }
}

// Export singleton instance
export const aiSectionGenerator = new AISectionGenerator();
