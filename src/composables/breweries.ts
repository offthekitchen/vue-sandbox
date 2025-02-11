import { reactive, onMounted } from "vue"
import jsonBreweries from "../data/BREWERIES.json"
import type { IBrewery } from "../interfaces/brewery"
import type { IStatistic } from "../interfaces/statistic"

export function useBreweries() {
  const breweries = reactive<IBrewery[]>(jsonBreweries.breweries)

   // determine number of states performed in for brewery performances
   function getDistinctStates(): IBrewery[] {
    const seenValues = new Set()
    return breweries.filter(obj => {
      const value = obj['stateCode']
      if (seenValues.has(value)) {
        return false
      }
      seenValues.add(value)
      return true
    })
  }

    function getStats() {
      let distinctStates = getDistinctStates()
      let stats: IStatistic[] = []
      stats.push({stat: 'Breweries Performed in:', statValue: breweries.length.toLocaleString()})
      stats.push({stat: 'Number of States:', statValue: distinctStates.length.toLocaleString()})
     return stats
    }

  // expose managed state as return value
  return { breweries, getStats }
}
