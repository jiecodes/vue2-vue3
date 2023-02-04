<template>
  <div class="HomeMesssageDetail">
    <hr>
    <!-- qeruy -->
    <!-- <li>id {{$route.query.id}}</li>
    <li>消息 {{$route.query.title}}</li> -->

    <!-- params -->
    <!-- <li>id {{$route.params.id}}</li>
    <li>消息 {{$route.params.title}}</li> -->

    <!-- params  store.js 配置 props  props第二种写法,值为布尔值 -->
    <!-- <li>a {{a}}</li>
    <li>b {{b}}</li> -->

    <!-- params  store.js 配置 props  props第二种写法,值为布尔值 -->
    <li>id {{id}}</li>
    <li>title {{title}}</li>
  </div>
</template>

<script>
export default {
  name:'HomeMesssageDetail',
  // 接收 route.js 配置的props数据   props第一种写法,值为对象
  // props: ['a','b'],
  // 接收  props第二种写法,值为布尔值     props第二种写法,值为函数
  props: ['id','title'], 
  mounted() {
    // this.$route 查看路由路径传递的参数 query  homeMessage.vue通过路由路径传递的参数
    console.log(this, this.$route)
  }
}
</script>

<style>

</style>