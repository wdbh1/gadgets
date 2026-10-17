<template>
  <div class="border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-200">
    <div class="relative w-full h-48 flex items-center justify-center">
      <img :src="imgUrl" :alt="title" class="max-h-full max-w-full object-contain" />
      
      <button class="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100">
        <img src="/public/like-outline.svg" alt="" class="w-5 h-5" />
      </button>
    </div>

    <h3 class="text-base font-medium text-gray-900 leading-snug">
      {{ title }}
    </h3>

    <div class="flex items-center justify-between mt-auto pt-2">
      <span class="text-lg font-bold text-gray-900">{{ price }} ₽</span>
      <button class="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
        <img src="/public/cart-icon.svg" alt="" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: String,
  title: String,
  price: [String, Number]
})
</script>