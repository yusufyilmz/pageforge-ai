import type { Question } from "@pageforge/types/chat";

export const testimonialsQuestions: Question[] = [
  {
    id: "testimonials_title",
    question: "What is the title for your testimonials section?",
    type: "text",
    placeholder: "e.g., What Our Clients Say",
  },
  {
    id: "testimonials_description",
    question: "Add a brief introduction to your testimonials:",
    type: "textarea",
    placeholder: "e.g., Don't just take our word for it. Here's what our clients have to say.",
  },
  {
    id: "testimonials_layout",
    question: "How would you like to display your testimonials?",
    type: "radio",
    options: [
      { id: "slider", label: "Carousel/Slider", value: "slider" },
      { id: "grid", label: "Grid Layout", value: "grid" },
      { id: "masonry", label: "Masonry Layout", value: "masonry" },
    ],
  },
  {
    id: "testimonials_count",
    question: "How many testimonials would you like to display?",
    type: "radio",
    options: [
      { id: "3", label: "3 Testimonials", value: "3" },
      { id: "6", label: "6 Testimonials", value: "6" },
      { id: "9", label: "9 Testimonials", value: "9" },
    ],
  },
];
