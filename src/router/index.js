import { createRouter, createWebHistory } from "vue-router";
import CatalogView from "../views/CatalogView.vue";
import CartView from "../views/CartView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import OrdersView from "../views/OrdersView.vue";

const routes = [
  { path: "/", name: "catalog", component: CatalogView },
  { path: "/cart", name: "cart", component: CartView },
  { path: "/favorites", name: "favorites", component: FavoritesView },
  { path: "/orders", name: "orders", component: OrdersView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;