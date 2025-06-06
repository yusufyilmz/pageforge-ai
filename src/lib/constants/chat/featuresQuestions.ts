import type { Question } from "@pageforge/types/chat";

export const featuresQuestions: Question[] = [
  {
    id: "features_title",
    question: "What is the title for your features/services section?",
    type: "text",
    placeholder: "e.g., Our Services",
  },
  {
    id: "features_description",
    question: "Add a brief introduction to your features/services:",
    type: "textarea",
    placeholder: "e.g., We offer a comprehensive range of services tailored to meet your needs.",
  },
  {
    id: "features_count",
    question: "How many features/services would you like to display?",
    type: "radio",
    options: [
      { id: "3", label: "3 Features", value: "3" },
      { id: "4", label: "4 Features", value: "4" },
      { id: "6", label: "6 Features", value: "6" },
    ],
  },
  {
    id: "features_layout",
    question: "How would you like to layout your features?",
    type: "radio",
    options: [
      { id: "grid", label: "Grid Layout", value: "grid" },
      { id: "cards", label: "Card Layout", value: "cards" },
      { id: "list", label: "List Layout", value: "list" },
    ],
  },
];
