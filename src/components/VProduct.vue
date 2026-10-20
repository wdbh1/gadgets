<template>
  <div class="border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-200">
    <div class="relative w-full h-48 flex items-center justify-center">
      <img :src="product.imageUrl" :alt="product.title" class="max-h-full max-w-full object-contain" />
      
      <button @click="favorites.toggleFavorite(product)" class="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100">
        <img 
          src="/icons/like-outline.svg" 
          alt="" 
          class="w-5 h-5" 
          :class="favorites.isFavorite(product.id) ? 'opacity-100' : 'opacity-30'"
        />
      </button>
    </div>

    <h3 class="text-base font-medium text-gray-900 leading-snug">
      {{ product.title }}
    </h3>

    <div class="flex items-center justify-between mt-auto pt-2">
      <span class="text-lg font-bold text-gray-900">{{ product.price.toLocaleString('ru-RU') }} ₽</span>
      
      <button @click="cart.addToCart(product)" class="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
        <img src="/icons/cart-icon.svg" alt="" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
import { useFavoritesStore } from '../stores/favorites';

const cart = useCartStore();
const favorites = useFavoritesStore();

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>