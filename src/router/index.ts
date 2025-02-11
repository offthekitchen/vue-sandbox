import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cities from '../views/CitiesView.vue'
import BreweriesView from '../views/BreweriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cities',
      name: 'cities',
      component: Cities
    },
    {
      path: '/breweries',
      name: 'breweries',
      component: BreweriesView
    }
  ]
})

export default router
