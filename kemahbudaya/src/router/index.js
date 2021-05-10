import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import SubKategori from '../views/SubKategori.vue'
import DetailSubKategori from '../views/DetailSubKategori.vue'
import Quiz from '../views/Quiz.vue'
import Global from '../views/Global.vue'

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
]

const router = new VueRouter({
  routes
})

export default router