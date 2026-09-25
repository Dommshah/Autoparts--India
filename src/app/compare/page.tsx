"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCompareStore } from "@/store/compareStore";
import { formatPrice } from "@/lib/products";
import { Star, X, Plus, ArrowLeft, Scale } from "lucide-react";

export default function ComparePage() {
  const { items, removeItem } = useCompareStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Scale size={40} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">No Products to Compare</h1>
          <p className="text-muted mb-6 max-w-sm">
            Add products from the catalog to start comparing features, specifications, and prices side by side.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }

  const categoryEmoji: Record<string, string> = {
    brakes: "🛑",
    engine: "⚙️",
    electrical: "⚡",
    suspension: "🏎️",
    body: "🚗",
    exhaust: "💨",
    accessories: "✨",
    tools: "🔧",
  };

  const specKeys = Array.from(new Set(items.flatMap((p) => Object.keys(p.specifications))));

  const compareRows: { label: string; render: (p: (typeof items)[0]) => React.ReactNode }[] = [
    {
      label: "Price",
      render: (p) => (
        <div>
          <span className="text-lg font-bold text-foreground">{formatPrice(p.price)}</span>
          {p.originalPrice && (
            <span className="block text-sm text-muted line-through">{formatPrice(p.originalPrice)}</span>
          )}
        </div>
      ),
    },
    { label: "Brand", render: (p) => <span className="font-medium text-foreground">{p.brand}</span> },
    { label: "Category", render: (p) => <span className="capitalize">{p.category}</span> },
    {
      label: "Rating",
      render: (p) => (
        <div className="flex items-center gap-1.5">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="font-semibold">{p.rating}</span>
          <span className="text-xs text-muted">({p.reviews.toLocaleString()})</span>
        </div>
      ),
    },
    { label: "Reviews", render: (p) => <span>{p.reviews.toLocaleString()}</span> },
    {
      label: "Features",
      render: (p) => (
        <ul className="space-y-1">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-sm">
              <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Compatibility",
      render: (p) => (
        <ul className="space-y-1">
          {p.compatibility.map((c) => (
            <li key={c} className="text-sm text-muted">{c}</li>
          ))}
        </ul>
      ),
    },
    ...specKeys.map((key) => ({
      label: key,
      render: (p: (typeof items)[0]) => (
        <span className={p.specifications[key] ? "text-foreground" : "text-muted/50"}>
          {p.specifications[key] || "—"}
        </span>
      ),
    })),
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4"
        >
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Compare Products</h1>
              <p className="text-sm text-muted mt-1">{items.length} of 4 products selected</p>
            </div>
          </div>
          <button
            onClick={() => useCompareStore.getState().clearCompare()}
            className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            Clear All
          </button>
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-border/50 overflow-hidden min-w-[600px]"
          >
            {/* Product Headers - Sticky */}
            <div className="flex sticky top-0 z-10 bg-white border-b border-border/50">
              <div className="w-44 shrink-0 p-4 font-semibold text-sm text-muted bg-surface/50">
                Product
              </div>
              {items.map((p) => (
                <div key={p.id} className="flex-1 min-w-[180px] p-4 border-l border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{categoryEmoji[p.category] || "📦"}</span>
                    <button
                      onClick={() => removeItem(p.id)}
                      className="w-7 h-7 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center transition-colors shrink-0"
                      title="Remove from comparison"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <Link href={`/product/${p.id}`} className="block group">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {p.name}
                    </h3>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {p.brand}
                    </span>
                  </Link>
                </div>
              ))}
              {items.length < 4 && (
                <div className="w-40 shrink-0 p-4 border-l border-border/50 flex items-center justify-center">
                  <Link
                    href="/products"
                    className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl border-2 border-dashed border-current flex items-center justify-center group-hover:border-primary transition-colors">
                      <Plus size={20} />
                    </div>
                    <span className="text-xs font-medium">Add Product</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Comparison Rows */}
            {compareRows.map((row, rowIdx) => (
              <div
                key={row.label}
                className={`flex border-b border-border/30 last:border-b-0 ${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-surface/30"
                }`}
              >
                <div className="w-44 shrink-0 p-4 text-sm font-semibold text-muted bg-surface/30 flex items-center">
                  {row.label}
                </div>
                {items.map((p) => (
                  <div key={p.id} className="flex-1 min-w-[180px] p-4 border-l border-border/30 text-sm">
                    {row.render(p)}
                  </div>
                ))}
                {items.length < 4 && (
                  <div className="w-40 shrink-0 p-4 border-l border-border/30 text-muted/30 text-sm flex items-center">
                    —
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
