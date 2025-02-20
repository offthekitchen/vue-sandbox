import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IBrewery } from '../interfaces/brewery'

export const useBreweriesStore = defineStore('breweries',  () => {
    const upcoming = ref(2)
    const count = ref(0)

    const name = ref('Breweries')

    var breweries = ref<IBrewery[]>()

    // Fetch the Performances
    async function setBreweries(newBreweries: IBrewery[]) {
        breweries.value = newBreweries
    }

    return { count, name, upcoming, setBreweries }
    
  })