import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './../components/Dashboard.vue'
import Builder from './../components/Builder.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/builder/:id',
      name: 'Builder',
      component: Builder
    }
    // {
    //   path: '/builder/:id',
    //   name: 'Builder',
    //   component: Builder
    // }

  ]
})
