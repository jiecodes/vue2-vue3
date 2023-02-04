<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- v-bind 加上表示 表达式 -->
    <school></school>
    <student></student>
  </div>
</template>

<script>
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

    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>
