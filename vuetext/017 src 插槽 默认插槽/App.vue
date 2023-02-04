<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <button @click="getDate">获取数据</button> -->

    <!-- <category title="美食" :listData="foods"></category>
    <category title="游戏" :listData="games"></category>
    <category title="电影" :listData="films"></category> -->

    <category title="美食" >
      <img src="https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg" alt="">
    </category>
    <category title="游戏" >
      <div  v-for="(item,index) in games" :key="index">
        <li>{{item}}</li>
      </div>
    </category>
    <category title="电影" >
      <img src="https://img2.baidu.com/it/u=3038223445,2416689412&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="">
      <!-- <video src="https://vd2.bdstatic.com/mda-jdnkkd5hi187vh65/sc/mda-jdnkkd5hi187vh65.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1674027484-0-0-57e7d4fcafda4656cb6b4fd6182c44e3&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0484654599&vid=3525957708743603273&abtest=106847_2&klogid=0484654599"></video> -->
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
      games: ['1','2','3','4'],
      films: ['aa','bb','cc','dd']
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" >
  #app {
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }
  li {
    list-style:none;
  }
</style>
