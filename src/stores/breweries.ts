import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IBrewery } from '../interfaces/brewery'
import jsonBreweries from "../data/BREWERIES.json"

export const useBreweriesStore = defineStore('breweries',  () => {

    const name = ref('Breweries')

    const breweries = ref<IBrewery[]>(jsonBreweries.breweries)

    const upcomingBreweries = ref<IBrewery[]>([])

    const upcomingNewBreweries = computed(() => upcomingBreweries.value.filter(upcomingBrewery => !breweries.value.some(brewery => brewery.brewery === upcomingBrewery.brewery)))

     return { name, breweries, upcomingBreweries, upcomingNewBreweries }
    
  })