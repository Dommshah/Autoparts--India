"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Truck, Shield } from "lucide-react";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Promo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden gradient-hero p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                <Zap size={14} /> Limited Time Offer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Monsoon Sale
                <br />
                <span className="text-gradient">Up to 60% OFF</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                Get your vehicle monsoon-ready with premium parts at unbeatable prices. Free installation on selected items.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products?sale=true"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                >
                  Shop the Sale <ArrowRight size={18} />
                </Link>
              </div>
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Truck size={16} className="text-primary" /> Free Shipping
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield size={16} className="text-primary" /> Warranty Included
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[180px] leading-none"
                >
                  🏎️
                </motion.div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <span className="text-3xl font-bold text-gradient">60%</span>
                  <span className="block text-xs text-muted">OFF</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🚚", title: "Free Delivery", desc: "On all orders above ₹999 across India", bg: "from-blue-500 to-indigo-500" },
            { icon: "🔄", title: "Easy Returns", desc: "30-day hassle-free returns on all parts", bg: "from-emerald-500 to-teal-500" },
            { icon: "🛡️", title: "Genuine Parts", desc: "100% authentic with manufacturer warranty", bg: "from-purple-500 to-violet-500" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl p-6 overflow-hidden group card-hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
              <div className="relative flex items-center gap-4 text-white">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
