<template>
  <!-- 数据一样 结构不同 -->
  <div id="app">
    <count></count>
  </div>
</template>

<script>
import axios from 'axios'
import Count from './components/Count.vue'

export default {
  components: { Count },
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
  
</style>
