import { ref, computed } from "vue"
import { defineStore } from "pinia"
import axios from "axios"
import type { IPerformance } from "../interfaces/performance"
import jsonPerformances from "../data/PERFORMANCES.json"

export const usePerformancesStore = defineStore("performances", () => {

  var performances = ref<IPerformance[]>(jsonPerformances.performances)

 /**
  * Makes an asynchronous call to fetch performance data into the store value
  * @param {boolean} upcoming boolean to only fetch upcoming performances
  * @returns {boolean}}
  */
  async function fetchPerformances() {
    try {
      const performancesResponse = await axios.get("http://coloradosessions.com/api/getPerformances/")
      if (performancesResponse.data.performances.length > 0) {
        performances.value = performancesResponse.data.performances
      }
    }
    catch (error) {
      console.error(error)    
    }
  }

  return { performances, fetchPerformances }
})
