// 求和相关配置
const countOptions = {
  // 使用模块化  为了在差值表达式中不用写 countAbout
  namespaced: true,
  // 存储数据
  state:{
  sum: 0,
  school: '学校',
  subject: '学科',
},
// 修改数据 同步的
  mutations:{
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
  },
// 修改数据 异步的
  actions:{
    // 使用 vuex中的 方法
    // increment: function(content, value) {
    // 简写
    // increment1(content, value) {
    //   console.log('vuex 自增方法调用', content, value)
    //   // content.commit('increment11',value)
    //   content.dispatch('increment11', value)
    // },
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
  },
// 计算属性
  getters:{
    tenDouble(state) {
      return state.sum * 10
    }
  },
}

export default countOptions