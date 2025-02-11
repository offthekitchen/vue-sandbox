import { reactive, onMounted } from "vue"
import jsonBreweries from "../data/BREWERIES.json"
import type { IBrewery } from "../interfaces/brewery"
import type { IStatistic } from "../interfaces/statistic"

export function useBreweries() {
  const breweries = reactive<IBrewery[]>(jsonBreweries.breweries)

    function getStats() {
      let stats: IStatistic[] = []
      stats.push({stat: 'Breweries Performed in:', statValue: breweries.length.toLocaleString()})
     return stats
    }

  // expose managed state as return value
  return { breweries, getStats }
}
