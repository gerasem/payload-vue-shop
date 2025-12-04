import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: `/:locale(${import.meta.env.VITE_LANGUAGES.replace(',', '|')})?`,
    component: RouterView,
    children: [
      {
        path: '',
        name: 'main',
        component: HomeView,
      },
      {
        path: 'category',
        name: 'all-items',
        component: () => import('@/views/AllItemsView.vue'),
      },
      {
        path: 'category/:handle',
        name: 'catalog',
        component: () => import('@/views/CategoryView.vue'),
      },
      {
        path: 'item/:handle',
        name: 'item',
        component: () => import('@/views/ItemView.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/CheckoutView.vue'),
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('@/views/PaymentView.vue'),
      },
      {
        path: 'cabinet',
        name: 'cabinet',
        component: () => import('@/views/CabinetView.vue'),
      },
      {
        path: '404',
        name: '404',
        component: () => import('@/views/404View.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404View.vue'),
      },
    ],
  },
]

export default routes
