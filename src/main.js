import Vue from 'vue'
import App from './App.vue'


/* -------------- BOOTSTRAP --------------- */
//https://getbootstrap.com/docs/4.6/getting-started/introduction/
//Instalación: npm i bootstrap@4 jquery popper.js
import './bootstrap'

/* -------------- FORMULARIO AVANZADO --------------- */
//https://www.npmjs.com/package/vue-form
//Instalación: npm i vue-form
import './form'

/* -------------- ROUTER (vue-router) --------------- */
//https://www.npmjs.com/package/vue-router
//https://router.vuejs.org/
//Instalación: npm i vue-router@3
import { router } from './router'

/* -------------- AXIOS --------------- */
//https://www.npmjs.com/package/axios
//https://www.npmjs.com/package/vue-axios
//Instalación: npm i axios vue-axios@3.4.1
import './axios'

/* -------------- VUEX --------------- */
//https://vuex.vuejs.org/#what-is-a-state-management-pattern
//Instalación: npm i vuex@3
import store from './store'

/* -------------- GLOBAL MIXINS --------------- */
import './globalMixins'

/* -------------- GLOBAL FILTERS --------------- */
import './globalFilters'



Vue.config.productionTip = false

new Vue({
  router, // es igual a -> router : router,
  store,  // es igual a -> store : store,
  render: h => h(App),
}).$mount('#app')
