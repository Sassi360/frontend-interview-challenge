import Admin from '@/views/Admin.vue';
import Cart from '@/views/Cart.vue';
import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/cart', component: Cart },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
