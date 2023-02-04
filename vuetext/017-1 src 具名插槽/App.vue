<template>
  <!-- 结构一样 数据不同 -->
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <button @click="getDate">获取数据</button> -->

    <!-- <category title="美食" :listData="foods"></category>
    <category title="游戏" :listData="games"></category>
    <category title="电影" :listData="films"></category> -->

    <category title="美食" >
      <img slot="center" src="https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg" alt="">
      <a slot="footer" href="">aaaa</a>
    </category>
    <category title="游戏" >
      <div slot="center"  v-for="(item,index) in games" :key="index">
        <li>{{item}}</li>
      </div>
      <div class="foot" slot="footer">
        <a  href="">aaa</a>
        <a  href="">bbb</a>
      </div>
    </category>
    <category title="电影" >
      <img slot="center" src="https://img2.baidu.com/it/u=3038223445,2416689412&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="">
      <!-- <video src="https://vd2.bdstatic.com/mda-jdnkkd5hi187vh65/sc/mda-jdnkkd5hi187vh65.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1674027484-0-0-57e7d4fcafda4656cb6b4fd6182c44e3&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0484654599&vid=3525957708743603273&abtest=106847_2&klogid=0484654599"></video> -->
      <a slot="footer" href="">cccc</a>
      <a slot="footer" href="">cccc</a>
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
