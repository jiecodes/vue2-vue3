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
  },
  // 组件路由守卫
  // 通过路由规则,进入该路由被调用
  beforeRouteEnter(to, from, next) {
    console.log('通过路由跳转 进入about.vue 调用beforeRouteEnter')
    if (to.meta.isAuth) {   
      // 判断 浏览器本地存储有没有数据
      if (localStorage.getItem('key') === 'nihao') {
        next()
      } else {
        prompt('key值不对')
      }
    } else {
      // 访问的不是home下的俩个页面 则执行放行函数
      next();
    } 
  },
  // 通过路由规则,离开该路由被调用
  beforeRouteLeave(to, from, next) {
    console.log('通过路由跳转 离开about.vue 调用beforeRouteLeave', to, from,)
    // 如果没有放行 则跳转不了
    next();
  },
}
</script>

<style >
  .about {
    /* display: inline-block; */
  }
</style>