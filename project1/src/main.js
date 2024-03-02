import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import FoodIteam from './components/FoodIteam.vue'
const app = createApp(App)
app.component('food-item', FoodIteam)

app.mount('#app')
