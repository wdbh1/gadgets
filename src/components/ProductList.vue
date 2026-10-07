<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <VProduct
      v-for="item in items"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script setup>
import VProduct from './VProduct.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>