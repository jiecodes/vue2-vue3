<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    {{ msg }}
    <school></school>
    <student></student>
  </div>
</template>

<script>
// 导入子组件
import school from './components/School.vue'
import student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    school,
    student,
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
  height: 6em;
  background-color: red;
}
</style>
