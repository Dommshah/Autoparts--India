"use client";

import { useState, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, Grid3X3, LayoutList } from "lucide-react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";

const brands = [...new Set(products.map((p) => p.brand))].sort();
const priceRanges = [
  { label: "Under ₹2,000", min: 0, max: 2000 },
  { label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "Above ₹10,000", min: 10000, max: Infinity },
];
const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
  { label: "Most Popular", value: "popular" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedBrand, selectedPriceRange, sortBy]);

  const activeFilters = [selectedCategory, selectedBrand, selectedPriceRange !== null ? priceRanges[selectedPriceRange].label : ""].filter(Boolean);

  return (
    <div className="pt-32 lg:pt-36 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Auto Parts & Accessories</h1>
          <p className="text-muted mt-1">{filteredProducts.length} products found</p>
        </div>

        <div className="flex gap-6">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search parts..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-border text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="bg-white rounded-2xl p-5 border border-border/50">
                <h3 className="font-semibold text-sm mb-3">Category</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedCategory ? "bg-primary/10 text-primary font-medium" : "text-muted hover:bg-surface"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                        selectedCategory === cat.id ? "bg-primary/10 text-primary font-medium" : "text-muted hover:bg-surface"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span> {cat.name}
                      </span>
                      <span className="text-xs">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-border/50">
                <h3 className="font-semibold text-sm mb-3">Price Range</h3>
                <div className="space-y-1">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedPriceRange === i ? "bg-primary/10 text-primary font-medium" : "text-muted hover:bg-surface"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-border/50">
                <h3 className="font-semibold text-sm mb-3">Brand</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedBrand("")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedBrand ? "bg-primary/10 text-primary font-medium" : "text-muted hover:bg-surface"
                    }`}
                  >
                    All Brands
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedBrand === brand ? "bg-primary/10 text-primary font-medium" : "text-muted hover:bg-surface"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-border text-sm font-medium hover:border-primary transition-colors"
              >
                <SlidersHorizontal size={16} /> Filters
              </button>

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search parts..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-border text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-border text-sm outline-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>

                <div className="hidden sm:flex items-center bg-white border border-border rounded-xl p-0.5">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary text-white" : "text-muted"}`}
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary text-white" : "text-muted"}`}
                  >
                    <LayoutList size={16} />
                  </button>
                </div>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory("")}><X size={14} /></button>
                  </span>
                )}
                {selectedBrand && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {selectedBrand}
                    <button onClick={() => setSelectedBrand("")}><X size={14} /></button>
                  </span>
                )}
                {selectedPriceRange !== null && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {priceRanges[selectedPriceRange].label}
                    <button onClick={() => setSelectedPriceRange(null)}><X size={14} /></button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedBrand("");
                    setSelectedPriceRange(null);
                  }}
                  className="text-sm text-muted hover:text-danger transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-semibold text-lg mb-2">No products found</h3>
                <p className="text-muted text-sm">Try adjusting your filters or search query</p>
              </motion.div>
            ) : (
              <div className={`grid gap-5 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}>
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 lg:pt-36 min-h-screen bg-surface flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted text-sm">Loading products...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
