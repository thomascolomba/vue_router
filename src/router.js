import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blue',
      name: 'blue',
      component: () => import('./views/MyBlueScreen.vue')
    },
    {
      path: '/red',
      name: 'red',
      component: () => import('./views/MyRedScreen.vue')
    },
    {
      path: '/green',
      name: 'green',
      component: () => import('./views/MyGreenScreen.vue')
    }
	
  ]
})
