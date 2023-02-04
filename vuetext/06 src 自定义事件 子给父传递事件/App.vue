<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    {{ msg }}
    <!-- 父组件给子组件传递函数类型的props实现  子给父传递数据-->
    <student :receiveStudentName="receiveStudentName"></student>

    <!-- 组件自定义事件 父组件给子组件绑定一个自定义事件 子给父传递数据 (第一种方法,使用v-on) -->
    <!-- @click="show" vue认为绑定的事件都是自定义事件  添加.native就可以变为原生的事件  -->
    <school v-on:customEvent="demo" v-on:customEvent1="demo1" @click.native="show"></school>
    <!-- 组件自定义事件 父组件给子组件绑定一个自定义事件 子给父传递数据 (第二种方法,使用ref) -->
    <!-- <school ref="schoolRef"></school> -->

  </div>
</template>

<script>
// 导入子组件
import school from './components/School.vue'
import student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    school,
    student,
  },
  data() {
    console.log(this)
    return {
      msg: 'nihao',
    }
  },
  methods: {
    receiveStudentName(student) {
      console.log('收到了:', student)
    },
    demo(school,...params) {
      console.log('app.vue接收到了 ,组件自定义事件' + school,params)
    },
    demo1() {
      console.log('app.vue接收到了 ,组件自定义事件1')
    },
    show() {
      prompt('...')
    }
  },
  // mounted() {
  //   // $on 已移除
  //   this.$refs.school.$on('customEvent',this.demo)
  // }
 
}
</script>

<style lang="scss">
#app {
  height: 6em;
  background-color: red;
}
</style>
