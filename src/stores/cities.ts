import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ICity } from '../interfaces/city'

export const useCitiesStore = defineStore('cities',  () => {

    const name = ref('Cities')

    const cities = ref<ICity[]>([])

    const upcomingCities = ref<ICity[]>([])

    const upcomingNewCities = computed(() => upcomingCities.value.filter(upcomingCity => !cities.value.some(city => city.cityName === upcomingCity.cityName)))
    

     return { name, cities, upcomingCities, upcomingNewCities }
    
  })