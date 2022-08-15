import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
// import Blog from '../views/DataFromView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  // {
  //   path: '/Blog',
  //   name: 'Blog',
  //   component: Blog
  // }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router