import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Home from '@/pages/home/home.vue'
import Index from '@/pages/index/index.vue'
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
          path: '',
          component: Index
        },
        {
          path: 'index',
          name: 'index',
          component: Index
        }
      ]
    }
  ]
})
