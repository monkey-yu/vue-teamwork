import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Home from '@/pages/home/home.vue'
import Organization from '@/pages/organization/organization.vue'
import Project from '@/pages/project/project.vue'
import NotFound from '@/pages/not-found/not-found.vue'
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
                show: String
              },
              component: Project
            }
          ]
        }

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
