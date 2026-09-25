"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  User,
  Package,
  Heart,
  MapPin,
  ArrowLeft,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  CircleDot,
  MapPinned,
} from "lucide-react";
import { useOrderStore } from "@/store/orderStore";
import { formatPrice } from "@/lib/products";

const sidebarLinks = [
  { href: "/account", label: "Profile", icon: User },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
];

const timelineSteps = [
  { label: "Order Placed", icon: Clock },
  { label: "Confirmed", icon: CheckCircle },
  { label: "Shipped", icon: Truck },
  { label: "Out for Delivery", icon: CircleDot },
  { label: "Delivered", icon: MapPinned },
];

const statusIndex: Record<string, number> = {
  processing: 0,
  confirmed: 1,
  shipped: 2,
  out_for_delivery: 3,
  delivered: 4,
};

const paymentLabels: Record<string, string> = {
  upi: "UPI Payment",
  card: "Credit/Debit Card",
  cod: "Cash on Delivery",
};

export default function OrderDetailPage() {
  const params = useParams();
  const pathname = usePathname();
  const orderId = params.id as string;
  const getOrderById = useOrderStore((s) => s.getOrderById);
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="pt-32 lg:pt-36 min-h-screen bg-surface max-w-5xl mx-auto px-4 pb-20">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="font-bold text-xl mb-2">Order not found</h2>
          <p className="text-sm text-muted mb-6">The order you&apos;re looking for doesn&apos;t exist</p>
          <Link
            href="/account/orders"
            className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold text-sm inline-block"
          >
            View All Orders
          </Link>
        </div>
      </div>
    );
  }

  const currentStep = statusIndex[order.status];

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
                const isActive = pathname.startsWith(link.href) && (link.href === "/account" ? pathname === link.href : true);
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
          {/* Back + Header */}
          <div className="flex items-center gap-3">
            <Link
              href="/account/orders"
              className="p-2 rounded-xl hover:bg-white transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Order #{order.id}</h1>
              <p className="text-sm text-muted">
                Placed on {new Date(order.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>

          {/* Status Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-border/50 p-6"
          >
            <h2 className="font-bold text-sm mb-6">Order Status</h2>
            <div className="flex items-center justify-between">
              {timelineSteps.map((step, i) => {
                const isCompleted = i <= currentStep;
                const isCurrent = i === currentStep;
                const StepIcon = step.icon;
                return (
                  <div key={step.label} className="flex flex-col items-center flex-1">
                    <div className="relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isCompleted
                            ? "gradient-primary text-white"
                            : "bg-surface text-muted border border-border"
                        } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                      >
                        <StepIcon size={18} />
                      </div>
                      {i < timelineSteps.length - 1 && (
                        <div
                          className={`absolute top-5 left-full w-full h-0.5 -translate-x-1/2 ${
                            i < currentStep ? "bg-primary" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                    <span className={`text-[11px] mt-2 text-center font-medium ${isCompleted ? "text-foreground" : "text-muted"}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Order Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-border/50 p-6"
          >
            <h2 className="font-bold text-sm mb-4">Order Items</h2>
            {order.items.length === 0 ? (
              <p className="text-sm text-muted py-4">Item details not available</p>
            ) : (
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4 p-3 rounded-xl bg-surface">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <span className="text-2xl">
                        {item.product.category === "brakes" && "🛑"}
                        {item.product.category === "engine" && "⚙️"}
                        {item.product.category === "electrical" && "⚡"}
                        {item.product.category === "suspension" && "🏎️"}
                        {item.product.category === "body" && "🚗"}
                        {item.product.category === "exhaust" && "💨"}
                        {item.product.category === "accessories" && "✨"}
                        {item.product.category === "tools" && "🔧"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-muted">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-sm">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Address & Payment */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-border/50 p-6"
            >
              <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Delivery Address
              </h2>
              <div className="text-sm space-y-1">
                <p className="font-semibold">{order.address.name}</p>
                <p className="text-muted">{order.address.phone}</p>
                <p className="text-muted">{order.address.address}</p>
                <p className="text-muted">{order.address.city}, {order.address.state} - {order.address.pincode}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl border border-border/50 p-6"
            >
              <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
                <CreditCard size={16} className="text-primary" />
                Payment Method
              </h2>
              <p className="text-sm text-muted">{paymentLabels[order.paymentMethod] || order.paymentMethod}</p>
            </motion.div>
          </div>

          {/* Price Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-border/50 p-6"
          >
            <h2 className="font-bold text-sm mb-4">Price Breakdown</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">{formatPrice(order.total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">GST (18%)</span>
                <span className="font-medium">{formatPrice(order.gst)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
                <span>Grand Total</span>
                <span className="text-lg">{formatPrice(order.grandTotal)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
