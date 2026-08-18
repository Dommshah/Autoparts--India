"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, getDiscount } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const discount = getDiscount(product.price, product.originalPrice);

  const badgeColors: Record<string, string> = {
    bestseller: "bg-amber-500 text-white",
    new: "bg-emerald-500 text-white",
    sale: "bg-red-500 text-white",
    trending: "bg-blue-500 text-white",
  };

  const categoryGradients: Record<string, string> = {
    engine: "from-orange-400 to-red-500",
    brakes: "from-red-400 to-pink-500",
    electrical: "from-yellow-400 to-amber-500",
    suspension: "from-blue-400 to-indigo-500",
    body: "from-purple-400 to-violet-500",
    exhaust: "from-gray-400 to-slate-500",
    accessories: "from-emerald-400 to-teal-500",
    tools: "from-cyan-400 to-sky-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border/50 card-hover"
    >
      {/* Image Area */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-surface to-surface-dark">
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[product.category] || "from-gray-200 to-gray-300"} opacity-10 group-hover:opacity-20 transition-opacity`} />

        {/* Product Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <span className="text-4xl">
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

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider ${badgeColors[product.badge]}`}>
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-red-500 text-white text-[11px] font-bold">
            -{discount}%
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>
          <button className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg">
            <Heart size={16} />
          </button>
          <Link
            href={`/product/${product.id}`}
            className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg"
          >
            <Eye size={16} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <Link href={`/product/${product.id}`} className="block p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
            {product.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-foreground">{product.rating}</span>
            <span className="text-xs text-muted">({product.reviews.toLocaleString()})</span>
          </div>
        </div>

        <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className={`text-[11px] px-1.5 py-0.5 rounded ${product.inStock ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <span className="text-[11px] text-muted">Free Delivery</span>
        </div>
      </Link>
    </motion.div>
  );
}
