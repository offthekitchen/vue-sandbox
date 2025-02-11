<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useBreweries } from "../composables/breweries"
import StatsComponent from "../components/StatsComponent.vue"
import type { IStatistic } from "../interfaces/statistic"

const { breweries, getStats } = useBreweries()

const showStats = ref(false)
var btnText: string = "Show Stats"
var breweryStats: IStatistic[] = []

function toggleStats() {
  showStats.value = !showStats.value
  btnText = btnText == "Hide Stats" ? "Show Stats" : "Hide Stats"
}

onMounted(() => {
  breweryStats = getStats()
})
</script>

<template>
  <main>
    <h2>Below is a list of the breweries in which I've performed.</h2>
    <button @click="toggleStats()" class="primary-button">{{ btnText }}</button>
    <section class="breweries-section">
      <div class="breweries-list">
        <header class="brewery-list-header">
          <h3 class="brewery-name">Brewery</h3>
          <h3 class="city-name">City</h3>
          <h3 class="city-state">State</h3>
        </header>
        <div
          v-for="(brewery, index) in breweries"
          class="brewery-list-row"
          :class="{ 'alt-row': index % 2 === 0 }"
        >
          <div class="brewery-name">{{ brewery.brewery }}</div>
          <div class="city-name">{{ brewery.cityName }}</div>
          <div class="city-state">{{ brewery.stateCode }}</div>
        </div>
      </div>
      <StatsComponent
        v-show="showStats"
        title="Brewery Stats"
        :stats="breweryStats"
      />
    </section>
  </main>
</template>

<style scoped>
.breweries-section {
  display: flex;
}
.breweries-list {
  width: 650px;
}

.brewery-list-header,
.brewery-list-row {
  display: flex;
  min-height: 16px;
  border: 1px solid #e2e2e2
}

.city-name {
  min-width: 200px;
}

.brewery-name {
  width: 300px;
}

@media screen and (max-width: 768px) {
  .breweries-section{
    flex-direction: column-reverse;
  }

  .breweries-list {
    width: fit-content;
  }
  .city-name {
    min-width: 150px;
  }
  h2 {
    font-size: 18px;
  }

}

@media screen and (max-width: 700px) {
  .brewery-name {
    width: 150px;
  }
}
</style>