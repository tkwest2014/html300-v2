import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Images from '../views/Images.vue'
import Blog from '../views/Blog.vue'
import Faq from '../views/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'Images',
    component:Images
  },
  {
    path: '/blog',
    name: 'Blog',
    component:Blog
  },
  {
    path: '/faq',
    name: 'Faq',
    component:Faq
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
