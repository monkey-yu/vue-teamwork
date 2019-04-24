import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Home from '@/pages/home/home.vue'
import Organization from '@/pages/organization/organization.vue'
import Project from '@/pages/project/project.vue'
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
          component: Organization,
          children: [
            {
              path: '',
              component: Project
            },
            {
              path: 'project',
              name: 'project',
              query: {
                toshow: String
              },
              component: Project
            }
          ]
        }

      ]
    }
  ]
})
