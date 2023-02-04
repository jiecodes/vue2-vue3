<template>
  <div id="app">
    <div>{{person.name}}</div>
    <div>{{person.age}}</div>
    <div>{{person.hobby}}</div>
    <button @click="addPerson">添加性别</button>
    <button @click="removeName">删除name</button>
    <button @click="changeHobby">修改爱好的第一个名字</button>
  </div>
</template>

<script>
// 引入阉割版的vue
import Vue from "vue";

export default {
  name: 'app',
  data() {
    return {
      person: {
        name: '张三',
        age: 12,
        hobby: ['吃饭','学习']
      },
    }
  },
  methods: {
    addPerson() {
      // 不是响应式的
      // this.person.name = '张三1'
      // 响应式的 对象
      this.$set(this.person,'sex','nv' )
      // Vue.set(this.person,'sex','nv' )
    },
    removeName() {
      // 不是响应式的
      // delete this.person.name 
      // 响应式的
      this.$delete(this.person,'name')
      // Vue.delete(this.person,'name')
    },
    changeHobby() {
      // 不是响应式的
      // this.person.hobby[0] = '吃饭1'
      // 响应式的
      this.$set(this.person.hobby, 0, '吃饭1')
      // Vue.set(this.person.hobby, 0, '吃饭1')
      // 响应式方法修改 方法是vue二次封装的 支持响应式的
      this.person.hobby.splice(0,1,'吃饭1')
    }
  }
}
</script>

<style>

</style>