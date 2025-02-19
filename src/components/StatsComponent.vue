<script setup lang="ts">
import { ref } from "vue";
import type { IStatistic } from "../interfaces/statistic";
import { useBreweriesStore } from "../stores/breweries";
import InfoPopup from "./InfoPopup.vue";
import { storeToRefs } from "pinia";

const store = useBreweriesStore();

interface Props {
  title: String;
  stats: IStatistic[];
}

const props = defineProps<Props>();

const { name, upcoming } = storeToRefs(store);

const showStatsInfo = ref(false);

var statsInfoHtml: string =
  "The Statics component takes a title string and an array of IStatistics objects as a property and displays them.";

function toggleInfo(infoContext: string) {
  showStatsInfo.value = !showStatsInfo.value;
}
</script>

<template>
  <div class="stats-table">
    <div class="section-header">
      <h1>{{ props.title }}</h1>
      <img
        alt="Info Icon"
        title="Info Icon"
        class="icon"
        src="@/assets/info-icon.svg"
        width="20"
        height="20"
        v-on:click="toggleInfo('stats')"
      />
      <InfoPopup
        v-show="showStatsInfo"
        @close="toggleInfo('stats')"
        title="Stats Info"
        ><span v-html="statsInfoHtml"></span>
      </InfoPopup>
    </div>
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
