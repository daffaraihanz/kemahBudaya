import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'appviews/Login.vue'
import Home from 'appviews/Home.vue'
import SubKategori from 'appviews/SubKategori.vue'
import DetailSubKategori from 'appviews/DetailSubKategori.vue'
import Quiz from 'appviews/Quiz.vue'
import Grade from 'appviews/Grade.vue'
import Global from 'appviews/Global.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/global',
    name: 'Global',
    component: Global
  },
  {
    path: '/subKategori',
    name: 'SubKategori',
    component: SubKategori
  },
  {
    path: '/detailSubKategori',
    name: 'DetailSubKategori',
    component: DetailSubKategori
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/grade',
    name: 'Grade',
    component: Grade
  },
]

const router = new VueRouter({
  routes
})

export default router