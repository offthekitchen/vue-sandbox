import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICity } from '../interfaces/city'
import type { IState } from '../interfaces/state'
import jsonCities from "../data/CITIES.json"
import jsonStates from "../data/STATES.json"

export const useGeographyStore = defineStore('geography',  () => {
    const upcoming = ref(2)
    const count = ref(0)

    const name = ref('Cities')

    // JSON file Data
    const coloradoCities = ref<ICity[]>(jsonCities.cities)
    const usStates = ref<IState[]>(jsonStates.states)

    // Sort the cities by name
    coloradoCities.value.sort((a, b) =>  a.cityName.localeCompare(b.cityName))

    return { count, name, upcoming, coloradoCities, usStates }
    
  })