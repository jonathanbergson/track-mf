import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@trackco/module-dashboard/pages/DashboardBase.vue')
    },
    {
      path: '/dashboard-live',
      name: 'dashboard-live',
      component: () => import('@trackco/module-dashboard/pages/DashboardLive.vue')
    },
    {
      path: '/interaction',
      name: 'interaction',
      component: () => import('@trackco/module-interaction/pages/index.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./pages/CustomerView.vue')
    },
  ]
})

export default router
