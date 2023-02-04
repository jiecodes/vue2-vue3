<template>
  <div class="home">
    home
  </div>
</template>

<script>
export default {
  name: 'home',
  beforeMount() {
    // this  查看 $route  $router   所有组件的$router内容都一样 每一个组件的$route都不一样
    console.log('about 组件挂载 之前', this)
  },
  beforeDestroy() {
    console.log('about  组件即将销毁 之前')
  }
}
</script>

<style>
.home {
    display: inline-block;
  }
</style>