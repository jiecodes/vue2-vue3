import Vue from 'vue'
import app from './App.vue'

// 1.vue.js与vue.runtime.xxx.js的区别:
//   (1).vue.js是完整版的Vue,包含：核心功能+模板解析器。
//   (2).vue.runtime.xxx.js是运行版的Vue,只包含:核心功能;没有模板解析器。
// 2.因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用
//   render函数接收到的createElement函数去指定具体内容。

// 初始写法   导入的vue是残缺版的vue 不能解析template模板 所以借助render函数解析模板(把app.vue里面的内容放到index.html中)

new Vue({
  el: '.app',
  // 创建模板
  template: `<app></app>`,
  // 注册组件
  components: {
    app,
  }
})

new Vue({
  el: '.app',
  // 模板 组件 替换成这个
  render(createElement) {
    // h1 标签  你好 标签内容
    return createElement('h1','你好')
  },
  // 箭头函数
  render: createElement => createElement('h1','你好')
  


  // template: `<app></app>`,
  // components: {
  //   app,
  // }
})