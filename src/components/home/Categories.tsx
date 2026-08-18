"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Browse by Category</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Find Parts for <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">
            From engine components to accessories — we stock everything for your vehicle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/products?category=${cat.id}`}
                className="group block relative rounded-2xl overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />

                <div className="relative p-6 text-white">
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{cat.count}+ products</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.subcategories.slice(0, 3).map((sub) => (
                      <span key={sub} className="text-xs px-2 py-0.5 rounded-full bg-white/15 text-white/80">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
