import Vue from 'vue'
import App from './App.vue'

// 全局混合
import mixin from './mixin.js'
import {mixin1} from './mixin.js'
// Vue全局导入 混合
Vue.mixin(mixin)
Vue.mixin(mixin1)


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
