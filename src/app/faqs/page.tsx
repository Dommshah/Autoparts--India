"use client";

import { motion } from "framer-motion";
import { HelpCircle, Search, Star, MessageSquare, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "Orders & Payments",
    questions: [
      {
        q: "How do I place an order?",
        a: "Browse products, add to cart, proceed to checkout, enter shipping details, choose payment method, and confirm. You'll receive an order confirmation via email and SMS.",
      },
      {
        q: "What payment methods do you accept?",
        a: "UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking (50+ banks), Cash on Delivery (COD), and EMI options on select cards.",
      },
      {
        q: "Can I modify or cancel my order?",
        a: "Yes, you can modify/cancel within 1 hour of placing the order. Go to 'My Orders' and select the order. After 1 hour, the order enters processing and cannot be changed.",
      },
      {
        q: "Is COD available everywhere?",
        a: "COD is available for orders up to ₹50,000 in most pincodes. Some remote areas may not support COD. Check availability at checkout.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Metro cities: 1-2 days, Tier 1: 2-3 days, Tier 2/3: 3-5 days, Remote: 5-7 days. Same-day in Mumbai/Delhi/Bangalore (order before 11 AM).",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we only ship within India. International shipping is not available at this time.",
      },
      {
        q: "Can I schedule delivery for a specific date?",
        a: "Yes, during checkout you can select a preferred delivery date (within 7 days). Same-day and next-day slots subject to availability.",
      },
      {
        q: "What if I'm not home during delivery?",
        a: "Our delivery partner will attempt 2 deliveries over 2 consecutive days. You can also authorize a neighbor or reschedule via the tracking link.",
      },
    ],
  },
  {
    category: "Returns & Warranty",
    questions: [
      {
        q: "What is your return policy?",
        a: "30-day return policy on eligible items. Product must be unused in original packaging. Free pickup for orders above ₹999. Refund within 5-7 business days.",
      },
      {
        q: "Are electrical parts returnable?",
        a: "Electrical components (batteries, ECUs, sensors) are non-returnable once opened/seal broken due to safety and calibration reasons.",
      },
      {
        q: "How do I claim warranty?",
        a: "Contact support with order ID and photos. We verify within 48 hours. Approved claims get free replacement shipped in 3-5 days.",
      },
      {
        q: "What&apos;s covered under warranty?",
        a: "Manufacturing defects only. Not covered: improper installation, accident damage, wear & tear, modifications, racing use.",
      },
    ],
  },
  {
    category: "Product & Compatibility",
    questions: [
      {
        q: "How do I know if a part fits my car?",
        a: "Use our Vehicle Selector on the product page, or use the AI Assistant (chat bubble) with your car model/year. Compatibility is listed on every product.",
      },
      {
        q: "Are parts genuine OEM?",
        a: "Yes, 100% genuine OEM parts sourced directly from manufacturers or authorized distributors. Each part comes with manufacturer warranty.",
      },
      {
        q: "Can I get help finding the right part?",
        a: "Yes! Use our AI Assistant (bottom right chat), call 1800-123-4567, or email support@autopartsindia.in with your VIN/car details.",
      },
      {
        q: "Do you sell used/refurbished parts?",
        a: "No, we only sell brand new, genuine OEM parts. No used, refurbished, or aftermarket parts.",
      },
    ],
  },
  {
    category: "Account & Support",
    questions: [
      {
        q: "Do I need an account to order?",
        a: "No, you can checkout as guest. But creating an account gives you order tracking, faster checkout, wishlist, and loyalty rewards.",
      },
      {
        q: "How do I track my order?",
        a: "Use the 'Track Order' page with your Order ID or Tracking Number. You'll also get SMS/Email updates at each stage.",
      },
      {
        q: "What are AutoParts Rewards?",
        a: "Earn 1 point per ₹100 spent. Redeem points for discounts (100 points = ₹1). Bonus points on reviews, referrals, and birthdays.",
      },
      {
        q: "How do I contact customer support?",
        a: "Phone: 1800-123-4567 (9 AM - 9 PM), Email: support@autopartsindia.in, Live Chat: Website/app (9 AM - 9 PM), Response: Within 4 hours.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <HelpCircle size={16} /> FAQs
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Quick answers to common questions. Can&apos;t find yours? Contact our support team.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-border text-base outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-white rounded-2xl border border-border/50 overflow-hidden"
            >
              <div className="px-6 py-4 bg-surface border-b border-border/50">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  {cat.category}
                </h2>
              </div>
              <div className="divide-y divide-border/50">
                {cat.questions.map((q, qi) => (
                  <details key={q.q} className="group p-6 hover:bg-surface/30 transition-colors">
                    <summary className="flex items-center justify-between cursor-pointer list-none text-base font-medium">
                      <span>{q.q}</span>
                      <Star size={20} className="text-muted group-open:rotate-180 transition-transform text-primary" />
                    </summary>
                    <div className="mt-4 text-muted leading-relaxed">
                      {q.a}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still need help? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 sm:p-12 text-white text-center"
        >
          <MessageSquare size={48} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Still Need Help?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Our support team is ready to assist you with any question or concern.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors">
              Contact Support <ArrowRight size={18} />
            </a>
            <a href="/track-order" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
              Track Order
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}