import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IPerformance} from "../interfaces/performance"

export const usePerformancesStore = defineStore('performances',  () => {

    var defaultPerformances: IPerformance[] = [{"performanceId": 55,"venue": "Princess Wine Bar","cityName": "Crested Butte","stateCode": "CO"}]

    var performances = ref([])

    return { defaultPerformances, performances }
    
  })