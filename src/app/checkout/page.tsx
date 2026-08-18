"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CreditCard,
  Truck,
  Shield,
  ChevronRight,
  Check,
  MapPin,
  Package,
  IndianRupee,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/products";

const steps = ["Address", "Payment", "Review"];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry",
];

export default function CheckoutPage() {
  const { items, getTotal, getGST, getGrandTotal, clearCart } = useCartStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: "",
    paymentMethod: "upi",
  });

  const updateForm = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="pt-32 lg:pt-36 min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-bold text-xl mb-2">Your cart is empty</h2>
          <p className="text-muted text-sm mb-6">Add some items before checking out</p>
          <Link href="/products" className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold text-sm">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="pt-32 lg:pt-36 min-h-screen bg-surface flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
          >
            <Check size={40} className="text-green-600" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-3">Order Placed!</h2>
          <p className="text-muted mb-2">Order #AP-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
          <p className="text-sm text-muted mb-8">
            Thank you for your order. You will receive a confirmation email and SMS shortly.
            Track your order from the dashboard.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-primary text-white font-semibold"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                i <= currentStep ? "gradient-primary text-white" : "bg-white border border-border text-muted"
              }`}>
                {i < currentStep ? <Check size={14} /> : i + 1}
              </div>
              <span className={`text-sm font-medium hidden sm:inline ${i <= currentStep ? "text-foreground" : "text-muted"}`}>
                {step}
              </span>
              {i < steps.length - 1 && <div className={`w-12 h-0.5 mx-2 ${i < currentStep ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {currentStep === 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-8 border border-border/50 space-y-5">
                <h2 className="text-xl font-bold flex items-center gap-2"><MapPin size={20} /> Delivery Address</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Full Name" value={form.name} onChange={(e) => updateForm("name", e.target.value)} className="px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary" />
                  <input placeholder="Phone Number" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} className="px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <input placeholder="Email Address" value={form.email} onChange={(e) => updateForm("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary" />
                <textarea placeholder="Address (House no, Street, Area)" value={form.address} onChange={(e) => updateForm("address", e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
                <div className="grid sm:grid-cols-3 gap-4">
                  <input placeholder="City" value={form.city} onChange={(e) => updateForm("city", e.target.value)} className="px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary" />
                  <select value={form.state} onChange={(e) => updateForm("state", e.target.value)} className="px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">State</option>
                    {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input placeholder="PIN Code" value={form.pincode} onChange={(e) => updateForm("pincode", e.target.value)} className="px-4 py-3 rounded-xl border border-border text-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button onClick={() => setCurrentStep(1)} className="w-full py-3.5 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
                  Continue to Payment
                </button>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-8 border border-border/50 space-y-5">
                <h2 className="text-xl font-bold flex items-center gap-2"><CreditCard size={20} /> Payment Method</h2>
                {[
                  { id: "upi", label: "UPI (Google Pay, PhonePe, Paytm)", icon: "📱" },
                  { id: "card", label: "Credit / Debit Card", icon: "💳" },
                  { id: "netbanking", label: "Net Banking", icon: "🏦" },
                  { id: "cod", label: "Cash on Delivery", icon: "💵" },
                ].map((method) => (
                  <label key={method.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    form.paymentMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                  }`}>
                    <input type="radio" name="payment" value={method.id} checked={form.paymentMethod === method.id} onChange={(e) => updateForm("paymentMethod", e.target.value)} className="sr-only" />
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium text-sm">{method.label}</span>
                    <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      form.paymentMethod === method.id ? "border-primary" : "border-border"
                    }`}>
                      {form.paymentMethod === method.id && <div className="w-3 h-3 rounded-full bg-primary" />}
                    </div>
                  </label>
                ))}
                <div className="flex gap-3">
                  <button onClick={() => setCurrentStep(0)} className="px-6 py-3.5 rounded-xl border border-border font-semibold text-sm hover:bg-surface transition-colors">
                    Back
                  </button>
                  <button onClick={() => setCurrentStep(2)} className="flex-1 py-3.5 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Review Order
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-8 border border-border/50 space-y-5">
                <h2 className="text-xl font-bold flex items-center gap-2"><Package size={20} /> Order Review</h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 p-4 rounded-xl bg-surface">
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
                        <h4 className="font-semibold text-sm line-clamp-1">{item.product.name}</h4>
                        <p className="text-xs text-muted">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-bold text-sm">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-surface space-y-2">
                  <div className="text-sm"><span className="text-muted">Deliver to:</span> {form.name || "N/A"}</div>
                  <div className="text-sm"><span className="text-muted">Address:</span> {form.address || "N/A"}, {form.city || ""}, {form.state || ""} - {form.pincode || ""}</div>
                  <div className="text-sm"><span className="text-muted">Payment:</span> {form.paymentMethod.toUpperCase()}</div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setCurrentStep(1)} className="px-6 py-3.5 rounded-xl border border-border font-semibold text-sm hover:bg-surface transition-colors">
                    Back
                  </button>
                  <button onClick={() => { setOrderPlaced(true); clearCart(); }} className="flex-1 py-3.5 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                    <IndianRupee size={16} /> Place Order — {formatPrice(getGrandTotal())}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-2xl p-6 border border-border/50 space-y-4">
              <h3 className="font-bold">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted">Subtotal ({items.length} items)</span><span className="font-medium">{formatPrice(getTotal())}</span></div>
                <div className="flex justify-between"><span className="text-muted">GST (18%)</span><span className="font-medium">{formatPrice(getGST())}</span></div>
                <div className="flex justify-between"><span className="text-muted">Shipping</span><span className="font-medium text-green-600">FREE</span></div>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-lg">{formatPrice(getGrandTotal())}</span>
              </div>
              <div className="space-y-2 pt-2">
                {[
                  { icon: Truck, text: "Free delivery on all orders" },
                  { icon: Shield, text: "100% secure payments" },
                  { icon: Shield, text: "Genuine parts guarantee" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted">
                    <b.icon size={12} className="text-primary shrink-0" />
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
