"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Package, Users, Award, Globe, Leaf, Heart, Target, Sparkles, ArrowRight, Shield } from "lucide-react";

export default function AboutUsPage() {
  const values = [
    { icon: Shield, title: "Authenticity Guaranteed", desc: "100% genuine OEM parts sourced directly from manufacturers. Zero tolerance for counterfeits." },
    { icon: Heart, title: "Customer First", desc: "Every decision starts with the customer. 24/7 support, easy returns, and transparent pricing." },
    { icon: Target, title: "Precision & Quality", desc: "Rigorous quality checks on every part. ISO-certified warehouses and temperature-controlled storage." },
    { icon: Sparkles, title: "Innovation Driven", desc: "AI-powered search, smart compatibility matching, and predictive inventory for better experience." },
    { icon: Globe, title: "Nationwide Reach", desc: "19,000+ pincodes covered. 8 fulfillment centers. Same-day dispatch from nearest hub." },
    { icon: Leaf, title: "Sustainable Practices", desc: "Eco-friendly packaging, carbon-neutral delivery options, and responsible recycling programs." },
  ];

  const milestones = [
    { year: "2022", title: "Founded", desc: "AutoParts India launched with a mission to make genuine parts accessible" },
    { year: "2023", title: "10,000 SKUs", desc: "Expanded catalog to 10,000+ genuine parts across 8 categories" },
    { year: "2024", title: "AI Assistant", desc: "Launched AutoGuru AI for instant part recommendations and compatibility checks" },
    { year: "2025", title: "50K Customers", desc: "Served 50,000+ car owners across India with 4.8/5 rating" },
    { year: "2026", title: "Market Leader", desc: "IndiaIndia'sapos;s #1 online auto parts platform with 200+ brand partnerships" },
  ];

  const team = [
    { name: "Rajesh Kumar", role: "Founder & CEO", desc: "20+ years automotive industry experience", initials: "RK" },
    { name: "Priya Sharma", role: "COO", desc: "Supply chain & operations expert", initials: "PS" },
    { name: "Amit Verma", role: "CTO", desc: "AI/ML & platform architecture", initials: "AV" },
    { name: "Meera Nair", role: "CMO", desc: "Brand & customer experience", initials: "MN" },
  ];

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden gradient-hero p-8 sm:p-12 lg:p-16 mb-16"
        >
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                <Package size={14} /> About AutoParts India
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Making Genuine Auto Parts <span className="text-gradient">Accessible to Every Indian</span>
              </h1>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                We&apos;re on a mission to eliminate counterfeit parts, ensure fair pricing, and deliver the right part to your doorstep — anywhere in India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02]">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="text-[200px] leading-none">
                  🏎️
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Built on <span className="text-gradient">Trust & Excellence</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Milestones & <span className="text-gradient">Achievements</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-16 mb-10 ${i % 2 === 0 ? "max-w-md" : "ml-auto max-w-md text-right pr-16"}`}
              >
                <div className="absolute left-8 top-2 w-4 h-4 rounded-full bg-primary border-4 bg-white ring-2 ring-primary" />
                <div className="bg-white rounded-2xl p-6 border border-border/50 card-hover">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{milestone.year}</span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{milestone.title}</h3>
                  <p className="text-muted">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Leadership Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Meet the <span className="text-gradient">Founders</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center"
              >
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "10K+", label: "Products" },
              { value: "200+", label: "Brands" },
              { value: "4.8/5", label: "Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 text-center card-hover"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}