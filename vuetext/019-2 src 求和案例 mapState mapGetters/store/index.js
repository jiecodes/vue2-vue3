// 导入 vue
import Vue from 'vue'
// 导入 vuex 插件
import vuex from 'vuex'
// 使用vuex插件、
Vue.use(vuex)


// 存储数据
const state = {
  sum: 0,
  school: '学校',
  subject: '学科',
}
// 用于同步操作
const mutations = {
  // dispatch方法
  increment11(state, value) {
    console.log('mutations 中的 increment1被调用了', state, value)
    // 计算求和
    state.sum += value
  },
  // commit 方法
  increment1(state, value) {
    console.log('使用 commit方法直接调用 mutations ',state, value)
    state.sum += value
  },
  decrement1(state, value) {
    state.sum = state.sum - value
  },
  incrementOdd1(state, value) {
    if (state.sum % 2) {
      state.sum += value
    }
  },
  incrementWait1(state, value) {
    setTimeout(() => {
      state.sum += value
    }, 500);
  },
}
// 用于异步操作
const actions = {
  // 使用 vuex中的 方法
  // increment: function(content, value) {
  // 简写
  increment1(content, value) {
    console.log('vuex 自增方法调用', content, value)
    // content.commit('increment11',value)
    content.dispatch('increment11', value)
  },
  // increment11(content, value) {
  //   console.log('increment1 处理一些事情')
  //   content.dispatch('increment111', value)
  // },
  decrement1(content, value) {
    content.commit('decrement1', value)
  },
  incrementOdd1(content, value) {
    content.commit('incrementOdd1', value)
    // if (content.state.sum % 2) {
    //   content.commit('incrementOdd1', value)
    // }
  },
  incrementWait1(content, value) {
    content.commit('incrementWait1', value)
  },
}
// 计算属性
const getters = {
  tenDouble(state) {
    return state.sum * 10
  }
}

// 创建 vuex 对象
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

// 默认导出 vuex  导入: import school from school
export default store