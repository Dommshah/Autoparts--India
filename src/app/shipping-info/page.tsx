"use client";

import { motion } from "framer-motion";
import { Truck, Clock, MapPin, Package, Shield, CheckCircle, AlertCircle, HelpCircle, MapPin as MapPinIcon } from "lucide-react";

export default function ShippingInfoPage() {
  const shippingInfo = [
    {
      icon: Truck,
      title: "Free Standard Shipping",
      desc: "Free delivery on all orders above ₹999 across India. No minimum for Prime members.",
      details: [
        "Metro cities: 1-2 business days",
        "Tier 1 cities: 2-3 business days",
        "Tier 2/3 cities: 3-5 business days",
        "Remote areas: 5-7 business days",
      ],
    },
    {
      icon: Clock,
      title: "Express Shipping",
      desc: "Need it faster? Choose express at checkout:",
      details: [
        "Same-day delivery: Available in Mumbai, Delhi, Bangalore (orders before 11 AM)",
        "Next-day delivery: 50+ major cities (orders before 2 PM)",
        "Cost: ₹199 (free for orders >₹2,999)",
      ],
    },
    {
      icon: Shield,
      title: "Shipping Protection",
      desc: "All orders include complimentary shipping protection:",
      details: [
        "Damage/loss coverage up to order value",
        "Free replacement for transit damage",
        "No claims process - we handle it",
        "Applies automatically to all orders",
      ],
    },
    {
      icon: MapPinIcon,
      title: "Delivery Coverage",
      desc: "We deliver to 19,000+ pincodes across India:",
      details: [
        "All state capitals and major cities",
        "Tier 2 and Tier 3 towns",
        "Remote locations via partner network",
        "Check your pincode at checkout",
      ],
    },
    {
      icon: Package,
      title: "Packaging Standards",
      desc: "Parts packaged for maximum protection:",
      details: [
        "Fragile items: Double-boxed with foam inserts",
        "Fluids: Leak-proof sealed bags + absorbent material",
        "Electrical: Anti-static packaging",
        "Heavy items: Reinforced boxes with strapping",
      ],
    },
  ];

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Truck size={16} /> Shipping Info
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Fast & Reliable <span className="text-gradient">Shipping</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Free delivery on ₹999+, express options available, 19,000+ pincodes covered.
          </p>
        </motion.div>

        <div className="space-y-8">
          {shippingInfo.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border/50"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <section.icon size={24} className="text-primary" />
                {section.title}
              </h2>
              <p className="text-muted mb-4">{section.desc}</p>
              <ul className="space-y-2">
                {section.details.map((detail, di) => (
                  <li key={di} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Shipping Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 border border-border/50"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MapPinIcon size={24} className="text-primary" />
            Check Delivery to Your Pincode
          </h2>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="text"
              placeholder="Enter 6-digit pincode"
              maxLength={6}
              className="flex-1 px-4 py-3 rounded-xl border border-border text-base outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
              Check
            </button>
          </form>
          <p className="text-sm text-muted mt-3 text-center">Example: 400001 (Mumbai), 110001 (Delhi), 560001 (Bangalore)</p>
        </motion.div>
      </div>
    </div>
  );
}