import { createRouter, createWebHistory, type Router, RouterView } from 'vue-router'
import { handleRouting } from './beforeEnter'
import HomeView from '@/views/HomeView.vue'
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/:locale(en|de)?',
      component: RouterView,
      beforeEnter: handleRouting,
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
  ],
})

// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length
//   const fromDepth = from.path.split('/').length
//   to.meta.transition = toDepth < fromDepth ? 'fade-in-right' : 'fade-in-left'
// })

export default router
