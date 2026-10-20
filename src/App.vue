<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <div class="mx-auto w-full max-w-[1440px]">
      <header class="flex items-center justify-between px-10 py-6 border-b border-b-slate-200">
        <RouterLink to="/">
          <img src="/images/logo.svg" alt="Logo" class="h-8" />
        </RouterLink>
        
        <nav class="flex gap-6">
          <RouterLink :to="{ name: 'favorites' }" class="flex items-center gap-2 hover:text-blue-600">
            <img src="/icons/like-outline.svg" alt="" class="w-5 h-5" /> Избранное
          </RouterLink>
          <RouterLink :to="{ name: 'cart' }" class="flex items-center gap-2 hover:text-blue-600">
            <img src="/icons/cart-icon.svg" alt="" class="w-5 h-5" /> Корзина
          </RouterLink>
          <RouterLink :to="{ name: 'orders' }" class="hover:text-blue-600">Заказы</RouterLink>
        </nav>
      </header>
      
      <!-- Вывод страниц -->
      <RouterView />
    </div>

    <footer class="px-10 py-6 bg-slate-100 text-center text-sm text-gray-500 mt-auto border-t">
      © 2026 Gadgets
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>