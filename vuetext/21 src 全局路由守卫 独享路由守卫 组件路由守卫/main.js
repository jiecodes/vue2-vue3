import Vue from 'vue'
import App from './App.vue'

// 导入 vue-router
import vueRouter from 'vue-router'
// 应用插件
Vue.use(vueRouter)

// 导入路由器
import router from './router'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this     // 全局事件总线
  },
  router: router 
}).$mount('#app')

// vue实例对象有了 $store
console.log(vm)

