import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from './middlewares/authMiddleware.js'
import ForbiddenView from '@/views/Exception/ForbiddenView.vue'
import LoginView from '@/views/Guest/LoginView.vue'
import dashboardRoutes from './dashboardRoutes.js'
import RegisterView from '@/views/Guest/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: LoginView,
      meta: { title: 'Login', layout: 'GuestLayout', guest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { title: 'Register', layout: 'GuestLayout', guest: true },
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: ForbiddenView,
      meta: { title: 'Forbidden Access', layout: 'GuestLayout', exception: true },
    },
    ...dashboardRoutes,
  ],
})

router.beforeEach(authMiddleware)
const DEFAULT_TITLE = import.meta.env.VITE_APP_NAME
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
})

export default router
