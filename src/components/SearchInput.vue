<template>
  <div class="flex items-center border px-3 gap-2 bg-white border-gray-500/30 h-[52px] rounded-md w-[300px]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    
    <input
      v-model="inputQuery"
      type="text"
      :placeholder="placeholder"
      class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
    />
    
    <button v-if="inputQuery" class="cursor-pointer text-gray-500 hover:text-black" @click="clearSearch">
      &times;
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "Поиск..." },
});

const emit = defineEmits(["update:modelValue"]);
const inputQuery = ref(props.modelValue);
let debounceTimeout = null;

watch(inputQuery, (newVal) => {
  clearTimeout(debounceTimeout);
  if (!newVal.trim()) {
    emit("update:modelValue", "");
    return;
  }
  debounceTimeout = setTimeout(() => {
    emit("update:modelValue", newVal);
  }, 300);
});

watch(
  () => props.modelValue,
  (newVal) => {
    inputQuery.value = newVal;
  }
);

const clearSearch = () => {
  clearTimeout(debounceTimeout);
  inputQuery.value = "";
  emit("update:modelValue", "");
};
</script>