<template>
  <div class="pt-10">
    <h1 class="text-[40px] font-bold mb-5">Избранное</h1>
    
    <div v-if="favorites.items.length === 0">
      <p class="text-lg text-gray-500">В избранном пока ничего нет 🤍</p>
    </div>
    
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      <v-product 
        v-for="item in favorites.items" 
        :key="item.id" 
        :product="item" 
      />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favorites';
import VProduct from '../components/VProduct.vue';

const favorites = useFavoritesStore();
</script>