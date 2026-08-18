"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  MapPin,
  Phone,
  ChevronDown,
  Package,
  Heart,
  Bell,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { categories } from "@/lib/products";

const topBarLinks = [
  { label: "Track Order", href: "#" },
  { label: "Sell on AutoParts", href: "#" },
  { label: "Help & Support", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = useCartStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              Deliver to all India
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Phone size={12} />
              1800-123-4567
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {topBarLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        className={`transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-xl"
            : "bg-white/95 backdrop-blur-sm"
        }`}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Package className="text-white" size={22} />
              </div>
              <div className="hidden sm:block">
                <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-white" : "text-secondary"}`}>
                  Auto<span className="text-gradient">Parts</span>
                </span>
                <span className={`block text-[10px] tracking-widest uppercase ${isScrolled ? "text-white/50" : "text-muted"}`}>
                  India
                </span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div
                className={`relative w-full transition-all duration-300 ${
                  searchFocused ? "scale-[1.02]" : ""
                }`}
              >
                <div
                  className={`flex items-center rounded-2xl overflow-hidden transition-all duration-300 ${
                    searchFocused
                      ? "ring-2 ring-primary shadow-lg"
                      : "ring-1 ring-border"
                  }`}
                >
                  <select
                    className={`px-4 py-3 text-sm font-medium border-r outline-none cursor-pointer ${
                      isScrolled
                        ? "bg-white/10 text-white border-white/20"
                        : "bg-surface text-foreground border-border"
                    }`}
                  >
                    <option>All Categories</option>
                    {categories.map((c) => (
                      <option key={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    placeholder="Search for brake pads, engine oil, LED headlights..."
                    className={`flex-1 px-4 py-3 text-sm outline-none bg-transparent ${
                      isScrolled ? "text-white placeholder:text-white/40" : "text-foreground placeholder:text-muted"
                    }`}
                  />
                  <button className="px-6 py-3 gradient-primary text-white hover:opacity-90 transition-opacity">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                isScrolled ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted hover:text-foreground hover:bg-surface"
              }`}>
                <Heart size={20} />
                <span className="hidden lg:inline text-sm">Wishlist</span>
              </button>

              <button className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                isScrolled ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted hover:text-foreground hover:bg-surface"
              }`}>
                <Bell size={20} />
              </button>

              <button className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                isScrolled ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted hover:text-foreground hover:bg-surface"
              }`}>
                <User size={20} />
                <span className="hidden lg:inline text-sm font-medium">Account</span>
              </button>

              <button
                onClick={toggleCart}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                  isScrolled ? "text-white/70 hover:text-white hover:bg-white/10" : "text-muted hover:text-foreground hover:bg-surface"
                }`}
              >
                <ShoppingCart size={20} />
                <span className="hidden lg:inline text-sm font-medium">Cart</span>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-xl ${
                  isScrolled ? "text-white" : "text-foreground"
                }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className={`hidden lg:block border-t ${
          isScrolled ? "border-white/10" : "border-border"
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-1 h-11 overflow-x-auto">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.id}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all hover:bg-primary/10 hover:text-primary ${
                    isScrolled ? "text-white/70" : "text-muted hover:text-primary"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border shadow-xl fixed top-[calc(2rem+4rem)] left-0 right-0 z-40"
          >
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                <input
                  type="text"
                  placeholder="Search parts..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface transition-colors"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <span className="font-medium text-sm">{cat.name}</span>
                      <span className="text-xs text-muted ml-2">({cat.count})</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
