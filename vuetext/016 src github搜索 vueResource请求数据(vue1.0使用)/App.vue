<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <button @click="getDate">获取数据</button> -->
    <search></search>
    <list></list>
  </div>
</template>

<script>
import axios from 'axios'
import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  components: { List, Search },
  name: 'App',

  methods: {
    getDate() {
      axios.get('http://localhost:8000/server').then(
        response => {
          console.log('请求成功', response.data)
        },
        error => {
          console.log('请求失败')
        }
      )
    }
  }
  
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: black;
}

</style>
