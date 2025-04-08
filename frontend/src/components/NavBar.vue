<script setup>
  import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const target = ref(null)
const dropdownOpen = ref(false)
const auth = useAuthStore()

onClickOutside(target, () => {
  dropdownOpen.value = false
})
async function logout() {
  await auth.logout()
}
const user = auth.user
</script>

<template>
  <nav class="bg-white">
    <div class="px-2 sm:px-6 lg:px-4">
      <div class="flex items-center justify-between h-16">
        <div class="font-bold">
          <p>{{ $route.meta.title }}</p>
        </div>
        <!-- right side -->
        <div class="flex items-center justify-between gap-4">
          <div class="relative" @click.prevent="dropdownOpen = !dropdownOpen" ref="target">

            <div class="rounded-md h-[30px] w-8 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] bg-[#ffd8c2] cursor-pointer">
              <div class="text-center h-full content-center">
                <span
                  class="text-[15px]">{{ user ? user.name[0] : '' }}</span>
              </div>
            </div>
            <div class="absolute right-0 bg-white w-[270px] shadow-lg rounded border border-gray-300 z-10"
              v-show="dropdownOpen">
              <div class="flex items-center justify-between bg-[#f5f7f9] p-4">
                <div>
                  <p class="text-sm font-bold">{{ user ? user.name : '' }}
                  </p>
                  <p class="text-sm">{{ user ? user.email : '' }}</p>
                </div>
              </div>
              <div class="p-3">
                <div class="items-center justify-between gap-4 hidden">
                  <div>
                    <p class="text-sm">Keyboard shortcuts</p>
                  </div>
                  <div>
                    <p class="text-sm">status update</p>
                  </div>
                </div>
                <div class="">
                  <RouterLink :to="{ name: 'user.profile' }">
                    <p class="text-sm my-1">Profile Settings</p>
                  </RouterLink>
                  <p class="text-sm my-1 cursor-pointer" v-on:click="logout">Sign out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>