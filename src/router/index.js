import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: function () {
      return import('../views/RoadMapView.vue')
    }
  },
  {
    path: '/account',
    name: 'account',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/vrse',
    name: 'VRSE',
    component: function () {
      return import('../views/VRSEView.vue')
    }
  },
  {
    path: '/karts',
    name: 'karts',
    component: function () {
      return import('../views/KartView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
