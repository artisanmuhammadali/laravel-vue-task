import DashboardView from '@/views/Auth/DashboardView.vue'
import ProfileView from '@/views/Auth/ProfileView.vue'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: 'Dashboard', layout: 'UserLayout', permission: 'dashboard' },
    children: [
      {
        path: '',
        name: 'dashboard.index',
        component: DashboardView,
        meta: { title: 'Dashboard', layout: 'UserLayout', permission: 'dashboard' },
      },
    ],
  },
  {
    path: '/user/profile',
    name: 'user.profile',
    component: ProfileView,
    meta: { title: 'User Profile', layout: 'UserLayout', permission: 'profile' },
  },
]
export default dashboardRoutes
