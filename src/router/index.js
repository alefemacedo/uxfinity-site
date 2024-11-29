import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/contato',
            name: 'contact',
            component: Contact,
        },
    ],
})

export default router
