<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="flex items-center border pl-3 pr-2 gap-2 bg-white border-gray-500/30 h-[52px] rounded-md outline-none cursor-pointer"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  modelValue: { type: String, required: true },
  options: { type: Array, required: true },
});
defineEmits(["update:modelValue"]);
</script>