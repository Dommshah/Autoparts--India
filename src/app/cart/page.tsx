"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, getGST, getGrandTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="pt-32 lg:pt-36 min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-bold text-xl mb-2">Your cart is empty</h2>
          <p className="text-muted text-sm mb-6">Add some parts to get started</p>
          <Link href="/products" className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold text-sm inline-block">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-border/50 flex gap-5"
              >
                <div className="w-24 h-24 rounded-xl bg-surface flex items-center justify-center shrink-0 relative overflow-hidden">
                  {item.product.images?.[0] ? (
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-contain p-2" sizes="96px" />
                  ) : (
                    <span className="text-4xl">
                      {item.product.category === "brakes" && "🛑"}
                      {item.product.category === "engine" && "⚙️"}
                      {item.product.category === "electrical" && "⚡"}
                      {item.product.category === "suspension" && "🏎️"}
                      {item.product.category === "body" && "🚗"}
                      {item.product.category === "exhaust" && "💨"}
                      {item.product.category === "accessories" && "✨"}
                      {item.product.category === "tools" && "🔧"}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/product/${item.product.id}`} className="font-semibold text-sm hover:text-primary transition-colors line-clamp-1">
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted mt-0.5">{item.product.brand}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 rounded-lg hover:bg-red-50 text-muted hover:text-red-500 transition-colors shrink-0"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-surface rounded-xl p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-9 h-9 rounded-lg hover:bg-white flex items-center justify-center transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-semibold text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-9 h-9 rounded-lg hover:bg-white flex items-center justify-center transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-2xl p-6 border border-border/50 space-y-4">
              <h3 className="font-bold">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted">Subtotal</span><span className="font-medium">{formatPrice(getTotal())}</span></div>
                <div className="flex justify-between"><span className="text-muted">GST (18%)</span><span className="font-medium">{formatPrice(getGST())}</span></div>
                <div className="flex justify-between"><span className="text-muted">Shipping</span><span className="font-medium text-green-600">FREE</span></div>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-lg">{formatPrice(getGrandTotal())}</span>
              </div>
              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border text-sm font-medium hover:bg-surface transition-colors"
              >
                <ShoppingBag size={14} /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
