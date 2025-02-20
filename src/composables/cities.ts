import { ref, reactive, onMounted } from "vue"
import jsonCities from "../data/CITIES.json"
import type { ICity } from "../interfaces/city";
import type { IPerformance } from "../interfaces/performance";
import type { IStatistic } from "../interfaces/statistic"

export function useCities() {
  const coloradoCities = reactive<ICity[]>(jsonCities.cities);
  var performanceCities = reactive<ICity[]>([])

  onMounted(() => {})

  // filter list of cities to those performed in
  function filterCities(performances: IPerformance[], stateCode: string) {
    coloradoCities.forEach((city) => {
        if(performances.find((performance) => performance.stateCode.trim() === city.stateCode.trim() && city.stateCode.trim()== stateCode.trim() && performance.cityName.trim() == city.cityName.trim())) 
            performanceCities.push(city)
     })
  }

  function getStats() {
    let stats: IStatistic[] = []
    stats.push({stat: 'Number of Colorado Cities:', statValue: performanceCities.length.toLocaleString()})
    stats.push({stat: '% of Colorado Cities:', statValue: ((performanceCities.length / coloradoCities.length) * 100).toLocaleString()})
    stats.push({stat: 'Number Not Performed in:', statValue: ( coloradoCities.length - performanceCities.length).toLocaleString()})  
    stats.push({stat: '% Not Performed in:', statValue: ((100 -(performanceCities.length / coloradoCities.length) * 100)).toLocaleString()})
   return stats
  }


  // expose managed state as return value
  return { coloradoCities, performanceCities, getStats, filterCities }
}
