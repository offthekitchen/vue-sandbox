import { ref, computed } from "vue"
import { defineStore } from "pinia"
import axios from "axios"
import type { IPerformance } from "../interfaces/performance"
import jsonPerformances from "../data/PERFORMANCES.json"

export const usePerformancesStore = defineStore("performances", () => {

  var performanceData: IPerformance[] = []
  var performances = ref<IPerformance[]>(jsonPerformances.performances)

  // Fetch the Performances
  async function fetchPerformances() {
    try {
      const performancesResponse = await axios.get("http://coloradosessions.com/api/getPerformances/")
      performanceData = performancesResponse.data.performances
      if (performanceData.length > 0) {
        performances.value = performanceData
      }
    }
    catch (error) {
      console.error(error)    
    }
  }

  return { performances, fetchPerformances }
})
