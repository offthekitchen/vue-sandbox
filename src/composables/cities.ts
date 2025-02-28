import { reactive } from "vue";
import { storeToRefs } from "pinia";
import jsonCities from "../data/CITIES.json";
import type { ICity } from "../interfaces/city";
import type { IPerformance } from "../interfaces/performance";
import type { IStatistic } from "../interfaces/statistic";

import { useCitiesStore } from "../stores/cities";

export function useCities() {
  // JSON file default
  const coloradoCities = reactive<ICity[]>(jsonCities.cities);

  /**
   * Filters a list of cities
   * @param {IPerformance[]} performances Array of performances to be filtered
   * @param {string} stateCode State code of peformances to include (default 'CO')
   * @returns {ICity[]} 
   */
  function getDistinctCities(
    performances: IPerformance[],
    stateCode: string = "CO"
  ) : ICity[] {
    var performanceCities : ICity[] = []

    coloradoCities.forEach((city) => {
      if (
        performances.find(
          (performance) =>
            performance.stateCode.trim() === city.stateCode.trim() &&
            city.stateCode.trim() == stateCode.trim() &&
            performance.cityName.trim() == city.cityName.trim()
        )
      )
        performanceCities.push(city);
    })

    return performanceCities
  }

  /**
   * Gets the stats for cities
   * @returns {IStatistic[]} Array of statistic objects
   */
  function getStats() {
    const store = useCitiesStore();
    const { cities, upcomingNewCities } = storeToRefs(store);
    let stats: IStatistic[] = [];
    stats.push({
      stat: "Number of Colorado Cities:",
      statValue: cities.value.length.toLocaleString(),
    });
    stats.push({
      stat: "% of Colorado Cities:",
      statValue: (
        (cities.value.length / coloradoCities.length) *
        100
      ).toLocaleString(),
    });
    stats.push({
      stat: "Number Not Performed in:",
      statValue: (
        coloradoCities.length - cities.value.length
      ).toLocaleString(),
    });
    stats.push({
      stat: "% Not Performed in:",
      statValue: (
        100 -
        (cities.value.length / coloradoCities.length) * 100
      ).toLocaleString(),
    });
    stats.push({
      stat: "Upcoming Cities:",
      statValue: upcomingNewCities.value.length.toLocaleString(),
    })
    return stats
  }

  return { coloradoCities, getStats, getDistinctCities }
}
