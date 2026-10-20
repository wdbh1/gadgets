<template>
  <div class="flex items-center justify-between border-b py-4">
    <div class="flex items-center gap-4">
      <img :src="product.imageUrl" :alt="product.title" class="w-16 h-16 object-contain" />
      <div>
        <h3 class="font-medium">{{ product.title }}</h3>
        <p class="text-gray-500">{{ product.price.toLocaleString('ru-RU') }} ₽</p>
      </div>
    </div>
    
    <div class="flex items-center gap-3">
      <button @click="cart.decrement(product.id)" class="px-2 border rounded hover:bg-gray-100">-</button>
      <span class="w-6 text-center">{{ product.quantity }}</span>
      <button @click="cart.increment(product.id)" class="px-2 border rounded hover:bg-gray-100">+</button>
      
      <button @click="cart.removeFromCart(product.id)" class="ml-4 text-red-500 hover:underline text-sm">
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';

const cart = useCartStore();

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>