<template>
  <div class="flex items-center h-screen w-full  bg-gray-900">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span class="block w-full text-xl uppercase font-bold mb-4">Login</span>
      <form class="mb-4" @submit.prevent="authStore.login">
        <div class="mb-4 md:w-full">
          <label for="email" class="block text-xs mb-1">Email</label>
          <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email"
            id="email" placeholder="Email" v-model="authStore.formData.email" />

          <span v-if="authStore.errors.email" class="text-red-700">{{
            authStore.errors.email
          }}</span>
        </div>
        <div class="mb-6 md:w-full">
          <label for="password" class="block text-xs mb-1">Password</label>
          <div class="relative">
            <input :type="show ? 'password' : 'text'"
              class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password"
              id="password" placeholder="Password" v-model="authStore.formData.password" />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

              <span class="material-symbols-outlined text-lg cursor-pointer" @click="show = !show"
                :class="{'hidden': !show, 'block':show }">visibility</span>
              <span class="material-symbols-outlined text-lg cursor-pointer" @click="show = !show"
                :class="{'block': !show, 'hidden':show }">visibility_off</span>

            </div>
          </div>
          <span v-if="authStore.errors.password" class="text-red-700">{{
            authStore.errors.password
          }}</span>
          <span v-if="authStore.errors.error" class="text-red-700">{{
            authStore.errors.error
          }}</span>
        </div>
        <div class="mb-6 md:w-full">
          <label for="password" class="block text-xs mb-1">Login As</label>
          <select
            id="groups"
            v-model="authStore.formData.loginAs"
            class="mt-1 block w-full py-[10px] rounded-[5px] border-[#e8e8e8] text-sm"
          >
            <option v-for="(guard , key) in appGuards" :value="guard">
              {{ key }}
            </option>
          </select>
          <span v-if="authStore.errors.loginAs" class="text-red-700">{{
            authStore.errors.loginAs
          }}</span>
        </div>
        <div class="flex justify-between">
          <button
            class="bg-primary text-white uppercase text-sm font-semibold px-6 py-2 rounded"
            type="submit"
            :disabled="authStore.isDisabled"
          >
            Login
          </button>
          <RouterLink
            class="bg-[#f3f5f7] text-[#183247] uppercase text-sm font-semibold px-6 py-2 rounded"
            :to="{ name: 'register' }"
            >Register New Account</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {  appGuards } from '@/assets/utils'
  import {
    useAuthStore
  } from '@/stores/auth'
  import {
    onUnmounted,
    ref
  } from 'vue'
  const authStore = useAuthStore()
  onUnmounted(async () => {
    authStore.$reset()
  })
  const show = ref(true)

</script>
