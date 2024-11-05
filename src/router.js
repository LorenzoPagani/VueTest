import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Random from './pages/Random.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/random', component: Random }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router