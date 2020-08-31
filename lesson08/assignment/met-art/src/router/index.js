import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Art from '@/pages/Art'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/art',
      name: 'Art',
      component: Art
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
