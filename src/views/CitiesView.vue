<script setup lang="ts">
import { onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import { useCities } from "../composables/cities"
import StatsComponent from "../components/StatsComponent.vue"
import type { IStatistic } from "../interfaces/statistic"
import { useGeographyStore } from "../stores/geograhy"
import { usePerformancesStore } from "../stores/performances"
import { useCitiesStore } from "../stores/cities"
import { useAppStore } from "../stores/app"
import InfoPopup from "../components/InfoPopup.vue"

const { getDistinctCities, getStats } = useCities()

const appStore = useAppStore()
const geographyStore = useGeographyStore()
const performancesStore = usePerformancesStore()
const citiesStore = useCitiesStore()

const { name } = storeToRefs(geographyStore)
const { loading } = storeToRefs(appStore)

var { coloradoPerformances, upcomingPerformances, upcomingColoradoPerformances } = storeToRefs(performancesStore)
var { cities, upcomingCities } = storeToRefs(citiesStore)

const showStats = ref(false)
const showCitiesInfo = ref(false)

var btnText: string = "Show Stats"
var cityStats: IStatistic[] = []

var citiesInfoHtml: string =
  "A list of Colorado cities is retrieved from a Pinia store.  A composable is used to filter the cities to only those in which I have performed, and to get city-related statistics."

function toggleStats() {
  showStats.value = !showStats.value
  btnText = btnText == "Hide Stats" ? "Show Stats" : "Hide Stats"
}

function toggleInfo(infoContext: string) {
  showCitiesInfo.value = !showCitiesInfo.value
}

onMounted(async() => {
  loading.value = true
  // Get past cities 
  cities.value = getDistinctCities(coloradoPerformances.value)
  // Get upcoming cities
  upcomingCities.value = getDistinctCities(upcomingPerformances.value)
  // get city statistics
  cityStats = getStats()
  loading.value = false
})

</script>

<template>
  <main>
    <div class="section-header">
      <h1>{{ name }}</h1>
      <img
        alt="Info icon"
        title="Info icon"
        class="logo"
        src="@/assets/info-icon.svg"
        width="20"
        height="20"
        v-on:click="toggleInfo('cities')"
      />
      <InfoPopup
        v-show="showCitiesInfo"
        @close="toggleInfo('cities')"
        title="Cities Info"
        ><span v-html="citiesInfoHtml"></span>
      </InfoPopup>
    </div>
    <h2>Below is a list of the Colorado cities in which I've performed.</h2>
    <button @click="toggleStats()" class="primary-button">{{ btnText }}</button>
    <section class="cities-section">
      <div class="cities-list">
        <header class="city-list-header">
          <h3 class="city-name">City</h3>
          <h3 class="city-state">State</h3>
        </header>
        <div
          v-for="(city, index) in cities"
          class="city-list-row"
          :class="{ 'alt-row': index % 2 === 0 }"
        >
          <div class="city-name">{{ city.cityName }}</div>
          <div class="city-state">{{ city.stateCode }}</div>
        </div>
      </div>
      <StatsComponent
        v-show="showStats"
        title="Colorado Stats"
        :stats="cityStats"
      />
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
  .cities-section {
    flex-direction: column-reverse;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
