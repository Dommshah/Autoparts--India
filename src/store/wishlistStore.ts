import { create } from "zustand";
import { Product } from "@/types";

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
  hasItem: (productId: string) => boolean;
  clearWishlist: () => void;
  getCount: () => number;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      if (state.items.find((i) => i.id === product.id)) return state;
      return { items: [...state.items, product] };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== productId),
    })),
  toggleItem: (product) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === product.id);
      if (exists) {
        return { items: state.items.filter((i) => i.id !== product.id) };
      }
      return { items: [...state.items, product] };
    }),
  hasItem: (productId) => get().items.some((i) => i.id === productId),
  clearWishlist: () => set({ items: [] }),
  getCount: () => get().items.length,
}));
