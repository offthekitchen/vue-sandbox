<script setup lang="ts">
import type { IStatistic } from "../interfaces/statistic"
import { useBreweriesStore } from '../stores/breweries'
import { storeToRefs } from "pinia" 

const store = useBreweriesStore()

interface Props {
  title: String,
  stats: IStatistic[]
}

const props = defineProps<Props>()

const { name, upcoming } = storeToRefs(store)

</script>

<template>
  <div class="stats-table">
    <h1>{{ props.title }}</h1>
    <div v-for="stat in props.stats" class="stats-row">
      <div class="stats-row-header">{{ stat.stat }}</div>
      <div class="stat">{{ stat.statValue }}</div>
    </div>
    <div class="stats-row">
      <div class="stats-row-header">Upcoming shows</div>
      <div class="stat">{{ upcoming }}</div>
    </div>
  </div>
</template>

<style scoped>
.stats-table {
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  margin: 16px;
  padding: 16px;
  height: 200px;
  width: 300px;

}
.stats-row {
  display: flex;
}
.stats-row-header {
  width: 200px;
  font-weight: 700;
}
@media screen and (max-width: 768px) {
  .stats-table {
    height: fit-content;
  }

}
</style>
