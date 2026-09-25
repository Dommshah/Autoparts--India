"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, Wrench, Car, Package, AlertCircle, HelpCircle } from "lucide-react";

export default function WarrantyPolicyPage() {
  const warrantyInfo = [
    {
      title: "Manufacturer Warranty",
      desc: "All genuine parts sold on AutoParts India come with the original manufacturer's warranty. Warranty periods vary by brand and product category.",
      details: [
        "Brake Pads/Rotors: 30,000 km or 12 months",
        "Engine Oil: As per manufacturer specification",
        "Batteries: 24-48 months (varies by brand)",
        "Spark Plugs: 20,000-100,000 km",
        "Suspension: 50,000 km or 24 months",
        "Electrical: 12-24 months",
        "Accessories: 12 months",
        "Tools: Lifetime warranty on hand tools",
      ],
    },
    {
      title: "Warranty Coverage",
      desc: "What's covered under manufacturer warranty:",
      details: [
        "Manufacturing defects in materials or workmanship",
        "Premature failure under normal usage conditions",
        "Performance below specified standards",
        "Premature wear beyond expected lifespan",
      ],
    },
    {
      title: "What's Not Covered",
      desc: "Warranty does not apply to:",
      details: [
        "Damage from improper installation or misuse",
        "Normal wear and tear",
        "Damage from accidents or collisions",
        "Modifications or unauthorized repairs",
        "Use in racing or competitive events",
        "Environmental damage (flood, fire, corrosion)",
        "Commercial/taxi/fleet use beyond specifications",
      ],
    },
    {
      title: "Claim Process",
      desc: "To file a warranty claim:",
      details: [
        "1. Contact support with order ID and photos of the issue",
        "2. Our team verifies eligibility within 48 hours",
        "3. If approved, we arrange free pickup/replacement",
        "4. Replacement shipped within 3-5 business days",
        "5. No cost for genuine warranty claims",
      ],
    },
    {
      title: "Extended Protection",
      desc: "Optional extended warranty available for:",
      details: [
        "High-value components (ECUs, transmissions, engines)",
        "Additional 12-24 months beyond manufacturer warranty",
        "Covers labor costs for replacement",
        "Available at checkout or within 30 days of purchase",
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
            <Shield size={16} /> Warranty Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Manufacturer <span className="text-gradient">Warranty</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Every genuine part comes with manufacturer warranty. Peace of mind guaranteed.
          </p>
        </motion.div>

        <div className="space-y-8">
          {warrantyInfo.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border/50"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield size={24} className="text-primary" />
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

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          <a href="/track-order" className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center">
            <Package size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">File a Claim</h3>
            <p className="text-sm text-muted">Track order & start warranty claim</p>
          </a>
          <a href="/contact" className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center">
            <HelpCircle size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Contact Support</h3>
            <p className="text-sm text-muted">Need help with warranty?</p>
          </a>
          <a href="/faqs" className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center">
            <AlertCircle size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Warranty FAQs</h3>
            <p className="text-sm text-muted">Common questions answered</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}