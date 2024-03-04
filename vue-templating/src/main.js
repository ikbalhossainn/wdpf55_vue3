// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/Home.vue";
import Departments from "./components/Departments.vue";
import AboutUs from "./components/AboutUs.vue";
import Doctors from "./components/Doctors.vue";
import Contact from "./components/Contact.vue";
import Testimonials from "./components/Testimonials.vue";




const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: AboutUs },
        { path: '/doctors', component: Doctors },
        { path: '/departments', component: Departments },
        { path: '/contact', component: Contact },
        { path: '/testimonials', component: Testimonials },
        
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
