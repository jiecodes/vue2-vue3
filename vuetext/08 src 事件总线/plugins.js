// 插件

// export default 默认导出     导入: import school from school
// const obj = {
//   install() {
//     console.log('插件')
//   }
// }
// export default obj

// 简写   export default 默认导出     导入: import school from school
export default {
  install(Vue,x,y,z) {
    console.log('插件', Vue, '这里的vue是vue的构造函数')
    console.log(x,y,z)

    // 全局过滤器
    Vue.filter('mySlice', function (value) {
      // 截取前四位数
      return value.slice(0,4)
    })

    // 全局 自定义指令  v-bind功能一样,但是可以获取焦点
    Vue.directive('fbind',{
      // 指令与元素成功绑定时
      bind(element,binging) {
        element.value = binging.value
      },
      // 指令所在元素被插入页面时
      inserted(element,binging) {
        // 获取焦点
        element.focus()
      },
      // 指令所在的模板被重新解析时
      update(element,binging) {
        // 重新解析时 重新获取数据 不然数据不会显示
        element.value = binging.value
      },
    })

    // 定义混入  root app shcool student标签都有a:100
    Vue.mixin({
      data() {
        return {
          a: '100',
        }
      }
    })

    // vue原型定义 hello (vue实例 和 vue组件实例都可以用了)   使用:this.hello()
    Vue.prototype.hello = () => {
      console.log('你好')
    }
  }
}