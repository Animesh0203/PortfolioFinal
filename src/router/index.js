import { createRouter, createWebHistory } from 'vue-router'
import ProjectsDetailed from '../components/ProjectsDetailed.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Projects', component: ProjectsDetailed },
]

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode for clean URLs
  routes
})

export default router