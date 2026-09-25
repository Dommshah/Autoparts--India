"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/products";
import { getAllBrands } from "@/lib/products";

const announcements = [
  "🎉 Monsoon Sale: Up to 60% OFF on selected parts!",
  "🚚 Free delivery on all orders above ₹999",
  "🛡️ 100% genuine parts with manufacturer warranty",
  "⚡ Same day dispatch for orders placed before 2 PM",
  "🤖 AI Assistant helps you find the perfect part",
  "🔧 Free installation on selected products",
  "💳 Multiple payment options: UPI, Cards, COD, Net Banking",
  "🔄 30-day hassle-free returns",
];

const brandLogos = getAllBrands().map((brand) => ({
  name: brand,
  emoji: "🏷️",
}));

const categoryItems = categories.map((cat) => ({
  name: cat.name,
  emoji: cat.icon,
}));

export default function Marquee() {
  return (
    <section className="relative bg-secondary py-4 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Top Marquee - Announcements */}
      <div className="relative">
        <div className="flex whitespace-nowrap overflow-hidden">
          <MarqueeContent
            items={announcements}
            duration={30}
            className="text-white/70 text-sm font-medium"
            gap="6rem"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 my-2" />

      {/* Bottom Marquee - Brands & Categories */}
      <div className="relative">
        <div className="flex whitespace-nowrap overflow-hidden">
          <MarqueeContent
            items={[
              ...brandLogos.slice(0, 12).map((b) => ({ label: b.name, icon: b.emoji, color: "text-amber-300" })),
              ...categoryItems.map((c) => ({ label: c.name, icon: c.emoji, color: "text-green-300" })),
            ]}
            duration={40}
            className="text-white/80 text-sm font-medium"
            gap="4rem"
            renderItem={(item) => (
              <span className={`inline-flex items-center gap-2 ${item.color}`}>
                <span>{item.icon}</span>
                {item.label}
              </span>
            )}
          />
        </div>
      </div>
    </section>
  );
}

interface MarqueeContentProps<T> {
  items: T[];
  duration: number;
  className: string;
  gap: string;
  renderItem?: (item: T) => React.ReactNode;
}

function MarqueeContent<T>({ items, duration, className, gap, renderItem }: MarqueeContentProps<T>) {
  const duplicatedItems = [...items, ...items];

  return (
    <motion.div
      animate={{ x: [-duplicatedItems.length / items.length * 100, 0] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
      style={{ width: "max-content" } as React.CSSProperties}
      className={`flex gap-[${gap}]`}
    >
      {duplicatedItems.map((item, i) => (
        <span key={i} className={`flex-shrink-0 ${className}`}>
          {renderItem ? renderItem(item) : String(item)}
        </span>
      ))}
    </motion.div>
  );
}