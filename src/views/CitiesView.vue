<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCities } from "../composables/cities";
import StatsComponent from "../components/StatsComponent.vue"
import type { IStatistic } from "../interfaces/statistic";

const { performanceCities, getStats } = useCities()

const showStats = ref(false);
var btnText: string = 'Show Stats'
var cityStats: IStatistic[] = []

function toggleStats() {
    showStats.value = !showStats.value
    btnText = (btnText == 'Hide Stats' ? 'Show Stats' : 'Hide Stats')
}

onMounted(() => {
  cityStats = getStats()
})  
</script>

<template>
  <main>
    <h2>Below is a list of the Colorado cities in which I've performed.</h2>
    <button @click="toggleStats()" class="primary-button">{{ btnText }}</button>
    <section class="cities-section">
      <div class="cities-list">
        <header class="city-list-header">
          <h3 class="city-name">City</h3>
          <h3 class="city-state">State</h3>
        </header>
        <div
          v-for="(city, index) in performanceCities"
          class="city-list-row"
          :class="{ 'alt-row': index % 2 === 0 }"
        >
          <div class="city-name">{{ city.cityName }}</div>
          <div class="city-state">{{ city.stateCode }}</div>
        </div>
      </div>
      <StatsComponent v-show="showStats" title="Colorado Stats" :stats="cityStats" />
    </section>
  </main>
</template>

<style scoped>
.cities-section {
  width: 650px;
  display: flex;
}
.cities-list {
  width: fit-content;
}

.city-list-header,
.city-list-row {
  display: flex;
  min-height: 16px;
  border: 1px solid #e2e2e2;
}

.city-name {
  min-width: 300px;
}

.city-list-row {
  padding: 0 16px;
  display: flex;
}

h2 {
  margin-bottom: 4px;
}

@media screen and (max-width: 768px) {
  .cities-section{
    flex-direction: column-reverse;
  }

  h2 {
    font-size: 18px;
  }

}
</style>
