<template>
  <div class="flex h-screen overflow-hidden">
    <SideBar></SideBar>
    <div class="flex-1 flex flex-col">
      <NavBar></NavBar>
      <div class="pb-0 overflow-y-auto main-container h-[100vh] bg-gray-50">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'UserLayout',
  components: {
    SideBar,
    NavBar,
  },
}
</script>
