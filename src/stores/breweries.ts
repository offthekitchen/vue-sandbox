import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IBrewery } from '../interfaces/brewery'

export const useBreweriesStore = defineStore('breweries',  () => {
    const upcoming = ref(2)
    const count = ref(0)

    const name = ref('Breweries')

    var breweries = ref<IBrewery[]>()

     return { count, name, upcoming }
    
  })