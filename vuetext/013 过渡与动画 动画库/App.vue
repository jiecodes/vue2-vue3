<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- {{ msg }} -->
    <test></test>
    <test1></test1>
    test2
    <test2></test2>
  </div>
</template>

<script> 
// 导入子组件
import test from './components/Test.vue'
import test1 from './components/Test1.vue'
import test2 from './components/Test2.vue'

export default {
  name: 'App',
  components: {
    test,
    test1,
    test2,
  },
  data() {
    console.log(this)
    return {
      msg: 'nihao',
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
#app {
  // background-color: blue;
  // margin-bottom: 1rem;
}
</style>
