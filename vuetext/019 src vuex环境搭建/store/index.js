// 导入 vue
import Vue from 'vue'
// 导入 vuex 插件
import vuex from 'vuex'
// 使用vuex插件、
Vue.use(vuex)


// 存储数据
const state = {
  
}
// 用于同步操作
const mutations = {

}
// 用于异步操作
const actions = {
}

// 创建 vuex 对象
const store = new vuex.Store({
  state,
  mutations,
  actions,
})

// 默认导出 vuex  导入: import school from school
export default store