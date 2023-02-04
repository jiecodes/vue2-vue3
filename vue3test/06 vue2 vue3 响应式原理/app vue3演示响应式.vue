<template>
  <div id="app">
    <div>{{person.name}}</div>
    <div>{{person.age}}</div>
    <!-- v-show true展示 false隐藏 -->
    <div v-show="person.sex">{{person.sex}}</div>
    <button @click="addPerson">添加sex</button>
    <button @click="removeName">删除name</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 12,
    })
    // 方法
    function addPerson() {
      // 和vue2不一样 他是响应式的  因为 reactive
      person.sex = 'nan'
    };
    function removeName(){
      // 对象删除 里面的属性      和vue2不一样 他是响应式的  因为 reactive
      delete person.name
    };
    return {
      person,
      addPerson,
      removeName,
    }
  }
}
</script>

<style>

</style>