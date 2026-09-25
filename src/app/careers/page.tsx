"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, GraduationCap, Heart, MapPin, Clock, ArrowRight, Star, Award, Coffee } from "lucide-react";

const jobs = [
  {
    id: "1",
    title: "Senior Frontend Engineer (React/Next.js)",
    department: "Engineering",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹25-40 LPA",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    desc: "Build the future of auto parts e-commerce. Work with Next.js 16, Turbopack, and modern React patterns.",
  },
  {
    id: "2",
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹20-35 LPA",
    tags: ["Python", "PyTorch", "LLMs", "RAG"],
    desc: "Develop AutoGuru AI - our intelligent parts recommendation and compatibility engine.",
  },
  {
    id: "3",
    title: "Supply Chain Manager",
    department: "Operations",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹18-28 LPA",
    tags: ["Logistics", "Vendor Management", "Forecasting"],
    desc: "Manage 200+ vendor relationships, optimize inventory across 8 fulfillment centers.",
  },
  {
    id: "3",
    title: "Customer Success Lead",
    department: "Support",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹12-18 LPA",
    tags: ["Customer Support", "Team Leadership", "CRM"],
    desc: "Lead a team of 15+ support agents. Drive NPS improvement and resolution time reduction.",
  },
];

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you + family, mental health support, annual wellness stipend" },
  { icon: Star, title: "Learning & Growth", desc: "₹50K annual learning budget, conference sponsorship, internal tech talks, mentorship program" },
  { icon: Coffee, title: "Work-Life Balance", desc: "Flexible hours, hybrid/remote options, unlimited PTO, 4-day work week trials" },
  { icon: Award, title: "Equity & Rewards", desc: "ESOP for all full-time employees, performance bonuses, referral bonuses up to ₹1L" },
  { icon: GraduationCap, title: "Skill Development", desc: "Paid certifications, hackathon weeks, cross-team rotations, leadership tracks" },
  { icon: Users, title: "Team Culture", desc: "Quarterly offsites, game nights, community volunteering, diverse & inclusive environment" },
];

export default function CareersPage() {
  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden gradient-hero p-8 sm:p-12 lg:p-16 mb-16 text-center"
        >
          <div className="absolute inset-0 hero-pattern" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              <Briefcase size={14} /> We&apos;re Hiring
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Build the Future of <span className="text-gradient">Auto Parts Commerce</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join a team revolutionizing how India buys auto parts. 50K+ customers, 200+ brands, AI-powered platform, and we&apos;re just getting started.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#open-positions" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02]">
                View Open Positions
              </a>
            </div>
          </div>
        </motion.div>

        {/* Why Join */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why AutoParts India?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              More Than Just a <span className="text-gradient">Job</span>
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
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="open-positions"
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Open Positions</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Join Our <span className="text-gradient">Team</span>
              </h2>
            </div>
          </div>
          <div className="space-y-5">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-muted">{job.department} · {job.location} · {job.type}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{job.experience}</span>
                    <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-medium">{job.salary}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface text-sm text-muted border border-border">{tag}</span>
                  ))}
                </div>
                <p className="text-muted mb-4">{job.desc}</p>
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
                  Apply Now <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border/50">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Life at AutoParts India</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Our <span className="text-gradient">Culture</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Collaborative", desc: "Cross-functional squads, pair programming, design reviews, open feedback culture" },
                { icon: Clock, title: "Autonomous", desc: "Own your projects end-to-end, flexible schedules, outcome-focused not hours-focused" },
                { icon: Star, title: "Innovative", desc: "Monthly hackathons, 20% time for experiments, latest tech stack, open source contributions" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface rounded-2xl p-6 border border-border/50 text-center"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
                Apply Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}