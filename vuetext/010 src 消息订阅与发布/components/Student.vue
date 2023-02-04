<template>
  <div class="student">
    <div>{{student}}</div>
    <button @click="sendStudentNames">把本组件(student)给school</button>
  </div>
</template>

<script>
  // 导入消息订阅与发布 
  import pubsub from 'pubsub-js'
  
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
      // this.x.$emit('hello',this.student)
      // 消息订阅与发布 导入库方法 发布消息 发送数据
      pubsub.publish('hello1', 1234)
    }
  }
}
</script>

<style>
.student {
  background-color: gray;
}
</style>