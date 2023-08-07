<script setup>
import { ref, onMounted } from 'vue'
import { render } from '@trackco/module-customer'
import DashboardBase from '@trackco/module-dashboard/pages/DashboardBase.vue'

const root = ref(null)
const value = ref('lerolerolero')

const reRender = () => {
  render(root.value, value.value)
}

onMounted(() => {
  reRender()
})
</script>

<template>
  <input type="text" :value="value">
  <button @click="reRender">RERENDER</button>
  <div ref="root">
    Customer React App
  </div>
  <DashboardBase />
</template>
