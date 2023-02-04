<template>
  <div class="school">
    <div ref="title" @click="showMsg">{{msg}}</div>
  </div>
</template>

<script>
// 1 导入 
import mixin from '../mixin.js'
export default {
  data() {
    console.log(this)
    return {
      msg: 'school',
    }
      
  },
  // 2 使用 mixins
  mixins: [mixin],
}
</script>

<style>

</style>