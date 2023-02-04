import Vue from 'vue'
import App from './App.vue'

// 全局混合
import mixin from './mixin.js'
import {mixin1} from './mixin.js'
// Vue全局导入 混合
Vue.mixin(mixin)
Vue.mixin(mixin1)

// 导入插件
import plugins from './plugins.js'
// 应用插件 插件里面的方法就会调用
Vue.use(plugins,1,2,3)


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
