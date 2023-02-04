// 人员管理相关配置、

import axios from 'axios'
// 生成唯一id 的库
import { nanoid } from 'nanoid'

const personOptions = {
  namespaced: true,
  state:{
    personsList: [
      {id: '001', name: 'andy'},
    ]
  },
  mutations:{
    // 接收组件传递过来的方法和数据(数据在哪个组件 就在哪个组件写方法)   添加 personsList 对象  
    addPerson1(state, personsList) {
      console.log(state, personsList)
      // state.personsList.unshift(personsList)
      state.personsList.unshift(personsList)
    }
  },
  actions:{
    addPersonWang(content, personObj) {
      // 判断姓名 是否包含 王 并且是第一个子是否为王
      if (personObj.name.indexOf('王') === 0) {
        content.commit('addPerson1', personObj)
      } else {
        prompt('添加的不是姓王')
      }
    },
    // 链接服务器 找一个名字
    addPersonServer( content ) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          // 调用 mutations 里面的方法
          content.commit('addPerson1', { id: nanoid(), name: response.data})
        },
        error => {
          prompt(error.message)
        },
      )
    }

  },
  getters:{
    // 列表当中 第一个人的名字    局部state
    firstPersonName(state) {
      return state.personsList[0].name 
    }
  },
}

export default personOptions

// 或者   导入 import xx from './person'
// export default {}  
