import { ref } from "vue"
import { storeToRefs } from "pinia"
import type { IBrewery } from "../interfaces/brewery"
import type { IPerformance } from "../interfaces/performance";
import type { IStatistic } from "../interfaces/statistic"
import { useBreweriesStore } from "../stores/breweries"

export function useBreweries() {

  // JSON file default 
  var breweryPerformances = ref<IBrewery[]>([])

  /**
  * Gets a list of distinct breweries from an array of performances
  * @param {IPerformance[]} performances Array of performances to be filtered
  * @returns {IBrewery[]}
  */
  function getDistinctBreweries(performances: IPerformance[]) : IBrewery[] {
    let distinctBreweryPerformances: IBrewery[] = [] 
    performances.forEach(performance => {
        if (performance.venue.includes('Brew') && !distinctBreweryPerformances.some(perf => perf.brewery === performance.venue)){
            distinctBreweryPerformances.push({brewery: performance.venue, cityName: performance.cityName, stateCode: performance.stateCode})
        }
      }
    )

    return distinctBreweryPerformances
  }

  /**
  * Gets a list of distinct state codes from the list of distinct breweries
  * @param {IPerformance[]} performances Array of performances to be filtered
  * @returns { string[]}
  */
   function getDistinctStates() {
    const store = useBreweriesStore()
    const { breweries } = storeToRefs(store)
   return [... new Set(breweries.value.map(brewery => brewery.stateCode))]
  }

    /**
  * Gets the stats for breweries
  * @returns {IStatistic[]} Array of statistic objects
  */
    function getStats() {
      const store = useBreweriesStore()
      const { breweries, upcomingNewBreweries } = storeToRefs(store)
      let distinctStates = getDistinctStates()
      let stats: IStatistic[] = []
      stats.push({stat: 'Breweries Performed in:', statValue: breweries.value.length.toLocaleString()})
      stats.push({stat: 'Number of States:', statValue: distinctStates.length.toLocaleString()})
      stats.push({stat: 'Upcoming Breweries:', statValue: upcomingNewBreweries.value.length.toLocaleString()})
     return stats
    }

  return { breweryPerformances, getStats, getDistinctBreweries }
}
