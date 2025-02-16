import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBreweriesStore = defineStore('breweries',  () => {
    const upcoming = ref(2)
    const count = ref(0)

    const name = ref('Breweries')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
  
    return { count, name, doubleCount, upcoming, increment }
    
  })