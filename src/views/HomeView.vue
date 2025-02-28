<script setup lang="ts">
import { onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import { usePerformancesStore } from "../stores/performances"

import Overview from '../components/Overview.vue'

const performancesStore = usePerformancesStore()

var { performances, upcomingPerformances } = storeToRefs(performancesStore)

onMounted(async() => {
  // Get past performances
  await performancesStore.fetchPerformances(false).then(response => (performances.value = response))
  performances.value.forEach(perf => {
          console.log(perf.cityName + ' - ' + perf.stateCode + '\n')
        })
  // Get upcoming performances
  await performancesStore.fetchPerformances(true).then(response => (upcomingPerformances.value = response))
})

</script>

<template>
  <main>
    <Overview />
  </main>
</template>
