"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    comment: "Found exact brake pads for my Creta. Fast delivery and genuine product. The AI chatbot helped me find the right fit instantly!",
    vehicle: "Hyundai Creta",
    avatar: "👨‍💼",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    comment: "Best prices for authentic parts. Ordered Mobil oil and spark plugs — delivered in 2 days. Highly recommended!",
    vehicle: "Maruti Swift",
    avatar: "👩‍💻",
  },
  {
    name: "Arjun Patel",
    location: "Ahmedabad",
    rating: 5,
    comment: "The AI assistant understood my exact requirement. Got a complete timing belt kit at 30% less than local market price.",
    vehicle: "Honda City",
    avatar: "🧑‍🔧",
  },
  {
    name: "Meera Nair",
    location: "Bangalore",
    rating: 4,
    comment: "Excellent collection of accessories. Bought seat covers and floor mats — premium quality at reasonable prices.",
    vehicle: "Tata Nexon",
    avatar: "👩‍🏫",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Loved by <span className="text-gradient">50,000+ Car Owners</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-surface border border-border/50 card-hover"
            >
              <Quote size={24} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed line-clamp-4">{t.comment}</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.vehicle} &bull; {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
