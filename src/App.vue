<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="flex items-center justify-between px-10 py-6 border-b">
      <img src="/logo.svg" alt="Logo" class="h-8" />

      <nav class="flex gap-6">
        <a href="#" class="flex items-center gap-2 hover:text-blue-600">
          <img src="/like-outline.svg" alt="" class="w-5 h-5" />
          Избранное
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-blue-600">
          <img src="/cart-icon.svg" alt="" class="w-5 h-5" />
          Корзина
        </a>
        <a href="#" class="hover:text-blue-600">Заказы</a>
      </nav>
    </header>

    <main class="flex-1 px-10 py-8">
      <ProductList :items="items" />
    </main>

    <footer class="...">...</footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductList from './components/ProductList.vue'

const items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://a5f17ae1f1b7d380.mokky.dev/items')
    items.value = data
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
  }
}

onMounted(fetchItems)
</script>