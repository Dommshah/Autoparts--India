export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  brand: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  compatibility: string[];
  specifications: Record<string, string>;
  tags: string[];
  badge?: "bestseller" | "new" | "sale" | "trending";
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  count: number;
  gradient: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
