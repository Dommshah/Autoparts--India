"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, MapPin, ShoppingCart, Trash2, Star } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";

const sidebarLinks = [
  { href: "/account", label: "Profile", icon: User },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
];

export default function WishlistPage() {
  const pathname = usePathname();
  const items = useWishlistStore((s) => s.items);
  const removeItem = useWishlistStore((s) => s.removeItem);
  const addItem = useCartStore((s) => s.addItem);

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
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-border/50 p-12 text-center"
            >
              <div className="text-6xl mb-4">💝</div>
              <h3 className="font-bold text-lg mb-2">Your wishlist is empty</h3>
              <p className="text-sm text-muted mb-6">Save items you love for later</p>
              <Link
                href="/products"
                className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold text-sm inline-block"
              >
                Browse Products
              </Link>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-border/50 p-4 flex gap-4"
                >
                  <Link href={`/product/${product.id}`} className="w-20 h-20 rounded-xl bg-surface flex items-center justify-center shrink-0">
                    <span className="text-3xl">
                      {product.category === "brakes" && "🛑"}
                      {product.category === "engine" && "⚙️"}
                      {product.category === "electrical" && "⚡"}
                      {product.category === "suspension" && "🏎️"}
                      {product.category === "body" && "🚗"}
                      {product.category === "exhaust" && "💨"}
                      {product.category === "accessories" && "✨"}
                      {product.category === "tools" && "🔧"}
                    </span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${product.id}`} className="font-semibold text-sm line-clamp-1 hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-medium">{product.rating}</span>
                      <span className="text-xs text-muted">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-sm">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => addItem(product)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg gradient-primary text-white text-xs font-semibold hover:shadow-md transition-all"
                      >
                        <ShoppingCart size={12} />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
