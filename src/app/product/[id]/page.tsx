"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Minus,
  Plus,
  ChevronRight,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";
import { getProductById, formatPrice, getDiscount, products } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/products/ProductCard";
import { notFound } from "next/navigation";

const reviews = [
  { id: "1", author: "Vikram S.", rating: 5, date: "2 weeks ago", comment: "Perfect fit for my Creta. Great quality and fast delivery!", verified: true, helpful: 42 },
  { id: "2", author: "Anita M.", rating: 4, date: "1 month ago", comment: "Good product. Packaging was excellent. Slightly expensive but worth it.", verified: true, helpful: 28 },
  { id: "3", author: "Deepak R.", rating: 5, date: "3 weeks ago", comment: "Best I've used so far. Noticeable improvement in performance.", verified: true, helpful: 35 },
];

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"features" | "specs" | "compatibility">("features");

  if (!product) return notFound();

  const discount = getDiscount(product.price, product.originalPrice);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-white border border-border/50 overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 hero-pattern opacity-30" />
              <div className="relative">
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-8xl">
                    {product.category === "brakes" && "🛑"}
                    {product.category === "engine" && "⚙️"}
                    {product.category === "electrical" && "⚡"}
                    {product.category === "suspension" && "🏎️"}
                    {product.category === "body" && "🚗"}
                    {product.category === "exhaust" && "💨"}
                    {product.category === "accessories" && "✨"}
                    {product.category === "tools" && "🔧"}
                  </span>
                </div>
              </div>
              {discount > 0 && (
                <span className="absolute top-6 left-6 px-3 py-1.5 rounded-xl bg-red-500 text-white text-sm font-bold">
                  -{discount}% OFF
                </span>
              )}
              {product.badge && (
                <span className="absolute top-6 right-6 px-3 py-1.5 rounded-xl bg-primary text-white text-sm font-bold capitalize">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail row */}
            <div className="flex gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center cursor-pointer transition-all ${
                  i === 1 ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
                }`}>
                  <span className="text-2xl">
                    {product.category === "brakes" && "🛑"}
                    {product.category === "engine" && "⚙️"}
                    {product.category === "electrical" && "⚡"}
                    {product.category === "suspension" && "🏎️"}
                    {product.category === "body" && "🚗"}
                    {product.category === "exhaust" && "💨"}
                    {product.category === "accessories" && "✨"}
                    {product.category === "tools" && "🔧"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-lg">
                {product.brand}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold mt-3">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted text-sm">({product.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {discount > 0 && (
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">
                  Save {formatPrice(product.originalPrice! - product.price)}
                </span>
              )}
            </div>

            <p className="text-muted leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-green-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white border border-border rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg hover:bg-surface flex items-center justify-center transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg hover:bg-surface flex items-center justify-center transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, quantity)}
                className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.01]"
              >
                <ShoppingCart size={18} />
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button className="w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center text-muted hover:text-red-500 hover:border-red-500 transition-colors">
                <Heart size={18} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: "Free Delivery", desc: "Orders above ₹999" },
                { icon: Shield, label: "Warranty", desc: product.specifications["Warranty"] || "12 months" },
                { icon: RotateCcw, label: "Easy Returns", desc: "30-day policy" },
              ].map((b) => (
                <div key={b.label} className="text-center p-3 rounded-xl bg-white border border-border/50">
                  <b.icon size={20} className="mx-auto text-primary mb-1" />
                  <p className="text-xs font-semibold">{b.label}</p>
                  <p className="text-[11px] text-muted">{b.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-1 bg-white rounded-xl p-1 border border-border inline-flex mb-8">
            {(["features", "specs", "compatibility"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                  activeTab === tab ? "gradient-primary text-white" : "text-muted hover:bg-surface"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border/50">
            {activeTab === "features" && (
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-surface">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "specs" && (
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <span className="text-muted text-sm">{key}</span>
                    <span className="font-medium text-sm">{val}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "compatibility" && (
              <div className="flex flex-wrap gap-3">
                {product.compatibility.map((car) => (
                  <span key={car} className="px-4 py-2 rounded-xl bg-surface border border-border text-sm font-medium">
                    🚗 {car}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16 mb-20">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl p-6 border border-border/50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{review.author}</span>
                        {review.verified && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12} className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
                          ))}
                        </div>
                        <span className="text-xs text-muted">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-muted hover:text-primary transition-colors">
                    <ThumbsUp size={12} /> {review.helpful}
                  </button>
                </div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
