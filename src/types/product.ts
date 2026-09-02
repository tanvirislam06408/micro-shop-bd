export type ProductCategory =
  | "All"
  | "AI Subscriptions"
  | "AI Tools"
  | "Design Tools"
  | "Productivity"
  | "Other";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  oldPrice?: string;
  duration: string;
  category: ProductCategory;
  popular?: boolean;
  badge?: string;
  features: string[];
  iconName: string;
  color?: string;
  plans?: {
    name: string;
    price: string;
    oldPrice?: string;
  }[];
}
