"use client";

import { motion } from "framer-motion";
import { FileText, Newspaper, Calendar, ExternalLink, ArrowRight, Share2, Download } from "lucide-react";

const pressReleases = [
  {
    id: "1",
    title: "AutoParts India Raises ₹50 Cr Series B to Expand AI-Powered Platform",
    date: "2026-08-15",
    category: "Funding",
    summary: "Leading auto parts e-commerce platform secures funding from Sequoia Capital and existing investors to accelerate AI development and expand fulfillment network to 12 centers.",
    link: "#",
  },
  {
    id: "2",
    title: "AutoGuru AI Now Serves 100,000+ Queries Monthly with 94% Accuracy",
    date: "2026-07-22",
    category: "Product",
    summary: "AutoParts India's AI assistant achieves industry-leading accuracy in part compatibility matching, reducing returns by 37% and increasing customer satisfaction to 4.8/5.",
    link: "#",
  },
  {
    id: "3",
    title: "AutoParts India Partners with 5 Major OEMs for Direct-to-Consumer Sales",
    date: "2026-06-10",
    category: "Partnership",
    summary: "Strategic partnerships with Maruti Suzuki, Hyundai, Tata Motors, Mahindra, and Honda enable direct manufacturer pricing and exclusive genuine parts access.",
    link: "#",
  },
  {
    id: "4",
    title: "AutoParts India Wins 'Best E-Commerce Platform' at India Auto Awards 2026",
    date: "2026-05-05",
    category: "Award",
    summary: "Recognized for innovation in AI-driven customer experience, supply chain excellence, and commitment to genuine parts authenticity across 19,000+ pincodes.",
    link: "#",
  },
  {
    id: "5",
    title: "AutoParts India Launches Same-Day Delivery in 5 Metro Cities",
    date: "2026-04-18",
    category: "Launch",
    summary: "Mumbai, Delhi, Bangalore, Hyderabad, and Chennai now enjoy same-day delivery for orders placed before 11 AM, covering 40% of customer base.",
    link: "#",
  },
  {
    id: "6",
    title: "AutoParts India Achieves 99.2% Order Accuracy Rate in Q1 2026",
    date: "2026-04-01",
    category: "Milestone",
    summary: "Industry-leading accuracy through AI-powered warehouse management and automated quality checks. Customer returns drop to all-time low of 1.8%.",
    link: "#",
  },
];

const mediaKit = [
  { title: "Company Logo Pack", desc: "Primary, secondary, and monochrome logos in SVG/PNG", icon: Download },
  { title: "Brand Guidelines", desc: "Color palette, typography, spacing, and usage rules", icon: FileText },
  { title: "Product Photography", desc: "High-res lifestyle and product images", icon: Download },
  { title: "Leadership Photos", desc: "Founder and executive headshots", icon: Download },
  { title: "Company Fact Sheet", desc: "Key metrics, milestones, and statistics", icon: FileText },
  { title: "Press Contact", desc: "PR team details for media inquiries", icon: ExternalLink },
];

export default function PressPage() {
  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Newspaper size={16} /> Press & Media
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Press Kit & <span className="text-gradient">Newsroom</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Latest announcements, media resources, and contact information for journalists and analysts.
          </p>
        </motion.div>

        {/* Media Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Media Resources</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Media <span className="text-gradient">Kit</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mediaKit.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
                <a href="#" className="ml-auto px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Releases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Press Releases</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Latest <span className="text-gradient">Announcements</span>
              </h2>
            </div>
          </div>
          <div className="space-y-5">
            {pressReleases.map((release, i) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{release.category}</span>
                    <span className="text-sm text-muted">{new Date(release.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  <a href={release.link} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors shrink-0">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                <p className="text-muted leading-relaxed">{release.summary}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 sm:p-12 text-white text-center"
          >
            <Newspaper size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Media Inquiries</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">Our PR team is available for interviews, expert commentary, and additional resources.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:press@autopartsindia.in" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors">
                <Share2 size={18} /> press@autopartsindia.in
              </a>
              <a href="tel:+9118001234567" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
                1800-123-4567
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}