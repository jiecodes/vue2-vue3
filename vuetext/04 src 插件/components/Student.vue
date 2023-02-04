<template>
  <div class="Student">
    <div ref="title" @click="showMsg">{{msg}}</div>
    <!-- plugins.js 使用全局过滤器     | 管道符-->
    <div>过滤器:过滤前四位 Student.vue &nbsp; {{ name | mySlice}}</div>
    <!-- 使用全局定义的 自定义事件 v-fbind -->
    <input type="text" v-fbind:value="name"> &nbsp;
    <input type="text" v-fbind="value='name'">
    <!-- 使用全局定义的 原型方法 -->
    <button @click="helloMethod">全局定义的hello方法</button>
  </div>
</template>

<script>
// 1 导入 mixin(局部混合)
import mixin from '../mixin.js'

export default {
  data() {
    console.log(this)
    return {
      msg: 'Student',
      name: 'filteraaa'
    }
  },
  // 2 使用 mixins
  mixins: [mixin],
  methods: {
    // showMsg() {
    //   console.log(this.msg)
    // }
    helloMethod() {
      this.hello()
    }
  }
}
</script>

<style>

</style>