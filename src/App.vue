<template>
  <div class="min-h-screen flex flex-col justify-between bg-white">
    <div class="mx-auto w-full max-w-[1440px]">
      <header class="flex items-center justify-between px-10 py-6 border-b border-b-slate-200">
        <img src="/public/logo.svg" alt="Logo" class="h-8" />
        <nav class="flex gap-6">
          <a href="#" class="flex items-center gap-2 hover:text-blue-600">
            <img src="/public/like-outline.svg" alt="" class="w-5 h-5" /> Избранное
          </a>
          <a href="#" class="flex items-center gap-2 hover:text-blue-600">
            <img src="/public/cart-icon.svg" alt="" class="w-5 h-5" /> Корзина
          </a>
          <a href="#" class="hover:text-blue-600">Заказы</a>
        </nav>
      </header>
      
      <v-catalog></v-catalog>
    </div>

    <footer class="px-10 py-6 bg-slate-100 text-center text-sm text-gray-500 mt-auto border-t">
      © 2026 Gadgets
    </footer>
  </div>
</template>

<script setup>
import VCatalog from "./components/VCatalog.vue";
</script>