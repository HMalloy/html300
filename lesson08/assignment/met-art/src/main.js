// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MainNav from '@/components/MainNav'
import FeaturedArt from '@/components/FeaturedArt'
import LatestBlog from '@/components/LatestBlog'
import Events from '@/components/Events'

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'

import './main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, MainNav, FeaturedArt, LatestBlog, Events },
  template: '<App/>'
})
