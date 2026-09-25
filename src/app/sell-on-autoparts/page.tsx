"use client";

import { motion } from "framer-motion";
import { Store, Users, TrendingUp, Shield, DollarSign, ArrowRight, BarChart2, Package, Zap, Globe, Award, CheckCircle, FileText } from "lucide-react";

const benefits = [
  { icon: Users, title: "Massive Customer Base", desc: "Access 50,000+ active car owners across India searching for genuine parts daily", metric: "50K+" },
  { icon: TrendingUp, title: "High Intent Traffic", desc: "Customers come with specific purchase intent — 3.2x higher conversion than generic marketplaces", metric: "3.2x" },
  { icon: Shield, title: "Trusted Platform", desc: "India&apos;s #1 auto parts platform with 4.8/5 rating. Your brand gains instant credibility", metric: "4.8/5" },
  { icon: Globe, title: "Nationwide Reach", desc: "Sell across 19,000+ pincodes without setting up your own logistics network", metric: "19K+" },
  { icon: Zap, title: "AI-Powered Discovery", desc: "AutoGuru AI recommends your products to compatible vehicles automatically", metric: "AI" },
  { icon: BarChart2, title: "Real-Time Analytics", desc: "Seller dashboard with sales trends, customer insights, inventory alerts, and competitor pricing", metric: "Live" },
];

const howItWorks = [
  { step: "1", title: "Apply & Verify", desc: "Submit business documents (GST, PAN, brand authorization). Verification within 48 hours." },
  { step: "2", title: "Setup Catalog", desc: "Upload products via bulk CSV or API. Our team assists with categorization and optimization." },
  { step: "3", title: "Go Live", desc: "Products appear on AutoParts India. AI matching connects your parts to compatible vehicles instantly." },
  { step: "4", title: "Manage Orders", desc: "Receive orders in seller panel. Print labels, schedule pickups, track shipments — all in one place." },
  { step: "5", title: "Get Paid", desc: "Weekly settlements (T+7). Transparent fee structure. No hidden charges. Dedicated account manager." },
];

const requirements = [
  "Valid GST registration certificate",
  "Brand authorization letter (if selling branded parts)",
  "PAN card of business entity",
  "Cancelled cheque / bank account proof",
  "Product catalog with MRP and specifications",
  "Minimum 50 SKUs to start",
];

const categories = [
  "Engine Parts & Components",
  "Brake System (Pads, Rotors, Calipers)",
  "Suspension & Steering",
  "Electrical & Electronics",
  "Body Parts & Panels",
  "Exhaust System",
  "Accessories (Interior/Exterior)",
  "Tools & Workshop Equipment",
  "Lubricants & Fluids",
  "Filters (Oil, Air, Fuel, Cabin)",
];

export default function SellOnAutoPartsPage() {
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
                <Store size={14} /> Seller Program
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Grow Your Business with <span className="text-gradient">India&apos;s #1 Auto Parts Platform</span>
              </h1>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                Join 200+ authorized sellers. Reach 50,000+ car owners. AI-powered discovery. Weekly payouts. Zero setup fees.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02]">
                  Start Selling Today
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="text-[200px] leading-none">
                  🏪
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Sell With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why AutoParts India?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Built for <span className="text-gradient">Seller Success</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-4xl font-bold text-primary/10">{benefit.metric}</div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              From Application to Sales in <span className="text-gradient">5 Simple Steps</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-16 mb-10 ${i % 2 === 0 ? "max-w-md" : "ml-auto max-w-md text-right pr-16"}`}
              >
                <div className="absolute left-8 top-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg ring-4 bg-white ring-primary">
                  {step.step}
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border/50 card-hover">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Product Categories</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Popular Categories <span className="text-gradient">We&apos;re Expanding</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-border/50 card-hover text-center group"
              >
                <Package size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm">{cat}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements & Apply */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="apply"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText size={24} className="text-primary" />
                Requirements to Join
              </h2>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Selling?</h2>
              <p className="text-white/80 mb-8 max-w-md">Join 200+ authorized sellers growing their business on AutoParts India. Application takes 10 minutes.</p>
              <div className="space-y-4">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02] w-full text-center">
                  Apply Now <ArrowRight size={18} />
                </a>
                <a href="/faq" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors w-full text-center">
                  View Seller FAQs
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">T+7</div>
                  <div className="text-xs text-white/60">Weekly Settlements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-xs text-white/60">Setup Fees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-xs text-white/60">Seller Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}