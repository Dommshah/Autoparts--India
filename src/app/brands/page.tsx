"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Store, Package, ArrowRight } from "lucide-react";
import { getAllBrands, getProductsByBrand } from "@/lib/products";

const brandEmojis: Record<string, string> = {
  Brembo: "🛑",
  Mobil: "🛢️",
  NGK: "⚡",
  Bilstein: "🏎️",
  AutoZone: "✨",
  Exide: "🔋",
  Philips: "💡",
  "70mai": "📹",
  Gates: "⚙️",
  "3D Mats": "🚗",
  Simota: "💨",
  Innova: "🔧",
  "3M": "🧴",
  Osram: "💡",
  "Liqui Moly": "🛢️",
  Bosch: "⚙️",
  Valeo: "🌊",
  AutoFurnish: "🚗",
  Hama: "📱",
  Blaupunkt: "🎵",
  Denso: "⚙️",
  "K&N": "💨",
  Defi: "📊",
  Gtechniq: "🛡️",
  "Black+Decker": "🔌",
  Fobo: "📡",
  Craftsman: "🔨",
  Stanley: "🧰",
  CTEK: "🔋",
  Luminous: "⚡",
  BenK: "🪑",
  Momo: "🏎️",
};

export default function BrandsPage() {
  const brands = getAllBrands();

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Trusted Partners
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Shop by{" "}
            <span className="text-gradient">Brand</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Explore our curated collection from the world&apos;s leading automotive parts manufacturers
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {brands.map((brand, i) => {
            const count = getProductsByBrand(brand).length;
            const emoji = brandEmojis[brand] || "📦";

            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={`/products?brand=${brand}`}
                  className="group block bg-white rounded-2xl p-6 border border-border/50 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl">{emoji}</span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
                  </div>

                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {brand}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Package size={14} />
                    <span>
                      {count} {count === 1 ? "product" : "products"}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                    <Store size={14} className="text-primary" />
                    <span className="text-xs font-medium text-primary">
                      View all products
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
