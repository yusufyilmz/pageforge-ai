import type { Question } from "@pageforge/types/chat";

export const heroQuestions: Question[] = [
  {
    id: "hero_headline",
    question: "What is the main headline for your hero section?",
    type: "text",
    placeholder: "e.g., Welcome to Our Amazing Company",
  },
  {
    id: "hero_subheadline",
    question: "Add a supporting subheading:",
    type: "text",
    placeholder: "e.g., We deliver exceptional results for our clients",
  },
  {
    id: "hero_cta_text",
    type: "text",
    placeholder: "e.g., We deliver exceptional results for our clients",
    question: "",
  },
  {
    id: "hero_cta_text",
    question: "What should your call-to-action button say?",
    type: "text",
    placeholder: "e.g., Get Started",
  },
  {
    id: "hero_cta_url",
    question: "Where should the call-to-action button link to?",
    type: "text",
    placeholder: "e.g., /contact or #contact-section",
  },
  {
    id: "hero_background_type",
    question: "What type of background would you prefer?",
    type: "radio",
    options: [
      { id: "image", label: "Image Background", value: "image" },
      { id: "color", label: "Solid Color", value: "color" },
      { id: "gradient", label: "Gradient", value: "gradient" },
    ],
  },
];
