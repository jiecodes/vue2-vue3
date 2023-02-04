<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- v-bind 加上表示 表达式 -->
    <school name="zs" sex="nv" :age='10 + 1'></school>
    <school name="zs1" sex="nv1" :age='22'></school>
  </div>
</template>

<script>
import school from './components/School.vue'

export default {
  name: 'App',
  components: {
    school
  },
  data() {
    console.log(this)
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>
