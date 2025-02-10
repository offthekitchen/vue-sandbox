<script  lang="ts">
import jsonBreweries from "../data/BREWERIES.json";

export default {
  data() {
    return {
      breweries: jsonBreweries.breweries,
    };
  },
  methods: {

  },
};
</script>

<template>
  <main>
    <h2>Below is a list of the breweries in which I've performed.</h2>
    <section class="breweries-list">
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
      <div class="city-name">{{ brewery.brewery }}</div>
        <div class="city-name">{{ brewery.cityName }}</div>
        <div class="city-state">{{ brewery.stateCode }}</div>
      </div>
    </section>
  </main>
</template>

<style>
.breweries-list {
  width: 650px;
}

.brewery-list-header,
.brewery-list-row {
  display: flex;
  min-height: 16px;
  border: 1px solid #e2e2e2;
}

.city-name {
  min-width: 300px;
}

.brewery-name {
  min-width: 300px;
}
</style>

