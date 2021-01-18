import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/contianer',
      component:Demo
    }
  ]
})
