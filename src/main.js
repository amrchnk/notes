import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Main from './components/main.vue'
import Notes from './components/notes.vue'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router=new VueRouter({
	mode:'history',
	routes:[
		{path:'/main',component:Main},
		{path:'/notes',component:Notes}
	],
	linkActiveClass:'active'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
