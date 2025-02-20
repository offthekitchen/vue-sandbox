import { reactive, onMounted } from "vue"
import jsonBreweries from "../data/BREWERIES.json"
import type { IBrewery } from "../interfaces/brewery"
import type { IPerformance } from "../interfaces/performance";
import type { IStatistic } from "../interfaces/statistic"

export function useBreweries() {
  var breweryPerformances = reactive<IBrewery[]>(jsonBreweries.breweries)

    // filter list of cities to those performed in
    function getDistinctBreweries(performances: IPerformance[]) {
      //Need filtering code here
      performances.forEach(performance => {
          if(performance.venue.includes('Brew')) {
            breweryPerformances.push({brewery: performance.venue, cityName: performance.cityName, stateCode: performance.stateCode})
          }
      })
    }

   // determine number of states performed in for brewery performances
   function getDistinctStates() {
    const seenValues = new Set()
    return breweryPerformances.filter(obj => {
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
      stats.push({stat: 'Breweries Performed in:', statValue: breweryPerformances.length.toLocaleString()})
      stats.push({stat: 'Number of States:', statValue: distinctStates.length.toLocaleString()})
     return stats
    }

  return { breweryPerformances, getStats, getDistinctBreweries }
}
