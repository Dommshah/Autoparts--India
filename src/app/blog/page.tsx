"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/products";

export default function BlogPage() {
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
            <BookOpen size={16} /> Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Automotive{" "}
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Expert tips, buying guides, and everything you need to know about auto parts
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border/50 card-hover"
            >
              {/* Emoji Header */}
              <div className="h-40 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {post.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                <h2 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-sm text-muted line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Calendar size={12} />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
