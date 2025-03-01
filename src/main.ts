import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueSpinnersPlugin } from 'vue3-spinners'
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueSpinnersPlugin)
app.mount('#app')

