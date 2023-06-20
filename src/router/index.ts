import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillView from '../views/SkillView.vue'
import ExperienceView from '../views/ExperienceView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/experience',
            name: 'experience',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: ExperienceView
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillView
        }
    ]
})

export default router
