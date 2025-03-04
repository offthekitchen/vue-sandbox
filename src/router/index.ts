import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from "pinia"
import HomeView from '../views/HomeView.vue'
import Cities from '../views/CitiesView.vue'
import BreweriesView from '../views/BreweriesView.vue'

import { usePerformancesStore } from "../stores/performances"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vue-sandbox/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue-sandbox/cities',
      name: 'cities',
      component: Cities,
      beforeEnter: (to, from) => {
        const performancesStore = usePerformancesStore()
        var { performances } = storeToRefs(performancesStore)
        if(performances.value.length > 0) {
          console.log('Cities: Performance data already loaded')
          return true
        }
        else {
          console.log('Cities: Performance data not loaded yet.  Redirecting to Home.')
          return {name: 'home'}
        }
      },
    },
    {
      path: '/vue-sandbox/breweries',
      name: 'breweries',
      component: BreweriesView,
      beforeEnter: (to, from) => {
        const performancesStore = usePerformancesStore()
        var { performances } = storeToRefs(performancesStore)
        if(performances.value.length > 0) {
          console.log('Breweries: Performance data already loaded')
          return true
        }
        else {
          console.log('Cities: Performance data not loaded yet.  Redirecting to Home.')
          return {name: 'home'}
        }
      },
    }
  ]
})

export default router
