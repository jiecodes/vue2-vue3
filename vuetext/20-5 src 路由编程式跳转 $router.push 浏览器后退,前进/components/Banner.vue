<template>
  <div class="banner">
    我是 横幅
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="goTo">go 可以前进 后退</button>
  </div>
</template>

<script>
export default {
  name: 'banner',
  methods: {
    // 后退
    back() {
      // 查看原型上的 back
      console.log(this.$router)
      this.$router.back()
    },
    // 前进
    forward() {
      this.$router.forward()
    },
    goTo() {
      this.$router.go(-2)
      this.$router.go(3)
    }
  }
}
</script>

<style>

</style>