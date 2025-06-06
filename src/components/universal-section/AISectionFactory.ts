import {
  type CSSProperties,
  type ComponentType,
  type ReactElement,
  createElement,
  useState,
} from "react";

import {
  Avatar,
  Button,
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  Text,
  Textarea,
} from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface SectionProps {
  block: ContentBlock;
  index: number;
  posts?: any[];
  data?: any;
}

interface SectionRequirement {
  description: string;
  elements: Array<{
    type:
      | "text"
      | "image"
      | "button"
      | "list"
      | "grid"
      | "form"
      | "video"
      | "map"
      | "rating"
      | "social"
      | "card"
      | "chart"
      | "timeline"
      | "accordion"
      | "tabs"
      | "carousel"
      | "counter"
      | "progress"
      | "custom";
    content: string;
    properties?: Record<string, any>;
    customCode?: string; // For completely custom elements
  }>;
  layout:
    | "single-column"
    | "two-column"
    | "three-column"
    | "grid"
    | "flex"
    | "hero"
    | "sidebar"
    | "masonry"
    | "split"
    | "custom";
  style?:
    | "modern"
    | "minimal"
    | "bold"
    | "elegant"
    | "playful"
    | "corporate"
    | "creative"
    | "technical";
  interactions?: Array<{
    trigger: "click" | "hover" | "scroll" | "load";
    action: "modal" | "animation" | "navigation" | "form_submit" | "api_call";
    target?: string;
  }>;
  customRequirements?: string; // For handling unusual or specific requests
}

interface GeneratedSectionConfig {
  id: string;
  name: string;
  type: string;
  requirements: SectionRequirement;
  component: ComponentType<SectionProps>;
  timestamp: number;
}

class AISectionFactory {
  private generatedSections = new Map<string, ComponentType<SectionProps>>();
  private sectionConfigs = new Map<string, GeneratedSectionConfig>();

  // Analyze user's natural language description
  analyzeUserRequirements(userDescription: string): SectionRequirement {
    // Enhanced pattern matching for diverse section types
    const elements: SectionRequirement["elements"] = [];
    const interactions: SectionRequirement["interactions"] = [];
    const description = userDescription.toLowerCase();

    // Detect layout preferences
    let layout: SectionRequirement["layout"] = "single-column";
    if (description.includes("grid") || description.includes("cards")) {
      layout = "grid";
    }
    if (description.includes("two column") || description.includes("side by side")) {
      layout = "two-column";
    }
    if (description.includes("three column")) {
      layout = "three-column";
    }
    if (description.includes("hero") || description.includes("banner")) {
      layout = "hero";
    }
    if (description.includes("sidebar")) {
      layout = "sidebar";
    }
    if (description.includes("masonry") || description.includes("pinterest")) {
      layout = "masonry";
    }
    if (description.includes("split screen")) {
      layout = "split";
    }

    // Detect style preferences
    let style: SectionRequirement["style"] = "modern";
    if (description.includes("minimal") || description.includes("clean")) {
      style = "minimal";
    }
    if (description.includes("bold") || description.includes("vibrant")) {
      style = "bold";
    }
    if (description.includes("elegant") || description.includes("sophisticated")) {
      style = "elegant";
    }
    if (description.includes("playful") || description.includes("fun")) {
      style = "playful";
    }
    if (description.includes("corporate") || description.includes("professional")) {
      style = "corporate";
    }
    if (description.includes("creative") || description.includes("artistic")) {
      style = "creative";
    }
    if (description.includes("technical") || description.includes("developer")) {
      style = "technical";
    }

    // Enhanced element detection with more patterns
    this.detectCommonElements(description, elements);
    this.detectAdvancedElements(description, elements);
    this.detectInteractiveElements(description, elements, interactions);
    this.detectCustomElements(description, elements);

    // If no specific elements detected, try to infer from context
    if (elements.length === 0) {
      elements.push(...this.inferElementsFromContext(description));
    }

    return {
      description: userDescription,
      elements,
      layout,
      style,
      interactions,
      customRequirements: this.extractCustomRequirements(description),
    };
  }

  private detectCommonElements(description: string, elements: SectionRequirement["elements"]) {
    // Team/People sections
    if (
      description.includes("team") ||
      description.includes("members") ||
      description.includes("staff")
    ) {
      elements.push({
        type: "card",
        content: "team member cards",
        properties: {
          showImage: true,
          showBio: true,
          showSocial: !description.includes("no social"),
          showTitle: true,
          cardStyle: description.includes("minimal") ? "minimal" : "detailed",
        },
      });
    }

    // Reviews/Testimonials
    if (
      description.includes("review") ||
      description.includes("testimonial") ||
      description.includes("feedback")
    ) {
      elements.push({
        type: "rating",
        content: "customer reviews",
        properties: {
          showStars: !description.includes("no rating"),
          showAuthor: true,
          showAvatar: description.includes("photo"),
          format: description.includes("carousel") ? "carousel" : "grid",
        },
      });
    }

    // Contact forms
    if (
      description.includes("contact") ||
      description.includes("form") ||
      description.includes("submit")
    ) {
      const fields = this.extractFormFields(description);
      elements.push({
        type: "form",
        content: "contact form",
        properties: {
          fields,
          validation: true,
          submitAction: description.includes("email") ? "email" : "api",
        },
      });
    }

    // Gallery/Images
    if (
      description.includes("gallery") ||
      description.includes("images") ||
      description.includes("photos")
    ) {
      elements.push({
        type: "grid",
        content: "image gallery",
        properties: {
          columns: this.extractColumnCount(description, 3),
          lightbox: !description.includes("no lightbox"),
          aspectRatio: description.includes("square") ? "1:1" : "16:9",
        },
      });
    }

    // Video content
    if (
      description.includes("video") ||
      description.includes("embed") ||
      description.includes("youtube")
    ) {
      elements.push({
        type: "video",
        content: "video player",
        properties: {
          autoplay: description.includes("autoplay"),
          controls: !description.includes("no controls"),
          responsive: true,
        },
      });
    }
  }

  private detectAdvancedElements(description: string, elements: SectionRequirement["elements"]) {
    // Charts and data visualization
    if (
      description.includes("chart") ||
      description.includes("graph") ||
      description.includes("data") ||
      description.includes("analytics")
    ) {
      const chartType = this.detectChartType(description);
      elements.push({
        type: "chart",
        content: "data visualization",
        properties: {
          chartType,
          animated: description.includes("animated"),
          interactive: description.includes("interactive"),
        },
      });
    }

    // Timeline
    if (
      description.includes("timeline") ||
      description.includes("roadmap") ||
      description.includes("history")
    ) {
      elements.push({
        type: "timeline",
        content: "timeline component",
        properties: {
          orientation: description.includes("horizontal") ? "horizontal" : "vertical",
          showDates: true,
          animated: description.includes("animated"),
        },
      });
    }

    // Accordion/FAQ
    if (
      description.includes("accordion") ||
      description.includes("faq") ||
      description.includes("collapsible")
    ) {
      elements.push({
        type: "accordion",
        content: "expandable content",
        properties: {
          allowMultiple: description.includes("multiple"),
          animated: true,
        },
      });
    }

    // Tabs
    if (description.includes("tabs") || description.includes("tabbed")) {
      elements.push({
        type: "tabs",
        content: "tabbed content",
        properties: {
          orientation: description.includes("vertical") ? "vertical" : "horizontal",
          variant: description.includes("pills") ? "pills" : "underline",
        },
      });
    }

    // Carousel/Slider
    if (
      description.includes("carousel") ||
      description.includes("slider") ||
      description.includes("slideshow")
    ) {
      elements.push({
        type: "carousel",
        content: "content carousel",
        properties: {
          autoplay: description.includes("autoplay"),
          dots: !description.includes("no dots"),
          arrows: !description.includes("no arrows"),
          infinite: description.includes("infinite"),
        },
      });
    }

    // Counters/Statistics
    if (
      description.includes("counter") ||
      description.includes("statistic") ||
      description.includes("number")
    ) {
      elements.push({
        type: "counter",
        content: "animated counters",
        properties: {
          animated: description.includes("animated"),
          duration: 2000,
          format: "number",
        },
      });
    }

    // Progress bars
    if (
      description.includes("progress") ||
      description.includes("skill") ||
      description.includes("percentage")
    ) {
      elements.push({
        type: "progress",
        content: "progress indicators",
        properties: {
          animated: description.includes("animated"),
          showLabel: true,
          variant: description.includes("circular") ? "circular" : "linear",
        },
      });
    }

    // Maps
    if (
      description.includes("map") ||
      description.includes("location") ||
      description.includes("address")
    ) {
      elements.push({
        type: "map",
        content: "interactive map",
        properties: {
          interactive: !description.includes("static"),
          showMarkers: true,
          zoom: 15,
        },
      });
    }
  }

  private detectInteractiveElements(
    description: string,
    _elements: SectionRequirement["elements"],
    interactions: SectionRequirement["interactions"]
  ) {
    if (!interactions) {
      return;
    }

    // Modal/Popup interactions
    if (
      description.includes("modal") ||
      description.includes("popup") ||
      description.includes("lightbox")
    ) {
      interactions.push({
        trigger: "click",
        action: "modal",
        target: "content",
      });
    }

    // Hover effects
    if (description.includes("hover") || description.includes("on mouse over")) {
      interactions.push({
        trigger: "hover",
        action: "animation",
      });
    }

    // Scroll animations
    if (
      description.includes("scroll") ||
      description.includes("appear") ||
      description.includes("fade in")
    ) {
      interactions.push({
        trigger: "scroll",
        action: "animation",
      });
    }

    // Form submissions
    if (description.includes("submit") || description.includes("send")) {
      interactions.push({
        trigger: "click",
        action: "form_submit",
      });
    }

    // API calls
    if (
      description.includes("load data") ||
      description.includes("fetch") ||
      description.includes("api")
    ) {
      interactions.push({
        trigger: "load",
        action: "api_call",
      });
    }
  }

  private detectCustomElements(description: string, elements: SectionRequirement["elements"]) {
    // Custom business-specific elements
    if (description.includes("pricing") || description.includes("plan")) {
      elements.push({
        type: "card",
        content: "pricing plans",
        properties: {
          highlight: "popular",
          billing: description.includes("annual") ? "annual" : "monthly",
          features: true,
        },
      });
    }

    if (
      description.includes("blog") ||
      description.includes("article") ||
      description.includes("post")
    ) {
      elements.push({
        type: "card",
        content: "blog posts",
        properties: {
          showExcerpt: true,
          showDate: true,
          showAuthor: true,
          showTags: description.includes("tag"),
        },
      });
    }

    if (
      description.includes("product") ||
      description.includes("catalog") ||
      description.includes("shop")
    ) {
      elements.push({
        type: "card",
        content: "product cards",
        properties: {
          showPrice: true,
          showRating: description.includes("rating"),
          addToCart: description.includes("cart"),
          quickView: description.includes("preview"),
        },
      });
    }

    // If it's something completely custom
    if (
      description.includes("custom") ||
      description.includes("unique") ||
      description.includes("special")
    ) {
      elements.push({
        type: "custom",
        content: "custom component",
        properties: {
          requirement: description,
        },
        customCode: this.generateCustomComponentCode(description),
      });
    }
  }

  private inferElementsFromContext(description: string): SectionRequirement["elements"] {
    // Try to infer what the user wants based on context clues
    const elements: SectionRequirement["elements"] = [];

    if (description.includes("show") || description.includes("display")) {
      elements.push({
        type: "text",
        content: "content display",
        properties: { format: "rich" },
      });
    }

    if (description.includes("list") || description.includes("items")) {
      elements.push({
        type: "list",
        content: "item list",
        properties: { numbered: description.includes("numbered") },
      });
    }

    if (
      description.includes("button") ||
      description.includes("click") ||
      description.includes("action")
    ) {
      elements.push({
        type: "button",
        content: "action button",
        properties: { variant: "primary" },
      });
    }

    // Default fallback
    if (elements.length === 0) {
      elements.push({
        type: "text",
        content: "flexible content area",
        properties: { adaptable: true },
      });
    }

    return elements;
  }

  private extractFormFields(description: string): string[] {
    const fields = ["name", "email"]; // Always include these basics

    if (description.includes("phone")) {
      fields.push("phone");
    }
    if (description.includes("company")) {
      fields.push("company");
    }
    if (description.includes("website")) {
      fields.push("website");
    }
    if (description.includes("budget")) {
      fields.push("budget");
    }
    if (description.includes("timeline")) {
      fields.push("timeline");
    }
    if (description.includes("message") || description.includes("comment")) {
      fields.push("message");
    }
    if (description.includes("address")) {
      fields.push("address");
    }
    if (description.includes("subject")) {
      fields.push("subject");
    }

    return fields;
  }

  private extractColumnCount(description: string, defaultCount: number): number {
    const matches = description.match(/(\d+)\s*column/i);
    if (matches) {
      return Number.parseInt(matches[1]);
    }

    if (description.includes("two")) {
      return 2;
    }
    if (description.includes("three")) {
      return 3;
    }
    if (description.includes("four")) {
      return 4;
    }
    if (description.includes("five")) {
      return 5;
    }

    return defaultCount;
  }

  private detectChartType(description: string): string {
    if (description.includes("bar")) {
      return "bar";
    }
    if (description.includes("line")) {
      return "line";
    }
    if (description.includes("pie")) {
      return "pie";
    }
    if (description.includes("donut")) {
      return "donut";
    }
    if (description.includes("area")) {
      return "area";
    }
    if (description.includes("scatter")) {
      return "scatter";
    }
    return "bar"; // default
  }

  private extractCustomRequirements(description: string): string {
    // Extract any specific requirements that don't fit standard patterns
    const customPhrases = [];

    if (description.includes("must")) {
      const mustMatch = description.match(/must\s+([^.!?]+)/gi);
      if (mustMatch) {
        customPhrases.push(...mustMatch);
      }
    }

    if (description.includes("need")) {
      const needMatch = description.match(/need\s+([^.!?]+)/gi);
      if (needMatch) {
        customPhrases.push(...needMatch);
      }
    }

    if (description.includes("should")) {
      const shouldMatch = description.match(/should\s+([^.!?]+)/gi);
      if (shouldMatch) {
        customPhrases.push(...shouldMatch);
      }
    }

    return customPhrases.join("; ");
  }

  private generateCustomComponentCode(description: string): string {
    // Generate a basic custom component structure
    return `
    // Custom component based on: ${description}
    <Flex direction="column" gap="m" fillWidth>
      <Heading variant="display-strong-s">Custom Section</Heading>
      <Text variant="body-default-m">
        This is a custom section generated based on your specific requirements.
        Implementation details would be added based on the full description.
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        Requirements: ${description}
      </Text>
    </Flex>
    `;
  }

  // Generate React component based on requirements
  generateSectionComponent(
    requirements: SectionRequirement,
    sectionName: string
  ): ComponentType<SectionProps> {
    const componentName = `${sectionName}Section`;

    const Component = ({ block }: SectionProps) => {
      const [activeTab, setActiveTab] = useState(0);
      const [openAccordions, setOpenAccordions] = useState<number[]>([]);
      const [formData, setFormData] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      // const [countersVisible, setCountersVisible] = useState(false)

      const content = block.content || {};

      if (block.display === false) {
        return null;
      }

      const styleProps = this.getStyleProps(requirements);
      const headerSection = this.generateHeaderSection(content);
      const layoutContent = this.generateLayoutContent(requirements, content, {
        activeTab,
        setActiveTab,
        openAccordions,
        setOpenAccordions,
        formData,
        setFormData,
        isSubmitting,
        setIsSubmitting,
      });
      const footerSection = this.generateFooterSection(requirements, content);

      return createElement(
        Flex,
        {
          fillWidth: true,
          direction: "column",
          align: "center",
          padding: "xl",
          gap: "l",
          style: styleProps,
        },
        createElement(
          Column,
          { maxWidth: "l", fillWidth: true },
          headerSection,
          layoutContent,
          footerSection
        )
      );
    };

    // Set display name for debugging
    Component.displayName = componentName;

    return Component;
  }

  private getStyleProps(requirements: SectionRequirement): CSSProperties {
    const styles: CSSProperties = {};

    switch (requirements.style) {
      case "minimal":
        styles.background = "var(--neutral-50)";
        break;
      case "bold":
        styles.background = "linear-gradient(135deg, var(--accent-500), var(--accent-600))";
        styles.color = "white";
        break;
      case "elegant":
        styles.background = "var(--neutral-100)";
        styles.borderTop = "1px solid var(--neutral-200)";
        break;
      case "creative":
        styles.background = "linear-gradient(45deg, var(--accent-100), var(--accent-200))";
        break;
    }

    return styles;
  }

  private generateHeaderSection(content: any): ReactElement | null {
    if (!content.title) {
      return null;
    }

    return createElement(
      Flex,
      {
        direction: "column",
        align: "center",
        gap: "s",
        marginBottom: "xl",
      },
      createElement(
        Heading,
        {
          variant: "display-strong-l",
          textAlign: "center",
        },
        content.title
      ),
      content.subtitle &&
        createElement(
          Text,
          {
            variant: "body-default-l",
            textAlign: "center",
            onBackground: "neutral-weak",
          },
          content.subtitle
        )
    );
  }

  private generateFooterSection(
    requirements: SectionRequirement,
    content: any
  ): ReactElement | null {
    if (!requirements.elements.some((e) => e.type === "button") || !content.ctaButton) {
      return null;
    }

    return createElement(
      Flex,
      {
        horizontal: "center",
        marginTop: "xl",
      },
      createElement(
        Button,
        {
          variant: "primary",
          size: "l",
          href: content.ctaButton.href,
        },
        content.ctaButton.text
      )
    );
  }

  // Generate layout-specific content
  private generateLayoutContent(
    requirements: SectionRequirement,
    content: any,
    state: any
  ): ReactElement {
    // Check for specific element types that override layout
    if (requirements.elements.some((e) => e.type === "tabs")) {
      return this.generateTabsLayout(requirements, content, state);
    }

    if (requirements.elements.some((e) => e.type === "accordion")) {
      return this.generateAccordionLayout(requirements, content, state);
    }

    if (requirements.elements.some((e) => e.type === "timeline")) {
      return this.generateTimelineLayout(requirements, content, state);
    }

    if (requirements.elements.some((e) => e.type === "carousel")) {
      return this.generateCarouselLayout(requirements, content, state);
    }

    if (requirements.elements.some((e) => e.type === "form")) {
      return this.generateFormLayout(requirements, content, state);
    }

    if (requirements.elements.some((e) => e.type === "custom")) {
      return this.generateCustomLayout(requirements, content, state);
    }

    // Default layout-based generation
    switch (requirements.layout) {
      case "grid":
      case "masonry":
        return this.generateGridLayout(requirements, content, state);
      case "two-column":
      case "split":
        return this.generateTwoColumnLayout(requirements, content, state);
      case "three-column":
        return this.generateThreeColumnLayout(requirements, content, state);
      case "hero":
        return this.generateHeroLayout(requirements, content, state);
      case "sidebar":
        return this.generateSidebarLayout(requirements, content, state);
      case "custom":
        return this.generateCustomLayout(requirements, content, state);
      default:
        return this.generateSingleColumnLayout(requirements, content, state);
    }
  }

  private generateGridLayout(
    requirements: SectionRequirement,
    content: any,
    _state: any
  ): ReactElement {
    const elements = requirements.elements;

    // Enhanced grid layouts for different element types
    if (elements.some((e) => e.type === "card")) {
      const cardElement = elements.find((e) => e.type === "card");
      const columns = cardElement?.properties?.columns || 3;

      return createElement(
        Grid,
        { columns, gap: "m" },
        ...(content.items || []).map((item: any, index: number) =>
          createElement(
            Card,
            {
              key: index,
              padding: "m",
              border: "neutral-medium",
              ...this.generateCardInteractions(requirements),
            },
            createElement(
              Flex,
              {
                direction: "column",
                gap: "s",
                align: "center",
              },
              ...this.generateCardContent(cardElement, item)
            )
          )
        )
      );
    }

    if (elements.some((e) => e.type === "counter")) {
      return createElement(
        Grid,
        { columns: 4, gap: "m" },
        ...(content.stats || []).map((stat: any, index: number) =>
          createElement(
            Card,
            {
              key: index,
              padding: "l",
              style: { textAlign: "center" },
            },
            createElement(
              Flex,
              {
                direction: "column",
                gap: "s",
                align: "center",
              },
              createElement(
                Heading,
                {
                  variant: "display-strong-xl",
                  style: {
                    color: "var(--accent-500)",
                    fontSize: "3rem",
                  },
                },
                stat.value
              ),
              createElement(
                Text,
                {
                  variant: "body-default-m",
                  weight: "strong",
                },
                stat.label
              ),
              stat.description &&
                createElement(
                  Text,
                  {
                    variant: "body-default-s",
                    onBackground: "neutral-weak",
                  },
                  stat.description
                )
            )
          )
        )
      );
    }

    return createElement(
      Grid,
      { columns: 3, gap: "m" },
      createElement(Text, null, "Enhanced grid content")
    );
  }

  private generateCardContent(cardElement: any, item: any): ReactElement[] {
    const elements: ReactElement[] = [];

    if (!cardElement?.properties) {
      elements.push(
        createElement(Heading, { key: "title", variant: "heading-strong-s" }, item.title)
      );
      elements.push(
        createElement(Text, { key: "description", variant: "body-default-s" }, item.description)
      );
      return elements;
    }

    const props = cardElement.properties;

    if (props.showImage && item.image) {
      elements.push(
        createElement(Avatar, {
          key: "avatar",
          size: "l",
          src: item.image,
          alt: item.name,
        })
      );
    }

    elements.push(
      createElement(Heading, { key: "name", variant: "heading-strong-s" }, item.name || item.title)
    );

    if ((props.showTitle || props.showRole) && item.role) {
      elements.push(
        createElement(
          Text,
          {
            key: "role",
            variant: "body-default-s",
            onBackground: "neutral-weak",
          },
          item.role
        )
      );
    }

    if (props.showBio && item.bio) {
      elements.push(
        createElement(
          Text,
          {
            key: "bio",
            variant: "body-default-s",
            align: "center",
          },
          item.bio
        )
      );
    }

    if (props.showPrice && item.price) {
      elements.push(
        createElement(
          Text,
          {
            key: "price",
            variant: "heading-strong-m",
            style: { color: "var(--accent-500)" },
          },
          item.price
        )
      );
    }

    if (props.showRating && item.rating) {
      elements.push(
        createElement(
          Flex,
          { key: "rating", gap: "xs", align: "center" },
          createElement(Icon, {
            name: "star",
            size: "s",
            style: { color: "var(--warning-500" },
          }),
          createElement(Text, { variant: "body-default-s" }, item.rating)
        )
      );
    }

    if (props.addToCart) {
      elements.push(
        createElement(
          Button,
          {
            key: "cart",
            variant: "primary",
            size: "s",
          },
          "Add to Cart"
        )
      );
    }

    return elements;
  }

  private generateCardInteractions(requirements: SectionRequirement): any {
    const interactions = requirements.interactions || [];
    const hoverEffect = interactions.find((i) => i.trigger === "hover");

    if (hoverEffect) {
      return {
        style: {
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
        },
        onMouseEnter: (e: any) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
        },
        onMouseLeave: (e: any) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        },
      };
    }

    return {};
  }

  private generateTwoColumnLayout(
    _requirements: SectionRequirement,
    content: any,
    _state: any
  ): ReactElement {
    return createElement(
      Grid,
      { columns: 2, gap: "xl", align: "center" },
      createElement(
        Flex,
        { direction: "column", gap: "m" },
        createElement(Heading, { variant: "display-strong-s" }, content.title || "Section Title"),
        createElement(
          Text,
          { variant: "body-default-l" },
          content.description || "Section description"
        ),
        content.features &&
          createElement(
            Flex,
            { direction: "column", gap: "s" },
            ...content.features.map((feature: string, index: number) =>
              createElement(
                Flex,
                { key: index, gap: "s", align: "center" },
                createElement(Icon, { name: "check", size: "s" }),
                createElement(Text, { variant: "body-default-m" }, feature)
              )
            )
          )
      ),
      createElement(
        Flex,
        { direction: "column", gap: "m" },
        content.image &&
          createElement("img", {
            src: content.image,
            alt: content.imageAlt,
            style: { width: "100%", borderRadius: "8px" },
          })
      )
    );
  }

  private generateSingleColumnLayout(
    requirements: SectionRequirement,
    content: any,
    state: any
  ): ReactElement {
    const hasForm = requirements.elements.some((e) => e.type === "form");
    const hasRating = requirements.elements.some((e) => e.type === "rating");

    if (hasForm) {
      return this.generateFormLayout(requirements, content, state);
    }

    if (hasRating) {
      return createElement(
        Flex,
        { direction: "column", gap: "l" },
        createElement(
          Heading,
          {
            variant: "display-strong-s",
            textAlign: "center",
          },
          content.title || "Customer Reviews"
        ),
        createElement(
          Grid,
          { columns: 1, gap: "m" },
          ...(content.reviews || []).map((review: any, index: number) =>
            createElement(
              Card,
              { key: index, padding: "l" },
              createElement(
                Flex,
                { direction: "column", gap: "s" },
                createElement(
                  Flex,
                  { align: "center", gap: "s" },
                  createElement(Avatar, {
                    size: "s",
                    src: review.avatar,
                    alt: review.name,
                  }),
                  createElement(
                    Flex,
                    { direction: "column", gap: "xs" },
                    createElement(Text, { variant: "heading-strong-xs" }, review.name),
                    createElement(
                      Flex,
                      { gap: "xs" },
                      ...[...Array(5)].map((_, i) =>
                        createElement(Icon, {
                          key: i,
                          name: "star",
                          size: "xs",
                          style: {
                            color: i < review.rating ? "#ffd700" : "#ddd",
                          },
                        })
                      )
                    )
                  )
                ),
                createElement(Text, { variant: "body-default-m" }, review.text)
              )
            )
          )
        )
      );
    }

    return createElement(
      Flex,
      { direction: "column", gap: "l", align: "center" },
      createElement(Heading, { variant: "display-strong-s" }, content.title || "Section Title"),
      createElement(
        Text,
        { variant: "body-default-l", textAlign: "center" },
        content.description || "Section content"
      )
    );
  }

  private generateFormLayout(
    requirements: SectionRequirement,
    content: any,
    state: any
  ): ReactElement {
    const formElement = requirements.elements.find((e) => e.type === "form");
    const fields = formElement?.properties?.fields || ["name", "email", "message"];

    return createElement(
      Card,
      {
        padding: "xl",
        maxWidth: "m",
        style: { margin: "0 auto" },
      },
      createElement(
        "form",
        {
          onSubmit: (e: any) => {
            e.preventDefault();
            state.setIsSubmitting(true);
            setTimeout(() => state.setIsSubmitting(false), 2000);
          },
        },
        createElement(
          Flex,
          { direction: "column", gap: "l" },
          createElement(
            Heading,
            {
              variant: "heading-strong-l",
              align: "center",
            },
            content.title || "Contact Us"
          ),
          content.description &&
            createElement(
              Text,
              {
                variant: "body-default-m",
                align: "center",
                onBackground: "neutral-weak",
              },
              content.description
            ),
          createElement(
            Flex,
            { direction: "column", gap: "m" },
            ...fields.map((field: string, index: number) =>
              this.generateFormField(field, index, state)
            )
          ),
          createElement(
            Button,
            {
              type: "submit",
              variant: "primary",
              size: "l",
              fillWidth: true,
              loading: state.isSubmitting,
            },
            state.isSubmitting ? "Sending..." : content.submitText || "Send Message"
          )
        )
      )
    );
  }

  private generateFormField(field: string, index: number, state: any): ReactElement {
    const commonProps = {
      key: index,
      value: state.formData[field] || "",
      onChange: (e: any) =>
        state.setFormData((prev: any) => ({
          ...prev,
          [field]: e.target.value,
        })),
    };

    switch (field) {
      case "name":
        return createElement(Input, {
          ...commonProps,
          id: "name",
          placeholder: "Your Name",
          required: true,
        });
      case "email":
        return createElement(Input, {
          ...commonProps,
          id: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        });
      case "phone":
        return createElement(Input, {
          ...commonProps,
          type: "tel",
          placeholder: "Your Phone",
          id: "phone",
        });
      case "message":
        return createElement(Textarea, {
          ...commonProps,
          placeholder: "Your Message",
          rows: 5,
          required: true,
          id: "message",
        });
      default:
        return createElement(Input, {
          ...commonProps,
          id: "default",
          placeholder: field.charAt(0).toUpperCase() + field.slice(1),
        });
    }
  }

  // Stub implementations for other layout methods
  private generateThreeColumnLayout(
    _requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(Text, null, "Three column layout component");
  }

  private generateHeroLayout(
    _requirements: SectionRequirement,
    content: any,
    _state: any
  ): ReactElement {
    return createElement(
      Flex,
      { direction: "column", align: "center", gap: "l" },
      createElement(Heading, { variant: "display-strong-l" }, content.title || "Hero Title"),
      createElement(
        Text,
        { variant: "body-default-l", maxWidth: "m" },
        content.subtitle || "Hero subtitle"
      )
    );
  }

  private generateSidebarLayout(
    _requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(Text, null, "Sidebar layout component");
  }

  private generateTabsLayout(
    _requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(Text, null, "Tabs layout component");
  }

  private generateAccordionLayout(
    _requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(Text, null, "Accordion layout component");
  }

  private generateTimelineLayout(
    _requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(Text, null, "Timeline layout component");
  }

  private generateCarouselLayout(
    _requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(Text, null, "Carousel layout component");
  }

  private generateCustomLayout(
    requirements: SectionRequirement,
    _content: any,
    _state: any
  ): ReactElement {
    return createElement(
      Flex,
      { direction: "column", gap: "l", align: "center" },
      createElement(
        Card,
        {
          padding: "xl",
          border: "accent-medium",
          style: {
            background: "linear-gradient(135deg, var(--accent-50), var(--accent-100))",
            textAlign: "center",
          },
        },
        createElement(
          Flex,
          { direction: "column", gap: "m" },
          createElement(Icon, {
            name: "sparkles",
            size: "l",
            style: { color: "var(--accent-500)" },
          }),
          createElement(Heading, { variant: "heading-strong-l" }, "Custom Section"),
          createElement(
            Text,
            {
              variant: "body-default-m",
              onBackground: "neutral-weak",
            },
            "This section was generated based on your specific requirements:"
          ),
          createElement(
            Text,
            {
              variant: "body-default-s",
              style: {
                fontStyle: "italic",
                padding: "12px",
                background: "var(--neutral-50)",
                borderRadius: "8px",
              },
            },
            `"${requirements.description}"`
          )
        )
      )
    );
  }

  // Generate React component code as string (for backward compatibility)
  generateSectionCode(requirements: SectionRequirement, sectionName: string): string {
    const componentName = `${sectionName}Section`;
    const imports = this.generateImports(requirements);

    return `'use client'

import React, { useState, useEffect } from 'react'
import {
  Flex,
  Heading,
  Text,
  Column,
  Grid,
  Card,
  Button,
  Icon,
  Avatar,
  Badge,
  Input,
  Textarea,
  Select
} from '@pageforge/once-ui/components'
import { ContentBlock } from '@pageforge/types/page/pageTypes'
${imports}

interface ${componentName}Props {
  block: ContentBlock
  index: number
}

export const ${componentName} = ({ block, index }: ${componentName}Props) => {
  const content = block.content || {}
  ${this.generateStateHooks(requirements)}

  if (block.display === false) return null

  return (
    <Flex
      fillWidth
      direction="column"
      align="center"
      padding="xl"
      gap="l"
      style={${this.generateStyleObject(requirements)}}
    >
      <Column maxWidth="l" fillWidth>
        ${this.generateHeaderSectionString(requirements)}
        ${this.generateLayoutCodeString(requirements)}
        ${this.generateFooterSectionString(requirements)}
      </Column>
    </Flex>
  )
}
`;
  }

  private generateImports(requirements: SectionRequirement): string {
    const imports = [];

    if (requirements.elements.some((e) => e.type === "chart")) {
      imports.push("// import { Chart } from 'react-chartjs-2'");
    }

    if (requirements.elements.some((e) => e.type === "map")) {
      imports.push("// import { GoogleMap } from '@react-google-maps/api'");
    }

    if (requirements.elements.some((e) => e.type === "carousel")) {
      imports.push("// import { Swiper, SwiperSlide } from 'swiper/react'");
    }

    return imports.join("\n");
  }

  private generateStateHooks(requirements: SectionRequirement): string {
    const hooks = [];

    if (requirements.elements.some((e) => e.type === "tabs")) {
      hooks.push("const [activeTab, setActiveTab] = useState(0)");
    }

    if (requirements.elements.some((e) => e.type === "accordion")) {
      hooks.push("const [openAccordions, setOpenAccordions] = useState<number[]>([])");
    }

    if (requirements.elements.some((e) => e.type === "form")) {
      hooks.push("const [formData, setFormData] = useState({})");
      hooks.push("const [isSubmitting, setIsSubmitting] = useState(false)");
    }

    if (requirements.elements.some((e) => e.type === "counter")) {
      hooks.push("const [countersVisible, setCountersVisible] = useState(false)");
    }

    return hooks.length > 0 ? `\n  ${hooks.join("\n  ")}\n` : "";
  }

  private generateStyleObject(requirements: SectionRequirement): string {
    const styles: string[] = [];

    switch (requirements.style) {
      case "minimal":
        styles.push("background: 'var(--neutral-50)'");
        break;
      case "bold":
        styles.push("background: 'linear-gradient(135deg, var(--accent-500), var(--accent-600))'");
        styles.push("color: 'white'");
        break;
      case "elegant":
        styles.push("background: 'var(--neutral-100)'");
        styles.push("borderTop: '1px solid var(--neutral-200)'");
        break;
      case "creative":
        styles.push("background: 'linear-gradient(45deg, var(--accent-100), var(--accent-200))'");
        break;
    }

    return `{${styles.join(", ")}}`;
  }

  private generateHeaderSectionString(_requirements: SectionRequirement): string {
    return `
        {content.title && (
          <Flex direction="column" align="center" gap="s" marginBottom="xl">
            <Heading variant="display-strong-l" textAlign="center">
              {content.title}
            </Heading>
            {content.subtitle && (
              <Text variant="body-default-l" textAlign="center" onBackground="neutral-weak">
                {content.subtitle}
              </Text>
            )}
          </Flex>
        )}`;
  }

  private generateFooterSectionString(requirements: SectionRequirement): string {
    if (requirements.elements.some((e) => e.type === "button")) {
      return `
        {content.ctaButton && (
          <Flex justify="center" marginTop="xl">
            <Button
              variant="primary"
              size="l"
              href={content.ctaButton.href}
            >
              {content.ctaButton.text}
            </Button>
          </Flex>
        )}`;
    }
    return "";
  }

  private generateLayoutCodeString(requirements: SectionRequirement): string {
    // Check for specific element types that override layout
    if (requirements.elements.some((e) => e.type === "form")) {
      return this.generateFormLayoutString(requirements);
    }

    if (requirements.elements.some((e) => e.type === "grid") || requirements.layout === "grid") {
      return this.generateGridLayoutString(requirements);
    }

    if (requirements.layout === "two-column") {
      return this.generateTwoColumnLayoutString();
    }

    if (requirements.layout === "hero") {
      return this.generateHeroLayoutString();
    }

    // Default single column layout
    return `
        <Flex direction="column" gap="l" align="center">
          <Heading variant="display-strong-s">
            {content.title || 'Section Title'}
          </Heading>
          <Text variant="body-default-l" textAlign="center">
            {content.description || 'Section content'}
          </Text>
        </Flex>`;
  }

  private generateFormLayoutString(_requirements: SectionRequirement): string {
    return `
        <Flex direction="column" gap="l" align="center">
          <Heading variant="display-strong-s" textAlign="center">
            {content.title || 'Contact Us'}
          </Heading>
          <Card maxWidth="s" fillWidth padding="l">
            <form>
              <Flex direction="column" gap="m">
                <Input placeholder="Your Name" required />
                <Input placeholder="Your Email" type="email" required />
                <Textarea placeholder="Your Message" rows={4} />
                <Button variant="primary" fillWidth>Send Message</Button>
              </Flex>
            </form>
          </Card>
        </Flex>`;
  }

  private generateGridLayoutString(_requirements: SectionRequirement): string {
    return `
        <Grid columns={3} gap="m">
          {(content.items || []).map((item: any, index: number) => (
            <Card key={index} padding="m" border="neutral-medium">
              <Flex direction="column" gap="s" align="center">
                <Heading variant="heading-strong-s">{item.title}</Heading>
                <Text variant="body-default-s">{item.description}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>`;
  }

  private generateTwoColumnLayoutString(): string {
    return `
        <Grid columns={2} gap="xl" align="center">
          <Flex direction="column" gap="m">
            <Heading variant="display-strong-s">
              {content.title || 'Section Title'}
            </Heading>
            <Text variant="body-default-l">
              {content.description || 'Section description'}
            </Text>
          </Flex>
          <Flex direction="column" gap="m">
            {content.image && (
              <img
                src={content.image}
                alt={content.imageAlt}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            )}
          </Flex>
        </Grid>`;
  }

  private generateHeroLayoutString(): string {
    return `
        <Flex direction="column" align="center" gap="l" textAlign="center">
          <Heading variant="display-strong-l">
            {content.title || 'Hero Title'}
          </Heading>
          <Text variant="body-default-l" maxWidth="m">
            {content.subtitle || 'Hero subtitle'}
          </Text>
          {content.buttons && (
            <Flex gap="m" wrap>
              {content.buttons.map((button: any, index: number) => (
                <Button
                  key={index}
                  href={button.href}
                  variant={button.variant || 'primary'}
                  size="l"
                >
                  {button.label}
                </Button>
              ))}
            </Flex>
          )}
        </Flex>`;
  }

  // Generate section from user description
  async generateSectionFromDescription(
    userDescription: string,
    sectionName?: string
  ): Promise<{
    component: ComponentType<SectionProps>;
    config: GeneratedSectionConfig;
  }> {
    // Generate unique section name if not provided
    const name = sectionName || `Custom${Date.now()}`;
    const type = name.toLowerCase().replace(/\s+/g, "-");

    // Analyze requirements
    const requirements = this.analyzeUserRequirements(userDescription);

    // Generate component
    const component = this.generateSectionComponent(requirements, name);

    // Create config
    const config: GeneratedSectionConfig = {
      id: `generated-${type}`,
      name,
      type,
      requirements,
      component,
      timestamp: Date.now(),
    };

    // Store for future use
    this.generatedSections.set(type, component);
    this.sectionConfigs.set(type, config);

    return { component, config };
  }

  // Get generated section
  getGeneratedSection(type: string): ComponentType<SectionProps> | null {
    return this.generatedSections.get(type) || null;
  }

  // List all generated sections
  getAllGeneratedSections(): GeneratedSectionConfig[] {
    return Array.from(this.sectionConfigs.values());
  }

  // Save generated section to file system (optional)
  async saveGeneratedSection(config: GeneratedSectionConfig): Promise<void> {
    // This would save the generated code to actual files
    // You could integrate this with your file system
    console.log(`Saving section: ${config.name}`);
    console.log(`Code:\n${config.component.toString()}`);
  }
}

export const aiSectionFactory = new AISectionFactory();
