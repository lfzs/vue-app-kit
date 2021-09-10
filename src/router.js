import { createRouter, createWebHistory } from '@ionic/vue-router'
import { APP_NAME } from '@/constant'

const routes = [
  {
    path: '/',
    component: () => import('@/view/home'),
    meta: {
      title: '首页',
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL || '/'),
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? APP_NAME
  next()
})

export default router
