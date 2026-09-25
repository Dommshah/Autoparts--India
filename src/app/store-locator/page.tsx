"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Search,
  Navigation,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { storeLocations } from "@/lib/stores";

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedStore, setExpandedStore] = useState<string | null>(null);

  const filteredStores = storeLocations.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStore = (id: string) => {
    setExpandedStore(expandedStore === id ? null : id);
  };

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Navigation size={16} /> Find Nearby
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Store{" "}
            <span className="text-gradient">Locator</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Find your nearest AutoParts Hub store across India
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, address, or store name..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-border text-sm outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
        </motion.div>

        {/* Map Placeholder + Store List */}
        <div className="grid lg:grid-cols-5 gap-8 pb-20">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 h-[500px] rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-border/50 flex flex-col items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Interactive Map</h3>
                <p className="text-sm text-muted max-w-xs">
                  {filteredStores.length} store{filteredStores.length !== 1 ? "s" : ""} found
                  across India
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
                {filteredStores.slice(0, 4).map((store) => (
                  <div
                    key={store.id}
                    className="h-1.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-40"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Store List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredStores.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-semibold text-lg mb-2">No stores found</h3>
                <p className="text-muted text-sm">
                  Try a different search term
                </p>
              </motion.div>
            ) : (
              filteredStores.map((store, i) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white rounded-2xl border border-border/50 overflow-hidden card-hover"
                >
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() => toggleStore(store.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-base mb-1">
                          {store.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-muted mb-1">
                          <MapPin size={13} className="shrink-0" />
                          <span>
                            {store.address}, {store.city}, {store.state} -{" "}
                            {store.pincode}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted">
                          <Phone size={13} className="shrink-0" />
                          <span>{store.phone}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0 ml-4">
                        <div className="flex items-center gap-1">
                          <Star
                            size={14}
                            className="fill-amber-400 text-amber-400"
                          />
                          <span className="font-bold text-sm">
                            {store.rating}
                          </span>
                          <span className="text-xs text-muted">
                            ({store.reviews.toLocaleString()})
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted">
                          <Clock size={12} />
                          {store.hours}
                        </div>
                        {expandedStore === store.id ? (
                          <ChevronUp size={16} className="text-muted" />
                        ) : (
                          <ChevronDown size={16} className="text-muted" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedStore === store.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-border/50"
                      >
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                          Services
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {store.services.map((service) => (
                            <span
                              key={service}
                              className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        {/* Mini Map Placeholder */}
                        <div className="h-32 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                          <div className="flex items-center gap-2 text-sm text-muted">
                            <MapPin size={16} className="text-primary" />
                            <span>
                              {store.lat.toFixed(4)}, {store.lng.toFixed(4)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
