import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Home from '@/pages/home/home.vue'
Vue.use(Router)

export default new Router({
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
          component: Home
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
