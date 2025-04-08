<template>
  <aside class="flex flex-col justify-center items-center w-16 justify-self-center">
    <article class="w-full h-screen bg-primary">
      <label
        for="icon"
        class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-white/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-white rounded-l-lg"
      >
        <div class="flex shrink-0 items-center">
          <img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&amp;shade=500" class="w-[30px]">
        </div>
      </label>

      <ProtectedRoute v-for="nav in sidebar" :route-name="nav.link" :permission="nav.permission">
        <label
          class="has-[:checked]:shadow-lg relative w-full h-12 p-4 ease-in-out duration-300 border-solid border-white/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-white rounded-l-lg hover:bg-violet-600 mb-1 sidebar-link cursor-pointer"
          :class="{ 'active-link': $route.name === nav.link }"
        >
          <span class="material-symbols-outlined"> {{ nav.icon }} </span>
        </label>
      </ProtectedRoute>
    </article>
  </aside>
</template>
<script setup>
import ProtectedRoute from './ProtectedRoute.vue'
let sidebar = [
  {
    name: 'Dashboard',
    link: 'dashboard.index',
    matchedRoute: 'dashboard.*',
    icon: 'dashboard',
    permission: 'dashboard',
  }
]
</script>
