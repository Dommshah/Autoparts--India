"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, Shield, Clock, Zap } from "lucide-react";

const features = [
  { icon: Truck, label: "Free Delivery", desc: "On orders above ₹999" },
  { icon: Shield, label: "Genuine Parts", desc: "100% authentic" },
  { icon: Clock, label: "Same Day Dispatch", desc: "Before 2 PM" },
  { icon: Zap, label: "AI Assistant", desc: "Find any part" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Animated Orbs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 pt-40 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                India&apos;s #1 Auto Parts Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Find the
              <br />
              <span className="text-gradient">Perfect Part</span>
              <br />
              for Your Ride
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed"
            >
              Browse 10,000+ genuine automotive parts and accessories.
              AI-powered search, doorstep delivery across India, and expert support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl gradient-primary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Shop Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Categories
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "10K+", label: "Products" },
                { value: "50K+", label: "Happy Customers" },
                { value: "500+", label: "Brands" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{feature.label}</h3>
                <p className="text-sm text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
