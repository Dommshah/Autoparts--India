"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Package,
  Heart,
  MapPin,
  Plus,
  Pencil,
  Trash2,
  Star,
  X,
} from "lucide-react";

const sidebarLinks = [
  { href: "/account", label: "Profile", icon: User },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
];

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  {
    id: "addr-1",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    address: "42, Green Park Society, Andheri West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400058",
    isDefault: true,
  },
  {
    id: "addr-2",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    address: "15, Baner Road, Near Phoenix Mall",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411045",
    isDefault: false,
  },
];

export default function AddressesPage() {
  const pathname = usePathname();
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "Rajesh Kumar", phone: "+91 98765 43210", address: "", city: "", state: "Maharashtra", pincode: "" });

  const handleSave = () => {
    if (!form.address || !form.city || !form.pincode) return;
    if (editingId) {
      setAddresses((prev) =>
        prev.map((a) => (a.id === editingId ? { ...a, ...form } : a))
      );
    } else {
      setAddresses((prev) => [
        ...prev,
        { ...form, id: `addr-${Date.now()}`, isDefault: prev.length === 0 },
      ]);
    }
    setForm({ name: "Rajesh Kumar", phone: "+91 98765 43210", address: "", city: "", state: "Maharashtra", pincode: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (addr: Address) => {
    setForm({ name: addr.name, phone: addr.phone, address: addr.address, city: addr.city, state: addr.state, pincode: addr.pincode });
    setEditingId(addr.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => {
      const filtered = prev.filter((a) => a.id !== id);
      if (filtered.length > 0 && !filtered.some((a) => a.isDefault)) {
        filtered[0].isDefault = true;
      }
      return filtered;
    });
  };

  const handleSetDefault = (id: string) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  };

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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">My Addresses</h1>
            <button
              onClick={() => {
                setForm({ name: "Rajesh Kumar", phone: "+91 98765 43210", address: "", city: "", state: "Maharashtra", pincode: "" });
                setEditingId(null);
                setShowForm(true);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <Plus size={16} />
              Add Address
            </button>
          </div>

          {/* Address Cards */}
          <div className="space-y-4">
            {addresses.map((addr, i) => (
              <motion.div
                key={addr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-border/50 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-sm">{addr.name}</h3>
                      {addr.isDefault && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-semibold">
                          <Star size={10} className="fill-primary" />
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted">{addr.phone}</p>
                    <p className="text-sm text-muted mt-1">{addr.address}</p>
                    <p className="text-sm text-muted">
                      {addr.city}, {addr.state} - {addr.pincode}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {!addr.isDefault && (
                      <button
                        onClick={() => handleSetDefault(addr.id)}
                        className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-primary hover:bg-primary/10 transition-colors"
                      >
                        Set Default
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(addr)}
                      className="p-2 rounded-lg hover:bg-surface text-muted hover:text-foreground transition-colors"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(addr.id)}
                      className="p-2 rounded-lg hover:bg-red-50 text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add/Edit Form Modal */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                onClick={() => setShowForm(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="bg-white rounded-2xl border border-border/50 p-6 w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-bold">{editingId ? "Edit Address" : "Add New Address"}</h2>
                    <button
                      onClick={() => setShowForm(false)}
                      className="p-2 rounded-lg hover:bg-surface transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted block mb-1.5">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted block mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted block mb-1.5">Address</label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="Street address, apartment, suite..."
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted block mb-1.5">City</label>
                        <input
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted block mb-1.5">Pincode</label>
                        <input
                          type="text"
                          value={form.pincode}
                          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted block mb-1.5">State</label>
                      <input
                        type="text"
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-3 rounded-xl border border-border text-sm font-medium hover:bg-surface transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex-1 py-3 rounded-xl gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      {editingId ? "Update" : "Save Address"}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
