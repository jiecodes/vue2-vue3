// 混入 混合  把js代码封装起来 其他的组件都可以用


const mixin = {
  methods: {
    showMsg() {
      console.log(this.msg)
    }
  },
  mounted() {
    // console.log(this)
    // 全局引入 会打印四次 root app school student 都打印一次
    console.log('mounted')
  } 
}

// 单个导出 导入  import {school} from school
export const mixin1 = {
  data() {
    return {
      a: 100,
    }
  },
  mounted() {
    // console.log(this)
    // 全局引入 会打印四次 root app school student 都打印一次
    console.log('1')
  } 
}
// export default 默认导出     导入: import school from school
export default mixin