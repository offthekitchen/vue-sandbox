<script lang="ts">
import jsonCities from "../data/CITIES.json";
import jsonPerformances from "../data/PERFORMANCES.json";
import cities from "../store/modules/cities";

export default {
  data() {
    return {
      cities: jsonCities.cities,
      performanceCities: jsonPerformances.performanceCities,
      btnText: "Colorado Only",
      showColorado: false,
      altRow: false,
    };
  },
  mounted() {},
  computed: {
    performedCities() {
      return this.cities.filter((item) =>
        this.performanceCities.map((x) => x.cityId).includes(item.cityId)
      );
    },
  },
  methods: {
    alternateClass: function () {
      this.altRow = !this.altRow;
      return this.altRow;
    },
    computedClasses(city: any, index: number) {
      return {
        "colorado-record": city.stateCode === "CO",
        "alt-row": index % 2 === 0,
      };
    },
    performedCity(cityId: number) {
      if (this.performanceCities.find((record) => record.cityId === cityId))
        return true;

      return false;
    },
  },
};
</script>

<template>
  <main>
    <h2>Below is a list of the Colorado cities in which I've performed.</h2>
    <section class="cities-section">
      <div class="cities-list">
        <header class="city-list-header">
          <h3 class="city-name">City</h3>
          <h3 class="city-state">State</h3>
        </header>
        <div
          v-for="(city, index) in performedCities"
          class="city-list-row"
          :class="computedClasses(city, index)"
        >
          <div class="city-name">{{ city.cityName }}</div>
          <div class="city-state">{{ city.stateCode }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.cities-section {
  width: 650px;
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
  margin-bottom: 4px;;
}
</style>
