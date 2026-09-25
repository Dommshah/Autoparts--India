"use client";

import Link from "next/link";
import { Package, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  "Shop by Vehicle": [
    { label: "Maruti Suzuki", href: "/vehicles/maruti-suzuki" },
    { label: "Hyundai", href: "/vehicles/hyundai" },
    { label: "Tata Motors", href: "/vehicles/tata-motors" },
    { label: "Mahindra", href: "/vehicles/mahindra" },
    { label: "Honda", href: "/vehicles/honda" },
    { label: "Toyota", href: "/vehicles/toyota" },
    { label: "Kia", href: "/vehicles/kia" },
    { label: "MG Motor", href: "/vehicles/mg-motor" },
  ],
  "Popular Categories": [
    { label: "Engine Parts", href: "/products?category=engine" },
    { label: "Brake System", href: "/products?category=brakes" },
    { label: "Suspension", href: "/products?category=suspension" },
    { label: "Electrical", href: "/products?category=electrical" },
    { label: "Body Parts", href: "/products?category=body" },
    { label: "Exhaust", href: "/products?category=exhaust" },
    { label: "Accessories", href: "/products?category=accessories" },
    { label: "Tools", href: "/products?category=tools" },
  ],
  "Customer Service": [
    { label: "Track Order", href: "/track-order" },
    { label: "Returns & Refunds", href: "/returns-refunds" },
    { label: "Warranty Policy", href: "/warranty-policy" },
    { label: "Shipping Info", href: "/shipping-info" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
  ],
  "Company": [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" },
    { label: "Sell on AutoParts", href: "/sell-on-autoparts" },
    { label: "Affiliate Program", href: "/affiliate-program" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Get the best deals on auto parts</h3>
              <p className="text-white/60 mt-1">Subscribe to our newsletter for exclusive offers and automotive tips.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                suppressHydrationWarning
                className="flex-1 lg:w-80 px-5 py-3 rounded-l-xl bg-white/10 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-primary border border-white/10"
              />
              <button className="px-6 py-3 gradient-primary rounded-r-xl font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Package size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg">AutoParts India</span>
            </div>
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-1"><Mail size={14} /> support@autoparts.in</span>
              <span className="flex items-center gap-1"><Phone size={14} /> 1800-123-4567</span>
              <span className="hidden sm:flex items-center gap-1"><MapPin size={14} /> Mumbai, India</span>
            </div>
            <p className="text-white/30 text-xs">
              &copy; 2026 AutoParts India. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    </footer>
  );
}