<template>
  <div class="flex justify-between items-center py-2 px-4" v-if="totalPages > 1">
    <!-- Pagination -->
    <nav class="pagination">
      <button
        class="bg-primary text-white uppercase text-sm font-semibold px-4 py-1 rounded me-2"
        :disabled="currentPage === 1"
        v-on:click="method(currentPage - 1)"
      >
        Previous
      </button>

      <button
        class="bg-primary text-white uppercase text-sm font-semibold px-4 py-1 rounded ms-2"
        :disabled="currentPage === totalPages"
        v-on:click="method(currentPage + 1)"
      >
        Next
      </button>
    </nav>
    <p>Page {{ currentPage }} of {{ totalPages }}</p>
  </div>
</template>
<script setup>
defineProps(['totalPages', 'currentPage', 'method'])
</script>
