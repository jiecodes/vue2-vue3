// 导入 vue
import Vue from 'vue'
// 导入 vuex 插件
import vuex from 'vuex'
// 使用vuex插件、
Vue.use(vuex)

// 导入 其他配置
import countOptions from './count'
import personOptions from './person'

// 求和相关配置
// const countOptions = {
//   // 使用模块化  为了在差值表达式中不用写 countAbout
//   namespaced: true,
//   // 存储数据
//   state:{
//   sum: 0,
//   school: '学校',
//   subject: '学科',
// },
// // 修改数据 同步的
//   mutations:{
//     // dispatch方法
//     increment11(state, value) {
//       console.log('mutations 中的 increment1被调用了', state, value)
//       // 计算求和
//       state.sum += value
//       },
//     // commit 方法
//     increment1(state, value) {
//       console.log('使用 commit方法直接调用 mutations ',state, value)
//       state.sum += value
//       },
//     decrement1(state, value) {
//       state.sum = state.sum - value
//       },
//     incrementOdd1(state, value) {
//       if (state.sum % 2) {
//         state.sum += value
//       }
//     },
//     incrementWait1(state, value) {
//       setTimeout(() => {
//         state.sum += value
//       }, 500);
//     },
//   },
// // 修改数据 异步的
//   actions:{
//     // 使用 vuex中的 方法
//     // increment: function(content, value) {
//     // 简写
//     // increment1(content, value) {
//     //   console.log('vuex 自增方法调用', content, value)
//     //   // content.commit('increment11',value)
//     //   content.dispatch('increment11', value)
//     // },
//     // increment11(content, value) {
//     //   console.log('increment1 处理一些事情')
//     //   content.dispatch('increment111', value)
//     // },
//     decrement1(content, value) {
//       content.commit('decrement1', value)
//     },
//     incrementOdd1(content, value) {
//       content.commit('incrementOdd1', value)
//       // if (content.state.sum % 2) {
//       //   content.commit('incrementOdd1', value)
//       // }
//     },
//     incrementWait1(content, value) {
//       content.commit('incrementWait1', value)
//     },
//   },
// // 计算属性
//   getters:{
//     tenDouble(state) {
//       return state.sum * 10
//     }
//   },

// }
// 人员管理相关配置、
// const personOptions = {
//   namespaced: true,
//   state:{
//     personsList: [
//       {id: '001', name: 'andy'},
//     ]
//   },
//   mutations:{
//     // 接收组件传递过来的方法和数据(数据在哪个组件 就在哪个组件写方法)   添加 personsList 对象  
//     addPerson1(state, personsList) {
//       console.log(state, personsList)
//       // state.personsList.unshift(personsList)
//       state.personsList.unshift(personsList)
//     }
//   },
//   actions:{
//     addPersonWang(content, personObj) {
//       // 判断姓名 是否包含 王 并且是第一个子是否为王
//       if (personObj.name.indexOf('王') === 0) {
//         content.commit('addPerson1', personObj)
//       } else {
//         prompt('添加的不是姓王')
//       }
//     }
//   },
//   getters:{
//     // 列表当中 第一个人的名字    局部state
//     firstPersonName(state) {
//       return state.personsList[0].name 
//     }
//   },
// }

// 存储数据
const state = {}
// 用于同步操作
const mutations = {}
// 用于异步操作
const actions = {}
// 计算属性
const getters = {}

// 创建 vuex 对象
const store = new vuex.Store({
  modules: {
    // store 管理两套配置
    countAbout: countOptions,
    personAbout: personOptions,
  }
})

// 默认导出 vuex  导入: import school from school
export default store