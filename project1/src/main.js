// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/Header.vue'
import FoodItem from './components/FoodItem.vue'
import BirdsComp from './components/Birds.vue'
import FlowersComp from './components/Flowers.vue'
import AboutUs from './components/About.vue'
import ContactUs from './components/Contact.vue'

import {createRouter} from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/about', component:AboutUs},
        {path: '/contact', component:ContactUs},
    ]
})

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('header-item', Header)
app.component('birds-comp', BirdsComp)
app.component('flowers-comp', FlowersComp)

app.mount('#app')
