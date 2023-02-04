<template>
  <div class="student">
    <div>{{student}}</div>
    <button @click="sendStudentName">点击后 把student发送给app</button>
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
    sendStudentName() {
      this.receiveStudentName(this.student)
    }
  }
}
</script>

<style>
.student {
  background-color: gray;
}
</style>