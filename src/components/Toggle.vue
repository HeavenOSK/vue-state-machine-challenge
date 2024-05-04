<script setup lang="ts">
import { ref } from 'vue'

const isSelected = ref(false)
const toggle = () => (isSelected.value = !isSelected.value)
</script>
<template>
  <div
    class="h-8 w-12 bg-green-200 rounded-full shadow-lg relative cursor-pointer"
    :class="{
      'bg-green-400': isSelected
    }"
    @click="toggle"
  >
    <div
      class="h-6 w-6 bg-white transition-transform duration-150 rounded-full absolute top-1 left-1"
      :class="{ 'translate-x-4': isSelected }"
    ></div>
  </div>
</template>
