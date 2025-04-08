<template>
  <div class="grid grid-cols-1 gap-4 w-100 w-full p-3">
    <div class="bg-white md:mx-auto rounded shadow-xl w-full overflow-hidden">
      <div class="h-[140px] bg-gradient-to-r from-violet-500 to-violet-800"></div>
      <div class="px-5 py-2 flex flex-col gap-3 pb-6">
        <div class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
          
          <div 
            class="rounded-md w-full h-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] bg-[#ffd8c2] cursor-pointer">
            <div class="text-center h-full content-center">
              <span class="text-[45px]">{{ auth.user.name[0] }}</span>
            </div>
          </div>
        </div>
        <div class="ps-2">
          <h3 class="text-xlrelative font-bold leading-6 mb-2">
            {{ auth.user.name }}
          </h3>
          <p class="text-sm mb-2 flex items-center">
            <span class="material-symbols-outlined me-2" v-if="auth.user.email">mail</span>
            {{ auth.user.email }}
          </p>
          <p class="text-sm mb-2 flex items-center">
            <span class="material-symbols-outlined me-2"v-if="auth.user.role">admin_panel_settings</span>
            <span class="rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">{{ auth.user.role }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import {
    useAuthStore
  } from '@/stores/auth'
  const auth = useAuthStore()
  const config = {
    imageUploadURL: import.meta.env.VITE_API_BASE_URL + '/api/tickets/upload-image',
    imageUploadMethod: 'POST',
  }

</script>
<style>
  .fr-box.fr-basic .fr-wrapper {
    border: 1px solid #cccccc !important;
  }

</style>
