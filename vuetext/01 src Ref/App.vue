<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <school ref="school"></school>
    <div ref="title">文字</div>
    <div @click="showRef">点击</div>
  </div>
</template>

<script>
import school from './components/School.vue'

export default {
  name: 'App',
  components: {
    school
  },
  data() {
    return {

    }
  },
  methods: {
    showRef() {
      console.log(this)   // 真实dom元素
      console.log(this.$refs.title)
      console.log(this.$refs.school)    // school 组件实例对象
    }
  }
}
</script>

<style>

</style>
