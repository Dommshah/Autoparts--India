"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, BarChart2, Link as LinkIcon, ArrowRight, CheckCircle, Award, Clock, Globe, Gift } from "lucide-react";

const commissionTiers = [
  { tier: "Starter", sales: "0-10 orders/month", rate: "8%", bonus: "—", color: "bg-gray-100 text-gray-700" },
  { tier: "Silver", sales: "11-50 orders/month", rate: "10%", bonus: "₹1,000/month", color: "bg-gray-200 text-gray-800" },
  { tier: "Gold", sales: "51-200 orders/month", rate: "12%", bonus: "₹5,000/month + exclusive offers", color: "bg-yellow-100 text-yellow-800" },
  { tier: "Platinum", sales: "200+ orders/month", rate: "15%", bonus: "₹15,000/month + dedicated manager", color: "bg-purple-100 text-purple-800" },
];

const benefits = [
  { icon: DollarSign, title: "High Commissions", desc: "Earn up to 15% on every sale. Average order value ₹3,500 = ₹525 per order at Platinum tier." },
  { icon: LinkIcon, title: "Easy Tracking", desc: "Unique referral links, coupon codes, and QR codes. 30-day cookie window for attribution." },
  { icon: BarChart2, title: "Real-Time Dashboard", desc: "Track clicks, conversions, earnings, and pending payouts in real-time." },
  { icon: Clock, title: "Fast Payouts", desc: "Monthly payouts (1st of month) via UPI/Bank Transfer. Minimum ₹500 threshold." },
  { icon: Globe, title: "Nationwide Reach", desc: "Promote to 19,000+ pincodes across India. All 200+ brands, 10,000+ products." },
  { icon: Gift, title: "Exclusive Perks", desc: "Early access to sales, special affiliate-only coupons, birthday bonuses, and swag." },
];

const howItWorks = [
  { step: "1", title: "Sign Up Free", desc: "Create account, get approved in 24 hours. No fees, no minimum followers required." },
  { step: "2", title: "Get Your Links", desc: "Access dashboard with unique referral links, banners, coupon codes, and QR codes." },
  { step: "3", title: "Share & Earn", desc: "Share on social media, blog, YouTube, WhatsApp, email. Track every click and conversion." },
  { step: "4", title: "Get Paid Monthly", desc: "Automatic payout on 1st of month. Minimum ₹500. UPI or bank transfer. Tax docs provided." },
];

const faqs = [
  { q: "Who can join?", a: "Anyone! Auto enthusiasts, mechanics, influencers, bloggers, YouTubers, workshops, car clubs, and automotive professionals." },
  { q: "Is there a cost to join?", a: "Absolutely free. No setup fees, no monthly charges, no hidden costs. You only earn." },
  { q: "How are sales tracked?", a: "30-day cookie window. If someone clicks your link and buys within 30 days, you get credit. Coupon codes work indefinitely." },
  { q: "When do I get paid?", a: "Monthly on the 1st for previous month's confirmed orders. Minimum ₹500 threshold. Paid via UPI or bank transfer." },
  { q: "Can I use my own coupon code?", a: "Yes! Platinum+ affiliates get custom coupon codes (e.g., YOURNAME10). Tracked same as links." },
  { q: "What marketing materials are provided?", a: "Banners, product images, comparison charts, email templates, social media kits, and video assets. Updated monthly." },
];

export default function AffiliateProgramPage() {
  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 pb-20">
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
              <Users size={14} /> Affiliate Program
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Earn Up to <span className="text-gradient">15% Commission</span> on Every Sale
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join 5,000+ affiliates earning passive income promoting India&apos;s #1 genuine auto parts platform. Free to join, monthly payouts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02]">
                Join Free Today
              </a>
            </div>
          </div>
        </motion.div>

        {/* Commission Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Commission Structure</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Earn More as You <span className="text-gradient">Grow</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-border/50 overflow-hidden">
              <thead>
                <tr className="bg-surface border-b border-border/50">
                  <th className="px-6 py-4 text-left font-semibold">Tier</th>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Sales</th>
                  <th className="px-6 py-4 text-center font-semibold">Commission</th>
                  <th className="px-6 py-4 text-center font-semibold">Monthly Bonus</th>
                  <th className="px-6 py-4 text-left font-semibold">Perks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {commissionTiers.map((tier, i) => (
                  <tr key={tier.tier} className={`hover:bg-surface/50 transition-colors ${i === 3 ? "bg-purple-50" : ""}`}>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tier.color}`}>{tier.tier}</span>
                    </td>
                    <td className="px-6 py-4 text-sm">{tier.sales}</td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-primary">{tier.rate}</td>
                    <td className="px-6 py-4 text-center font-medium">{tier.bonus}</td>
                    <td className="px-6 py-4 text-sm text-muted">
                      {tier.tier === "Platinum" && "Dedicated manager • Custom coupons • Priority support • API access"}
                      {tier.tier === "Gold" && "Custom coupons • Early sale access • Monthly bonus"}
                      {tier.tier === "Silver" && "Monthly bonus • Priority support"}
                      {tier.tier === "Starter" && "Standard dashboard • Monthly payout"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Partner With Us?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Built for <span className="text-gradient">Affiliate Success</span>
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
              Start Earning in <span className="text-gradient">4 Steps</span>
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

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-border/50 overflow-hidden"
              >
                <details className="group p-6 hover:bg-surface/30 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-medium">
                    <span>{f.q}</span>
                    <Award size={20} className="text-muted group-open:rotate-180 transition-transform text-primary" />
                  </summary>
                  <div className="mt-4 text-muted leading-relaxed border-t border-border/50 pt-4">
                    {f.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="apply"
        >
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 sm:p-12 text-white text-center">
            <Users size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Join 5,000+ affiliates. Free to join. Approved in 24 hours. First commission in 30 days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02] w-full sm:w-auto text-center">
                Join Free Now <ArrowRight size={18} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto text-center">
                Questions? Contact Us
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">5,000+</div>
                <div className="text-xs text-white/60">Active Affiliates</div>
              </div>
              <div>
                <div className="text-3xl font-bold">₹2.5Cr+</div>
                <div className="text-xs text-white/60">Paid in Commissions</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24h</div>
                <div className="text-xs text-white/60">Approval Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}