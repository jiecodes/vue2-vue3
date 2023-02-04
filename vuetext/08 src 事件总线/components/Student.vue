<template>
  <div class="student">
    <div>{{student}}</div>
    <button @click="sendStudentNames">把本组件(student)给school</button>
  </div>
</template>

<script>
export default {
  name: 'student',
  props: ['receiveStudentName',],
  data() {
    return {
      student: 'student1',
    }
  },
  methods: {
    sendStudentNames() {
      this.x.$emit('hello',this.student)
    }
  }
}
</script>

<style>
.student {
  background-color: gray;
}
</style>