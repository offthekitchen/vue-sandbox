import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app',  () => {

    const loading = ref(false)

    return { loading }
    
  })