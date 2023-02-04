<template>
  <div class="HomeMesssageDetail">
    <hr>
    <li>id {{$route.query.id}}</li>
    <li>消息 {{$route.query.title}}</li>
  </div>
</template>

<script>
export default {
  name:'HomeMesssageDetail',
  mounted() {
    // this.$route 查看路由路径传递的参数 query  homeMessage.vue通过路由路径传递的参数
    console.log(this, this.$route)
  }
}
</script>

<style>

</style>