<script setup lang="ts">
import { onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import { usePerformancesStore } from "../stores/performances"
import { useAppStore } from "../stores/app"

import Overview from '../components/Overview.vue'

const appStore = useAppStore()
const performancesStore = usePerformancesStore()

const { loading } = storeToRefs(appStore)
var { performances, upcomingPerformances } = storeToRefs(performancesStore)

onMounted(async() => {
  loading.value = true
  // Get past performances
  await performancesStore.fetchPerformances(false).then(response => (performances.value = response))
  performances.value.forEach(perf => {
          console.log(perf.cityName + ' - ' + perf.stateCode + '\n')
        })
  // Get upcoming performances
  await performancesStore.fetchPerformances(true).then(response => (upcomingPerformances.value = response))
  loading.value = false
})

</script>

<template>
  <main>
    <Overview />
  </main>
</template>
