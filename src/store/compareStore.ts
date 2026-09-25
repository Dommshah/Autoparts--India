import { create } from "zustand";
import { Product } from "@/types";

interface CompareStore {
  items: Product[];
  maxItems: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  hasItem: (productId: string) => boolean;
  clearCompare: () => void;
  getCount: () => number;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  items: [],
  maxItems: 4,
  addItem: (product) =>
    set((state) => {
      if (state.items.find((i) => i.id === product.id)) return state;
      if (state.items.length >= state.maxItems) return state;
      return { items: [...state.items, product] };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== productId),
    })),
  hasItem: (productId) => get().items.some((i) => i.id === productId),
  clearCompare: () => set({ items: [] }),
  getCount: () => get().items.length,
}));
