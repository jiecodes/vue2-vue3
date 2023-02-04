<template>
  <div class="homeMessage">
   <li v-for="item in msg" :key="item.id">
     <!-- query  传递固定值、 -->
     <!-- <router-link to="/home/homeMessage/detail?id=66&title=你好">{{item.title}}</router-link> -->
     <!-- v-bind: 把字符串变为js表达式   模板字符串里面通过${}传递参数  字符串写法 -->
     <!-- <router-link :to="`/home/homeMessage/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

    <!-- 跳转路由 携带query参数 to对象写法  -->
    <!-- <router-link :to="{
      // path: '/home/homeMessage/detail',
      // 在router.js 中配置了 命名路由 name
      name: 'detailName',
      query: {
        id: item.id,
        title: item.title,
      }
    }">
    {{item.title}}
    </router-link> -->

    <!-- params参数 id 666  title 你好  固定值 字符串写法 -->
    <!-- <router-link :to="`/home/homeMessage/detail/666/你好`">{{item.title}}</router-link> -->
    <!-- params参数 id 666  title 你好  传递值 字符串写法 -->
    <!-- <router-link :to="`/home/homeMessage/detail/${item.id}/${item.title}`">{{item.title}}</router-link> -->
    <!-- params参数 id 666  title 你好  传递值 对象写法 使用params对象传递数据,不允许写path路径-->
    <router-link :to="{
       name: 'detailName',
      // path: '/home/homeMessage/detail',
      params: {
        id: item.id,
        title: item.title
        }
      }">
      {{item.title}}&nbsp;
      <button @click="pushShow(item)">push</button> &nbsp;
      <button @click="replaceShow(item)">replace</button>
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
  },
  methods: {
    pushShow(item) {
      // 编程式跳转 $router.push  有历史记录
      console.log(this.$router)
      this.$router.push({
        name: 'detailName',
        params: {
          id: item.id,
          title: item.title
        }
      })
    },
    replaceShow(item) {
      // 编程式跳转 $router.replace  没有历史记录 替换当前历史
      console.log(this.$router) 
      this.$router.replace({
        name: 'detailName',
        params: {
          id: item.id,
          title: item.title
        }
      })
    },
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