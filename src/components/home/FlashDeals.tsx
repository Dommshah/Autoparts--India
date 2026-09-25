"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { flashDeals, formatPrice, getDiscount } from "@/lib/products";

function CountdownTimer({ endsAt }: { endsAt: string }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, new Date(endsAt).getTime() - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours: h, minutes: m, seconds: s });
      setTotalSeconds(Math.floor(diff / 1000));
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  const isUrgent = totalSeconds < 3600;

  return (
    <span className={`font-mono text-sm font-bold ${isUrgent ? "text-red-600" : "text-foreground"}`}>
      {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
      {String(timeLeft.seconds).padStart(2, "0")}
      {isUrgent && <span className="ml-1 text-xs font-semibold text-red-500 animate-pulse">HURRY!</span>}
    </span>
  );
}

export default function FlashDeals() {
  const deals = flashDeals.slice(0, 4);

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

  return (
    <section className="py-20 bg-gradient-to-b from-red-50/50 via-orange-50/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/40 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Limited Time</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Flash Deals{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">🔥</span>
            </h2>
            <p className="text-muted mt-2">Hurry, limited time!</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deals.map((deal, i) => {
            const discount = getDiscount(deal.dealPrice, deal.product.originalPrice);
            const emoji = categoryEmoji[deal.product.category] || "📦";

            return (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300"
              >
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold shadow-lg shadow-red-200">
                    -{discount}%
                  </span>
                </div>

                {/* Product Visual */}
                <div className="relative h-44 bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-4xl">{emoji}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[11px] font-bold text-red-600">
                      {deal.dealsClaimed}/{deal.maxDeals} claimed
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
                    {deal.product.brand}
                  </span>
                  <h3 className="font-semibold text-sm text-foreground line-clamp-1 mt-2 mb-3">
                    {deal.product.name}
                  </h3>

                  {/* Prices */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                      {formatPrice(deal.dealPrice)}
                    </span>
                    {deal.product.originalPrice && (
                      <span className="text-sm text-muted line-through">
                        {formatPrice(deal.product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Countdown */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted">Ends in:</span>
                    <CountdownTimer endsAt={deal.dealEndsAt} />
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full h-2 rounded-full bg-red-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-500"
                        style={{ width: `${deal.claimedPercent}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-muted">{deal.claimedPercent}% claimed</span>
                      <span className="text-[11px] text-red-500 font-medium">
                        {deal.maxDeals - deal.dealsClaimed} left!
                      </span>
                    </div>
                  </div>

                  {/* Grab Deal Button */}
                  <Link
                    href={`/product/${deal.product.id}`}
                    className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-200/60 transition-all"
                  >
                    Grab Deal
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
