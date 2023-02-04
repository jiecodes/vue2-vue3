<template>
  <div class="home">
    <!-- <div>home</div> -->
    home
    <!-- 跳转的页面 -->
    <router-link class="homeitme" to="/home/homeMessage">homeMessage</router-link>
    <router-link class="homeitme" to="/home/homeNews">homeNews</router-link>

    <!-- 占位符  -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <home-message></home-message>
    <home-news></home-news> -->
  </div>
</template>

<script>
import homeMessage from './HomeMessage.vue'
import homeNews from './HomeNews.vue'

export default {
  name: 'home',
  beforeMount() {
    // this  查看 $route  $router   所有组件的$router内容都一样 每一个组件的$route都不一样
    console.log('about 组件挂载 之前', this)
  },
  beforeDestroy() {
    console.log('about  组件即将销毁 之前')
  },
  components: {homeMessage, homeNews, },
}
</script>

<style>
  .home {
    /* display: inline-block; */
  }
  .homeitme {
    display: inline-block;
    background-color: lightblue;
    border: 1px solid #ccc;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 10%;
  }
  .content {
    
  }
</style>