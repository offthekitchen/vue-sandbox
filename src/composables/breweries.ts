import { ref, reactive } from "vue"
import type { IBrewery } from "../interfaces/brewery"
import type { IPerformance } from "../interfaces/performance";
import type { IStatistic } from "../interfaces/statistic"
import jsonBreweries from "../data/BREWERIES.json"


export function useBreweries() {

  // JSON file default 
  var breweryPerformances = ref<IBrewery[]>(jsonBreweries.breweries)

  /**
  * Gets a list of distinct breweries from an array of performances
  * @param {IPerformance[]} performances Array of performances to be filtered
  */
  function getDistinctBreweries(performances: IPerformance[]) {
    let distinctBreweryPerformances: IBrewery[] = [] 
    performances.forEach(performance => {
        if (performance.venue.includes('Brew') && !distinctBreweryPerformances.some(perf => perf.brewery === performance.venue)){
            distinctBreweryPerformances.push({brewery: performance.venue, cityName: performance.cityName, stateCode: performance.stateCode})
        }
      }
    )

    if(distinctBreweryPerformances.length > 0) {
      breweryPerformances.value = distinctBreweryPerformances
    }
  }

  /**
  * Gets a list of distinct states from the list of distinct breweries
  * @param {IPerformance[]} performances Array of performances to be filtered
  */
   function getDistinctStates() {
    const seenValues = new Set()
    return breweryPerformances.value.filter(performance => {
      const stateCode = performance['stateCode']
      if (seenValues.has(stateCode)) {
        return false
      }
      seenValues.add(stateCode)
      return true
    })
  }

    /**
  * Gets the stats for breweries
  * @returns {IStatistic[]} Array of statistic objects
  */
    function getStats() {
      let distinctStates = getDistinctStates()
      let stats: IStatistic[] = []
      stats.push({stat: 'Breweries Performed in:', statValue: breweryPerformances.value.length.toLocaleString()})
      stats.push({stat: 'Number of States:', statValue: distinctStates.length.toLocaleString()})
     return stats
    }

  return { breweryPerformances, getStats, getDistinctBreweries }
}
