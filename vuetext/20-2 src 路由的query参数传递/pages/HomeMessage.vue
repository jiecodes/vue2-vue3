<template>
  <div class="homeMessage">
   <li v-for="item in msg" :key="item.id">
     <!-- 传递固定值、 -->
     <!-- <router-link to="/home/homeMessage/detail?id=66&title=你好">{{item.title}}</router-link> -->
     <!-- v-bind: 把字符串变为js表达式   模板字符串里面通过${}传递参数  字符串写法 -->
     <!-- <router-link :to="`/home/homeMessage/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

    <!-- 跳转路由 携带query参数 to对象写法  -->
    <router-link :to="{
      path: '/home/homeMessage/detail',
      query: {
        id: item.id,
        title: item.title,
      }
    }">
    {{item.title}}
    </router-link>

   </li>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'homeMessage',
  data() {
    return {
      msg: [
        {id: '001', title: 'aaa'},
        {id: '002', title: 'bbb'},
        {id: '003', title: 'ccc'},
      ]
    }
  }
}
</script>

<style>
  .homeMessage {
    display: inline-block;
    background-color: lightblue;
    border: 1px solid #ccc;
    padding: 0.5rem;
    margin: 0.5rem 0 0 3.5rem;
    border-radius: 10%;
    cursor: pointer;
  }
</style>