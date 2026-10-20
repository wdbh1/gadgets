<template>
  <div class="pt-10">
    <h1 class="text-[40px] font-bold mb-5">Корзина</h1>
    
    <div v-if="cart.items.length === 0">
      <p class="text-lg text-gray-500">Корзина пуста 🛒</p>
    </div>
    
    <div v-else class="max-w-3xl">
      <cart-product v-for="item in cart.items" :key="item.id" :product="item" />
      
      <div class="mt-6 flex justify-between items-center">
        <p class="text-xl font-bold">Итого: {{ cart.totalPrice.toLocaleString('ru-RU') }} ₽</p>
        <button @click="checkout" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
import CartProduct from '../components/CartProduct.vue';

const cart = useCartStore();

const checkout = () => {
  if (confirm('Вы уверены, что хотите оформить заказ?')) {
    cart.clearCart();
    alert('Заказ успешно оформлен!');
  }
};
</script>