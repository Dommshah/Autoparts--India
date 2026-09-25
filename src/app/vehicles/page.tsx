"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const vehicles = [
  { slug: "maruti-suzuki", name: "Maruti Suzuki", logo: "🚗", models: 10, parts: 2450, gradient: "from-blue-500 to-indigo-600" },
  { slug: "hyundai", name: "Hyundai", logo: "🚗", models: 10, parts: 1890, gradient: "from-red-500 to-pink-600" },
  { slug: "tata-motors", name: "Tata Motors", logo: "🚗", models: 10, parts: 1560, gradient: "from-orange-500 to-red-600" },
  { slug: "mahindra", name: "Mahindra", logo: "🚗", models: 10, parts: 1240, gradient: "from-emerald-500 to-teal-600" },
  { slug: "honda", name: "Honda", logo: "🚗", models: 10, parts: 980, gradient: "from-purple-500 to-violet-600" },
  { slug: "toyota", name: "Toyota", logo: "🚗", models: 10, parts: 870, gradient: "from-gray-500 to-slate-600" },
  { slug: "kia", name: "Kia", logo: "🚗", models: 10, parts: 760, gradient: "from-yellow-500 to-amber-600" },
  { slug: "mg-motor", name: "MG Motor", logo: "🚗", models: 10, parts: 650, gradient: "from-cyan-500 to-sky-600" },
];

export default function VehiclesPage() {
  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Shop by Vehicle</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Find Parts for Your <span className="text-gradient">Vehicle</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Select your car brand to browse genuine OEM parts tailored for your specific model
          </p>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/vehicles/${vehicle.slug}`}
                  className="group block relative rounded-2xl overflow-hidden card-hover"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${vehicle.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
                  <div className="relative p-6 text-white">
                    <span className="text-5xl mb-3 block">{vehicle.logo}</span>
                    <h3 className="font-bold text-xl mb-1">{vehicle.name}</h3>
                    <p className="text-white/60 text-sm mb-4">{vehicle.models}+ models • {vehicle.parts.toLocaleString()}+ parts</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white group-hover:gap-2 transition-all">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border/50">
            <div className="text-center mb-8">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Quick Search</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Know Your Part Number?</h2>
              <p className="text-muted mt-3 max-w-lg mx-auto">Search directly by part number, VIN, or keyword for instant results</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <form action="/products" method="GET" className="flex gap-3">
                <input
                  type="text"
                  name="q"
                  placeholder="Enter part number, VIN, or keyword..."
                  className="flex-1 px-5 py-4 rounded-xl bg-surface border border-border text-base outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-base hover:shadow-lg hover:shadow-primary/30 transition-all whitespace-nowrap">
                  Search
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why AutoParts India?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Trusted by <span className="text-gradient">50,000+ Owners</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🛡️", title: "100% Genuine", desc: "OEM quality parts with manufacturer warranty" },
              { icon: "🚚", title: "Free Delivery", desc: "On all orders above ₹999 across India" },
              { icon: "🔄", title: "Easy Returns", desc: "30-day hassle-free return policy" },
              { icon: "🤖", title: "AI Assistant", desc: "Instant help finding the right part" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}