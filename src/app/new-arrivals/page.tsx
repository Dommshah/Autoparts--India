"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { getNewArrivals } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";

export default function NewArrivalsPage() {
  const products = getNewArrivals();

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles size={16} /> Just Landed
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            New{" "}
            <span className="text-gradient">Arrivals</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Be the first to get your hands on the latest automotive parts and accessories
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {products.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📦</div>
            <h3 className="font-semibold text-lg mb-2">No new arrivals yet</h3>
            <p className="text-muted text-sm">Check back soon for the latest products</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
