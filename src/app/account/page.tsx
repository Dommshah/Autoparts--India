"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, Wallet } from "lucide-react";
import { useOrderStore } from "@/store/orderStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice } from "@/lib/products";

const sidebarLinks = [
  { href: "/account", label: "Profile", icon: User },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
];

export default function AccountPage() {
  const pathname = usePathname();
  const orders = useOrderStore((s) => s.orders);
  const wishlistItems = useWishlistStore((s) => s.items);

  const totalSpent = orders.reduce((sum, o) => sum + o.grandTotal, 0);

  const stats = [
    { label: "Total Orders", value: orders.length, icon: Package, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Wishlist", value: wishlistItems.length, icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
    { label: "Total Spent", value: formatPrice(totalSpent), icon: Wallet, color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface max-w-5xl mx-auto px-4 pb-20">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-border/50 p-4 sticky top-36">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                RK
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">Rajesh Kumar</p>
                <p className="text-xs text-muted truncate">rajesh@example.com</p>
              </div>
            </div>
            <nav className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border/50 p-5"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Profile Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-border/50 p-6"
          >
            <h2 className="text-lg font-bold mb-6">Personal Information</h2>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-surface flex items-center justify-center shrink-0">
                <User size={32} className="text-muted" />
              </div>
              <div>
                <p className="font-semibold">Rajesh Kumar</p>
                <p className="text-sm text-muted">Member since Jan 2025</p>
                <button className="mt-2 text-sm text-primary font-medium hover:underline">
                  Change Avatar
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted block mb-1.5">Full Name</label>
                <input
                  type="text"
                  defaultValue="Rajesh Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted block mb-1.5">Email</label>
                <input
                  type="email"
                  defaultValue="rajesh@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted block mb-1.5">Phone</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>
            <button className="mt-6 px-6 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
              Save Changes
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
