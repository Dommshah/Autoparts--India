"use client";

import { motion } from "framer-motion";
import { products, categories, getProductsByBrand } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const vehicleData: Record<string, { name: string; logo: string; popularModels: string[]; description: string }> = {
  "maruti-suzuki": {
    name: "Maruti Suzuki",
    logo: "🚗",
    popularModels: ["Swift", "Baleno", "Dzire", "Brezza", "Ertiga", "Ciaz", "Alto", "WagonR", "S-Presso", "XL6"],
    description: "India's largest car manufacturer with the widest service network. Genuine parts for all Maruti models.",
  },
  "hyundai": {
    name: "Hyundai",
    logo: "🚗",
    popularModels: ["Creta", "Venue", "i20", "Verna", "Tucson", "Alcazar", "Grand i10", "Aura", "Exter", "Ioniq 5"],
    description: "Premium Korean engineering with feature-packed vehicles. OEM quality parts for every Hyundai model.",
  },
  "tata-motors": {
    name: "Tata Motors",
    logo: "🚗",
    popularModels: ["Nexon", "Punch", "Harrier", "Safari", "Tiago", "Altroz", "Tigor", "Curvv", "Sierra", "Avinya"],
    description: "Indian automotive leader with strong safety ratings. Authentic parts for Tata's modern lineup.",
  },
  "mahindra": {
    name: "Mahindra",
    logo: "🚗",
    popularModels: ["Thar", "Scorpio-N", "XUV700", "XUV300", "Bolero", "XUV400", "Marazzo", "KUV100", "eVerito", "BE.05"],
    description: "Rugged SUVs and electric vehicles. Genuine Mahindra parts for adventure and daily driving.",
  },
  "honda": {
    name: "Honda",
    logo: "🚗",
    popularModels: ["City", "Amaze", "Elevate", "Jazz", "WR-V", "CR-V", "Accord", "Civic", "Brio", "Mobilio"],
    description: "Refined engines and reliable performance. OEM Honda parts for smooth, efficient driving.",
  },
  "toyota": {
    name: "Toyota",
    logo: "🚗",
    popularModels: ["Innova Crysta", "Fortuner", "Urban Cruiser", "Glanza", "Camry", "Vellfire", "Yaris", "Etios", "Corolla", "Hilux"],
    description: "Legendary reliability and hybrid technology. Authentic Toyota parts for long-lasting performance.",
  },
  "kia": {
    name: "Kia",
    logo: "🚗",
    popularModels: ["Seltos", "Sonet", "Carens", "Carnival", "EV6", "Syre", "Clavis", "EV9", "Ray", "Sportage"],
    description: "Design-focused vehicles with advanced features. Genuine Kia parts for modern driving.",
  },
  "mg-motor": {
    name: "MG Motor",
    logo: "🚗",
    popularModels: ["Hector", "Astor", "ZS EV", "Comet", "Gloster", "Windsor", "Marvel R", "HS", "Euniq", "Mulan"],
    description: "British heritage, Indian manufacturing. OEM MG parts for connected, electric mobility.",
  },
};

const vehicle = vehicleData["hyundai"];

export default function VehiclePage() {
  const brandProducts = getProductsByBrand(vehicle.name);

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ArrowLeft size={14} />
          <Link href="/vehicles" className="hover:text-primary transition-colors">Shop by Vehicle</Link>
          <ArrowLeft size={14} />
          <span className="text-foreground">{vehicle.name}</span>
        </nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden gradient-hero p-8 sm:p-12 lg:p-16 mb-12"
        >
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                {vehicle.logo} {vehicle.name}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Genuine Parts for <span className="text-gradient">Every Model</span>
              </h1>
              <p className="text-white/60 text-lg mb-8 max-w-md">{vehicle.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={`/products?brand=${vehicle.name}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02]">
                  View All Parts
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="text-[180px] leading-none">
                  {vehicle.logo}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Popular Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Popular Models</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Find Parts for Your <span className="text-gradient">{vehicle.name}</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {vehicle.popularModels.map((model, i) => (
              <motion.div
                key={model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/products?brand=${vehicle.name}&model=${model.toLowerCase()}`} className="group block bg-white rounded-2xl p-5 border border-border/50 card-hover text-center">
                  <div className="text-4xl mb-3">{vehicle.logo}</div>
                  <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">{model}</h3>
                  <p className="text-xs text-muted">View Parts</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parts by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Shop by Category</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Browse <span className="text-gradient">All Parts</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/products?category=${cat.id}&brand=${vehicle.name}`} className="group block relative rounded-2xl overflow-hidden card-hover">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
                  <div className="relative p-6 text-white">
                    <span className="text-4xl mb-3 block">{cat.icon}</span>
                    <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                    <p className="text-white/60 text-sm mb-4">{cat.count}+ products</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.subcategories.slice(0, 3).map((sub) => (
                        <span key={sub} className="text-xs px-2 py-0.5 rounded-full bg-white/15 text-white/80">{sub}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white group-hover:gap-2 transition-all">Explore </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products */}
        {brandProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Featured Parts</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">Top Parts for <span className="text-gradient">{vehicle.name}</span></h2>
              </div>
              <Link href={`/products?brand=${vehicle.name}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all group">
                View All <ArrowLeft size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {brandProducts.slice(0, 8).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
