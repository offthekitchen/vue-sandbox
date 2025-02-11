import { ref, reactive, onMounted } from "vue"
import jsonCities from "../data/CITIES.json"
import jsonPerformances from "../data/PERFORMANCES.json"
import type { ICity } from "../interfaces/city";
import type { IStatistic } from "../interfaces/statistic"

export function useCities() {
  const coloradoCities = reactive<ICity[]>(jsonCities.cities);
  const performances = reactive(jsonPerformances.performances)
  var performanceCities = reactive<ICity[]>([])

  onMounted(() => filterCities())

  // filter list of cities to those performed in
  function filterCities() {
    coloradoCities.forEach((city: ICity) => {
        if(performances.find((performance) => performance.cityId === city.cityId)) 
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
  return { coloradoCities, performanceCities, getStats }
}
