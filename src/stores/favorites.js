import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: [],
  }),
  actions: {
    toggleFavorite(product) {
      const index = this.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      } else {
        this.items.push(product);
      }
    },
  },
  getters: {
    isFavorite: (state) => {
      return (id) => state.items.some((item) => item.id === id);
    }
  },
  persist: true, // Автосохранение в localStorage
});