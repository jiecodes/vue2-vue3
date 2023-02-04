<template>
  <div class="Student">
    <div ref="title" @click="showMsg">{{msg}}</div>

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
    }
  },
  // 2 使用 mixins
  mixins: [mixin]
  // methods: {
  //   showMsg() {
  //     console.log(this.msg)
  //   }
  // }
}
</script>

<style>

</style>