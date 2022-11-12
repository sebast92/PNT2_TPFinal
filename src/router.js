import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/views/Home'
import LogIn from './components/views/LogIn'
import Board from './components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: LogIn },
    { path: '/board/:id', name: 'board', component: Board, props: true }
  ]
})