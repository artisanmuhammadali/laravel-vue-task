import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'
import App from './App.vue'
import router from './router'
import './axios'

const app = createApp(App)

app.use(createPinia())
const auth = useAuthStore()
app.config.globalProperties.$auth = auth
app.use(router)
app.mount('#app')
