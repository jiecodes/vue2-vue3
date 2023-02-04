<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <button @click="getDate">获取数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
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


</style>
