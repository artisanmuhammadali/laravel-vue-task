import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios'
import { nextTick, ref } from 'vue'
import router from '@/router'
import { toastrMsg } from '@/assets/utils'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null,
      formData: ref({
        loginAs:'user'
      }),
      errors: ref({}),
      isDisabled: ref(false),
    }
  },

  actions: {
    registerValidation() {
      this.errors = {}
      const validate = !!this.formData.email && !!this.formData.password && !!this.formData.name 
      if (!validate) {
        if (!this.formData.email) this.errors.email = 'Email is required.'
        if (!this.formData.password) this.errors.password = 'Password is required.'
        if (!this.formData.name) this.errors.name = 'Name is required.'
        return false
      } else {
        return true
      }
    },
    loginValidation() {
      this.errors = {}
      const validate = !!this.formData.email && !!this.formData.password
      if (!validate) {
        if (!this.formData.email) this.errors.email = 'Email is required.'
        if (!this.formData.password) this.errors.password = 'Password is required.'
        if (!this.formData.loginAs) this.errors.loginAs = 'loginAs is required.'
        return false
      } else {
        return true
      }
    },
    async register() {
      if (this.registerValidation()) {
        this.disableSubmitBtn()
        await axios
          .post('register', this.formData)
          .then(async (response) => {
            this.enableSubmitBtn()
            this.user = response.data.user;
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await nextTick();
            router.push('/dashboard')
          })
          .catch((error) => {
            this.enableSubmitBtn()
            toastrMsg(error.response.data.message, 'error')
          })
      }
    },
    async login() {
      if (this.loginValidation()) {
        this.disableSubmitBtn()
        await axios
          .post('login', this.formData)
          .then(async (response) => {
            this.enableSubmitBtn()
            this.user = response.data.user;
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await nextTick();
            router.push('/dashboard')
          })
          .catch((error) => {
            this.enableSubmitBtn()
            toastrMsg(error.response.data.message, 'error')
          })
      }
    },
    async logout() {
      try {
        const response = await axios.post('logout')
          this.user = null
          localStorage.removeItem('token');
          router.push('/')
      } catch (error) {
        console.error('Error during logout:', error.message)
      }
    },    
    async fetchUser() {
      await axios
          .get('/user')
          .then(async (response) => {
            this.user = response.data
          })
          .catch((error) => {
            console.log(error.response.data.message)
          })
    },
    disableSubmitBtn() {
      this.isDisabled = true
    },
    enableSubmitBtn() {
      this.isDisabled = false
    },
  },
})

// Hot Module Replacement (only for development)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
