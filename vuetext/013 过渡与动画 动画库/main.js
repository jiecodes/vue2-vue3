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

// vue 原型
console.log(Vue.prototype)

// 事件总线 使用vue组件实例方法
// 创建 vue组件实例
// const Demo = Vue.extend({});
// //  vue组件实例
// const d = new Demo();
// // 把d挂载到 vue原型上  以便vue组件实例使用
// Vue.prototype.x = d

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.x = this       // 全局事件总线(vue实例(vm)vue组件实例 都可以访问)  最终写法
    Vue.prototype.$bus = this    // 全局事件总线 
  }
}).$mount('#app')

