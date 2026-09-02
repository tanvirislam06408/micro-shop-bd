export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  productBought: string;
  comment: string;
  avatarInitials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    name: "Tanvir Rahman",
    role: "Full Stack Developer",
    location: "Dhaka",
    rating: 5,
    productBought: "Google AI Pro 18M",
    comment:
      "Got Google AI Pro activated within 15 minutes of WhatsApp messaging! The 5TB Drive storage and Gemini Advanced work flawlessly. Highly recommended service.",
    avatarInitials: "TR",
  },
  {
    id: "rev-2",
    name: "Sabrina Islam",
    role: "Content Creator & Designer",
    location: "Chittagong",
    rating: 5,
    productBought: "Canva Pro & ChatGPT Plus",
    comment:
      "Extremely polite customer support on WhatsApp. Super fast response and genuine subscription activation. Saved me a lot of money!",
    avatarInitials: "SI",
  },
  {
    id: "rev-3",
    name: "Mehedi Hasan",
    role: "Software Engineer",
    location: "Sylhet",
    rating: 5,
    productBought: "Claude Pro & Cursor Pro",
    comment:
      "As a coder in BD, getting Claude Pro and Cursor Pro easily with local payment methods via WhatsApp is a game-changer. Micro-Shop BD is 100% reliable.",
    avatarInitials: "MH",
  },
  {
    id: "rev-4",
    name: "Farhana Yeasmin",
    role: "Digital Marketer",
    location: "Rajshahi",
    rating: 5,
    productBought: "Perplexity Pro",
    comment:
      "Smooth ordering process via WhatsApp. The team guided me step-by-step on how to log in and use Perplexity Pro. Very trustworthy!",
    avatarInitials: "FY",
  },
];
