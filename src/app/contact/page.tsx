"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <MessageSquare size={16} /> Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Contact{" "}
            <span className="text-gradient">Us</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Have a question or need assistance? We&apos;re here to help you find the right parts for your vehicle.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8 pb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-border/50">
              <h2 className="text-xl font-bold mb-6">Send us a message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Subject *
                      </label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => updateForm("subject", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary bg-white transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="return">Return / Refund</option>
                        <option value="compatibility">Part Compatibility</option>
                        <option value="installation">Installation Support</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => updateForm("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Phone</h3>
                  <p className="text-sm text-muted">+91 1800-123-4567 (Toll Free)</p>
                  <p className="text-sm text-muted">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Email</h3>
                  <p className="text-sm text-muted">support@autopartsindia.in</p>
                  <p className="text-sm text-muted">sales@autopartsindia.in</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Address</h3>
                  <p className="text-sm text-muted">
                    AutoParts India Pvt. Ltd.<br />
                    42, Andheri Kurla Road,<br />
                    Andheri East, Mumbai - 400069<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Working Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Mon - Sat</span>
                      <span className="font-medium">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Sunday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Holidays</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 border border-border/50">
              <h3 className="font-bold text-sm mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", emoji: "📘", url: "#" },
                  { name: "Twitter", emoji: "🐦", url: "#" },
                  { name: "Instagram", emoji: "📸", url: "#" },
                  { name: "YouTube", emoji: "🎬", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-lg hover:bg-primary/10 hover:scale-110 transition-all"
                    title={social.name}
                  >
                    {social.emoji}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
