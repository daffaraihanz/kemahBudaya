import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import SubKategori from '../views/SubKategori.vue'
import DetailSubKategori from '../views/DetailSubKategori.vue'
import Quiz from '../views/Quiz.vue'
import Grade from '../views/Grade.vue'
import Global from '../views/Global.vue'
import Error404 from '../views/404.vue'

Vue.use(VueRouter)

/**
 * implement route guard in vue.js
 * @param {*} to
 * @param {*} from
 * @param {*} next
 *
 * @website https://medium.com/js-dojo/how-to-implement-route-guard-in-vue-js-9929c93a13db
 */
 function guardMyroute(to, from, next)
 {
    if(
     sessionStorage.getItem('Eduwisata_token') &&
     sessionStorage.getItem('Eduwisata_user_name') &&
     sessionStorage.getItem('Eduwisata_user_role') == "user"
     ) {
     next();
    } else {
     next('/');
    }
 }

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter: guardMyroute,
    component: Home
  },
  {
    path: '/global',
    name: 'Global',
    beforeEnter: guardMyroute,
    component: Global
  },
  {
    path: '/subKategori/:id',
    name: 'SubKategori',
    beforeEnter: guardMyroute,
    component: SubKategori
  },
  {
    path: '/detailSubKategori',
    name: 'DetailSubKategori',
    beforeEnter: guardMyroute,
    component: DetailSubKategori
  },
  {
    path: '/quiz',
    name: 'Quiz',
    beforeEnter: guardMyroute,
    component: Quiz
  },
  {
    path: '/grade',
    name: 'Grade',
    beforeEnter: guardMyroute,
    component: Grade
  },
  {
    path: '*',
    name: '404 Not Found',
    component: Error404
  }
]

const router = new VueRouter({
  routes
})

export default router