<template>
  <!-- 数据一样 结构不同 -->
  <div id="app">
    <category title="游戏" >
      <!-- 接收 作用域插槽 传递的数据 -->
      <!-- <template scope="receiveArr"> -->
      <!-- cope="{games}"  解构赋值 把receiveArr里面的games数组获取到 -->
      <template scope="{games}">
        {{games}}
        <div slot="center"  v-for="(item,index) in games" :key="index">
          <li>{{item}}</li>
        </div>
      </template>
    </category>
    <category title="游戏" >
      <template slot-scope="{games}">
        {{games}}
        <div slot="center"  v-for="(item,index) in games" :key="index">
          <h3>{{item}}</h3>
        </div>
      </template>
    </category>
  </div>
</template>

<script>
import axios from 'axios'
import Category from './components/Category.vue'

export default {
  components: { Category },
  name: 'App',
  data() {
    return {
      foods: ['火锅','烧烤','龙虾','牛排'],
      films: ['aa','bb','cc','dd']
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" >
  #app, .foot {
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }
  li {
    list-style:none;
  }
</style>
