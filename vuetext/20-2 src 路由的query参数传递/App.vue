<template>
  <!-- 数据一样 结构不同 -->
  <div id="app">
    <banner></banner>
    <!-- 原始tal栏切换 使用a标签切换内容 -->

    <!-- vue-router 实现路由跳转    router-link 路由跳转 to -->
    <router-link :to="{path: '/about'}" class="about home" active-class="active">about</router-link>
    <hr>
    <router-link to="/home" class="about home" active-class="active">home</router-link>

    <!-- 路由显示 占位符 路由组件 -->
    <router-view></router-view>
    <br>
    <!-- 一般组件 -->
    <!-- <about></about>
    <home></home> -->
  </div>
</template>

<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Banner from './components/Banner.vue'

export default {
  components: { About, Home, Banner },
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" >
  .about, .home {
    padding: 0.5rem;
  }
  .active {
    background-color: lightblue;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 20%;
  }
</style>
