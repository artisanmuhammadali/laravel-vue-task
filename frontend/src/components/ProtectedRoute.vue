<template>
  <RouterLink :to="{ name: routeName }" :class="(permission, className)">
    <slot></slot>
  </RouterLink>
</template>
<script setup>
defineProps(['routeName', 'permission', 'className'])
</script>
