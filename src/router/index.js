import { createRouter, createWebHashHistory } from 'vue-router';
import CartListView from '../views/CartView.vue';
import ProductListView from '../views/ProductListView.vue';

const routes = [
  {
    path: '/',
    redirect: '/list',
  },
  {
    path: '/list',
    name: 'list',
    component: ProductListView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
