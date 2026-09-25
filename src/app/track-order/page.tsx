"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Truck, CheckCircle, Clock, MapPin, Package } from "lucide-react";

const mockOrders: { id: string; date: string; status: OrderStatus; items: number; total: number; tracking: string | null }[] = [
  { id: "AP-A1B2C3D4", date: "2026-09-10", status: "delivered", items: 3, total: 12499, tracking: "TRK123456789" },
  { id: "AP-E5F6G7H8", date: "2026-09-05", status: "shipped", items: 1, total: 8999, tracking: "TRK987654321" },
  { id: "AP-I9J0K1L2", date: "2026-08-28", status: "processing", items: 2, total: 5499, tracking: null },
];

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case "processing":
      return <Clock size={24} className="text-yellow-500" />;
    case "shipped":
      return <Truck size={24} className="text-blue-500" />;
    case "delivered":
      return <CheckCircle size={24} className="text-green-500" />;
    default:
      return <Package size={24} className="text-muted" />;
  }
}

type OrderStatus = "processing" | "shipped" | "delivered";

interface StatusConfigType {
  label: string;
  color: string;
  bg: string;
  progress: number;
}

function StatusConfig({ status }: { status: OrderStatus }): StatusConfigType {
  const configs: Record<OrderStatus, StatusConfigType> = {
    processing: { label: "Processing", color: "text-yellow-500", bg: "bg-yellow-50", progress: 25 },
    shipped: { label: "Shipped", color: "text-blue-500", bg: "bg-blue-50", progress: 60 },
    delivered: { label: "Delivered", color: "text-green-500", bg: "bg-green-50", progress: 100 },
  };
  return configs[status] || { label: "Unknown", color: "text-muted", bg: "bg-gray-50", progress: 0 };
}

export default function TrackOrderPage() {
  const [trackingId, setTrackingId] = useState("");
  const [trackedOrder, setTrackedOrder] = useState<typeof mockOrders[0] | null>(null);

  const handleTrack = () => {
    const order = mockOrders.find(o => o.tracking === trackingId || o.id === trackingId);
    setTrackedOrder(order || null);
  };

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Search size={16} /> Track Your Order
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Order <span className="text-gradient">Tracking</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Enter your Order ID or Tracking Number to get real-time updates on your delivery
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl p-6 border border-border/50">
            <div className="flex gap-3">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Order ID (AP-XXXXXXXX) or Tracking Number"
                className="flex-1 px-4 py-3 rounded-xl border border-border text-base outline-none focus:ring-2 focus:ring-primary"
              />
              <button onClick={handleTrack} className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
                Track
              </button>
            </div>
            <p className="text-sm text-muted mt-3 text-center">Example: AP-A1B2C3D4 or TRK123456789</p>
          </div>
        </motion.div>

        {/* Tracked Order */}
        {trackedOrder && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-6 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${StatusConfig({ status: trackedOrder.status }).bg} flex items-center justify-center`}>
                    <StatusIcon status={trackedOrder.status} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{trackedOrder.id}</h3>
                    <p className="text-sm text-muted">Ordered on {new Date(trackedOrder.date).toLocaleDateString("en-IN")}</p>
                  </div>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${StatusConfig({ status: trackedOrder.status }).color} ${StatusConfig({ status: trackedOrder.status }).bg}`}>
                  {StatusConfig({ status: trackedOrder.status }).label}
                </span>
              </div>

              {/* Progress Steps */}
              <div className="p-6">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                  <div className="absolute left-8 top-0 h-0.5 w-0.5 bg-border" />
                  <div className={`absolute left-8 top-0 h-full bg-primary`} style={{ width: `${StatusConfig({ status: trackedOrder.status }).progress}%` }} />
                  {["processing", "shipped", "delivered"].map((step, idx) => (
                    <div key={step} className="relative flex items-start gap-4 mb-6">
                      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 ${idx * 33 <= StatusConfig({ status: trackedOrder.status }).progress ? "bg-primary text-white" : "bg-white border-2 border-border"}`}>
                        {idx * 33 <= StatusConfig({ status: trackedOrder.status }).progress ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Package size={20} className="text-muted" />
                        )}
                      </div>
                      <div className="mt-2">
                        <h4 className={`font-semibold ${idx * 33 <= StatusConfig({ status: trackedOrder.status }).progress ? "text-foreground" : "text-muted"}`}>
                          {step.charAt(0).toUpperCase() + step.slice(1)}
                        </h4>
                        <p className="text-sm text-muted">
                          {step === "processing" && "Your order is being prepared"}
                          {step === "shipped" && trackedOrder.tracking && `Tracking: ${trackedOrder.tracking}`}
                          {step === "delivered" && "Delivered to your address"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Package size={20} /> Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-muted">Items</span><span className="font-medium">{trackedOrder.items}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Total</span><span className="font-medium">₹{trackedOrder.total.toLocaleString()}</span></div>
                  {trackedOrder.tracking && (
                    <div className="flex justify-between"><span className="text-muted">Tracking</span><span className="font-medium font-mono">{trackedOrder.tracking}</span></div>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold mb-4 flex items-center gap-2"><MapPin size={20} /> Delivery Address</h3>
                <p className="text-muted">123 Main Street, Apartment 4B<br/>Mumbai, Maharashtra - 400001<br/>India</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Order History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8">Recent Orders</h2>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 border border-border/50 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center">
                    <Package size={24} className="text-muted" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{order.id}</h3>
                    <p className="text-sm text-muted">{new Date(order.date).toLocaleDateString("en-IN")} • {order.items} items</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${StatusConfig({ status: order.status }).color} ${StatusConfig({ status: order.status }).bg}`}>
                    {StatusConfig({ status: order.status }).label}
                  </span>
                  <span className="font-bold">₹{order.total.toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}