<script setup lang="ts">
import { computed } from 'vue'
import { useMachine } from '@zag-js/vue'
import { toggleMachine } from './Toggle.machine'

const [state, send] = useMachine(toggleMachine)
const isActive = computed(() => {
  return state.value.value === 'active'
})
</script>
<template>
  <div
    class="h-8 w-12 bg-green-200 rounded-full shadow-lg relative cursor-pointer shadow-green-200 data-active:bg-blue-500"
    :class="{
      'bg-green-400': isActive
    }"
    data-testid="toggle"
    data-active="true"
    @click="send('Toggle')"
  >
    <div
      class="h-6 w-6 bg-white transition-transform duration-150 rounded-full absolute top-1 left-1"
      :class="{ 'translate-x-4': isActive }"
    ></div>
  </div>
</template>
