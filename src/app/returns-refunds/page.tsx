"use client";

import { motion } from "framer-motion";
import { RotateCcw, Clock, Shield, Truck, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";

export default function ReturnsRefundsPage() {
  const sections = [
    {
      icon: RotateCcw,
      title: "30-Day Return Policy",
      desc: "We offer a hassle-free 30-day return policy on all eligible products. If you're not satisfied with your purchase, you can initiate a return within 30 days of delivery.",
      points: [
        "Returns accepted within 30 days of delivery date",
        "Product must be unused, in original packaging with all tags",
        "Free return pickup for orders above ₹999",
        "Refund processed within 5-7 business days after inspection",
      ],
    },
    {
      icon: Shield,
      title: "Eligibility Criteria",
      desc: "Not all products are eligible for return. Please review the criteria below before initiating a return.",
      points: [
        "Electrical components (batteries, ECUs, sensors) - non-returnable once opened",
        "Custom-cut items (floor mats, seat covers, PPF) - non-returnable",
        "Fluids and lubricants (oil, coolant, brake fluid) - non-returnable if seal broken",
        "Clearance/sale items - final sale, no returns",
        "Damaged during installation - not covered under return policy",
      ],
    },
    {
      icon: Clock,
      title: "Return Process",
      desc: "Follow these simple steps to initiate a return:",
      points: [
        "1. Log into your account and go to 'Orders'",
        "2. Select the order and click 'Return Item'",
        "3. Choose return reason and upload photos if damaged",
        "4. Schedule free pickup (orders >₹999) or self-ship",
        "5. Once received and inspected, refund issued to original payment",
      ],
    },
    {
      icon: AlertCircle,
      title: "Refund Timeline",
      desc: "Refunds are processed based on your original payment method:",
      points: [
        "UPI/Wallet: 2-3 business days",
        "Credit/Debit Card: 5-7 business days",
        "Net Banking: 5-7 business days",
        "COD: Bank transfer within 7 business days",
        "Store Credit (AutoParts Wallet): Instant upon inspection",
      ],
    },
    {
      icon: CheckCircle,
      title: "Exchange Option",
      desc: "Want a different size or variant? Choose exchange instead of return:",
      points: [
        "Available for size/fitment issues only",
        "Free exchange shipping both ways",
        "Processed within 3-5 business days",
        "Notify us within 7 days of delivery",
      ],
    },
    {
      icon: HelpCircle,
      title: "Need Help?",
      desc: "Our support team is here to assist with any return or refund queries:",
      points: [
        "Email: returns@autopartsindia.in",
        "Phone: 1800-123-4567 (9 AM - 9 PM)",
        "Live Chat: Available on website/app",
        "Response time: Within 4 hours during business hours",
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
            <RotateCcw size={16} /> Returns & Refunds
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Easy Returns & <span className="text-gradient">Refunds</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Not satisfied? We make returns simple. 30-day policy, free pickup, quick refunds.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <section.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                  <p className="text-muted mb-4">{section.desc}</p>
                  <ul className="space-y-2">
                    {section.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          <a href="/track-order" className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center">
            <RotateCcw size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Start a Return</h3>
            <p className="text-sm text-muted">Track order & initiate return</p>
          </a>
          <a href="/contact" className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center">
            <HelpCircle size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Contact Support</h3>
            <p className="text-sm text-muted">Need help with your return?</p>
          </a>
          <a href="/faqs" className="bg-white rounded-2xl p-6 border border-border/50 card-hover text-center">
            <Shield size={32} className="text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">View FAQs</h3>
            <p className="text-sm text-muted">Common questions answered</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}