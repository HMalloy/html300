import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Art from '@/components/Art'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

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
