"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.badge).slice(0, 8);

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Curated for You</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-muted mt-2">Hand-picked top sellers and trending parts</p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all group"
          >
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
