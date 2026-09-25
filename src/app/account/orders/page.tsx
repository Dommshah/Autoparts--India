"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Package,
  Heart,
  MapPin,
  ChevronRight,
  Truck,
  CheckCircle,
  Clock,
  CircleDot,
} from "lucide-react";
import { useOrderStore } from "@/store/orderStore";
import { formatPrice } from "@/lib/products";

const sidebarLinks = [
  { href: "/account", label: "Profile", icon: User },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700", icon: Clock },
  confirmed: { label: "Confirmed", color: "bg-blue-100 text-blue-700", icon: CheckCircle },
  shipped: { label: "Shipped", color: "bg-purple-100 text-purple-700", icon: Truck },
  out_for_delivery: { label: "Out for Delivery", color: "bg-orange-100 text-orange-700", icon: CircleDot },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-700", icon: CheckCircle },
};

export default function OrdersPage() {
  const pathname = usePathname();
  const orders = useOrderStore((s) => s.orders);

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
          <h1 className="text-2xl font-bold mb-6">My Orders</h1>

          {orders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-border/50 p-12 text-center"
            >
              <div className="text-6xl mb-4">📦</div>
              <h3 className="font-bold text-lg mb-2">No orders yet</h3>
              <p className="text-sm text-muted mb-6">Start shopping to see your orders here</p>
              <Link
                href="/products"
                className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold text-sm inline-block"
              >
                Browse Products
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, i) => {
                const config = statusConfig[order.status];
                const StatusIcon = config.icon;
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="block bg-white rounded-2xl border border-border/50 p-5 hover:shadow-lg hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-bold text-sm">Order #{order.id}</h3>
                            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold ${config.color}`}>
                              <StatusIcon size={12} />
                              {config.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted">
                            Placed on {new Date(order.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </p>
                        </div>
                        <ChevronRight size={18} className="text-muted shrink-0 mt-1" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted">Total: </span>
                          <span className="font-bold">{formatPrice(order.grandTotal)}</span>
                        </div>
                        <div className="text-xs text-muted">
                          {order.status === "delivered" ? (
                            <span className="text-green-600 font-medium">Delivered on {new Date(order.estimatedDelivery).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                          ) : (
                            <>
                              <span className="text-muted">Est. delivery: </span>
                              <span className="font-medium text-foreground">
                                {new Date(order.estimatedDelivery).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
