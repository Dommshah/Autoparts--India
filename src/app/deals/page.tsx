"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Flame, Zap } from "lucide-react";
import { flashDeals, formatPrice, getDiscount } from "@/lib/products";
import type { FlashDeal } from "@/lib/products";

function useCountdown(endsAt: string) {
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

  return { timeLeft, totalSeconds };
}

function CountdownTimer({ endsAt }: { endsAt: string }) {
  const { timeLeft, totalSeconds } = useCountdown(endsAt);
  const isUrgent = totalSeconds < 3600;

  return (
    <div className={`flex items-center gap-1 ${isUrgent ? "text-red-500" : "text-foreground"}`}>
      <Clock size={14} className={isUrgent ? "animate-pulse" : ""} />
      <span className="font-mono text-sm font-bold">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </span>
      {isUrgent && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 animate-pulse ml-1">
          Hurry!
        </span>
      )}
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

export default function DealsPage() {
  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Flame size={16} /> Limited Time Offers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Flash{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Deals
            </span>{" "}
            🔥
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Grab these incredible deals before they expire. Limited stock available!
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {flashDeals.map((deal, i) => (
            <DealCard key={deal.id} deal={deal} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DealCard({ deal, index }: { deal: FlashDeal; index: number }) {
  const discount = getDiscount(deal.dealPrice, deal.product.originalPrice);
  const emoji = categoryEmoji[deal.product.category] || "📦";
  const remaining = deal.maxDeals - deal.dealsClaimed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
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
        <div className="flex items-center justify-between mb-3 p-2 rounded-lg bg-surface">
          <span className="text-xs text-muted font-medium">Ends in:</span>
          <CountdownTimer endsAt={deal.dealEndsAt} />
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full h-2 rounded-full bg-red-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${deal.claimedPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400"
            />
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[11px] text-muted">{deal.claimedPercent}% claimed</span>
            <span className="text-[11px] text-red-500 font-semibold">
              {remaining} left!
            </span>
          </div>
        </div>

        {/* Grab Deal Button */}
        <Link
          href={`/product/${deal.product.id}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-200/60 transition-all"
        >
          <Zap size={14} />
          Grab Deal
        </Link>
      </div>
    </motion.div>
  );
}
