"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { formatPrice } from "@/lib/products";

const categoryEmoji: Record<string, string> = {
  brakes: "🛑",
  engine: "⚙️",
  electrical: "⚡",
  suspension: "🏎️",
  body: "🚗",
  exhaust: "💨",
  accessories: "✨",
  tools: "🔧",
};

export default function RecentlyViewed() {
  const items = useRecentlyViewedStore((s) => s.items);

  if (items.length === 0) return null;

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            Recently <span className="text-gradient">Viewed</span>
          </h2>
        </motion.div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin">
          <div className="flex gap-4" style={{ minWidth: "min-content" }}>
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex-shrink-0 w-52 bg-white rounded-xl border border-border/50 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="h-24 bg-gradient-to-br from-surface to-surface-dark flex items-center justify-center">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {categoryEmoji[item.category] || "📦"}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded w-fit mb-1.5">
                    {item.brand}
                  </p>
                  <h3 className="text-xs font-semibold text-foreground line-clamp-2 mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground">{formatPrice(item.price)}</span>
                    <Link
                      href={`/product/${item.id}`}
                      className="text-[11px] font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
