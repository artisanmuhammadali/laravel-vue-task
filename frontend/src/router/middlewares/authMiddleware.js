import { useAuthStore } from '@/stores/auth.js'
/**
 * This middleware is used to dynamically update the Layouts system.
 *
 * As soon as the route changes, it tries to pull the layout that we want to display from the laptop. Then it loads the layout component, and assigns the loaded component to the meta in the layout Component variable. And layoutComponent is used in the basic layout AppLayout.vue, there is a dynamic update of the layout component
 *
 * If the layout we want to display is not found, loads the default layout App Layout Default.vue
 * */
export async function authMiddleware(to, from, next) {
  const authStore = useAuthStore()
  // Fetch user only once if not already fetched
  if (!authStore.user) {
    await authStore.fetchUser()
  }
  // if user is auth and try ot access guest routes then redirect to dashboard
  if (to.meta.guest && authStore.user) {
    return next('/dashboard')
  }
  if (to.meta.exception) {
    return next()
  }
  // If the route is public, allow access
  if (to.meta.guest) {
    return next()
  }
  // If user is authenticated, proceed
  if (authStore.user) {
    return next()
  }
  // Redirect to login if unauthenticated
  return next('/')
}
