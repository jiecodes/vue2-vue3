<template>
<!-- 第三方动画库 animate.css -->
  <div class="test2">
  <button @click="isShow = !isShow">隐藏切换</button>
  多个过渡元素  appear 开始运行一次
  <transition-group 
  appear
  name="animate__animated animate__bounce" 
  enter-active-class="animate__swing"
  leave-active-class="animate__backOutUp"
  >
    <div key="a1" class="aa" v-show="isShow"> {{test}} </div>
    <div key="a2" class="aa" v-show="isShow"> {{test}} </div>
  </transition-group>
  
  </div>
</template>

<script>
// 导入 animate.css 库
import 'animate.css'

export default {
  name: 'test2',
  data() {
    return {
      test:'第三方动画库 animate.css',
      isShow: true
    }
  },
  methods: {
     
  },
}
</script>

<style>
.aa {
  background-color: skyblue;
  margin-top: 1rem;
}

</style>