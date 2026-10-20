import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    increment(id) {
      const item = this.items.find((item) => item.id === id);
      if (item) item.quantity++;
    },
    decrement(id) {
      const item = this.items.find((item) => item.id === id);
      if (item && item.quantity > 1) item.quantity--;
    },
    clearCart() {
      this.items = [];
    }
  },
  persist: true, // Автосохранение в localStorage
});