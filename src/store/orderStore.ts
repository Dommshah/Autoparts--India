import { create } from "zustand";
import { CartItem } from "@/types";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  gst: number;
  grandTotal: number;
  status: "processing" | "confirmed" | "shipped" | "out_for_delivery" | "delivered";
  date: string;
  estimatedDelivery: string;
  address: {
    name: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
}

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrderById: (id: string) => Order | undefined;
  getOrdersCount: () => number;
  getOrdersByStatus: (status: Order["status"]) => Order[];
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [
    {
      id: "AP-8F3K2N7X",
      items: [],
      total: 12497,
      gst: 2249,
      grandTotal: 14746,
      status: "shipped",
      date: new Date(Date.now() - 5 * 86400000).toISOString(),
      estimatedDelivery: new Date(Date.now() + 3 * 86400000).toISOString(),
      address: {
        name: "Rajesh Kumar",
        phone: "+91 98765 43210",
        address: "42, Green Park Society, Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400058",
      },
      paymentMethod: "upi",
    },
    {
      id: "AP-7H9M4P2R",
      items: [],
      total: 5499,
      gst: 990,
      grandTotal: 6489,
      status: "delivered",
      date: new Date(Date.now() - 15 * 86400000).toISOString(),
      estimatedDelivery: new Date(Date.now() - 2 * 86400000).toISOString(),
      address: {
        name: "Rajesh Kumar",
        phone: "+91 98765 43210",
        address: "42, Green Park Society, Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400058",
      },
      paymentMethod: "card",
    },
    {
      id: "AP-5T1L8W6Q",
      items: [],
      total: 3299,
      gst: 594,
      grandTotal: 3893,
      status: "delivered",
      date: new Date(Date.now() - 30 * 86400000).toISOString(),
      estimatedDelivery: new Date(Date.now() - 25 * 86400000).toISOString(),
      address: {
        name: "Rajesh Kumar",
        phone: "+91 98765 43210",
        address: "42, Green Park Society, Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400058",
      },
      paymentMethod: "cod",
    },
  ],
  addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
  getOrderById: (id) => get().orders.find((o) => o.id === id),
  getOrdersCount: () => get().orders.length,
  getOrdersByStatus: (status) => get().orders.filter((o) => o.status === status),
}));
