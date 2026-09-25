export interface Review {
  id: string;
  productId: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
  verified: boolean;
  images?: string[];
}

export const reviews: Review[] = [
  { id: "r1", productId: "bp-001", author: "Vikram S.", avatar: "🧑‍🔧", rating: 5, date: "2 weeks ago", comment: "Perfect fit for my Creta. Great quality and fast delivery! Stopping power is noticeably better.", helpful: 42, verified: true },
  { id: "r2", productId: "bp-001", author: "Anita M.", avatar: "👩‍💻", rating: 4, date: "1 month ago", comment: "Good product. Packaging was excellent. Slightly expensive but worth it.", helpful: 28, verified: true },
  { id: "r3", productId: "bp-001", author: "Deepak R.", avatar: "🧑‍🔧", rating: 5, date: "3 weeks ago", comment: "Best I've used so far. Noticeable improvement in performance.", helpful: 35, verified: true },
  { id: "r4", productId: "oil-002", author: "Suresh K.", avatar: "👨‍💼", rating: 5, date: "1 week ago", comment: "Engine runs smoother than ever. Perfect for Indian weather conditions.", helpful: 56, verified: true },
  { id: "r5", productId: "oil-002", author: "Priya N.", avatar: "👩‍🏫", rating: 5, date: "3 weeks ago", comment: "Extended oil change interval confirmed. Great value for money.", helpful: 44, verified: true },
  { id: "r6", productId: "sp-003", author: "Arjun P.", avatar: "🧑‍🔧", rating: 4, date: "2 weeks ago", comment: "Noticeable improvement in mileage. Easy to install.", helpful: 31, verified: true },
  { id: "r7", productId: "sa-004", author: "Rakesh M.", avatar: "👨‍💼", rating: 5, date: "1 month ago", comment: "Ride quality improved dramatically. Worth every penny.", helpful: 27, verified: true },
  { id: "r8", productId: "acc-005", author: "Neha G.", avatar: "👩‍💻", rating: 5, date: "4 days ago", comment: "Premium feel. Airbag compatible and perfect fit. Highly recommended.", helpful: 63, verified: true },
  { id: "r9", productId: "hl-007", author: "Manoj T.", avatar: "🧑‍🔧", rating: 5, date: "1 week ago", comment: "Night driving transformed! Crystal clear visibility. Plug and play.", helpful: 48, verified: true },
  { id: "r10", productId: "dash-008", author: "Karan B.", avatar: "👨‍💼", rating: 4, date: "2 weeks ago", comment: "Great dash cam. 4K quality is excellent. App could be better.", helpful: 39, verified: true },
  { id: "r11", productId: "fm-010", author: "Shruti D.", avatar: "👩‍🏫", rating: 5, date: "5 days ago", comment: "Perfect fit for my Nexon. Easy to clean and looks premium.", helpful: 52, verified: true },
  { id: "r12", productId: "obd-012", author: "Vijay L.", avatar: "🧑‍🔧", rating: 5, date: "1 week ago", comment: "Professional grade scanner at a great price. Bluetooth works perfectly.", helpful: 41, verified: true },
];

export function getReviewsByProduct(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getAverageRating(productId: string): number {
  const productReviews = getReviewsByProduct(productId);
  if (productReviews.length === 0) return 0;
  return productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
}
