<template>
  <!-- 数据一样 结构不同 -->
  <div id="app">
    <count></count>
    <persons></persons>
  </div>
</template>

<script>
import axios from 'axios'
import Count from './components/Count.vue'
import Persons from './components/Persons.vue'

export default {
  components: { Count, Persons },
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
