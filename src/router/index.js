import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Home from '@/pages/home/home.vue'
import Organization from '@/pages/organization/organization.vue'
import NotFound from '@/pages/not-found/not-found.vue'
import ProjectRouter from './project-router.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '',
      component: Home,
      children: [
        {
          path: 'organization',
          name: 'organization',
          component: Organization
        },
        ...ProjectRouter
      ]
    },
    {
      path: '404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: 'notfound'
      }
    }
  ]
})
