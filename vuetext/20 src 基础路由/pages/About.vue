<template>
  <div class="about">
    about
  </div>
</template>

<script>
export default {
  name: 'about',
  beforeMount() {
    // this  查看 $route  $router
    console.log('about 组件挂载 之前', this)
  },
  beforeDestroy() {
    console.log('about  组件即将销毁 之前')
  }
}
</script>

<style >
  .about {
    display: inline-block;
  }
</style>