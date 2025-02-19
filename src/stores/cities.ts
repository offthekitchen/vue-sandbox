import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCitiesStore = defineStore('cities',  () => {
    const upcoming = ref(2)
    const count = ref(0)

    const name = ref('Cities')

    return { count, name, upcoming }
    
  })