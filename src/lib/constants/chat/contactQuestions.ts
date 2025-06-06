// packages/ui/src/components/site-builder/constants/contactQuestions.ts
import type { Question } from "@pageforge/types/chat";

export const contactQuestions: Question[] = [
  {
    id: "contact_title",
    question: "What is the title for your contact section?",
    type: "text",
    placeholder: "e.g., Get in Touch",
  },
  {
    id: "contact_description",
    question: "Add a brief introduction to your contact form:",
    type: "textarea",
    placeholder: "e.g., Have questions? Fill out the form below and we'll get back to you shortly.",
  },
  {
    id: "contact_email",
    question: "What email address should form submissions be sent to?",
    type: "text",
    placeholder: "e.g., contact@yourbusiness.com",
  },
  {
    id: "contact_layout",
    question: "How would you like to layout your contact section?",
    type: "radio",
    options: [
      { id: "form-only", label: "Form Only", value: "form-only" },
      { id: "form-map", label: "Form with Map", value: "form-map" },
      { id: "form-info", label: "Form with Contact Info", value: "form-info" },
      {
        id: "form-map-info",
        label: "Form with Map and Contact Info",
        value: "form-map-info",
      },
    ],
  },
];
