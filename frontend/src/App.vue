<template>
  <component :is="layout || 'div'">
    <router-view />
  </component>
</template>

<script setup>
import { provide, shallowRef } from 'vue'
import layouts from './stores/layouts'
import router from './router'

const layout = shallowRef('div')
router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || 'GuestLayout'
})
provide('app:layout', layout)
</script>
