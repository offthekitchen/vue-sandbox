import { ref, computed } from "vue"
import { defineStore } from "pinia"
import axios from "axios"
import type { IPerformance } from "../interfaces/performance"

export const usePerformancesStore = defineStore("performances", () => {

  const performances = ref<IPerformance[]>([])

  const upcomingPerformances = ref<IPerformance[]>([])

  const coloradoPerformances = computed(() => performances.value.filter(performance => performance.stateCode == 'CO'));

  const upcomingColoradoPerformances = computed(() => upcomingPerformances.value.filter(performance => performance.stateCode == 'CO'));

  /**
  * Makes an asynchronous call to fetch performance data into the store value
  * @param {boolean} upcoming boolean to only fetch upcoming performances
  * @returns {Promise<IPerformance[]>}}
  */
  async function fetchPerformances(upcoming: boolean = false): Promise<IPerformance[]> {

    var foundPerformances: IPerformance[] = []

    try {
      const parm = {"upcomingPerformances": upcoming}
      const performancesResponse = await axios.post("http://coloradosessions.com/api/getPerformances/", parm)
       if (performancesResponse.data.performances.length > 0) {
/*         performancesResponse.data.performances.forEach(perf => {
          console.log(perf.cityName + ' ,' + perf.stateCode + '\n')
        }) */
        foundPerformances = performancesResponse.data.performances
      } 
    }
    catch (error) {
      console.error(error)    
    }

    return foundPerformances
  }

  return { performances, upcomingPerformances, coloradoPerformances, upcomingColoradoPerformances, fetchPerformances }
})
