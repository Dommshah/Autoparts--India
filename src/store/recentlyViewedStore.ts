import { create } from "zustand";
import { Product } from "@/types";

interface RecentlyViewedStore {
  items: Product[];
  addItem: (product: Product) => void;
  clearRecent: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const filtered = state.items.filter((i) => i.id !== product.id);
      return { items: [product, ...filtered].slice(0, 10) };
    }),
  clearRecent: () => set({ items: [] }),
}));
