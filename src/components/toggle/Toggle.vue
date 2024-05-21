<script setup lang="ts">
import { computed } from 'vue'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { machine } from './toggle.machine'
import { connect } from './toggle.connect'
const props = defineProps<{
  value: boolean
}>()
const emit = defineEmits<{
  update: [value: boolean]
}>()
const [state, send] = useMachine(
  machine({
    id: 'toggle',
    value: props.value,
    onValueChange(details) {
      emit('update', details.value)
    }
  })
)
const api = computed(() => connect(state.value, send, normalizeProps))
</script>
<template>
  <div
    v-bind="api.rootProps"
    class="h-8 w-12 bg-green-200 rounded-full shadow-lg relative transition-colors duration-150 cursor-pointer shadow-green-200 data-active:bg-green-500"
  >
    <div
      v-bind="api.knobProps"
      class="h-6 w-6 bg-white transition-transform duration-150 rounded-full absolute top-1 left-1 data-active:translate-x-4"
    ></div>
  </div>
</template>
