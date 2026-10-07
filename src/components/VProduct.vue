<template>
  <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-lg transition">
    <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain" />

    <h3 class="font-medium text-lg">{{ product.title }}</h3>

    <div class="flex items-center justify-between mt-auto">
      <span class="font-bold">{{ product.price }} ₽</span>
      <button class="p-2 rounded-full border hover:bg-gray-100">
        <img src="/cart-icon.svg" alt="" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>